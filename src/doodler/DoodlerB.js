import React from "react";
import p5 from "p5";
import { RgbaColorPicker } from "react-colorful";
import p5Types from "p5";
import ColorIndicator from './utils/ColorIndicator';
import SimpleBrush from './brushes/SimpleBrush';
import RandomBrush from './brushes/RandomBrush';
import InkBrush from './brushes/InkBrush';
import Undo from './utils/Undo';

import { Flex, FlexItem, FlexBlock, Dashicon, Button, ButtonGroup, SelectControl } from '@wordpress/components';

export default class DoodlerB extends React.Component {

  constructor(props) {
    super(props);

		this.state = {
			currentColor: {
				r: 61, g: 61, b: 61, a: 1
			},
			currentBrushName: 'RandomBrush',
			isColorPicker: false,
			undoCurrentIndex: 0,
			drawing: false,
		};

		this.p5i = {}; // p5 instance will be filled during componentDidMount
    this.canvasParentRef = React.createRef();
		this.brushesList = [
			{ label: 'Simple Brush', value: 'SimpleBrush' },
			{ label: 'Random Brush', value: 'RandomBrush' },
			{ label: 'Ink Brush', value: 'InkBrush' },
		];

		this.defaultBrush = this.props.defaultBrush || 'InkBrush';
		this.defaultBrushSize = Math.abs(this.props.brushSize) || 2,
		this.defaultMinBrushSize = Math.abs(this.props.minBrushSize) || 1,
		this.defaultMaxBrushSize = Math.abs(this.props.maxBrushSize) || 20,
		this.defaultCursorSize = Math.abs(this.props.cursorSize) || 20,

		this.undo = {};
		this.canvas = null;
		this.canvasW = 0;
		this.canvasH = 0;
		this.surface = null;
		this.overlay = null;
		this.bgColor = 220;
		this.oldX = 0;
		this.oldY = 0;
		this.brushes = {}
		this.currentBrush = {};
		this.handleColorChange = this.handleColorChange.bind(this);
		this.toggleColorPicker = this.toggleColorPicker.bind(this);
		this.clearCanvas = this.clearCanvas.bind(this);
		this.undoBack = this.undoBack.bind(this);
		this.undoForward = this.undoForward.bind(this);
		this.touchStarted = this.touchStarted.bind(this);
		this.touchEnded = this.touchEnded.bind(this);
  }

	setup(p5i, canvasParentRef) {
		this.canvasW = canvasParentRef.offsetWidth;
		this.canvasH = this.canvasW;
		this.canvas = p5i.createCanvas( this.canvasW, this.canvasH ).parent( canvasParentRef );
		this.overlay = p5i.createGraphics( this.canvasW, this.canvasH );
		this.surface = p5i.createGraphics( this.canvasW, this.canvasH );
		this.initBrushes();
		p5i.noCursor();
		this.loadSavedCanvasAndCreateUndo(p5i);
		this.canvas.mouseWheel( ( ev ) => { ev.preventDefault(); this.currentBrush.onMouseWheel( ev );
			return false} );

		this.canvas.mousePressed( (e) => {
			this.touchStarted(p5i);
		});
		this.canvas.mouseReleased( (e) => {
			this.touchEnded(p5i);
		});

	}

	draw(p5i) {
		p5i.background(this.bgColor);
		const dt = p5i.deltaTime;
		this.drawContentUsingCurrentBrush(p5i, dt);
		this.drawCursorUsingCurrentBrush(p5i, dt);
	}

	touchStarted(p5i) {
		this.setState({drawing: true});
		this.currentBrush.touchStarted();
		this.oldX = p5i.mouseX;
		this.oldY = p5i.mouseY;
	}

	touchEnded(p5i) {
		this.setState({drawing: false});
		this.currentBrush.touchEnded();
		this.addCurrentSurfacePictureToUndo();
		this.saveSelectedCanvasToProperty(this.surface);
	}

	initBrushes() {
		this.brushes["SimpleBrush"] = new SimpleBrush({
			surface: this.surface,
			overlay: this.overlay,
			brushSize: this.defaultBrushSize,
			minBrushSize: this.defaultMinBrushSize,
			maxBrushSize: this.defaultMaxBrushSize,
			cursorSize: this.defaultCursorSize,
			rgba: this.state.currentColor,
		});

		this.brushes["RandomBrush"] = new RandomBrush({
			surface: this.surface,
			overlay: this.overlay,
			brushSize: this.defaultBrushSize,
			minBrushSize: this.defaultMinBrushSize,
			maxBrushSize: this.defaultMaxBrushSize,
			cursorSize: this.defaultCursorSize,
			rgba: this.state.currentColor,
		});

		this.brushes["InkBrush"] = new InkBrush({
			surface: this.surface,
			overlay: this.overlay,
			brushSize: this.defaultBrushSize,
			minBrushSize: this.defaultMinBrushSize,
			maxBrushSize: this.defaultMaxBrushSize,
			cursorSize: this.defaultCursorSize,
			rgba: this.state.currentColor,
		});

		this.currentBrush = this.brushes[this.defaultBrush];
	}

	loadSavedCanvasAndCreateUndo(p5i) {
		if (this.props.picture != '') {
			this.replacePictureOnSurface(this.props.picture);
			this.undo = new Undo( this.props.picture );
		} else {
			this.undo = new Undo( this.getCurrentCanvasPicture(this.canvas) );
		}
	}

	replacePictureOnSurface(encodedPicture) {
		let img;
		img = this.p5i.loadImage(encodedPicture, (loadedImage) => {
			this.surface.clear();
			this.surface.image( loadedImage, 0, 0, this.canvasW, this.canvasH );
		}, (fail) => {
			console.log(fail);
		});
	}

	undoBack() {
		const picture = this.undo.back();
		this.replacePictureOnSurface(picture);
	}

	undoForward() {
		const picture = this.undo.forward();
		this.replacePictureOnSurface(picture);
	}

	getCurrentCanvasPicture(p5ObjectWithCanvas) {
		const picture = p5ObjectWithCanvas.canvas.toDataURL();
		return picture;
	}

	/**
	 * Execute save function passed as callback in the props
	 * @param {*} p5ObjectWithCanvas
	 */
	saveSelectedCanvasToProperty(p5ObjectWithCanvas) {
		this.props.saveCanvas( this.getCurrentCanvasPicture(p5ObjectWithCanvas) );
	}

	drawContentUsingCurrentBrush( p5i, dt ) {
		if ( this.state.drawing === true ) {
			this.currentBrush.draw( this.oldX, this.oldY, p5i.mouseX, p5i.mouseY, dt);
		}
		this.oldX = p5i.mouseX;
		this.oldY = p5i.mouseY;
		p5i.image( this.surface, 0, 0 );
	}

	drawCursorUsingCurrentBrush( p5i, dt ) {
		this.currentBrush.drawCursor( p5i.mouseX, p5i.mouseY );
		p5i.image( this.overlay, 0, 0 );
	}

	handleColorChange(color) {
		this.setState({
			currentColor: color
		});
		for (let k in this.brushes) {
			this.brushes[k].changeColor(color);
		}
	}

  componentDidMount() {
    this.sketch = new p5((p) => {

			this.p5i = p;

      p.setup = () => {
        this.setup(p, this.canvasParentRef.current);
      };

			p['draw'] = (...rest) => {
				 this.draw(p, ...rest);
			}

    });
  }

  componentWillUnmount() {
    this.sketch.remove();
  }

	toggleColorPicker() {
		this.setState({isColorPicker: !this.state.isColorPicker});
	}

	addCurrentSurfacePictureToUndo() {
		const currentPicture = this.getCurrentCanvasPicture(this.surface);
		this.undo.add(currentPicture);
	}

	clearCanvas() {
		this.surface.clear();
		this.addCurrentSurfacePictureToUndo();
		this.saveSelectedCanvasToProperty(this.surface);
	}

  render() {
    return (
			<div>
				<div className="insta-doodle-toolbar" style={{marginBottom: '30px'}}>
					<Flex>
						<FlexItem>
							<ButtonGroup>
								<Button isSecondary onClick={this.toggleColorPicker}>
									<ColorIndicator color={this.state.currentColor}></ColorIndicator>
								</Button>
								<Button isSecondary onClick={this.clearCanvas}><Dashicon icon="trash"></Dashicon></Button>
								<Button isSecondary onClick={this.undoBack}><Dashicon icon="undo"></Dashicon></Button>
								<Button isSecondary onClick={this.undoForward}><Dashicon icon="redo"></Dashicon></Button>
							</ButtonGroup>
						</FlexItem>
						<FlexBlock>
							<SelectControl
								style={{ height: 'auto' }}
								label="Brush"
								hideLabelFromVision={ true }
								value={ this.state.currentBrushName }
								options={ this.brushesList }
								onChange={ ( brushClassName ) => {
										this.setState( { currentBrushName: brushClassName }, ()=>{
											this.currentBrush = this.brushes[this.state.currentBrushName];
										});
								} }
							/>
						</FlexBlock>
					</Flex>
				</div>
				<div className="insta-doodle-toolbar-contents">
					<div className="insta-doodle-colorpicker" style={{ display: this.state.isColorPicker ? 'block': 'none'}}>
						<RgbaColorPicker color={this.state.currentColor} onChange={this.handleColorChange} />
					</div>
				</div>
				<div
					ref={this.canvasParentRef}
					className={this.props.className || "polco-insta-doodle-canvas"}
					style={this.props.style || {}}
				></div>
			</div>
    );
  }
}

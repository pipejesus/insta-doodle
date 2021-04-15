import React from "react";
import p5 from "p5";
import { RgbaColorPicker } from "react-colorful";
import p5Types from "p5";
import SimpleBrush from './brushes/SimpleBrush';
import RandomBrush from './brushes/RandomBrush';

// NOTE: assigning p5 to window because someone can need it globally to use in others libraries
if (typeof window !== "undefined") {
  window.p5 = p5;
}

export default class DoodlerB extends React.Component {

  constructor(props) {
    super(props);
    this.canvasParentRef = React.createRef();
		this.canvas = null;
		this.canvasW = 0;
		this.canvasH = 0;
		this.surface = null;
		this.overlay = null;
		this.bgColor = 220;
		this.drawing = false;
		this.oldX = 0;
		this.oldY = 0;
		this.brushes = {
			'simpleBrush': {},
			'randomBrush': {}
		}
		this.currentBrush = {};

		this.baseColorRgba = {
			r: 61,
			g: 61,
			b: 61,
			a: 1
		};

		this.handleColorChange = this.handleColorChange.bind(this);
  }

	setup(p5i, canvasParentRef) {
		this.canvasW = canvasParentRef.offsetWidth;
		this.canvasH = this.canvasW;
		this.canvas = p5i.createCanvas( this.canvasW, this.canvasH ).parent( canvasParentRef );
		this.overlay = p5i.createGraphics( this.canvasW, this.canvasH );
		this.surface = p5i.createGraphics( this.canvasW, this.canvasH );
		this.initBrushes();
		this.canvas.mouseWheel( ( ev ) => { ev.preventDefault(); this.currentBrush.onMouseWheel( ev ); return false} );
		p5i.noCursor();
		this.loadSavedCanvas(p5i);
	}

	draw(p5i) {
		p5i.background(this.bgColor);
		this.drawContentUsingCurrentBrush(p5i);
		this.drawCursorUsingCurrentBrush(p5i);
	}

	touchStarted(p5i) {
		this.drawing = true;
		this.oldX = p5i.mouseX;
		this.oldY = p5i.mouseY;
	}

	touchEnded(p5i) {
		this.drawing = false;
		this.saveSelectedCanvasToProperty(p5i, this.surface);
	}

	initBrushes() {

		this.brushes.simpleBrush = new SimpleBrush({
			surface: this.surface,
			overlay: this.overlay,
			brushSize: 5,
			minBrushSize: 1,
			maxBrushSize: 20,
			cursorSize: 20,
			rgba: this.baseColorRgba,
		});

		this.brushes.randomBrush = new RandomBrush({
			surface: this.surface,
			overlay: this.overlay,
			brushSize: 5,
			minBrushSize: 1,
			maxBrushSize: 20,
			cursorSize: 20,
			rgba: this.baseColorRgba,
		});

		this.currentBrush = this.brushes.randomBrush;

	}

	loadSavedCanvas(p5i, p5ObjectWithCanvas) {
		if (this.props.attributes.picture != '') {
			let img;
			img = p5i.loadImage(this.props.attributes.picture, (loadedImage) => {
				this.surface.image( loadedImage, 0, 0, this.canvasW, this.canvasH );
			}, (fail) => {
				console.log(fail);
			});
		}
	}

	saveSelectedCanvasToProperty(p5i, p5ObjectWithCanvas) {
		const picture = p5ObjectWithCanvas.canvas.toDataURL();
		this.props.setAttributes({
			picture: picture
		});
	}

	drawContentUsingCurrentBrush( p5i ) {
		if ( this.drawing === true ) {
			this.currentBrush.draw( this.oldX, this.oldY, p5i.mouseX, p5i.mouseY );
		}
		this.oldX = p5i.mouseX;
		this.oldY = p5i.mouseY;
		p5i.image( this.surface, 0, 0 );
	}

	drawCursorUsingCurrentBrush( p5i ) {
		this.currentBrush.drawCursor( p5i.mouseX, p5i.mouseY );
		p5i.image( this.overlay, 0, 0 );
	}

	handleColorChange(color) {
		this.baseColorRgba = color;
		for (let k in this.brushes) {
			this.brushes[k].changeColor(this.baseColorRgba);
		}
	}

  componentDidMount() {
    this.sketch = new p5((p) => {

      p.setup = () => {
        this.setup(p, this.canvasParentRef.current);
      };

			p['draw'] = (...rest) => {
				 this.draw(p, ...rest);
			}

			p['touchStarted'] = (...rest) => {
				this.touchStarted(p, ...rest);
			}

			p['touchEnded'] = (...rest) => {
				this.touchEnded(p, ...rest);
			}

    });
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    this.sketch.remove();
  }

  render() {
    return (
			<div>
				<div style={{marginBottom: '30px'}}>
					<RgbaColorPicker color={this.baseColorRgba} onChange={ (color) => this.handleColorChange(color) } />
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

// export const p5Events = [
//   "draw",
//   "windowResized",
//   "preload",
//   "mouseClicked",
//   "doubleClicked",
//   "mouseMoved",
//   "mousePressed",
//   "mouseWheel",
//   "mouseDragged",
//   "mouseReleased",
//   "keyPressed",
//   "keyReleased",
//   "keyTyped",
//   "touchStarted",
//   "touchMoved",
//   "touchEnded",
//   "deviceMoved",
//   "deviceTurned",
//   "deviceShaken",
// ];

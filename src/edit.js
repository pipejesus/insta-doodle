import { __ } from '@wordpress/i18n';
// import { Component } from '@wordpress/element'; // const { Component } = wp.element;
import { Card, CardBody, CardHeader } from '@wordpress/components';
import { TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import Sketch from "react-p5";
import './editor.scss';
import p5 from 'p5';

export default function Edit({ attributes, setAttributes, clientId }) {

	// const { blockId } = attributes;
	// if ( !blockId ) {
		// console.log('no block id, adding one!');
 		// setAttributes( { blockId: clientId } );
		// console.log(document.querySelector('[data-block="' + blockId + '"]'));
	// }

	let drawing = false;
	let x, y, oldX, oldY = 0;
	let canvasW, canvasH = 0;

	const saveCanvasToProperty = (p5) => {
		const picture = p5.canvas.toDataURL();
		setAttributes({
			picture: picture
		});
	}

	const loadSavedCanvas = (p5) => {
		if (attributes.picture != '') {
			let img;
			img = p5.loadImage(attributes.picture, (success) => {
				p5.image( success, 0, 0, canvasW, canvasH );
			}, (fail) => {
				console.log(fail);
			});

		}
	}

	const setup = (p5, canvasParentRef) => {
		canvasW = canvasParentRef.offsetWidth;
		canvasH = canvasW;
		p5.createCanvas(canvasW, canvasH).parent(canvasParentRef);
		p5.background(220);
		p5.strokeWeight(5);
		p5.stroke(40, 40, 0);
		p5.strokeJoin(p5.ROUND);
		loadSavedCanvas(p5);
	};

	const draw = (p5) => {
		if (drawing === true) {
			p5.line(oldX, oldY, p5.mouseX, p5.mouseY);
			p5.line(oldX + Math.random() * 10, oldY + Math.random() * 10, p5.mouseX, p5.mouseY)
			oldX = p5.mouseX;
			oldY = p5.mouseY;
		}
	};

	const touchStarted = (p5) => {
		x = p5.mouseX;
		y = p5.mouseY;
		oldX = x;
		oldY = y;
		drawing = true;
	}

	const touchEnded = (p5) => {
		drawing = false;
		saveCanvasToProperty(p5);
	}

	return (
		<div { ...useBlockProps() }>
			<Card >
				<CardHeader>
					<TextControl
						label={ __('Doodle title') }
						placeholder={ __('Doodle title') }
						value={ attributes.title }
						onChange={ (val) => setAttributes( {title: val} ) }
					></TextControl>
				</CardHeader>
				<CardBody>
					<div className="p5js-canvas">
						<Sketch setup={setup} draw={draw} touchStarted={touchStarted} touchEnded={touchEnded} />
					</div>
				</CardBody>
			</Card>
		</div>
	);
}

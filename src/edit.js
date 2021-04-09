import { __ } from '@wordpress/i18n';
// import { Component } from '@wordpress/element'; // const { Component } = wp.element;
import { Card, CardBody, CardHeader } from '@wordpress/components';
import { TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import Sketch from "react-p5";
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {

	// const { blockId } = attributes;
	// if ( !blockId ) {
		// console.log('no block id, adding one!');
 		// setAttributes( { blockId: clientId } );
		// console.log(document.querySelector('[data-block="' + blockId + '"]'));
	// }

	let drawing = false;
	let x, y, oldX, oldY = 0;

	const setup = (p5, canvasParentRef) => {
		console.log('canvas parent ref:');
		console.log(canvasParentRef);
		p5.createCanvas(500, 500).parent(canvasParentRef);
		p5.background(220);
		p5.strokeWeight(5);
		p5.stroke(40, 40, 0);
		p5.strokeJoin(p5.ROUND);
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

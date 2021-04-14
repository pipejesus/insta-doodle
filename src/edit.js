import { __ } from '@wordpress/i18n';
// import { Component } from '@wordpress/element'; // const { Component } = wp.element;
import { Card, CardBody, CardHeader } from '@wordpress/components';
import { TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';
import DoodlerB from './doodler/DoodlerB';

export default function Edit({ attributes, setAttributes, clientId }) {

	// const { blockId } = attributes;
	// if ( !blockId ) {
		// console.log('no block id, adding one!');
 		// setAttributes( { blockId: clientId } );
		// console.log(document.querySelector('[data-block="' + blockId + '"]'));
	// }

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
					<DoodlerB attributes={attributes} setAttributes={setAttributes}></DoodlerB>
				</CardBody>
			</Card>
		</div>
	);
}

		// LEGACY: RANDOM BRUSH
		// if (drawing === true) {
		// 	p5.line(oldX, oldY, p5.mouseX, p5.mouseY);
		// 	p5.line(oldX + Math.random() * 10, oldY + Math.random() * 10, p5.mouseX, p5.mouseY)
		// 	oldX = p5.mouseX;
		// 	oldY = p5.mouseY;
		// }

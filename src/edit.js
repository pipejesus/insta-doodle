import { __ } from '@wordpress/i18n';
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

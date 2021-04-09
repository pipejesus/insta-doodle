/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { Card, CardBody, CardHeader, Placeholder } from '@wordpress/components';
import { TextControl } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

	const allowedBlocks = ['core/paragraph', 'core/list'];

	return (
		<div { ...useBlockProps() }>
			<Card >
				<CardHeader>
					<TextControl
						label={ __('Recipe title') }
						placeholder={ __('Recipe title') }
						value={ attributes.title }
						onChange={ (val) => setAttributes( {title: val} ) }
					></TextControl>
				</CardHeader>
				<CardHeader>
					<RichText
						tagName="p"
						placeholder={ __('Recipe Summary') }
						allowedFormats={ ['core/bold', 'core/italic'] }
						value={ attributes.summary }
						onChange={ (val) => setAttributes( {summary: val} ) }
					></RichText>
				</CardHeader>
				<CardBody>
					<InnerBlocks allowedBlocks={ allowedBlocks } />
				</CardBody>
			</Card>
		</div>
	);
}

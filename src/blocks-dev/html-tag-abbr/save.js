import { useBlockProps } from "@wordpress/block-editor"; // Import corrected

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const blockProps = useBlockProps.save(); // Use blockProps.save() for saving
	const { text } = attributes;

	return <abbr {...blockProps}>{text}</abbr>;
}

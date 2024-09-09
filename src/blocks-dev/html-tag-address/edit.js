import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor"; // Added RichText import
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps(); // Use blockProps for edit
	const { text } = attributes;

	return (
		<address {...blockProps}>
			<RichText
				tagName="address"
				value={text}
				allowedFormats={["core/bold", "core/italic"]}
				onChange={(newText) => setAttributes({ text: newText })} // Renamed parameter for clarity
				placeholder={__("Address...")}
			/>
		</address>
	);
}

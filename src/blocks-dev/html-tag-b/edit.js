import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes;
	return (
		<RichText
			{...useBlockProps()}
			tagName="b"
			value={text}
			onChange={(newText) => setAttributes({ text: newText })}
			placeholder={__("Add bold text...", "makerblocks")}
			allowedFormats={[]} // Remove text formatting options
		/>
	);
}

import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes;
	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Aside Settings", "makerblocks")}>
					<TextControl
						label={__("Aside Text", "makerblocks")}
						value={text}
						onChange={(newText) => setAttributes({ text: newText })}
						help={__(
							"Entering text here will disable the block inserter for innerblocks",
							"makerblocks",
						)}
					/>
				</PanelBody>
			</InspectorControls>
			<aside {...blockProps}>{text || <InnerBlocks />}</aside>
		</>
	);
}

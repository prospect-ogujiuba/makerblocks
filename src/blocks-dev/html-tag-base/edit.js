import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, SelectControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { href, target } = attributes;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__("Base Tag Settings", "makerblocks")}>
					<TextControl
						label={__("Base URL (href)", "makerblocks")}
						value={href}
						onChange={(value) => setAttributes({ href: value })}
						placeholder={__("Enter base URL", "makerblocks")}
					/>
					<SelectControl
						label={__("Target", "makerblocks")}
						value={target}
						options={[
							{ label: "_self", value: "_self" },
							{ label: "_blank", value: "_blank" },
							{ label: "_parent", value: "_parent" },
							{ label: "_top", value: "_top" },
						]}
						onChange={(value) => setAttributes({ target: value })}
					/>
				</PanelBody>
			</InspectorControls>
			Base Tag
		</div>
	);
}

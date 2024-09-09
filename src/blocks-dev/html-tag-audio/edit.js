import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	MediaUpload,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	TextControl,
	SelectControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { autoplay, controls, loop, muted, preload, src, text } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Audio Settings", "makerblocks")}>
					<ToggleControl
						label={__("Autoplay", "makerblocks")}
						checked={autoplay}
						onChange={(value) => setAttributes({ autoplay: value })}
					/>
					<ToggleControl
						label={__("Controls", "makerblocks")}
						checked={controls}
						onChange={(value) => setAttributes({ controls: value })}
					/>
					<ToggleControl
						label={__("Loop", "makerblocks")}
						checked={loop}
						onChange={(value) => setAttributes({ loop: value })}
					/>
					<ToggleControl
						label={__("Muted", "makerblocks")}
						checked={muted}
						onChange={(value) => setAttributes({ muted: value })}
					/>
					<SelectControl
						label={__("Preload", "makerblocks")}
						value={preload}
						options={[
							{ label: "Auto", value: "auto" },
							{ label: "Metadata", value: "metadata" },
							{ label: "None", value: "none" },
						]}
						onChange={(value) => setAttributes({ preload: value })}
					/>
					<MediaUpload
						onSelect={(media) => setAttributes({ src: media.url })}
						allowedTypes={["audio"]}
						value={src}
						render={({ open }) => (
							<button onClick={open} className="components-button is-primary">
								{__("Select Audio", "makerblocks")}
							</button>
						)}
					/>
					<TextControl
						label={__("Fallback Text", "makerblocks")}
						value={text}
						onChange={(value) => setAttributes({ text: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<audio {...useBlockProps()} controls src={src}>
				{text}
			</audio>
		</>
	);
}

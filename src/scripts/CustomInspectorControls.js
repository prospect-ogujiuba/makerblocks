import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	TextControl,
	SelectControl,
	ToggleControl,
} from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function CustomInspectorControls() {
	const safelistClasses = [
		"accessibility",
		"backgrounds",
		"borders",
		"effects",
		"filters",
		"flexbox-grid",
		"interactivity",
		"layout",
		"sizing",
		"spacing",
		"svg",
		"tables",
		"transforms",
		"transitions-animations",
		"typography",
	];

	const capitalizeWords = (str) =>
		str.replace(/\b\w/g, (char) => char.toUpperCase());

	// Create a component for rendering controls for each category
	function CategoryControls({ category }) {
		switch (category) {
			case "accessibility":
				return (
					<PanelBody
						title={__(capitalizeWords(category), "text-domain")}
						initialOpen={false}
					>
						<PanelRow>
							<SelectControl
								label={__("Screen Reader", "text-domain")}
								value={""}
								options={[
									{ label: __("Select an option", "text-domain"), value: "" },
									{
										label: __("Screen Reader Only", "text-domain"),
										value: "sr-only",
									},
									{
										label: __("Not Screen Reader Only", "text-domain"),
										value: "not-sr-only",
									},
								]}
								onChange={() => ""}
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label={__("Forced Color Adjustment", "text-domain")}
								value={""}
								options={[
									{ label: __("Select an option", "text-domain"), value: "" },
									{
										label: __("Auto", "text-domain"),
										value: "forced-color-adjust-auto",
									},
									{
										label: __("None", "text-domain"),
										value: "forced-color-adjust-none",
									},
								]}
								onChange={() => ""}
							/>
						</PanelRow>
					</PanelBody>
				);

			case "backgrounds":
				return (
					<PanelBody
						title={__(capitalizeWords(category), "text-domain")}
						initialOpen={false}
					>
						{/* Background Attachment */}
						<PanelRow>
							<SelectControl
								label={__("Background Attachment", "text-domain")}
								value={""}
								options={[
									{ label: __("Select an option", "text-domain"), value: "" },
									{ label: __("Fixed", "text-domain"), value: "bg-fixed" },
									{ label: __("Local", "text-domain"), value: "bg-local" },
									{ label: __("Scroll", "text-domain"), value: "bg-scroll" },
								]}
								onChange={() => ""}
							/>
						</PanelRow>

						{/* Background Clip */}
						<PanelRow>
							<SelectControl
								label={__("Background Clip", "text-domain")}
								value={""}
								options={[
									{ label: __("Select an option", "text-domain"), value: "" },
									{
										label: __("Border", "text-domain"),
										value: "bg-clip-border",
									},
									{
										label: __("Padding", "text-domain"),
										value: "bg-clip-padding",
									},
									{
										label: __("Content", "text-domain"),
										value: "bg-clip-content",
									},
									{ label: __("Text", "text-domain"), value: "bg-clip-text" },
								]}
								onChange={() => ""}
							/>
						</PanelRow>

						{/* Background Origin */}
						<PanelRow>
							<SelectControl
								label={__("Background Origin", "text-domain")}
								value={""}
								options={[
									{ label: __("Select an option", "text-domain"), value: "" },
									{
										label: __("Border", "text-domain"),
										value: "bg-origin-border",
									},
									{
										label: __("Padding", "text-domain"),
										value: "bg-origin-padding",
									},
									{
										label: __("Content", "text-domain"),
										value: "bg-origin-content",
									},
								]}
								onChange={() => ""}
							/>
						</PanelRow>

						{/* Background Position */}
						<PanelRow>
							<SelectControl
								label={__("Background Position", "text-domain")}
								value={""}
								options={[
									{ label: __("Select an option", "text-domain"), value: "" },
									{ label: __("Bottom", "text-domain"), value: "bg-bottom" },
									{ label: __("Center", "text-domain"), value: "bg-center" },
									{ label: __("Left", "text-domain"), value: "bg-left" },
									{
										label: __("Left Bottom", "text-domain"),
										value: "bg-left-bottom",
									},
									{
										label: __("Left Top", "text-domain"),
										value: "bg-left-top",
									},
									{ label: __("Right", "text-domain"), value: "bg-right" },
									{
										label: __("Right Bottom", "text-domain"),
										value: "bg-right-bottom",
									},
									{
										label: __("Right Top", "text-domain"),
										value: "bg-right-top",
									},
									{ label: __("Top", "text-domain"), value: "bg-top" },
								]}
								onChange={() => ""}
							/>
						</PanelRow>

						{/* Background Repeat */}
						<PanelRow>
							<SelectControl
								label={__("Background Repeat", "text-domain")}
								value={""}
								options={[
									{ label: __("Select an option", "text-domain"), value: "" },
									{ label: __("Repeat", "text-domain"), value: "bg-repeat" },
									{
										label: __("No Repeat", "text-domain"),
										value: "bg-no-repeat",
									},
									{
										label: __("Repeat X", "text-domain"),
										value: "bg-repeat-x",
									},
									{
										label: __("Repeat Y", "text-domain"),
										value: "bg-repeat-y",
									},
									{
										label: __("Repeat Round", "text-domain"),
										value: "bg-repeat-round",
									},
									{
										label: __("Repeat Space", "text-domain"),
										value: "bg-repeat-space",
									},
								]}
								onChange={() => ""}
							/>
						</PanelRow>

						{/* Background Size */}
						<PanelRow>
							<SelectControl
								label={__("Background Size", "text-domain")}
								value={""}
								options={[
									{ label: __("Select an option", "text-domain"), value: "" },
									{ label: __("Auto", "text-domain"), value: "bg-auto" },
									{ label: __("Cover", "text-domain"), value: "bg-cover" },
									{ label: __("Contain", "text-domain"), value: "bg-contain" },
								]}
								onChange={() => ""}
							/>
						</PanelRow>

						{/* Background Image */}
						<PanelRow>
							<SelectControl
								label={__("Background Image", "text-domain")}
								value={""}
								options={[
									{ label: __("Select an option", "text-domain"), value: "" },
									{ label: __("None", "text-domain"), value: "bg-none" },
									{
										label: __("Gradient to Top", "text-domain"),
										value: "bg-gradient-to-t",
									},
									{
										label: __("Gradient to Top Right", "text-domain"),
										value: "bg-gradient-to-tr",
									},
									{
										label: __("Gradient to Right", "text-domain"),
										value: "bg-gradient-to-r",
									},
									{
										label: __("Gradient to Bottom Right", "text-domain"),
										value: "bg-gradient-to-br",
									},
									{
										label: __("Gradient to Bottom", "text-domain"),
										value: "bg-gradient-to-b",
									},
									{
										label: __("Gradient to Bottom Left", "text-domain"),
										value: "bg-gradient-to-bl",
									},
									{
										label: __("Gradient to Left", "text-domain"),
										value: "bg-gradient-to-l",
									},
									{
										label: __("Gradient to Top Left", "text-domain"),
										value: "bg-gradient-to-tl",
									},
								]}
								onChange={() => ""}
							/>
						</PanelRow>
					</PanelBody>
				);

			case "borders":
				return (
					<PanelBody
						title={__(capitalizeWords(category), "text-domain")}
						initialOpen={false}
					>
						<PanelRow>
							<SelectControl
								label={__("Border Style", "text-domain")}
								value={""}
								options={[
									{ label: __("None", "text-domain"), value: "none" },
									{ label: __("Solid", "text-domain"), value: "solid" },
									{ label: __("Dashed", "text-domain"), value: "dashed" },
								]}
								onChange={() => {}}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={__("Border Color", "text-domain")}
								value={""}
								onChange={() => {}}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={__("Border Width", "text-domain")}
								value={""}
								onChange={() => {}}
							/>
						</PanelRow>
					</PanelBody>
				);

			case "effects":
				return (
					<PanelBody
						title={__(capitalizeWords(category), "text-domain")}
						initialOpen={false}
					>
						<PanelRow>
							<ToggleControl
								label={__("Box Shadow", "text-domain")}
								checked={true}
								onChange={() => {}}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={__("Drop Shadow", "text-domain")}
								checked={true}
								onChange={() => {}}
							/>
						</PanelRow>
					</PanelBody>
				);

			case "filters":
				return (
					<PanelBody
						title={__(capitalizeWords(category), "text-domain")}
						initialOpen={false}
					>
						<PanelRow>
							<SelectControl
								label={__("Filter", "text-domain")}
								value={""}
								options={[
									{ label: __("None", "text-domain"), value: "" },
									{ label: __("Grayscale", "text-domain"), value: "grayscale" },
									{ label: __("Blur", "text-domain"), value: "blur" },
								]}
								onChange={() => {}}
							/>
						</PanelRow>
					</PanelBody>
				);

			case "flexbox-grid":
				return (
					<PanelBody
						title={__(capitalizeWords(category), "text-domain")}
						initialOpen={false}
					>
						<PanelRow>
							<SelectControl
								label={__("Flex Direction", "text-domain")}
								value={""}
								options={[
									{ label: __("Row", "text-domain"), value: "row" },
									{ label: __("Column", "text-domain"), value: "column" },
								]}
								onChange={() => {}}
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label={__("Align Items", "text-domain")}
								value={""}
								options={[
									{ label: __("Stretch", "text-domain"), value: "stretch" },
									{ label: __("Center", "text-domain"), value: "center" },
								]}
								onChange={() => {}}
							/>
						</PanelRow>
					</PanelBody>
				);

			case "interactivity":
				return (
					<PanelBody
						title={__(capitalizeWords(category), "text-domain")}
						initialOpen={false}
					>
						<PanelRow>
							<ToggleControl
								label={__("Hover Effect", "text-domain")}
								checked={true}
								onChange={() => {}}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={__("Focus Effect", "text-domain")}
								checked={true}
								onChange={() => {}}
							/>
						</PanelRow>
					</PanelBody>
				);

			case "layout":
				return (
					<PanelBody
						title={__(capitalizeWords(category), "text-domain")}
						initialOpen={false}
					>
						<PanelRow>
							<TextControl
								label={__("Width", "text-domain")}
								value={""}
								onChange={() => {}}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={__("Height", "text-domain")}
								value={""}
								onChange={() => {}}
							/>
						</PanelRow>
					</PanelBody>
				);

			case "sizing":
				return (
					<PanelBody
						title={__(capitalizeWords(category), "text-domain")}
						initialOpen={false}
					>
						<PanelRow>
							<TextControl
								label={__("Padding", "text-domain")}
								value={""}
								onChange={() => {}}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={__("Margin", "text-domain")}
								value={""}
								onChange={() => {}}
							/>
						</PanelRow>
					</PanelBody>
				);

			case "spacing":
				return (
					<PanelBody
						title={__(capitalizeWords(category), "text-domain")}
						initialOpen={false}
					>
						<PanelRow>
							<TextControl
								label={__("Spacing", "text-domain")}
								value={""}
								onChange={() => {}}
							/>
						</PanelRow>
					</PanelBody>
				);

			case "svg":
				return (
					<PanelBody
						title={__(capitalizeWords(category), "text-domain")}
						initialOpen={false}
					>
						<PanelRow>
							<TextControl
								label={__("SVG Size", "text-domain")}
								value={""}
								onChange={() => {}}
							/>
						</PanelRow>
					</PanelBody>
				);

			case "tables":
				return (
					<PanelBody
						title={__(capitalizeWords(category), "text-domain")}
						initialOpen={false}
					>
						<PanelRow>
							<SelectControl
								label={__("Table Style", "text-domain")}
								value={""}
								options={[
									{ label: __("None", "text-domain"), value: "" },
									{ label: __("Striped", "text-domain"), value: "striped" },
									{ label: __("Bordered", "text-domain"), value: "bordered" },
								]}
								onChange={() => {}}
							/>
						</PanelRow>
					</PanelBody>
				);

			case "transforms":
				return (
					<PanelBody
						title={__(capitalizeWords(category), "text-domain")}
						initialOpen={false}
					>
						<PanelRow>
							<SelectControl
								label={__("Transform", "text-domain")}
								value={""}
								options={[
									{ label: __("None", "text-domain"), value: "" },
									{ label: __("Rotate", "text-domain"), value: "rotate" },
									{ label: __("Scale", "text-domain"), value: "scale" },
								]}
								onChange={() => {}}
							/>
						</PanelRow>
					</PanelBody>
				);

			case "transitions-animations":
				return (
					<PanelBody
						title={__(capitalizeWords(category), "text-domain")}
						initialOpen={false}
					>
						<PanelRow>
							<SelectControl
								label={__("Transition", "text-domain")}
								value={""}
								options={[
									{ label: __("None", "text-domain"), value: "" },
									{ label: __("Fade", "text-domain"), value: "fade" },
									{ label: __("Slide", "text-domain"), value: "slide" },
								]}
								onChange={() => {}}
							/>
						</PanelRow>
					</PanelBody>
				);

			case "typography":
				return (
					<PanelBody
						title={__(capitalizeWords(category), "text-domain")}
						initialOpen={false}
					>
						<PanelRow>
							<TextControl
								label={__("Font Size", "text-domain")}
								value={""}
								onChange={() => {}}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={__("Font Family", "text-domain")}
								value={""}
								onChange={() => {}}
							/>
						</PanelRow>
					</PanelBody>
				);

			default:
				return null;
		}
	}

	return (
		<InspectorControls>
			{safelistClasses.map((category, index) => (
				<CategoryControls key={index} category={category} />
			))}
		</InspectorControls>
	);
}

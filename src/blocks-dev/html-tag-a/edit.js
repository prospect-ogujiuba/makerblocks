import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
} from "@wordpress/block-editor";
import { DropdownMenu } from "@wordpress/components";
import {
	external,
	more,
	arrowLeft,
	arrowRight,
	arrowUp,
	arrowDown,
} from "@wordpress/icons";

import "./editor.scss";
import { ToolbarGroup } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { text, href, target, rel, media, hreflang, type, contentPosition } =
		attributes;

	return (
		<>
			<a
				{...useBlockProps()}
				href="#"
				target={target || "_self"}
				rel={rel || "noopener noreferrer"}
				media={media || ""}
				hreflang={hreflang || ""}
				type={type || ""}
			>
				{
					<BlockControls>
						<ToolbarGroup>
							<DropdownMenu
								icon={external}
								label="Select a direction"
								controls={[
									{
										title: "Up",
										icon: arrowUp,
										onClick: () => console.log("up"),
									},
									{
										title: "Right",
										icon: arrowRight,
										onClick: () => console.log("right"),
									},
									{
										title: "Down",
										icon: arrowDown,
										onClick: () => console.log("down"),
									},
									{
										title: "Left",
										icon: arrowLeft,
										onClick: () => console.log("left"),
									},
								]}
							/>
						</ToolbarGroup>
					</BlockControls>
				}
				<RichText
					tagName="a"
					value={text}
					allowedFormats={["core/bold", "core/italic"]}
					onChange={(text) => setAttributes({ text: text })}
					placeholder={__("Link/HyperLink...")}
				/>
			</a>
		</>
	);
}

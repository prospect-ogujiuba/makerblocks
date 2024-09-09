import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<img
				width="64px"
				src="http:playground.test/wp-content/plugins/makerblocks/assets/images/extras/placeholder-account-image.png"
				useMap="#simple-map"
				alt={__("Example placeholder image", "text-domain")}
			/>
			<map name="simple-map">
				{/* Simple area placeholder */}
				<area
					shape="circle"
					coords="0,0,24,24"
					href="#"
					alt={__("Placeholder Area", "text-domain")}
				/>
			</map>
		</div>
	);
}

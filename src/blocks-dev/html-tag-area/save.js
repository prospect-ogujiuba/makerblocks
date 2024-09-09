import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
	return (
		<div {...useBlockProps.save()}>
			<img
				width="64px"
				src="http://playground.test/wp-content/plugins/makerblocks/assets/images/extras/placeholder-account-image.png"
				alt="Example placeholder image"
				useMap="#simple-map"
			/>
			<map name="simple-map">
				<area shape="rect" coords="0,0,24,24" href="#" alt="Placeholder Area" />
			</map>
		</div>
	);
}

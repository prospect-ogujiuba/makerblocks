import { useBlockProps } from "@wordpress/block-editor";

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
	const { text, href, target, rel, media, hreflang, type } = attributes;

	return (
		<a
			{...useBlockProps.save()}
			href={href || "#"}
			target={target || "_self"}
			rel={rel || "noopener noreferrer"}
			media={media || ""}
			hreflang={hreflang || ""}
			type={type || ""}
		>
			{text}
		</a>
	);
}

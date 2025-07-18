import { __ } from "@wordpress/i18n";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

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
		<main
			{...useInnerBlocksProps({
				...useBlockProps({
					className:
						"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				}),
			})}
		/>
	);
}

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
		<>
			<section {...useBlockProps()}>
				<div class="card">
					<div class="card_load"></div>
					<div class="card_load_extreme_title"></div>
					<div class="card_load_extreme_descripion"></div>
				</div>
			</section>
		</>
	);
}

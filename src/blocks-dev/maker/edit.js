import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function Edit(props) {
	return (
		<>
			<div {...useBlockProps()}>
				<div className="p-4 bg-yellow-50">
					This is the editor output of the block.
				</div>
			</div>
		</>
	);
}

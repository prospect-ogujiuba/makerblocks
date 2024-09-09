const { createHigherOrderComponent } = wp.compose;
import CustomInspectorControls from "./CustomInspectorControls";

class WithBlockControls {
	constructor() {
		this.init();
	}

	init() {
		const customBlockControls = createHigherOrderComponent((BlockEdit) => {
			return (props) => {
				return (
					<>
						<BlockEdit key="edit" {...props} />
						{props.isSelected && <CustomInspectorControls />}
					</>
				);
			};
		}, "customBlockControls");

		wp.hooks.addFilter(
			"editor.BlockEdit",
			"my-plugin/with-inspector-controls",
			customBlockControls,
		);
	}
}

export default WithBlockControls;

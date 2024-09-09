const { createHigherOrderComponent } = wp.compose;
const { __ } = wp.i18n;

class WithBlockAttributes {
	constructor() {
		this.init();
	}

	init() {
		const withBlockAttributes = createHigherOrderComponent((BlockEdit) => {
			return (props) => {
				const { attributes, setAttributes } = props;

				// Define default attributes here
				const defaultAttributes = {
					screenReaders: "", // Default value for screenReaders
					forcedColorAdjust: "", // Default value for forcedColorAdjust
					customAttribute: "", // Custom attribute
				};

				// Merge default attributes with existing ones
				const newAttributes = { ...defaultAttributes, ...attributes };

				// Update attributes only if they are not set
				Object.keys(defaultAttributes).forEach((key) => {
					if (!attributes.hasOwnProperty(key)) {
						setAttributes({ [key]: defaultAttributes[key] });
					}
				});

				return <BlockEdit {...props} attributes={newAttributes} />;
			};
		}, "withBlockAttributes");

		wp.hooks.addFilter(
			"editor.BlockEdit",
			"my-plugin/with-block-attributes",
			withBlockAttributes,
		);
	}
}

export default WithBlockAttributes;

import ReactDOM from "react-dom/client";

class ComponentRenderer {
	constructor() {
		document.addEventListener("DOMContentLoaded", () => {
			this.renderComponents();
		});
	}

	renderComponents() {
		try {
			// Render Components Here
			this.renderComponent("#atsflow-app", ATSFlow);
		} catch (error) {
			console.error(
				"An error occurred while rendering the React components:",
				error
			);
		}
	}

	renderComponent(
		selector,
		Component,
		getProps = (element) => {
			const propsString = element.getAttribute("data-props");
			if (propsString) {
				try {
					return JSON.parse(propsString);
				} catch (error) {
					console.error("Error parsing props:", error);
				}
			}
			return {};
		}
	) {
		const elements = document.querySelectorAll(selector);
		if (elements.length > 0) {
			console.log(`Found ${elements.length} ${selector} elements.`);
			elements.forEach((element, index) => {
				const props = getProps(element, index);
				console.log(
					`Rendering ${Component.name} component in element ${
						index + 1
					} with props:`,
					props
				);
				ReactDOM.createRoot(element).render(<Component {...props} />);
			});
			console.log(`All ${Component.name} components rendered successfully.`);
		} else {
			console.error(`No elements with the selector '${selector}' found.`);
		}
	}
}

export default ComponentRenderer;

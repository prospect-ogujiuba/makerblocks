import ReactDOM from "react-dom/client";
// Components
import MakerStarter from "./apps/makerstarter/MakerStarter";

class ComponentRenderer {
	constructor() {
		// Start rendering components when DOM is fully loaded
		document.addEventListener("DOMContentLoaded", () => {
			this.renderComponents();
		});
	}

	renderComponents() {
		try {
			// Render all components by calling this.renderComponent

			this.renderComponent("#makerstarter", MakerStarter);

		} catch (error) {
			// Catch and log any rendering errors
			console.error(
				"An error occurred while rendering the React components:",
				error,
			);
		}
	}

	/**
	 * A utility method to render a React component inside a selected DOM element.
	 * @param {string} selector - The CSS selector to find the elements to render the component into.
	 * @param {React.Component} Component - The React component to render.
	 * @param {Function} getProps - A function to extract props from the DOM element (defaults to parsing data-props).
	 */
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
		},
	) {
		const elements = document.querySelectorAll(selector);
		if (elements.length > 0) {
			console.log(`Found ${elements.length} ${selector} elements.`);
			elements.forEach((element, index) => {
				// Check if the component has already been rendered
				if (!element.hasAttribute("data-rendered")) {
					const props = getProps(element, index);
					console.log(
						`Rendering ${Component.name} component in element ${
							index + 1
						} with props:`,
						props,
					);
					ReactDOM.createRoot(element).render(<Component {...props} />);
					// Mark the element as rendered
					element.setAttribute("data-rendered", "true");
				} else {
					console.log(
						`Component already rendered in element ${index + 1}. Skipping...`,
					);
				}
			});
			console.log(`All ${Component.name} components rendered successfully.`);
		} else {
			console.warn(`No elements with the selector '${selector}' found.`);
		}
	}
}

export default ComponentRenderer;

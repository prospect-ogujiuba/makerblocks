import React from "react";
import ReactDOM from "react-dom/client";

import MakerBlocks from "./MakerBlocks";
import WordPressLocalize from "./WordPressLocalize";

// Import Components

// Initialize main scripts
new WordPressLocalize();
new MakerBlocks();

document.addEventListener("DOMContentLoaded", () => {
	try {

		const renderComponents = (selector, Component, getProps = () => ({})) => {
			const elements = document.querySelectorAll(selector);
			if (elements.length > 0) {
				console.log(`Found ${elements.length} ${selector} elements.`);
				elements.forEach((element, index) => {
					const props = getProps(element, index);
					console.log(
						`Rendering ${Component.name} component in element ${index + 1}.`,
					);
					ReactDOM.createRoot(element).render(<Component {...props} />);
				});
				console.log(`All ${Component.name} components rendered successfully.`);
			} else {
				console.error(`No elements with the selector '${selector}' found.`);
			}
		};

		// You can add render components here as needed
        
	} catch (error) {
		console.error(
			"An error occurred while rendering the React components:",
			error,
		);
	}
});

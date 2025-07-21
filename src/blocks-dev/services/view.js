// services/view.js - Updated to consume WordPress data
import { createRoot } from "react-dom/client";
import Services from "./Services";

document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("b2bcnc-services");
    if (el) {
        // Get data prepared by PHP
        const propsData = el.getAttribute('data-component-props');
        let props = {};

        if (propsData) {
            try {
                props = JSON.parse(propsData);
            } catch (e) {
                console.warn('Failed to parse services component props:', e);
            }
        }

        const root = createRoot(el);
        root.render(<Services {...props} />);
    }
});

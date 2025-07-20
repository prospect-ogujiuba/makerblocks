// page-header/view.js - Updated to consume WordPress data
import { createRoot } from "react-dom/client";
import PageHeader from "./PageHeader";

document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("b2bcnc-page-header");
    if (el) {
        // Get data prepared by PHP
        const propsData = el.getAttribute('data-component-props');
        let props = {};

        if (propsData) {
            try {
                props = JSON.parse(propsData);
            } catch (e) {
                console.warn('Failed to parse page header component props:', e);
            }
        }

        const root = createRoot(el);
        root.render(<PageHeader {...props} />);
    }
});

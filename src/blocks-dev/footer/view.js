// footer/view.js - Updated to consume WordPress data
import { createRoot } from "react-dom/client";
import Footer from "./Footer";

document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("b2bcnc-footer");
    if (el) {
        // Get data prepared by PHP
        const propsData = el.getAttribute('data-component-props');
        let props = {};

        if (propsData) {
            try {
                props = JSON.parse(propsData);
            } catch (e) {
                console.warn('Failed to parse footer component props:', e);
            }
        }

        const root = createRoot(el);
        root.render(<Footer {...props} />);
    }
});

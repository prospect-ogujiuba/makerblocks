// MakerBlocks.js - Class-based consolidated component renderer
import { createRoot } from "react-dom/client";

// Import all React components
import CTA from "../blocks-dev/cta/CTA";
import Faqs from "../blocks-dev/faqs/Faqs";
import Footer from "../blocks-dev/footer/Footer";
import Header from "../blocks-dev/header/Header";
import Hero from "../blocks-dev/hero/Hero";
import Industries from "../blocks-dev/industries/Industries";
import PageHeader from "../blocks-dev/page-header/PageHeader";
import Portfolio from "../blocks-dev/portfolio/Portfolio";
import Services from "../blocks-dev/services/Services";
import Testimonials from "../blocks-dev/testimonials/Testimonials";

class MakerBlocks {
    constructor() {
        // Component registry - maps element IDs to their React components
        this.componentRegistry = [
            { id: "b2bcnc-cta", component: CTA, name: "CTA" },
            { id: "b2bcnc-faqs", component: Faqs, name: "Faqs" },
            { id: "b2bcnc-footer", component: Footer, name: "Footer" },
            { id: "b2bcnc-header", component: Header, name: "Header" },
            { id: "b2bcnc-hero", component: Hero, name: "Hero" },
            { id: "b2bcnc-industries", component: Industries, name: "Industries" },
            { id: "b2bcnc-page-header", component: PageHeader, name: "PageHeader" },
            { id: "b2bcnc-portfolio", component: Portfolio, name: "Portfolio" },
            { id: "b2bcnc-services", component: Services, name: "Services" },
            { id: "b2bcnc-testimonials", component: Testimonials, name: "Testimonials" },
        ];

        this.init();
    }

    /**
     * Parse component props from data attribute
     * @param {HTMLElement} element - The DOM element
     * @param {string} componentName - Name of component for error logging
     * @returns {Object} - Parsed props object
     */
    parseComponentProps(element, componentName) {
        const propsData = element.getAttribute("data-component-props");
        let props = {};

        if (propsData) {
            try {
                props = JSON.parse(propsData);
            } catch (e) {
                console.warn(`Failed to parse ${componentName} component props:`, e);
            }
        }

        return props;
    }

    /**
     * Mount a single React component
     * @param {Object} config - Component configuration
     * @param {HTMLElement} element - Target DOM element
     */
    mountComponent(config, element) {
        const { component: Component, name } = config;
        const props = this.parseComponentProps(element, name);

        try {
            const root = createRoot(element);
            root.render(<Component {...props} />);
            console.log(`✅ Mounted ${name} component`);
        } catch (error) {
            console.error(`❌ Failed to mount ${name} component:`, error);
        }
    }

    /**
     * Initialize all components present on the page
     */
    initializeComponents() {
        this.componentRegistry.forEach((config) => {
            const element = document.getElementById(config.id);

            if (element) {
                this.mountComponent(config, element);
            }
        });
    }

    /**
     * Initialize the MakerBlocks system
     */
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener("DOMContentLoaded", () => {
                this.initializeComponents();
            });
        } else {
            // DOM is already ready
            this.initializeComponents();
        }
    }

    /**
     * Manually mount a specific component (for dynamic usage)
     * @param {string} componentId - The element ID to mount
     */
    mountById(componentId) {
        const config = this.componentRegistry.find(c => c.id === componentId);
        const element = document.getElementById(componentId);
        
        if (config && element) {
            this.mountComponent(config, element);
        } else {
            console.warn(`Component or element not found for ID: ${componentId}`);
        }
    }
}

export default MakerBlocks;
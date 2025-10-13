/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) // removed by dead control flow
{} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./src/blocks-dev/footer/Footer.jsx":
/*!******************************************!*\
  !*** ./src/blocks-dev/footer/Footer.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Footer() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    children: "Footer"
  });
}

/***/ }),

/***/ "./src/blocks-dev/header/Header.jsx":
/*!******************************************!*\
  !*** ./src/blocks-dev/header/Header.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Header() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    children: "Header"
  });
}

/***/ }),

/***/ "./src/scripts/MakerBlocks.js":
/*!************************************!*\
  !*** ./src/scripts/MakerBlocks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _blocks_dev_footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks-dev/footer/Footer */ "./src/blocks-dev/footer/Footer.jsx");
/* harmony import */ var _blocks_dev_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocks-dev/header/Header */ "./src/blocks-dev/header/Header.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
// MakerBlocks.js - Class-based consolidated component renderer


// Import all React components



class MakerBlocks {
  constructor() {
    // Component registry - maps element IDs to their React components
    this.componentRegistry = [{
      id: "b2bcnc-footer",
      component: _blocks_dev_footer_Footer__WEBPACK_IMPORTED_MODULE_1__["default"],
      name: "Footer"
    }, {
      id: "b2bcnc-header",
      component: _blocks_dev_header_Header__WEBPACK_IMPORTED_MODULE_2__["default"],
      name: "Header"
    }];
    this.init();
  }

  /**
   * Parse component props from data attribute
   * @param {HTMLElement} element - The DOM element
   * @param {string} componentName - Name of component for error logging
   * @returns {Object} - Parsed props object
   */
  parseComponentProps(element, componentName) {
    const propsData = element.getAttribute("component-data");
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
    const {
      component: Component,
      name
    } = config;
    const props = this.parseComponentProps(element, name);
    try {
      const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(element);
      root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component, {
        ...props
      }));
      // console.log(`✅ Mounted ${name} component`);
    } catch (error) {
      // console.error(`❌ Failed to mount ${name} component:`, error);
    }
  }

  /**
   * Initialize all components present on the page
   */
  initializeComponents() {
    this.componentRegistry.forEach(config => {
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
    if (document.readyState === "loading") {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MakerBlocks);

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MakerBlocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MakerBlocks */ "./src/scripts/MakerBlocks.js");

new _MakerBlocks__WEBPACK_IMPORTED_MODULE_0__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
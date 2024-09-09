/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Animation.js":
/*!**********************************!*\
  !*** ./src/scripts/Animation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Animation {
  constructor() {
    this.init();
  }
  init() {
    this.animationFadeIn();
  }
  animationFadeIn() {
    const fadeIns = document.querySelectorAll(".fade-in");
    console.log(fadeIns);
    const options = {
      threshold: 0.25 // The amount of the element that's visible before triggering
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once the effect is applied
        }
      });
    }, options);
    fadeIns.forEach(fadeIn => {
      observer.observe(fadeIn);
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animation);

/***/ }),

/***/ "./src/scripts/CollapsePanel.js":
/*!**************************************!*\
  !*** ./src/scripts/CollapsePanel.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class CollapsePanel {
  constructor() {
    this.init();
  }
  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.addToggleCollapseListener('.accordion-toggle');
    });
  }
  addToggleCollapseListener(selector) {
    this.toggles = document.querySelectorAll(selector);
    this.toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        toggle.parentNode.parentNode.classList.toggle('active');
      });
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollapsePanel);

/***/ }),

/***/ "./src/scripts/ComponentRenderer.js":
/*!******************************************!*\
  !*** ./src/scripts/ComponentRenderer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_SearchGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SearchGrid */ "./src/scripts/components/SearchGrid.js");



class ComponentRenderer {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      try {
        this.renderComponents(".search-block-results", _components_SearchGrid__WEBPACK_IMPORTED_MODULE_2__["default"]);
      } catch (error) {
        console.error("An error occurred while rendering the React components:", error);
      }
    });
  }
  renderComponents(selector, Component, getProps = () => ({})) {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      console.log(`Found ${elements.length} ${selector} elements.`);
      elements.forEach((element, index) => {
        const props = getProps(element, index);
        console.log(`Rendering ${Component.name} component in element ${index + 1}.`);
        react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(element).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
          ...props
        }));
      });
      console.log(`All ${Component.name} components rendered successfully.`);
    } else {
      console.error(`No elements with the selector '${selector}' found.`);
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentRenderer);

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
class MakerBlocks {
  constructor() {
    this.init();
  }
  init() {
    console.log("Maker Blocks Main Script initialized");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MakerBlocks);

/***/ }),

/***/ "./src/scripts/WordPressLocalize.js":
/*!******************************************!*\
  !*** ./src/scripts/WordPressLocalize.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class WordPressLocalize {
  constructor() {
    this.init();
  }
  init() {
    console.log("WordPress Data Localized");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WordPressLocalize);

/***/ }),

/***/ "./src/scripts/components/SearchGrid.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/SearchGrid.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchGrid)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SearchGrid() {
  const [archive, setArchive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [postType, setPostType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [postTypeTitle, setPostTypeTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [taxonomy, setTaxonomy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [term, setTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  // Determine the current post type, taxonomy, and term
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const bodyClasses = document.body.classList;
    let currentPostType = "";
    let currentPostTypeTitle = "";
    let currentTaxonomy = "";
    let currentTerm = "";

    // Detect post type
    if (bodyClasses.contains("post-type-archive-article") || bodyClasses.contains("tax-article_topic")) {
      currentPostType = "article";
      currentPostTypeTitle = "Articles";
    } else if (bodyClasses.contains("post-type-archive-resource") || bodyClasses.contains("tax-resource_category")) {
      currentPostType = "resource";
      currentPostTypeTitle = "Resources";
    } else if (bodyClasses.contains("post-type-archive-portfolio") || bodyClasses.contains("tax-portfolio_category")) {
      currentPostType = "portfolio";
      currentPostTypeTitle = "Portfolio";
    } else {
      currentPostType = "post";
      currentPostTypeTitle = "Posts";
    }

    // Detect taxonomy and term
    const taxonomyClass = Array.from(bodyClasses).find(className => className.startsWith("tax-"));
    if (taxonomyClass) {
      currentTaxonomy = taxonomyClass.split("-")[1];
      const termClass = Array.from(bodyClasses).find(className => className.startsWith("term-"));
      if (termClass) {
        // Extract the term and replace dashes with spaces to handle multi-word terms
        currentTerm = termClass.split("-").slice(1).join(" ").replace(/-/g, " ");
      }
    }
    setPostType(currentPostType);
    setPostTypeTitle(currentPostTypeTitle);
    setTaxonomy(currentTaxonomy);
    setTerm(currentTerm);
  }, []);

  // Fetch archive data from the REST API
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchArchive() {
      if (!postType) return;
      setIsLoading(true);
      setError(null);
      try {
        let url = `/wp-json/wp/v2/${postType}?_embed`;
        if (taxonomy && term) {
          url += `&${taxonomy}=${term}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArchive(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(`Error fetching ${postType} data:`, error);
        setError(`Failed to fetch ${postTypeTitle.toLowerCase()}. Please try again later.`);
        setArchive([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchArchive();
  }, [postType, taxonomy, term]);

  // Handle input change for search
  const handleSearchChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter items based on search query and current post type
  const filteredItems = archive.filter(item => item.title.rendered.toLowerCase().includes(searchQuery));
  const renderArticle = async item => {
    let bgImageUrl = `${window.siteData.siteUrl}/wp-content/plugins/makerblocks/assets/images/extras/Placeholder-Image---Landscape.svg`;

    // Check if featured media exists
    if (item._links?.["wp:featuredmedia"]?.[0]?.href) {
      try {
        const response = await fetch(item._links["wp:featuredmedia"][0].href);
        const mediaData = await response.json();

        // Set the background image URL to the featured media's source_url if available
        if (mediaData.source_url) {
          bgImageUrl = mediaData.source_url;
        }
      } catch (error) {
        console.error("Error fetching featured media:", error);
      }
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundImage: `url(${bgImageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      },
      key: item.id,
      className: "mb-8 p-4 bg-white shadow-sm rounded-md"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "space-y-2 mb-4"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "text-2xl font-semibold text-gray-800"
    }, item.title.rendered), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti qui est quisquam aliquam fuga deleniti eos dignissimos sunt soluta sit!")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "space-y-2 py-2"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "flex space-x-2"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "bg-stone-100 py-2 px-4 rounded-2xl"
    }, "Category"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "bg-stone-100 py-2 px-4 rounded-2xl"
    }, "Category"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "bg-stone-100 py-2 px-4 rounded-2xl"
    }, "Category")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "flex space-x-2"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "bg-stone-100 py-2 px-4 rounded-2xl"
    }, "Tag"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "mt-2 text-sm text-gray-500"
    }, "Author: Penn Quilt"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: item.link,
      className: "text-blue-600 hover:text-blue-800 mt-4 inline-block"
    }, "Read more"));
  };

  // Render function for resources
  const renderResource = item => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: item.id,
    className: "mb-8 p-4 bg-white shadow-sm rounded-md"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "text-2xl font-semibold text-gray-800"
  }, item.title.rendered), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-2 text-sm text-gray-500"
  }, "Resource Type: ", item.acf?.resource_type), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: item.link,
    className: "text-blue-600 hover:text-blue-800 mt-4 inline-block"
  }, "Access Resource"));

  // Render function for portfolio items
  const renderPortfolio = item => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: item.id,
    className: "mb-8 p-4 bg-white shadow-sm rounded-md"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "text-2xl font-semibold text-gray-800"
  }, item.title.rendered), item._embedded?.["wp:featuredmedia"] && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: item._embedded["wp:featuredmedia"][0].source_url,
    alt: item.title.rendered,
    className: "mt-4 w-full h-48 object-cover"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-2 text-sm text-gray-500"
  }, "Project Type: ", item.acf?.project_type), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: item.link,
    className: "text-blue-600 hover:text-blue-800 mt-4 inline-block"
  }, "View Project"));

  // Render function for default posts
  const renderPost = item => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: item.id,
    className: "mb-8 p-4 bg-white shadow-sm rounded-md"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "text-2xl font-semibold text-gray-800"
  }, item.title.rendered), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-2 text-sm text-gray-500"
  }, "Date: ", new Date(item.date).toLocaleDateString()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: item.link,
    className: "text-blue-600 hover:text-blue-800 mt-4 inline-block"
  }, "Read more"));

  // Function to select the appropriate render function based on post type
  const renderItem = item => {
    switch (postType) {
      case "article":
        return renderArticle(item);
      case "resource":
        return renderResource(item);
      case "portfolio":
        return renderPortfolio(item);
      default:
        return renderPost(item);
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "bg-stone-200 py-16 px-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "max-w-7xl mx-auto flex items-stretch"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "pl-6 w-full text-3xl border-0",
    type: "search",
    placeholder: `Search ${term ? term.charAt(0).toUpperCase() + term.slice(1) + " " : ""}${postTypeTitle}`,
    value: searchQuery,
    onChange: handleSearchChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "p-6 text-xl bg-stone-300"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "bi bi-search"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "max-w-7xl mx-auto px-4 py-4 grid md:grid-cols-2 gap-4"
  }, isLoading ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-gray-600 flex justify-center items-center col-span-full"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    width: "50px",
    src: `${window.siteData.siteUrl}/wp-content/plugins/makerblocks/assets/images/extras/loading_icon.gif`,
    alt: ""
  })) : error ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-red-600"
  }, error) : filteredItems.length > 0 ? filteredItems.map(renderItem) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-gray-600"
  }, "No ", postTypeTitle.toLowerCase(), " found.")));
}

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
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

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

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
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MakerBlocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MakerBlocks */ "./src/scripts/MakerBlocks.js");
/* harmony import */ var _WordPressLocalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WordPressLocalize */ "./src/scripts/WordPressLocalize.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Animation */ "./src/scripts/Animation.js");
/* harmony import */ var _ComponentRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComponentRenderer */ "./src/scripts/ComponentRenderer.js");
/* harmony import */ var _CollapsePanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CollapsePanel */ "./src/scripts/CollapsePanel.js");






// Initialize main scripts
new _WordPressLocalize__WEBPACK_IMPORTED_MODULE_1__["default"]();
new _MakerBlocks__WEBPACK_IMPORTED_MODULE_0__["default"]();
new _Animation__WEBPACK_IMPORTED_MODULE_2__["default"]();
new _ComponentRenderer__WEBPACK_IMPORTED_MODULE_3__["default"]();
new _CollapsePanel__WEBPACK_IMPORTED_MODULE_4__["default"]();
/******/ })()
;
//# sourceMappingURL=index.js.map
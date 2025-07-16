/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    console.log("MakerBlocks Main Script initialized");
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
    console.log("Localized");
    this.logData();
  }
  logData() {
    // Using arrow function to retain the correct `this` context
    document.addEventListener("DOMContentLoaded", () => {
      if (typeof siteData !== "undefined") {
        console.log(siteData);

        // Example usage:
        console.log("Site Name:", siteData.siteName);
        console.log("Site Description:", siteData.siteDescription);
        console.log("Site URL:", siteData.siteUrl);
        console.log("Admin Email:", siteData.adminEmail);
        console.log("Active Theme Name:", siteData.themeName);
        console.log("Theme Version:", siteData.themeVersion);
        console.log("Theme URL:", siteData.themeUrl);
        console.log("Theme Author:", siteData.themeAuthor);
        console.log("Current User ID:", siteData.currentUserId);
        console.log("Current User Name:", siteData.currentUserName);
        console.log("Current User Email:", siteData.currentUserEmail);
        console.log("Current User Roles:", siteData.currentUserRoles);
        console.log("Home URL:", siteData.homeUrl);
        console.log("Site URL:", siteData.siteUrl);
        console.log("Admin URL:", siteData.adminUrl);
        console.log("AJAX URL:", siteData.ajaxUrl);
        console.log("REST API URL:", siteData.restUrl);
        console.log("Nonce:", siteData.nonce);
        if (siteData.postId) {
          console.log("Post ID:", siteData.postId);
          console.log("Post Title:", siteData.postTitle);
          console.log("Post URL:", siteData.postUrl);
        }
      } else {
        console.error("siteData is not defined.");
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WordPressLocalize);

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
/* harmony import */ var _WordPressLocalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WordPressLocalize */ "./src/scripts/WordPressLocalize.js");



// Initialize main scripts
new _WordPressLocalize__WEBPACK_IMPORTED_MODULE_1__["default"]();
new _MakerBlocks__WEBPACK_IMPORTED_MODULE_0__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
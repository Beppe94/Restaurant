/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n    const navBar = document.createElement('div');\n    navBar.setAttribute('class', 'navBar');\n    navBar.setAttribute('id', 'nav')\n    const title = document.createElement('h1');\n\n    title.textContent = 'La Pizzeria';\n\n    navBar.appendChild(title);\n\n    return navBar;\n}\n\n\nfunction createButtons() {\n    const nav = document.getElementById('nav');\n    const btnDiv = document.createElement('div');\n\n    btnDiv.setAttribute('class', 'buttons');    \n    \n    const homeBtn = document.createElement('button');\n    homeBtn.textContent = 'Home';\n    const menuBtn = document.createElement('button');\n    menuBtn.innerText = 'Menu';\n    const contactBtn = document.createElement('button');\n    contactBtn.innerText = 'Contact Us';\n\n    btnDiv.appendChild(homeBtn);\n    btnDiv.appendChild(menuBtn);\n    btnDiv.appendChild(contactBtn);\n    \n    nav.appendChild(btnDiv);\n\n    return nav;\n}\n\nfunction createParagraph() {\n    const infoDiv = document.createElement('div');\n\n    const introDiv = document.createElement('div');\n    const introTxt = document.createElement('h1');\n    introTxt.innerText = 'Intro';\n    const paragraph = document.createElement('p');\n\n    paragraph.innerText = 'Welcome to our pizzeria! We offer a wide variety of delicious pizzas made with fresh, high-quality ingredients. Our dough is made daily and hand-tossed to perfection, and our sauces are made from scratch using the finest tomatoes. In addition to pizza, we also have a selection of salads, pastas, and sandwiches to choose from. Come in and dine with us, or order online for pickup or delivery. We can\\'t wait to serve you!';\n    introDiv.appendChild(introTxt);\n    introDiv.appendChild(paragraph);\n\n    const hourDiv = document.createElement('div');\n    const hourTxt = document.createElement('h1');\n    hourTxt.innerText = 'Hours';\n    const hourParagraph = document.createElement('p');\n\n\n    hourParagraph.innerText = 'Monday: 9am - 8pm Tuesday: 9am - 8pm Wednesday: 9am - 8pm Thursday: 9am - 8pm Friday: 9am - 9pm Saturday: 9am - 9pm Sunday: 9am - 9pm';\n    hourDiv.appendChild(hourTxt);\n    hourDiv.appendChild(hourParagraph);\n\n    infoDiv.appendChild(introDiv);\n    infoDiv.appendChild(hourDiv);\n\n    return infoDiv;\n}\n\nfunction loadSite() {\n    const content = document.getElementById('content');\n\n    content.appendChild(createHome())\n    content.appendChild(createButtons())\n    content.appendChild(createParagraph())\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSite);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
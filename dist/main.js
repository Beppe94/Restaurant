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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction setBtnActive(id) {\n    const activeBtn = document.querySelector('.tab.active');\n    if (activeBtn) activeBtn.classList.remove('active');\n    \n    const homeBtn = document.getElementById(id);\n    homeBtn.classList.add('active');\n}\n\nfunction createContact() {\n    const contactInfo = document.createElement('div');\n    contactInfo.setAttribute('class', 'info-tab')\n\n    const numberDiv = document.createElement('div');\n    const phoneNumber = document.createElement('p');\n    numberDiv.setAttribute('class', 'number-info');\n    \n    const locationDiv = document.createElement('div');\n    const location = document.createElement('p');\n    locationDiv.setAttribute('class', 'location-info');\n\n    phoneNumber.innerText = '123 456789';\n    location.innerText = 'One near you!';\n\n    numberDiv.appendChild(getImage('icons/phone.png'));\n    numberDiv.appendChild(phoneNumber);\n    locationDiv.appendChild(getImage('icons/location.png'))\n    locationDiv.appendChild(location);\n\n    contactInfo.appendChild(numberDiv);\n    contactInfo.appendChild(locationDiv);\n \n    return contactInfo;\n}\n\nfunction getImage(path) {\n    const icon = document.createElement('img');\n    \n    icon.setAttribute('src', path);\n\n    return icon;\n}\n\nfunction loadContact() {\n    const tabContent = document.getElementById('tab-content');\n\n    tabContent.textContent = '';\n\n    setBtnActive('contact');\n\n    tabContent.appendChild(createContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeDays(day) {\n    const hoursParagraph = document.createElement('p')\n    hoursParagraph.innerText = day;\n\n    return hoursParagraph;\n}\n\nfunction createHome() {\n    const infoDiv = document.createElement('div');\n    infoDiv.setAttribute('class', 'home-tab');\n    infoDiv.setAttribute('id', 'home');\n    const hourDiv = document.createElement('div');\n    hourDiv.setAttribute('class', 'hours-class');\n\n    const introDiv = document.createElement('div');\n    introDiv.setAttribute('class', 'intro-class');\n    const introTxt = document.createElement('h1');\n    introTxt.innerText = 'About Us';\n    const paragraph = document.createElement('p');\n    \n    paragraph.innerText = 'Welcome to our pizzeria! We offer a wide variety of delicious pizzas made with fresh, high-quality ingredients. Our dough is made daily and hand-tossed to perfection, and our sauces are made from scratch using the finest tomatoes. In addition to pizza, we also have a selection of salads, pastas, and sandwiches to choose from. Come in and dine with us, or order online for pickup or delivery. We can\\'t wait to serve you!';\n\n    const hourTxt = document.createElement('h1')\n    hourTxt.innerText = 'Hours';\n\n    introDiv.appendChild(introTxt);\n    introDiv.appendChild(paragraph);\n\n    infoDiv.appendChild(introDiv);\n    infoDiv.appendChild(hourDiv);\n    hourDiv.appendChild(hourTxt);\n    \n    const days = [\n        makeDays('Monday: 9am - 8pm,'),\n        makeDays('Tuesday: 9am - 8pm,'),\n        makeDays('Wednesday: 9am - 8pm,'),\n        makeDays('Thursday: 9am - 8pm,'),\n        makeDays('Friday: 9am - 9pm,'),\n        makeDays('Saturday: 9am - 9pm,'),\n        makeDays('Sunday: 9am - 9pm'),\n    ]\n\n    days.forEach((day) => {\n        hourDiv.appendChild(day);\n    })\n    \n    \n    return infoDiv;\n}\n\nfunction setBtnActive(id) {\n    const activeBtn = document.querySelector('.tab.active');\n    if (activeBtn) activeBtn.classList.remove('active');\n    \n    const homeBtn = document.getElementById(id);\n    homeBtn.classList.add('active');\n}\n\nfunction loadHome() {\n    const tabContent = document.getElementById('tab-content');\n    tabContent.textContent = '';\n\n    setBtnActive('home');\n    \n    tabContent.appendChild(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainLoad */ \"./src/mainLoad.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\ninitialize();\n\nfunction activeTab() {\n    \n    const homeBtn = document.getElementById('home');\n    const menuBtn = document.getElementById('menu');\n    const contactBtn = document.getElementById('contact');\n    \n    homeBtn.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    menuBtn.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    contactBtn.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n}\n\nfunction initialize() {\n    (0,_mainLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    activeTab();\n}\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/mainLoad.js":
/*!*************************!*\
  !*** ./src/mainLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createNav() {\n    const navBar = document.createElement('div');\n    navBar.setAttribute('class', 'navBar');\n    navBar.setAttribute('id', 'nav')\n    const title = document.createElement('h1');\n\n    title.textContent = 'La Pizzeria';\n\n    navBar.appendChild(title);\n\n    return navBar;\n}\n\nfunction createButtons() {\n    const nav = document.getElementById('nav');\n    const btnDiv = document.createElement('div');\n\n    btnDiv.setAttribute('class', 'buttons');    \n    \n    const homeBtn = document.createElement('button');\n    homeBtn.textContent = 'Home';\n    const menuBtn = document.createElement('button');\n    menuBtn.innerText = 'Menu';\n    const contactBtn = document.createElement('button');\n    contactBtn.innerText = 'Contact Us';\n\n    homeBtn.setAttribute('id', 'home');\n    menuBtn.setAttribute('id', 'menu');\n    contactBtn.setAttribute('id', 'contact');\n    \n    homeBtn.classList.add('tab');\n    menuBtn.classList.add('tab');\n    contactBtn.classList.add('tab');\n    \n    btnDiv.appendChild(homeBtn);\n    btnDiv.appendChild(menuBtn);\n    btnDiv.appendChild(contactBtn);\n    \n    nav.appendChild(btnDiv);\n\n    return nav;\n}\n\nfunction createFooter() {\n    const footer = document.createElement('div');\n    footer.setAttribute('class', 'footer');\n    \n    const footerText = document.createElement('p');\n    const footerLink = document.createElement('a');\n    const footerIcon = document.createElement('img');\n\n    footerLink.href = 'https://github.com/Beppe94';\n\n    footerIcon.src = 'icons/github.png';\n\n    footerLink.appendChild(footerIcon);\n    footerText.innerText = 'Beppe94 2023 - Check out my GitHub';\n\n    footer.appendChild(footerText);\n    footer.appendChild(footerLink);\n\n    return footer;\n}\n\nfunction loadPage() {\n    const content = document.getElementById('content');\n    const tabContent = document.createElement('div');\n    tabContent.setAttribute('id', 'tab-content');\n    \n    content.appendChild(createNav());   \n    content.appendChild(createButtons());\n    content.appendChild(tabContent);\n    content.appendChild(createFooter());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant/./src/mainLoad.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction setBtnActive(id) {\n    const activeBtn = document.querySelector('.tab.active');\n    if (activeBtn) activeBtn.classList.remove('active');\n  \n    const homeBtn = document.getElementById(id);\n    homeBtn.classList.add('active');\n}\n\nfunction makePizza(name, sourceImage, description, price) {\n    const dish = document.createElement('div');\n\n    const foodName = document.createElement('h2');\n    foodName.textContent = name;\n\n    const img = document.createElement('img');\n    img.setAttribute('src', sourceImage);\n\n    const foodInfo = document.createElement('div');\n\n    const foodDescription = document.createElement('p');\n    foodDescription.textContent = description;\n\n    const foodPrice = document.createElement('p');\n    foodPrice.textContent = price;\n\n    foodInfo.appendChild(foodDescription);\n    foodInfo.appendChild(foodPrice);\n\n    dish.appendChild(foodName);\n    dish.appendChild(img);\n    dish.appendChild(foodInfo);\n\n    return dish;\n}\n\nfunction loadMenu() {\n    const tabContent = document.getElementById('tab-content');\n    const menuContent = document.createElement('div');\n    menuContent.setAttribute('class', 'menu-content');\n\n    tabContent.textContent = ''\n\n    setBtnActive('menu');\n\n    const pizzas = [\n        makePizza(\n            'Pizza Pepperoni',\n            'https://www.davesamericanfood.com/wp-content/uploads/2020/04/pepperoni-pizza-scaled.jpg',\n            'Tomato sauce, Mozzarella, Pepperoni',\n            '4.99'\n        ),\n        makePizza(\n            'Pizza Margherita',\n            'https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg',\n            'Tomato sauce, Mozzarella, Fresh basil',\n            '3.99'\n        ),\n        makePizza(\n            'Pizza Frutti di Mare',\n            'https://cdn.tasteatlas.com/images/dishes/2475b8aa94c1463dbe9dc17e0f38a063.jpg?mw=1300',\n            'Tomato sauce, Shrimps, Moussels, Squid',\n            '6.99'\n        ),\n        makePizza(\n            'Pizza Sausage',\n            'https://healthyschoolrecipes.com/wp-content/uploads/2020/10/sausage-onion-pizza-scaled.jpg',\n            'Tomato sauce, Mozzarella, Sausages',\n            '5.99'\n        ),\n    ]\n    \n    pizzas.forEach((pizza) => {\n        pizza.setAttribute('class', 'menu-item');\n        menuContent.appendChild(pizza);\n    })\n\n    tabContent.appendChild(menuContent)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
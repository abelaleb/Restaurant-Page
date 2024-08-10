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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContact)\n/* harmony export */ });\nfunction createContact() {\n  const content = document.getElementById(\"content\");\n  content.style.backgroundImage = \"url('../src/images/Backgroundpattern.png')\";\n  content.style.textAlign = \"center\";\n  content.style.fontSize = \"1.3rem\";\n  content.style.padding = \"2rem\";\n  content.style.display = \"flex\";\n  content.style.flexDirection = \"column\";\n  content.style.gap = \"1rem\";\n\n  const headline = document.createElement(\"h1\");\n  headline.textContent = \"About Us\";\n  content.appendChild(headline);\n\n  const headlinedescription = document.createElement(\"p\");\n  headlinedescription.textContent = `Welcome to Remy's, a Parisian gem where the art of cooking shines. Inspired by the story of a determined rat chef, our restaurant offers a delightful dining experience with passion and creativity at its core.`;\n  content.appendChild(headlinedescription);\n\n  const storyTitle = document.createElement(\"h2\");\n  storyTitle.textContent = \"Our Story\";\n  content.appendChild(storyTitle);\n\n  const storyDesc = document.createElement(\"p\");\n  storyDesc.textContent = `Remy's started with a little rat’s big dreams in Paris. From humble beginnings, Remy proved anyone can cook. Today, we continue his legacy with a blend of traditional and modern French cuisine.`;\n  content.appendChild(storyDesc);\n\n  const philosophyTitle = document.createElement(\"h2\");\n  philosophyTitle.textContent = \"Our Philosophy\";\n  content.appendChild(philosophyTitle);\n\n  const philosophyDesc = document.createElement(\"p\");\n  philosophyDesc.textContent = `We believe great food brings people together. Cooking is an art, and we aim to create memorable experiences with our inventive French dishes.`;\n  content.appendChild(philosophyDesc);\n\n  const experienceTitle = document.createElement(\"h2\");\n  experienceTitle.textContent = \"The Experience\";\n  content.appendChild(experienceTitle);\n\n  const experienceDesc = document.createElement(\"p\");\n  experienceDesc.textContent = `Dining at Remy's is an adventure. Enjoy bold flavors and stunning presentations in a setting where each dish tells a story.`;\n  content.appendChild(experienceDesc);\n\n  const joinUsTitle = document.createElement(\"h2\");\n  joinUsTitle.textContent = \"Join Us\";\n  content.appendChild(joinUsTitle);\n\n  const joinUsDesc = document.createElement(\"p\");\n  joinUsDesc.textContent = `Join us for a culinary journey at Remy's. Share in our passion for great food and experience the magic of French cuisine. Bon appétit!`;\n  content.appendChild(joinUsDesc);\n}\n\n\n//# sourceURL=webpack://y/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHomepage)\n/* harmony export */ });\nfunction createHomepage() {\n  const content = document.getElementById(\"content\");\n  content.style.fontSize = \"1.25rem\";\n  content.style.textAlign = \"center\";\n  content.style.backgroundImage = 'url(\"../src/images/Backgroundpattern.png\")';\n\n  const headline = document.createElement(\"h1\");\n  headline.textContent = \"Remy's\";\n  headline.style.fontSize = \"5rem\";\n\n  const main = document.createElement(\"div\");\n  main.textContent = `Immerse yourself in a culinary masterpiece. Our restaurant is renowned for its exquisite cuisine and impeccable ambiance. Each dish is a labor of love, crafted with the finest ingredients and presented with artistic flair. \nWhether you're celebrating a special occasion or simply seeking a luxurious escape, our restaurant is the perfect destination.`;\n  main.style.display = \"flex\";\n  main.style.flexDirection = \"column\";\n  main.style.justifyContent = \"center\";\n  main.style.alignItems = \"center\";\n  main.style.padding = \".5rem\";\n  main.style.gap = \"1rem\";\n\n  const image = document.createElement(\"div\");\n  image.style.backgroundImage = 'url(\"../src/images/Ratatouille.jpg\")';\n  image.style.backgroundSize = \"cover\";\n  image.style.backgroundPosition = \"end\";\n  image.style.backgroundRepeat = \"no-repeat\";\n  image.style.minHeight = \"60vh\";\n  image.style.minWidth = \"80vh\";\n\n  const description = document.createElement(\"p\");\n  description.textContent = `Av. Gustave Eiffel, 75007 Paris, France`;\n  description.style.margin = \".5rem\"\n\n\n  main.append(image, description);\n\n  content.append(headline, main);\n}\n\n\n//# sourceURL=webpack://y/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\nconsole.log(\"Webpack is working.\");\nfunction clearContent() {\n  const content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n}\nfunction loadHome() {\n  clearContent();\n  (0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\nfunction loadContact() {\n  clearContent();\n  (0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\nfunction loadMenu() {\n  clearContent();\n  (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\nfunction setUpEventListeners() {\n  document\n    .querySelector(\"button:nth-child(1)\")\n    .addEventListener(\"click\", loadHome);\n  document\n    .querySelector(\"button:nth-child(2)\")\n    .addEventListener(\"click\", loadMenu);\n  document\n    .querySelector(\"button:nth-child(3)\")\n    .addEventListener(\"click\", loadContact);\n}\nsetUpEventListeners();\nfunction initialize() {\n  document.addEventListener(\"DOMContentLoaded\", () => {\n    setUpEventListeners();\n    loadHome();\n  });\n}\ninitialize();\n\n\n//# sourceURL=webpack://y/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu() {\n  const content = document.getElementById(\"content\");\n  content.style.textAlign = \"center\";\n  content.style.backgroundImage = \"url('../src/images/Backgroundpattern.png')\";\n  content.style.backgroundImage = \"cover\"\n\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"Remy's: A Culinary Adventure\";\n  heading.style.marginTop = \"20px\";\n  content.appendChild(heading);\n\n  const menuContainer = document.createElement(\"div\");\n  menuContainer.classList.add(\"menu-container\");\n  content.appendChild(menuContainer);\n\n  const sections = [\n    { id: \"appetizers\", title: \"Appetizers\" },\n    { id: \"main-courses\", title: \"Main Courses\" },\n    { id: \"sides\", title: \"Sides\" },\n    { id: \"desserts\", title: \"Desserts\" },\n  ];\n\n  sections.forEach((section) => {\n    const sectionTitle = document.createElement(\"h2\");\n    sectionTitle.textContent = section.title;\n    sectionTitle.style.fontFamily = \"Georgia, serif\";\n    sectionTitle.style.marginTop = \"30px\";\n    menuContainer.appendChild(sectionTitle);\n\n    const sectionDiv = document.createElement(\"div\");\n    sectionDiv.id = section.id;\n    menuContainer.appendChild(sectionDiv);\n  });\n  const menuItems = [\n    {\n      name: \"Remy's Ratatouille\",\n      description:\n        \"A classic Provençal dish featuring a medley of roasted summer vegetables, slow-cooked to perfection.\",\n      image: \"../src/images/Ratatouille.jpg\",\n      section: \"appetizers\",\n    },\n    {\n      name: \"Linguini with White Truffles\",\n      description:\n        \"Delicate pasta tossed with a rich truffle cream sauce, a nod to Remy's love for fine dining.\",\n      image: \"../src/images/linguini.jpeg\",\n      section: \"appetizers\",\n    },\n    {\n      name: \"Escargot Bourguignonne\",\n      description:\n        \"A French classic, these tender snails are bathed in a garlic and herb butter sauce.\",\n      image: \"../src/images/Escargot Bourguignonne.jpg\",\n      section: \"appetizers\",\n    },\n    {\n      name: \"Le Chef's Surprise\",\n      description:\n        \"A daily changing special inspired by the freshest ingredients, showcasing the chef's creativity.\",\n      image: \"../src/images/Almas caviar.jpg\",\n      section: \"main-courses\",\n    },\n    {\n      name: \"Confit de Canard\",\n      description:\n        \"Crispy duck leg served with a sweet and tangy orange sauce, a nod to French culinary tradition.\",\n      image: \"../src/images/Confit de Canard.jpg\",\n      section: \"main-courses\",\n    },\n    {\n      name: \"Roasted Lamb with Herbs de Provence\",\n      description:\n        \"Tender lamb slow-roasted with aromatic herbs, a true taste of the French countryside.\",\n      image: \"../src/images/Roasted Lamb with Herbs de Provence.jpg\",\n      section: \"main-courses\",\n    },\n    {\n      name: \"Pommes Frites\",\n      description:\n        \"Classic French fries, crispy on the outside, fluffy on the inside.\",\n      image: \"../src/images/Pommes Frites.jpg\",\n      section: \"sides\",\n    },\n    {\n      name: \"Ratatouille Gratin\",\n      description:\n        \"A hearty baked version of the classic dish, topped with a golden cheese crust.\",\n      image: \"../src/images/Ratatouille Gratin.jpg\",\n      section: \"sides\",\n    },\n    {\n      name: \"Green Beans Almondine\",\n      description:\n        \"A simple yet elegant side dish, featuring fresh green beans with toasted almonds.\",\n      image: \"../src/images/Green Beans Almondine.jpg\",\n      section: \"sides\",\n    },\n    {\n      name: \"Tarte Tatin\",\n      description:\n        \"A caramelized upside-down apple tart, a French dessert classic.\",\n      image: \"../src/images/Tarte Tatin.jpg\",\n      section: \"desserts\",\n    },\n    {\n      name: \"Crème Brûlée\",\n      description: \"A rich custard topped with a caramelized sugar crust.\",\n      image: \"../src/images//Crème Brûlée.jpg\",\n      section: \"desserts\",\n    },\n    {\n      name: \"Chocolate Soufflé\",\n      description:\n        \"A decadent dessert, light and airy with a molten chocolate center.\",\n      image: \"../src/images/Chocolate Soufflé.jpg\",\n      section: \"desserts\",\n    },\n  ];\n  menuItems.forEach((item) => {\n    Menu(item.name, item.description, item.image, item.section);\n  });\n  function Menu(name, description, image, menuSectionId) {\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menu-item\");\n    menuItem.style.marginBottom = \"20px\";\n    menuItem.style.position = \"relative\";\n    menuItem.style.overflow = \"hidden\";\n\n    const imageElement = document.createElement(\"img\");\n    imageElement.src = image;\n    imageElement.alt = name;\n    imageElement.style.width = \"50%\";\n    imageElement.style.height = \"400px\";\n    imageElement.style.objectFit = \"cover\";\n    imageElement.style.borderRadius = \"10px\";\n    imageElement.style.transition = \"transform 0.3s ease-in-out\";\n    menuItem.appendChild(imageElement);\n\n    const descriptionElement = document.createElement(\"div\");\n    descriptionElement.textContent = description;\n    descriptionElement.style.position = \"absolute\";\n    descriptionElement.style.bottom = \"10%\";\n    descriptionElement.style.left = \"25%\";\n    descriptionElement.style.width = \"calc(50% - 20px)\";\n    descriptionElement.style.padding = \"10px\";\n    descriptionElement.style.backgroundColor = \"rgba(0, 0, 0, 0.6)\";\n    descriptionElement.style.color = \"white\";\n    descriptionElement.style.fontSize = \"14px\";\n    descriptionElement.style.borderRadius = \"10px\";\n    descriptionElement.style.opacity = \"0\"; // Start with hidden description\n    descriptionElement.style.transition = \"opacity 0.3s ease-in-out\"; // Transition effect\n\n    menuItem.appendChild(descriptionElement);\n\n    menuItem.addEventListener(\"mouseover\", () => {\n      imageElement.style.transform = \"scale(1.05)\";\n      descriptionElement.style.opacity = \"1\"; // Show description on hover\n    });\n\n    menuItem.addEventListener(\"mouseout\", () => {\n      imageElement.style.transform = \"scale(1)\";\n      descriptionElement.style.opacity = \"0\"; // Hide description when not hovering\n    });\n\n    const menuSection = document.getElementById(menuSectionId);\n    menuSection.appendChild(menuItem);\n  }\n}\n\n\n//# sourceURL=webpack://y/./src/menu.js?");

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
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/HermeneusOne-Regular.otf */ \"./src/Fonts/HermeneusOne-Regular.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/Lemon.ttf */ \"./src/Fonts/Lemon.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  line-height: 1.5;\n}\n:root {\n  --clr-1: #ffffff;\n  --clr-2: #d7eefa;\n  --clr-3: #91a0a8;\n  --clr-4: #6e7980;\n  --clr-5: #afc2cc;\n  --clr-6: #4b5257;\n  --border-radius: 8px;\n  --spacing-xs: 5px;\n  --spacing-sm: 10px;\n  --spacing-md: 15px;\n  --spacing-lg: 20px;\n  --spacing-xl: 40px;\n  --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n@font-face {\n  font-family: \"Title\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n@font-face {\n  font-family: \"body\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\nbody {\n  font-family: \"body\";\n\n  display: grid;\n  flex-direction: column;\n}\nnav {\n  font-family: \"Title\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: .5rem;\n  gap: 3rem;\n  height: 40px;\n  background-color: var(--clr-1);\n}\nimg {\n  width: 50%;\n}\n#content {\n  min-height: 100vh;\n  color: var(--clr-6);\n}\nbutton {\n  background-color: var(--clr-2);\n  border-width: 0;\n  box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0;\n  color: var(--clr-6);\n  cursor: pointer;\n  display: inline-block;\n  font-family: Arial, sans-serif;\n  font-size: 1.3rem;\n  height: 2rem;\n  padding: 0 25px;\n  transition: all 200ms;\n}\nbutton:hover {\n  background-color: var(--clr-5);\n  transform: scale(1.05);\n}\n\n.footer {\n  font-size: 1.1rem;\n  background-color: var(--clr-2);\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  padding: .3rem;\n}\n\n.fa-github {\n  font-size: 24px;\n  color: var(--clr-6);\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://y/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://y/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://y/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://y/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://y/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nfunction clearContent() {\n  const content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n}\nfunction loadHome() {\n  clearContent();\n  (0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\nfunction loadContact() {\n  clearContent();\n  (0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\nfunction loadMenu() {\n  clearContent();\n  (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\nfunction setUpEventListeners() {\n  document\n    .querySelector(\"button:nth-child(1)\")\n    .addEventListener(\"click\", loadHome);\n  document\n    .querySelector(\"button:nth-child(2)\")\n    .addEventListener(\"click\", loadMenu);\n  document\n    .querySelector(\"button:nth-child(3)\")\n    .addEventListener(\"click\", loadContact);\n}\nsetUpEventListeners();\nfunction initialize() {\n  document.addEventListener(\"DOMContentLoaded\", () => {\n    setUpEventListeners();\n    loadHome();\n  });\n}\ninitialize();\n\n\n//# sourceURL=webpack://y/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _images_Almas_caviar_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Almas caviar.jpg */ \"./src/images/Almas caviar.jpg\");\n/* harmony import */ var _images_Backgroundpattern_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Backgroundpattern.png */ \"./src/images/Backgroundpattern.png\");\n/* harmony import */ var _images_Chocolate_Souffl_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Chocolate Soufflé.jpg */ \"./src/images/Chocolate Soufflé.jpg\");\n/* harmony import */ var _images_Confit_de_Canard_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/Confit de Canard.jpg */ \"./src/images/Confit de Canard.jpg\");\n/* harmony import */ var _images_Cr_me_Br_l_e_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/Crème Brûlée.jpg */ \"./src/images/Crème Brûlée.jpg\");\n/* harmony import */ var _images_Escargot_Bourguignonne_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/Escargot Bourguignonne.jpg */ \"./src/images/Escargot Bourguignonne.jpg\");\n/* harmony import */ var _images_Green_Beans_Almondine_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/Green Beans Almondine.jpg */ \"./src/images/Green Beans Almondine.jpg\");\n/* harmony import */ var _images_linguini_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/linguini.jpeg */ \"./src/images/linguini.jpeg\");\n/* harmony import */ var _images_Pommes_Frites_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/Pommes Frites.jpg */ \"./src/images/Pommes Frites.jpg\");\n/* harmony import */ var _images_Ratatouille_Gratin_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/Ratatouille Gratin.jpg */ \"./src/images/Ratatouille Gratin.jpg\");\n/* harmony import */ var _images_Ratatouille_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/Ratatouille.jpg */ \"./src/images/Ratatouille.jpg\");\n/* harmony import */ var _images_Roasted_Lamb_with_Herbs_de_Provence_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/Roasted Lamb with Herbs de Provence.jpg */ \"./src/images/Roasted Lamb with Herbs de Provence.jpg\");\n/* harmony import */ var _images_Tarte_Tatin_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/Tarte Tatin.jpg */ \"./src/images/Tarte Tatin.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction createMenu() {\n  const content = document.getElementById(\"content\");\n  content.style.textAlign = \"center\";\n  content.style.backgroundImage = _images_Backgroundpattern_png__WEBPACK_IMPORTED_MODULE_1__;\n  content.style.backgroundImage = \"cover\";\n\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"Remy's: A Culinary Adventure\";\n  heading.style.marginTop = \"20px\";\n  content.appendChild(heading);\n\n  const menuContainer = document.createElement(\"div\");\n  menuContainer.classList.add(\"menu-container\");\n  content.appendChild(menuContainer);\n\n  const sections = [\n    { id: \"appetizers\", title: \"Appetizers\" },\n    { id: \"main-courses\", title: \"Main Courses\" },\n    { id: \"sides\", title: \"Sides\" },\n    { id: \"desserts\", title: \"Desserts\" },\n  ];\n\n  sections.forEach((section) => {\n    const sectionTitle = document.createElement(\"h2\");\n    sectionTitle.textContent = section.title;\n    sectionTitle.style.fontFamily = \"Georgia, serif\";\n    sectionTitle.style.marginTop = \"30px\";\n    menuContainer.appendChild(sectionTitle);\n\n    const sectionDiv = document.createElement(\"div\");\n    sectionDiv.id = section.id;\n    menuContainer.appendChild(sectionDiv);\n  });\n  const menuItems = [\n    {\n      name: \"Remy's Ratatouille\",\n      description:\n        \"A classic Provençal dish featuring a medley of roasted summer vegetables, slow-cooked to perfection.\",\n      image: _images_Ratatouille_jpg__WEBPACK_IMPORTED_MODULE_10__,\n      section: \"appetizers\",\n    },\n    {\n      name: \"Linguini with White Truffles\",\n      description:\n        \"Delicate pasta tossed with a rich truffle cream sauce, a nod to Remy's love for fine dining.\",\n      image: _images_linguini_jpeg__WEBPACK_IMPORTED_MODULE_7__,\n      section: \"appetizers\",\n    },\n    {\n      name: \"Escargot Bourguignonne\",\n      description:\n        \"A French classic, these tender snails are bathed in a garlic and herb butter sauce.\",\n      image: _images_Escargot_Bourguignonne_jpg__WEBPACK_IMPORTED_MODULE_5__,\n      section: \"appetizers\",\n    },\n    {\n      name: \"Le Chef's Surprise\",\n      description:\n        \"A daily changing special inspired by the freshest ingredients, showcasing the chef's creativity.\",\n      image: _images_Almas_caviar_jpg__WEBPACK_IMPORTED_MODULE_0__,\n      section: \"main-courses\",\n    },\n    {\n      name: \"Confit de Canard\",\n      description:\n        \"Crispy duck leg served with a sweet and tangy orange sauce, a nod to French culinary tradition.\",\n      image: _images_Confit_de_Canard_jpg__WEBPACK_IMPORTED_MODULE_3__,\n      section: \"main-courses\",\n    },\n    {\n      name: \"Roasted Lamb with Herbs de Provence\",\n      description:\n        \"Tender lamb slow-roasted with aromatic herbs, a true taste of the French countryside.\",\n      image: _images_Roasted_Lamb_with_Herbs_de_Provence_jpg__WEBPACK_IMPORTED_MODULE_11__,\n      section: \"main-courses\",\n    },\n    {\n      name: \"Pommes Frites\",\n      description:\n        \"Classic French fries, crispy on the outside, fluffy on the inside.\",\n      image: _images_Pommes_Frites_jpg__WEBPACK_IMPORTED_MODULE_8__,\n      section: \"sides\",\n    },\n    {\n      name: \"Ratatouille Gratin\",\n      description:\n        \"A hearty baked version of the classic dish, topped with a golden cheese crust.\",\n      image: _images_Ratatouille_Gratin_jpg__WEBPACK_IMPORTED_MODULE_9__,\n      section: \"sides\",\n    },\n    {\n      name: \"Green Beans Almondine\",\n      description:\n        \"A simple yet elegant side dish, featuring fresh green beans with toasted almonds.\",\n      image: _images_Green_Beans_Almondine_jpg__WEBPACK_IMPORTED_MODULE_6__,\n      section: \"sides\",\n    },\n    {\n      name: \"Tarte Tatin\",\n      description:\n        \"A caramelized upside-down apple tart, a French dessert classic.\",\n      image: _images_Tarte_Tatin_jpg__WEBPACK_IMPORTED_MODULE_12__,\n      section: \"desserts\",\n    },\n    {\n      name: \"Crème Brûlée\",\n      description: \"A rich custard topped with a caramelized sugar crust.\",\n      image: _images_Cr_me_Br_l_e_jpg__WEBPACK_IMPORTED_MODULE_4__,\n      section: \"desserts\",\n    },\n    {\n      name: \"Chocolate Soufflé\",\n      description:\n        \"A decadent dessert, light and airy with a molten chocolate center.\",\n      image: _images_Chocolate_Souffl_jpg__WEBPACK_IMPORTED_MODULE_2__,\n      section: \"desserts\",\n    },\n  ];\n  menuItems.forEach((item) => {\n    Menu(item.name, item.description, item.image, item.section);\n  });\n  function Menu(name, description, image, menuSectionId) {\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menu-item\");\n    menuItem.style.marginBottom = \"20px\";\n    menuItem.style.position = \"relative\";\n    menuItem.style.overflow = \"hidden\";\n\n    const imageElement = document.createElement(\"img\");\n    imageElement.src = image;\n    imageElement.alt = name;\n    imageElement.style.width = \"50%\";\n    imageElement.style.height = \"400px\";\n    imageElement.style.objectFit = \"cover\";\n    imageElement.style.borderRadius = \"10px\";\n    imageElement.style.transition = \"transform 0.3s ease-in-out\";\n    menuItem.appendChild(imageElement);\n\n    const descriptionElement = document.createElement(\"div\");\n    descriptionElement.textContent = description;\n    descriptionElement.style.position = \"absolute\";\n    descriptionElement.style.bottom = \"10%\";\n    descriptionElement.style.left = \"25%\";\n    descriptionElement.style.width = \"calc(50% - 20px)\";\n    descriptionElement.style.padding = \"10px\";\n    descriptionElement.style.backgroundColor = \"rgba(0, 0, 0, 0.6)\";\n    descriptionElement.style.color = \"white\";\n    descriptionElement.style.fontSize = \"14px\";\n    descriptionElement.style.borderRadius = \"10px\";\n    descriptionElement.style.opacity = \"0\"; // Start with hidden description\n    descriptionElement.style.transition = \"opacity 0.3s ease-in-out\"; // Transition effect\n\n    menuItem.appendChild(descriptionElement);\n\n    menuItem.addEventListener(\"mouseover\", () => {\n      imageElement.style.transform = \"scale(1.05)\";\n      descriptionElement.style.opacity = \"1\"; // Show description on hover\n    });\n\n    menuItem.addEventListener(\"mouseout\", () => {\n      imageElement.style.transform = \"scale(1)\";\n      descriptionElement.style.opacity = \"0\"; // Hide description when not hovering\n    });\n\n    const menuSection = document.getElementById(menuSectionId);\n    menuSection.appendChild(menuItem);\n  }\n}\n\n\n//# sourceURL=webpack://y/./src/menu.js?");

/***/ }),

/***/ "./src/Fonts/HermeneusOne-Regular.otf":
/*!********************************************!*\
  !*** ./src/Fonts/HermeneusOne-Regular.otf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"02666af38bab89092fbc.otf\";\n\n//# sourceURL=webpack://y/./src/Fonts/HermeneusOne-Regular.otf?");

/***/ }),

/***/ "./src/Fonts/Lemon.ttf":
/*!*****************************!*\
  !*** ./src/Fonts/Lemon.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"388ce7e72e1277b306d5.ttf\";\n\n//# sourceURL=webpack://y/./src/Fonts/Lemon.ttf?");

/***/ }),

/***/ "./src/images/Almas caviar.jpg":
/*!*************************************!*\
  !*** ./src/images/Almas caviar.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ac4d61b3bd0c3dbc5351.jpg\";\n\n//# sourceURL=webpack://y/./src/images/Almas_caviar.jpg?");

/***/ }),

/***/ "./src/images/Backgroundpattern.png":
/*!******************************************!*\
  !*** ./src/images/Backgroundpattern.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7d3728e7615c0728ad3a.png\";\n\n//# sourceURL=webpack://y/./src/images/Backgroundpattern.png?");

/***/ }),

/***/ "./src/images/Chocolate Soufflé.jpg":
/*!******************************************!*\
  !*** ./src/images/Chocolate Soufflé.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f93a39792897de1b8033.jpg\";\n\n//# sourceURL=webpack://y/./src/images/Chocolate_Souffl%C3%A9.jpg?");

/***/ }),

/***/ "./src/images/Confit de Canard.jpg":
/*!*****************************************!*\
  !*** ./src/images/Confit de Canard.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"903249b43da1beaa0ea3.jpg\";\n\n//# sourceURL=webpack://y/./src/images/Confit_de_Canard.jpg?");

/***/ }),

/***/ "./src/images/Crème Brûlée.jpg":
/*!*************************************!*\
  !*** ./src/images/Crème Brûlée.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3130f22dfd561dc4791e.jpg\";\n\n//# sourceURL=webpack://y/./src/images/Cr%C3%A8me_Br%C3%BBl%C3%A9e.jpg?");

/***/ }),

/***/ "./src/images/Escargot Bourguignonne.jpg":
/*!***********************************************!*\
  !*** ./src/images/Escargot Bourguignonne.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"87af058e7edc46a87870.jpg\";\n\n//# sourceURL=webpack://y/./src/images/Escargot_Bourguignonne.jpg?");

/***/ }),

/***/ "./src/images/Green Beans Almondine.jpg":
/*!**********************************************!*\
  !*** ./src/images/Green Beans Almondine.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6345e64c59414d171d23.jpg\";\n\n//# sourceURL=webpack://y/./src/images/Green_Beans_Almondine.jpg?");

/***/ }),

/***/ "./src/images/Pommes Frites.jpg":
/*!**************************************!*\
  !*** ./src/images/Pommes Frites.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6699eda1885b05c5ff28.jpg\";\n\n//# sourceURL=webpack://y/./src/images/Pommes_Frites.jpg?");

/***/ }),

/***/ "./src/images/Ratatouille Gratin.jpg":
/*!*******************************************!*\
  !*** ./src/images/Ratatouille Gratin.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"990266a78f591f7c4459.jpg\";\n\n//# sourceURL=webpack://y/./src/images/Ratatouille_Gratin.jpg?");

/***/ }),

/***/ "./src/images/Ratatouille.jpg":
/*!************************************!*\
  !*** ./src/images/Ratatouille.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"106ab8dc159f07b638c7.jpg\";\n\n//# sourceURL=webpack://y/./src/images/Ratatouille.jpg?");

/***/ }),

/***/ "./src/images/Roasted Lamb with Herbs de Provence.jpg":
/*!************************************************************!*\
  !*** ./src/images/Roasted Lamb with Herbs de Provence.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cca5ba3bb6696d25209a.jpg\";\n\n//# sourceURL=webpack://y/./src/images/Roasted_Lamb_with_Herbs_de_Provence.jpg?");

/***/ }),

/***/ "./src/images/Tarte Tatin.jpg":
/*!************************************!*\
  !*** ./src/images/Tarte Tatin.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"12fe823e1757c5383288.jpg\";\n\n//# sourceURL=webpack://y/./src/images/Tarte_Tatin.jpg?");

/***/ }),

/***/ "./src/images/linguini.jpeg":
/*!**********************************!*\
  !*** ./src/images/linguini.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"818967aec46103fd7474.jpeg\";\n\n//# sourceURL=webpack://y/./src/images/linguini.jpeg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
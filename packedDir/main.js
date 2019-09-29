/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/head.css":
/*!****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/head.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".change {\\n    flex-direction: row;\\n    font-family: 'Roboto', sans-serif;\\n    font-size: 15px;\\n    color: #000000;\\n    font-weight: 300;\\n    text-decoration: none;\\n    float: right;\\n}\\n.change:first-child{\\n    float: left;\\n    padding-left: 5px;\\n}\\n.change:hover{\\n    text-decoration: underline;\\n\\n\\n}\\na.change{\\n    margin-top: 18px;\\n    margin-right: 10px;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./styles/head.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/main.css":
/*!****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/main.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./profile.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/profile.css\"), \"\");\nexports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./signup.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/signup.css\"), \"\");\nexports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./mainPage.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/mainPage.css\"), \"\");\nexports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./head.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/head.css\"), \"\");\n// Module\nexports.push([module.i, \"body {\\n    font: 1em sans-serif;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./styles/main.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/mainPage.css":
/*!********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/mainPage.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".text{\\n    padding: 50px;\\n    position: fixed; top: 50%; left: 50%;\\n    -webkit-transform: translate(-50%, -50%);\\n    -ms-transform: translate(-50%, -50%);\\n    transform: translate(-50%, -50%);\\n    font-family: \\\"Roboto\\\", sans-serif;\\n    text-transform: uppercase;\\n}\\n\\n.stage {\\n    display: flex;\\n    height: 230px;\\n    width: 100%;\\n}\\n.box {\\n    align-self: flex-end;\\n    animation-duration: 2s;\\n    animation-iteration-count: infinite;\\n    height: 20px;\\n    margin: 0 auto 0 auto;\\n    transform-origin: bottom;\\n    width: 20px;\\n\\n}\\n\\n.bounce-2 {\\n    animation: bounce-2 30s linear infinite;\\n}\\n@keyframes bounce-2 {\\n    from { transform:rotate(0deg); }\\n    to { transform:rotate(-360deg); }\\n\\n}\\n\\n\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./styles/mainPage.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/profile.css":
/*!*******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/profile.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);\", \"\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);\", \"\"]);\n// Module\nexports.push([module.i, \"header{\\n    background-color: #ffffff;\\n    height: 50px ;\\n}\\n\\n.rounded-circle{\\n    border: 1px solid #2dc68b;\\n    margin-top: 10px;\\n    border-radius: 50%;\\n    height: 80px;\\n    width: 80px;\\n    object-position: center center;\\n    object-fit: fill;\\n    box-sizing: border-box;\\n}\\n.rounded-circle-1{\\n    border: 2px solid #2dc68b;\\n    margin-top: 10px;\\n    border-radius: 50%;\\n    height: 200px;\\n    width: 200px;\\n    object-position: center center;\\n    object-fit: fill;\\n    box-sizing: border-box;\\n}\\n#avatar:hover{\\n      border: 3px solid #279d6e;\\n\\n  }\\n.logo{\\n    object-position: center center;\\n    object-fit: fill;\\n    height: 50px;\\n    width: 80px;\\n}\\n.container{\\n    background-color: rgb(255, 255, 255);\\n    display: flex;\\n    flex-wrap: nowrap;\\n    align-items: stretch;\\n    height: 90vh;\\n}\\n.msg-count{\\n    background-color: #24b880;\\n    text-align: center;\\n    margin: 0 0 0 5px;\\n    border-radius: 50px;\\n    height: 25px;\\n    width: 25px;\\n}\\n.row {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: nowrap;\\n    width: 100%;\\n}\\n.chat-menu{\\n    height: 30px;\\n    background-color: rgba(197, 197, 197, 0.07);\\n    box-sizing: border-box;\\n    border-top: 1px solid rgba(197, 197, 197, 0.81);\\n    border-left: 1px solid rgba(197, 197, 197, 0.81);\\n\\n}\\n.name-row{\\n    margin: 100px 0 0 20px;\\n    height: 46px;\\n    font-family: 'Montserrat',  sans-serif;\\n    font-size: 36px;\\n    color: #000000;\\n    font-weight: 400;\\n\\n}\\n.params{\\n    flex-direction: row;\\n}\\n\\n.nick-row{\\n    margin: 30px 0 0 20px;\\n    height: 30px;\\n    font-family: 'Roboto',  sans-serif;\\n    font-size: 24px;\\n    color: black;\\n    font-weight: 200;\\n}\\n\\n.profile-pic{\\n    height: 300px;\\n    flex-direction: row;\\n}\\n.profile-pic-row{\\n    height:120px;\\n}\\n.edit-row{\\n    display: flex;\\n    justify-content: center;\\n    height: 60px;\\n}\\n\\n.name{\\n    margin: 0 0 20px 0;\\n    align-self: stretch;\\n    justify-content:flex-start;\\n    height: 40px;\\n}\\n\\n.msg {\\n    box-sizing: border-box;\\n    background-color: white;\\n    height: 100px;\\n    box-shadow: 0 0 8px rgba(0,0,0,0.2); /* Параметры тени */\\n}\\n.msg:hover{\\n    box-shadow: 0 0 8px rgba(0,0,0,0.5); /* Параметры тени */\\n\\n}\\n\\n#message{\\n    justify-content:flex-start;\\n    height: 50px;\\n}\\n\\n.pic-ch{\\n    width:70px;\\n    display: flex;\\n    justify-content: left;\\n    height: 40px;\\n    margin: 0 10px 0 10px;\\n}\\n\\n.column{\\n    margin: 0 0 0 0;\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    height: 100%;\\n\\n}\\n.chat-msg{\\n    height: 100%;\\n    align-items: stretch;\\n    justify-content: stretch;\\n}\\n.header-icon{\\n    overflow: hidden;\\n    margin: 0 0 0 30px;\\n}\\n.free-space {\\n    width: 1500px;;\\n}\\n.log-out{\\n    flex-direction: row-reverse;\\n    margin: 20px 20px 0 0;\\n    width: 40%;\\n}\\n.settings{\\n    margin: 0 0 0 60px;\\n    flex-direction: column;\\n    align-items: stretch;\\n}\\n.for-msg{\\n    flex-direction: column;\\n    width: 80%;\\n}\\n.for-img{\\n    flex-direction: column;\\n    margin: 0 0 0 20px;\\n    width: 20%\\n}\\n.for-msg-1{\\n    height: 150px;\\n    justify-content: center;\\n    flex-direction: column;\\n    width: 60%;\\n}\\n.for-img-1{\\n    flex-direction: column;\\n\\n    margin-left:100px;\\n    width: 40%;\\n}\\n.left{\\n    width: 40%;\\n}\\n.right{\\n    border-left: 1.5px solid #2dc68b;\\n    margin:auto;\\n    width: 60%;\\n}\\n.messg-text{\\n    background-color: rgba(207, 232, 223, 0.58);\\n    height: 24px;\\n    width:80%;\\n}\\n.messg-count{\\n    width:10%;\\n}\\n\\n.field{\\n    display: flex;\\n    align-items: flex-end;\\n    vertical-align: bottom;\\n    border-bottom: 1px solid #2dc68b;\\n    width: 70%;\\n    height: 50px;\\n    margin: 0 0 0 20px;\\n    font-family: 'Montserrat', sans-serif;\\n    font-size: 24px;\\n    letter-spacing: -0.2px;\\n    color: #000000;\\n    font-weight: 100;\\n    font-style: normal;\\n}\\n.sett{\\n    margin: 10px 5px 5px 5px;\\n    filter: opacity(0.7);\\n    height: 20px;\\n    width: 20px;\\n    object-position: center center;\\n    object-fit: fill;\\n}\\n.loupe{\\n    margin: 5px 10px 0 20px;\\n    filter: opacity(0.9);\\n    height: 20px;\\n    width: 20px;\\n    object-position: center center;\\n    object-fit: fill;\\n}\\n\\np.person{\\n    margin: 10px 0 0 10px;\\n    font-family: 'Roboto',  sans-serif;\\n    font-size: 20px;\\n    letter-spacing: -0.2px;\\n    word-spacing: -1px;\\n    color: #000000;\\n    font-weight: 400;\\n}\\np.mess{\\n    margin: 0 0 0 10px;\\n    font-family: 'Roboto',  sans-serif;\\n    font-size: 14px;\\n    color: #000000;\\n    font-weight: 300;\\n}\\np.mess-n{\\n    margin: 6px 0 0 0;\\n    text-align: center;\\n    font-family: 'Roboto',  sans-serif;\\n    font-size: 12px;\\n    color: #ffffff;\\n    font-weight: 500;\\n}\\n.change {\\n    display: flex;\\n    align-items: flex-end;\\n    margin: 15px 0 0 5px;\\n    flex-direction: row;\\n    font-family: 'Roboto', sans-serif;\\n    font-size: 15px;\\n    color: #000000;\\n    font-weight: 300;\\n    text-decoration: none;\\n}\\n.change-1{\\n    margin: 0px 0 0 5px;\\n    flex-direction: row;\\n    font-family: 'Roboto', sans-serif;\\n    font-size: 15px;\\n    color: #000000;\\n    font-weight: 300;\\n    text-decoration: none;\\n}\\n.change, .change-1:hover{\\n    text-decoration: underline;\\n}\\n\\n.attribute{\\n    display: flex;\\n    align-items: flex-end;\\n    width: 150px;\\n    height: 40px;\\n    text-decoration: none;\\n    margin: 5px 0 0 20px;\\n    font-family: 'Roboto', sans-serif;\\n    font-size: 20px;\\n    letter-spacing: -0.5px;\\n    color: #24b880;\\n    font-weight: 300;\\n}\\n\\n.loader {\\n    border: 16px solid #f3f3f3; /* Light grey */\\n    border-top: 16px solid #24b880; /* Blue */\\n    border-radius: 50%;\\n    width: 120px;\\n    height: 120px;\\n    margin-top: 10px;\\n    animation: spin 2s linear infinite;\\n}\\n\\n@keyframes spin {\\n    0% { transform: rotate(0deg); }\\n    100% { transform: rotate(360deg); }\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./styles/profile.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/signup.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/signup.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".log-in-form{\\n    padding: 50px;\\n    position: fixed; top: 50%; left: 50%;\\n    -webkit-transform: translate(-50%, -50%);\\n    -ms-transform: translate(-50%, -50%);\\n    transform: translate(-50%, -50%);\\n    z-index: 1;\\n    background: #FFFFFF;\\n    max-width: 360px;\\n    text-align: center;\\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\\n}\\n.input_field {\\n    font-family: \\\"Roboto\\\", sans-serif;\\n    outline: 0;\\n    border-width: 0 0 2px;\\n    border-color: #C4C4C4;\\n    width: 100%;\\n    margin: 0 0 15px;\\n    box-sizing: border-box;\\n    font-size: 18px;\\n}\\n.submit-button{\\n    padding: 5px 10px 5px 10px;\\n    font-family: \\\"Roboto\\\", sans-serif;\\n    text-transform: uppercase;\\n    outline: 0;\\n    background: #18A88E;\\n    font-style: inherit;\\n    color: white;\\n    font-weight: 500;\\n    font-size: 16px;\\n    margin-left: 236px;\\n    border-radius: 7px;\\n}\\n.back{\\n    padding: 5px 10px 5px 10px;\\n    position: fixed; top: 2%; left: 1%;\\n    font-family: \\\"Roboto\\\", sans-serif;\\n    text-transform: uppercase;\\n    outline: 0;\\n    background: #18A88E;\\n    font-style: inherit;\\n    color: white;\\n    font-weight: 500;\\n    font-size: 14px;\\n\\n\\n}\\n.name{\\n    font-weight: 700;\\n    font-size: 20px;\\n\\n    color: #18A88E;\\n\\n}\\n.title {\\n    background-color: #18A88E;\\n    padding: 40px;\\n\\n}\\n.already{\\n    font-family: \\\"Roboto\\\", sans-serif;\\n    font-size: 15px;\\n    color: #000000;\\n    font-weight: 300;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./styles/signup.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/pug-runtime/index.js":
/*!********************************************!*\
  !*** ../node_modules/pug-runtime/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  var type = typeof val;\n  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//# sourceURL=webpack:///../node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\nconst headerTemplate = __webpack_require__(/*! ./header.pug */ \"./components/Header/header.pug\");\n\n\nclass Header {\n    constructor(data = {}, parent = document.body) {\n        this._data = data;\n        this._parent = parent;\n\n    }\n\n    get data() {\n        return this._data;\n    }\n\n    set data(dataToSet) {\n        this._data = {...dataToSet};\n    }\n\n    get parent() {\n        return this._parent;\n    }\n\n    set parent(parent) {\n        this._parent = parent;\n    }\n    renderHeader(loggedIn){\n        this._parent.innerHTML = '';\n        this._data[\"login\"]=loggedIn;\n        this._parent.innerHTML = headerTemplate(this._data)\n    }\n}\n\n//# sourceURL=webpack:///./components/Header/Header.js?");

/***/ }),

/***/ "./components/Header/header.pug":
/*!**************************************!*\
  !*** ./components/Header/header.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (login) {pug_mixins[\"item\"] = pug_interp = function(title, href, section, id){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Ca\" + (\" class=\\\"change\\\"\"+pug.attr(\"href\", href, true, true)+pug.attr(\"data-section\", section, true, true)+pug.attr(\"id\", id, true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = title) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\";\n};\npug_html = pug_html + \"\\u003Cdiv class=\\\"head\\\"\\u003E\\u003Ca href=\\\"\\u002F\\\"\\u003E\\u003Cimg class=\\\"logo\\\" src=\\\"images\\u002Flogo_2.png\\\"\\u003E\\u003C\\u002Fa\\u003E\";\nif (login) {\npug_mixins[\"item\"]('log out', '', 'logout', 'logout-link');\npug_mixins[\"item\"]('profile', `/profile`, \"profile\", \"profile-link\");\n}\nelse {\npug_mixins[\"item\"]('log in', `/login`, \"login\", \"login-link\");\npug_mixins[\"item\"]('sign up', `/signup`, \"signUp\", \"signup-link\");\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";}.call(this,\"login\" in locals_for_with?locals_for_with.login:typeof login!==\"undefined\"?login:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./components/Header/header.pug?");

/***/ }),

/***/ "./components/Login/Login.js":
/*!***********************************!*\
  !*** ./components/Login/Login.js ***!
  \***********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\nconst loginTemplate = __webpack_require__(/*! ./login.pug */ \"./components/Login/login.pug\");\n\nclass Login {\n    constructor(data = {}, parent = document.body) {\n        this._data = data;\n        this._parent = parent;\n\n    }\n\n    get data() {\n        return this._data;\n    }\n\n    set data(dataToSet) {\n        this._data = {...dataToSet};\n    }\n\n    get parent() {\n        return this._parent;\n    }\n\n    set parent(parent) {\n        this._parent = parent;\n    }\n\n    renderLogin() {\n        this._parent.innerHTML = '';\n        this._parent.innerHTML = loginTemplate(this._data)\n    }\n}\n\n\n//# sourceURL=webpack:///./components/Login/Login.js?");

/***/ }),

/***/ "./components/Login/login.pug":
/*!************************************!*\
  !*** ./components/Login/login.pug ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ca class=\\\"back\\\" href=\\\"\\u002Fmenu\\\" data-section=\\\"mainPage\\\"\\u003Eback\\u003C\\u002Fa\\u003E\\u003Cform method=\\\"POST\\\" action=\\\"\\u002Flogin\\\" id=\\\"login-form\\\"\\u003E\\u003Cdiv class=\\\"log-in-form\\\"\\u003E\\u003Ch1 class=\\\"name\\\"\\u003ELog In\\u003C\\u002Fh1\\u003E\\u003Clabel for=\\\"email\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"input_field\\\" type=\\\"text\\\" id=\\\"email\\\" placeholder=\\\"email\\\" name=\\\"email\\\"\\u003E\\u003Clabel for=\\\"password\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"input_field\\\" type=\\\"password\\\" id=\\\"password\\\" placeholder=\\\"password\\\" name=\\\"password\\\"\\u003E\\u003Cbutton class=\\\"submit-button\\\" type=\\\"submit\\\"\\u003ELog in\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./components/Login/login.pug?");

/***/ }),

/***/ "./components/MainPage/MainPage.js":
/*!*****************************************!*\
  !*** ./components/MainPage/MainPage.js ***!
  \*****************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MainPageComponent\", function() { return MainPageComponent; });\nconst bodyTemplate = __webpack_require__(/*! ./body.pug */ \"./components/MainPage/body.pug\");\n\nclass MainPageComponent {\n\n    constructor(data = {}, parent = document.body) {\n        this._data = data;\n        this._parent = parent;\n\n    }\n\n    get data() {\n        return this._data;\n    }\n\n    set data(dataToSet) {\n        this._data = {...dataToSet};\n    }\n\n    get parent() {\n        return this._parent;\n    }\n\n    set parent(parent) {\n        this._parent = parent;\n    }\n\n    renderMainPage() {\n        this._parent.innerHTML += bodyTemplate(this._data)\n    }\n}\n\n\n//# sourceURL=webpack:///./components/MainPage/MainPage.js?");

/***/ }),

/***/ "./components/MainPage/body.pug":
/*!**************************************!*\
  !*** ./components/MainPage/body.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"stage\\\"\\u003E\\u003Cimg class=\\\"box bounce-2\\\" src=\\\"images\\u002Fplus.png\\\" alt=\\\"img\\\"\\u003E\\u003Cimg class=\\\"box bounce-2\\\" src=\\\"images\\u002Fsquare-root-mathematical-sign.png\\\" alt=\\\"img\\\"\\u003E\\u003Cimg class=\\\"box bounce-2\\\" src=\\\"images\\u002Ftherefore-mathematical-symbol.png\\\" alt=\\\"img\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cp class=\\\"text\\\"\\u003EWhatever work you do, you can do it in CoolSlack\\u003C\\u002Fp\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./components/MainPage/body.pug?");

/***/ }),

/***/ "./components/Profile/Profile.js":
/*!***************************************!*\
  !*** ./components/Profile/Profile.js ***!
  \***************************************/
/*! exports provided: Message, ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProfileComponent\", function() { return ProfileComponent; });\nconst profileTempl = __webpack_require__(/*! ./profile.pug */ \"./components/Profile/profile.pug\");\nconst msgTempl = __webpack_require__(/*! ./message.pug */ \"./components/Profile/message.pug\");\n\nclass Message {\n    constructor (data, parent) {\n        this._data = data;\n        this._parent = parent\n\n    }\n\n    get data () {\n        return this._data\n    }\n\n    set data (dataToSet) {\n        this._data = { ...dataToSet }\n    }\n\n    get parent () {\n        return this._parent\n    }\n\n    set parent (parent) {\n        this._parent = parent\n    }\n\n    renderMsg () {\n        return msgTempl(this._data)\n    }\n}\n\nclass ProfileComponent {\n\n    constructor (data, parent) {\n        this._data = data;\n        this._parent = parent\n\n    }\n\n    get data () {\n        return this._data\n    }\n\n    set data (dataToSet) {\n        this._data = { ...dataToSet }\n    }\n\n    get parent () {\n        return this._parent\n    }\n\n    set parent (parent) {\n        this._parent = parent\n    }\n\n\n    renderProfile () {\n        this.data[`chat`] = false;\n        this.parent.innerHTML += profileTempl(this._data);\n\n        const root = document.getElementsByClassName('chat-msg')[0];\n\n        if (this._data.chats !== undefined) {\n            for (let i = 0; i < this._data.chats.length; i++) {\n                const mess = new Message();\n                mess.data = this._data.chats[i];\n                const message = document.createElement('div');\n                message.className = 'row';\n                message.id = 'msg';\n                message.innerHTML = mess.renderMsg();\n                root.appendChild(message)\n            }\n        }\n\n        const img = document.getElementById('avatar');\n        const input = document.getElementById('file');\n        img.addEventListener('click',function () {\n            input.click()\n\n        })\n\n\n    }\n\n    hideLoader(avatar) {\n        document.getElementById(\"loader\").style.display=\"none\";\n        document.getElementById(\"avatar\").style.display=\"initial\";\n    }\n\n    showLoader(){\n        document.getElementById(\"avatar\").style.display=\"none\";\n        document.getElementById(\"loader\").style.display=\"initial\";\n\n    }\n}\n\n\n//# sourceURL=webpack:///./components/Profile/Profile.js?");

/***/ }),

/***/ "./components/Profile/message.pug":
/*!****************************************!*\
  !*** ./components/Profile/message.pug ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (lastMsg, name, number) {pug_html = pug_html + \"\\u003Cdiv class=\\\"column for-img\\\"\\u003E\\u003Cimg class=\\\"rounded-circle\\\" src=\\\"images\\u002Fsasha.jpeg\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"column for-msg\\\"\\u003E\\u003Cdiv class=\\\"row name\\\"\\u003E\\u003Cp class=\\\"person\\\"\\u003E\" + (pug.escape(null == (pug_interp = name) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"row message\\\"\\u003E\\u003Cdiv class=\\\"column messg-text\\\"\\u003E\\u003Cp class=\\\"mess\\\"\\u003E\" + (pug.escape(null == (pug_interp = lastMsg) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"column messg-count\\\"\\u003E\\u003Cdiv class=\\\"msg-count\\\"\\u003E\\u003Cp class=\\\"mess-n\\\"\\u003E\" + (pug.escape(null == (pug_interp = number) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";}.call(this,\"lastMsg\" in locals_for_with?locals_for_with.lastMsg:typeof lastMsg!==\"undefined\"?lastMsg:undefined,\"name\" in locals_for_with?locals_for_with.name:typeof name!==\"undefined\"?name:undefined,\"number\" in locals_for_with?locals_for_with.number:typeof number!==\"undefined\"?number:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./components/Profile/message.pug?");

/***/ }),

/***/ "./components/Profile/profile.pug":
/*!****************************************!*\
  !*** ./components/Profile/profile.pug ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (chat, email, fstatus, fullname, phone, username) {pug_mixins[\"field\"] = pug_interp = function(pText, fieldText, id){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cp class=\\\"attribute\\\"\\u003E\" + (pug.escape(null == (pug_interp = pText+\":\") ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003Cdiv\" + (\" class=\\\"field\\\"\"+pug.attr(\"id\", id, true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = fieldText) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"settings\"] = pug_interp = function(pText, reference){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv class=\\\"row params\\\"\\u003E\\u003Cp class=\\\"attribute\\\"\\u003E\" + (pug.escape(null == (pug_interp = pText+\"settings\") ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003Ca\" + (\" class=\\\"change\\\"\"+pug.attr(\"href\", reference, true, true)) + \"\\u003E\\u003Cimg class=\\\"sett\\\" src=\\\"images\\u002Fsettings.jpg\\\"\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\n\n\n\n\npug_html = pug_html + \"\\u003Cdiv class=\\\"container\\\"\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"column left\\\"\\u003E\\u003Cdiv class=\\\"row chat-menu\\\"\\u003E\\u003Cdiv class=\\\"column search\\\"\\u003E\\u003Cimg class=\\\"loupe\\\" src=\\\"images\\u002Floupe_2.png\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"column chat-msg\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"column right\\\"\\u003E\";\nif (chat) {\npug_html = pug_html + \"\\u003Cdiv\\u003Echat here\\u003C\\u002Fdiv\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Cdiv class=\\\"row profile-pic\\\"\\u003E\\u003Cdiv class=\\\"column for-img-1\\\"\\u003E\\u003Cdiv class=\\\"row profile-pic-row\\\"\\u003E\\u003Cdiv class=\\\"loader\\\" id=\\\"loader\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cimg class=\\\"rounded-circle-1\\\" id=\\\"avatar\\\" src=\\\"images\\u002Fuser.jpg\\\"\\u003E\\u003Cinput id=\\\"file\\\" type=\\\"file\\\" style=\\\"display: none;\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"column for-msg-1\\\"\\u003E\\u003Cdiv class=\\\"row name-row\\\" id=\\\"fullname-setting\\\"\\u003E\" + (pug.escape(null == (pug_interp = fullname) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"row nick-row\\\" id=\\\"username-setting\\\"\\u003E\" + (pug.escape(null == (pug_interp = username) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"row edit-row\\\"\\u003E\\u003C!--div.column--\\u003E\\u003C!--        input(type='file', name='imageupload')--\\u003E\\u003C!--        input(type='submit', name='uploadimage', value='Upload Image')--\\u003E\\u003C!--+edit(\\\"name\\\", \\\"\\u002F\\\")--\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"column settings\\\"\\u003E\";\npug_mixins[\"field\"](\"status\", fstatus, \"fstatus-setting\");\npug_mixins[\"field\"](\"email\", email, \"email-setting\");\npug_mixins[\"field\"](\"phone\", phone, \"phone-setting\");\npug_mixins[\"settings\"](\"account \", \"/\");\npug_mixins[\"settings\"](\"privacy \", \"/\");\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";}.call(this,\"chat\" in locals_for_with?locals_for_with.chat:typeof chat!==\"undefined\"?chat:undefined,\"email\" in locals_for_with?locals_for_with.email:typeof email!==\"undefined\"?email:undefined,\"fstatus\" in locals_for_with?locals_for_with.fstatus:typeof fstatus!==\"undefined\"?fstatus:undefined,\"fullname\" in locals_for_with?locals_for_with.fullname:typeof fullname!==\"undefined\"?fullname:undefined,\"phone\" in locals_for_with?locals_for_with.phone:typeof phone!==\"undefined\"?phone:undefined,\"username\" in locals_for_with?locals_for_with.username:typeof username!==\"undefined\"?username:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./components/Profile/profile.pug?");

/***/ }),

/***/ "./components/Signup/Signup.js":
/*!*************************************!*\
  !*** ./components/Signup/Signup.js ***!
  \*************************************/
/*! exports provided: SignUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SignUp\", function() { return SignUp; });\nconst signupTemplate = __webpack_require__(/*! ./signup.pug */ \"./components/Signup/signup.pug\");\n\nclass SignUp{\n    constructor(data = {}, parent = document.body) {\n        this._data = data;\n        this._parent = parent;\n\n    }\n\n    get data() {\n        return this._data;\n    }\n\n    set data(dataToSet) {\n        this._data = {...dataToSet};\n    }\n\n    get parent() {\n        return this._parent;\n    }\n\n    set parent(parent) {\n        this._parent = parent;\n    }\n\n    renderSignUp() {\n        this._parent.innerHTML = '';\n        this._parent.innerHTML = signupTemplate(this._data)\n    }\n}\n\n//# sourceURL=webpack:///./components/Signup/Signup.js?");

/***/ }),

/***/ "./components/Signup/signup.pug":
/*!**************************************!*\
  !*** ./components/Signup/signup.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ca class=\\\"back\\\" href=\\\"\\u002Fmenu\\\" data-section=\\\"mainPage\\\"\\u003Eback\\u003C\\u002Fa\\u003E\\u003Cform method=\\\"POST\\\" action=\\\"\\u002Fsingup\\\" id=\\\"sign-up-form\\\"\\u003E\\u003Cdiv class=\\\"log-in-form\\\"\\u003E\\u003Ch1 class=\\\"name\\\"\\u003ESign up\\u003C\\u002Fh1\\u003E\\u003Clabel for=\\\"email\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"input_field\\\" type=\\\"text\\\" id=\\\"email\\\" placeholder=\\\"email\\\" name=\\\"email\\\"\\u003E\\u003Clabel for=\\\"password\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"input_field\\\" type=\\\"password\\\" id=\\\"password\\\" placeholder=\\\"password\\\" name=\\\"password\\\"\\u003E\\u003Clabel for=\\\"fullname\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"input_field\\\" type=\\\"text\\\" id=\\\"fullname\\\" placeholder=\\\"full name\\\" name=\\\"fullname\\\"\\u003E\\u003Cbutton class=\\\"submit-button\\\" type=\\\"submit\\\"\\u003ESign up\\u003C\\u002Fbutton\\u003E\\u003Cp class=\\\"already\\\"\\u003EAlready registered?\\u003C\\u002Fp\\u003E\\u003Ca class=\\\"already\\\" href=\\\"\\u002Flogin\\\" data-section=\\\"login\\\"\\u003ELog in\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./components/Signup/signup.pug?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_API_mainpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/API/mainpage */ \"./modules/API/mainpage.js\");\n/* harmony import */ var _modules_API_signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/API/signup */ \"./modules/API/signup.js\");\n/* harmony import */ var _modules_API_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/API/login */ \"./modules/API/login.js\");\n/* harmony import */ var _modules_API_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/API/profile */ \"./modules/API/profile.js\");\n/* harmony import */ var _modules_API_logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/API/logout */ \"./modules/API/logout.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\n\n\nconst application = document.getElementById('application');\n\nconst functions = {\n    mainPage: _modules_API_mainpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    signUp: _modules_API_signup__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    login: _modules_API_login__WEBPACK_IMPORTED_MODULE_2__[\"createLogin\"],\n    profile: _modules_API_profile__WEBPACK_IMPORTED_MODULE_3__[\"createProfile\"],\n    logout: _modules_API_logout__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n};\n\napplication.addEventListener('click', function (evt) {\n    const { target } = evt;\n\n    if (target instanceof HTMLAnchorElement) {\n        evt.preventDefault();\n        functions[target.dataset.section](application)\n    }\n});\n\nObject(_modules_API_mainpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(application);\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./modules/API/forms.js":
/*!******************************!*\
  !*** ./modules/API/forms.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./modules/config.js\");\n\n\nconst { backend } = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nfunction createInput (application, data, field, style) {\n    const settingField = application.querySelector(`#${field}-setting`);\n    const settingInput = document.createElement('input');\n\n    function createInput (e) {\n        e.preventDefault();\n        settingInput.classList = settingField.classList;\n        settingInput.id = `status-${field}-editable`;\n        let temp = settingField.innerHTML;\n        settingField.innerHTML = '';\n        settingInput.value = temp;\n        settingInput.placeholder = `${field}`;\n        settingInput.style.cssText = style;\n        settingField.appendChild(settingInput);\n        settingInput.focus();\n        e.target.removeEventListener('dblclick', createInput);\n    }\n\n    settingField.addEventListener('dblclick', createInput);\n\n    settingInput.addEventListener('blur', _ => {\n        console.log(data.id);\n        if (settingInput.value !== '') {\n            switch (field) {\n                case 'fstatus':\n                    data.fstatus = settingInput.value;\n                    break;\n                case 'phone':\n                    data.phone = settingInput.value;\n                    break;\n                case 'email':\n                    data.email = settingInput.value;\n                    break;\n                case 'username':\n                    data.username = settingInput.value;\n                    break;\n                case 'fullname':\n                    data.fullname = settingInput.value;\n                    break;\n            }\n            fetch(`${backend}/users/${data.id}`, {\n                method: 'PUT',\n                headers: {\n                    'Content-Type': 'application/json;charset=utf-8',\n                },\n                body: JSON.stringify(data),\n                credentials: 'include',\n                mode: 'cors',\n            }).then(response => {\n                console.dir(response);\n            }).catch(err => {\n                console.log(err);\n            });\n        }\n    });\n}\n\n/*function createInput(data, field, style) {\n    const settingField = application.querySelector(`#${field}-setting`);\n    const settingInput = document.createElement('input');\n    settingInput.cssText = \"margin: 0 0 0 20px\";\n\n    settingField.addEventListener('dblclick', (e) => {\n        e.preventDefault();\n        settingInput.classList = settingField.classList;\n        settingInput.id = `status-${field}-editable`;\n        if (settingField.value === \"\") {\n            settingInput.placeholder = `${field}`;\n        } else {\n            settingInput.placeholder = settingField.textContent;\n        }\n        settingInput.value = \"\";\n        settingInput.style.cssText = style;\n        settingField.replaceWith(settingInput);\n        settingInput.focus()\n    });\n\n    settingInput.addEventListener('blur', e => {\n        console.log(data.id);\n        settingField.innerHTML = settingInput.value;\n        settingInput.replaceWith(settingField);\n        if (settingInput.value !== '') {\n            switch (field) {\n                case 'fstatus':\n                    data.fstatus = settingInput.value;\n                    break;\n                case 'phone':\n                    data.phone = settingInput.value;\n                    break;\n                case 'email':\n                    data.email = settingInput.value;\n                    break;\n                case 'username':\n                    data.username = settingInput.value;\n                    break;\n                case 'fullname':\n                    data.fullname = settingInput.value;\n                    break\n            }\n            fetch(`${backend}/users/${data.id}`, {\n                method: 'PUT',\n                headers: {\n                    'Content-Type': 'application/json;charset=utf-8',\n                },\n                body: JSON.stringify(data),\n                credentials: 'include',\n                mode: 'cors',\n            }).then(response => {\n                console.dir(response)\n            }).catch(err => {\n                console.log(err)\n            })\n        }\n    })\n}*/\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createInput);\n\n//# sourceURL=webpack:///./modules/API/forms.js?");

/***/ }),

/***/ "./modules/API/login.js":
/*!******************************!*\
  !*** ./modules/API/login.js ***!
  \******************************/
/*! exports provided: createLogin, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLogin\", function() { return createLogin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Login/Login */ \"./components/Login/Login.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./modules/config.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile */ \"./modules/API/profile.js\");\n\n\n\n\nconst { backend } = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\nfunction createLogin (application) {\n    application.innerHTML = '';\n\n    const loginComponent = new _components_Login_Login__WEBPACK_IMPORTED_MODULE_0__[\"Login\"]();\n    loginComponent.parent = application;\n    loginComponent.renderLogin();\n\n    const form = application.querySelector('#login-form');\n\n    form.addEventListener('submit', function (e) {\n        e.preventDefault();\n        const email = form.elements['email'].value;\n        const password = form.elements['password'].value;\n        login(application, email, password);\n    });\n}\n\nfunction login (application, email, password) {\n    fetch(`${backend}/login`, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json;charset=utf-8',\n        },\n        body: JSON.stringify({\n            email: email,\n            password: password,\n        }),\n        credentials: 'include',\n        mode: 'cors',\n    }).then(response => {\n        if (response.status !== 200) {\n            alert(\n                `Пользователь с данной почтой не зарегистрирован: ${response.status}`);\n            throw new Error(\n                `Пользователь с данной почтой не зарегистрирован: ${response.status}`);\n        }\n        return response.json();\n    }).then(user => {\n        console.log(`Logged in: ${user.email}`);\n\n        Object(_profile__WEBPACK_IMPORTED_MODULE_2__[\"renderProfile\"])(application, user);\n    }).catch(err => {\n        console.error(err);\n    });\n}\n\n\n\n//# sourceURL=webpack:///./modules/API/login.js?");

/***/ }),

/***/ "./modules/API/logout.js":
/*!*******************************!*\
  !*** ./modules/API/logout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage */ \"./modules/API/mainpage.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./modules/config.js\");\n\n\n\nconst { backend } = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\nfunction handleLogout (application) {\n    fetch(`${backend}/logout`, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json;charset=utf-8',\n        },\n        body: '',\n        credentials: 'include',\n        mode: 'cors',\n    }).then(response => {\n        console.log(response.status);\n        if (response.status !== 200) {\n            throw new Error(\n                `Not logged out: ${response.status}`);\n        }\n        return response.text();\n    }).then(data => {\n        console.log(data);\n        Object(_mainpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(application);\n    }).catch(err => {\n        console.error(err);\n    });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handleLogout);\n\n//# sourceURL=webpack:///./modules/API/logout.js?");

/***/ }),

/***/ "./modules/API/mainpage.js":
/*!*********************************!*\
  !*** ./modules/API/mainpage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Header/Header */ \"./components/Header/Header.js\");\n/* harmony import */ var _components_MainPage_MainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/MainPage/MainPage */ \"./components/MainPage/MainPage.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./modules/config.js\");\n\n\n\n\nconst { backend } = _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\nfunction createMainPage (application) {\n    fetch(`${backend}/users`, {\n        method: 'GET',\n        credentials: 'include',\n        mode: 'cors',\n    }).then(response => {\n        application.innerHTML = '';\n\n        const header = new _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__[\"Header\"]();\n        header.parent = application;\n        header.renderHeader(response.status === 200);\n\n        const mainPage = new _components_MainPage_MainPage__WEBPACK_IMPORTED_MODULE_1__[\"MainPageComponent\"]();\n        mainPage.parent = application;\n        mainPage.renderMainPage();\n    }).catch(err => {\n        console.error(err);\n    });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createMainPage);\n\n//# sourceURL=webpack:///./modules/API/mainpage.js?");

/***/ }),

/***/ "./modules/API/profile.js":
/*!********************************!*\
  !*** ./modules/API/profile.js ***!
  \********************************/
/*! exports provided: createProfile, renderProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProfile\", function() { return createProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProfile\", function() { return renderProfile; });\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Header/Header */ \"./components/Header/Header.js\");\n/* harmony import */ var _components_Profile_Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Profile/Profile */ \"./components/Profile/Profile.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./modules/config.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms */ \"./modules/API/forms.js\");\n\n\n\n\n\n\nconst { backend } = _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nlet profile;\n\nfunction createProfile (application) {\n    fetch(`${backend}/users`, {\n        method: 'GET',\n        credentials: 'include',\n        mode: 'cors',\n    }).then(response => {\n        if (response.status !== 200) {\n            throw new Error(\n                `Not logged in: ${response.status}`);\n        }\n        return response.json();\n    }).then(user => {\n        console.log(user);\n        renderProfile(application, user);\n    }).catch(err => {\n        console.error(err);\n    });\n}\n\nfunction renderProfile (application, user) {\n    application.innerHTML = '';\n\n    const header = new _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__[\"Header\"]();\n    header.parent = application;\n    header.renderHeader(true);\n\n    profile = new _components_Profile_Profile__WEBPACK_IMPORTED_MODULE_1__[\"ProfileComponent\"](user, application);\n    profile.renderProfile();\n\n    Object(_forms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(application, user, 'fstatus',\n        `border: none; outline: none; padding: 0; height: 30px; margin: 0`);\n    Object(_forms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(application, user, 'email',\n        `border: none; outline: none; padding: 0; height: 30px; margin: 0`);\n    /*    createInput(application, user, 'phone',\n            `border: none; outline: none; padding: 0; height: 30px; margin: 0`);*/\n    Object(_forms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(application, user, 'username',\n        `border: none; outline: none; margin: 0`);\n    Object(_forms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(application, user, 'fullname',\n        `border: none; outline: none; margin: 0`);\n    Object(_forms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(application, user, 'phone',\n        `border: none; outline: none; margin: 0`);\n\n    createImageUpload(user.id);\n    getUserPhoto(user.id);\n}\n\n\n\nfunction getUserPhoto (id) {\n    profile.showLoader();\n    console.log(` Getting user ${id} photo`);\n    fetch(`${backend}/photos/${id}`, {\n        method: 'GET',\n        credentials: 'include',\n        mode: 'cors',\n    }).then(response => {\n        response.arrayBuffer().then((buffer) => {\n            if (response.status !== 200) {\n                throw new Error(\n                    `Не зашли: ${response.status}`);\n            }\n            profile.hideLoader();\n            let base64Flag = 'data:image/jpeg;base64,';\n            let imageStr = arrayBufferToBase64(buffer);\n\n            document.getElementById('avatar').src = base64Flag + imageStr;\n        });\n\n    });\n}\n\nfunction arrayBufferToBase64 (buffer) {\n    let binary = '';\n    let bytes = [].slice.call(new Uint8Array(buffer));\n\n    bytes.forEach((b) => binary += String.fromCharCode(b));\n\n    return window.btoa(binary);\n}\n\nfunction createImageUpload (id) {\n    const imageInput = document.getElementById('file');\n    console.log('image upload created');\n    const formData = new FormData();\n\n    formData.append('file', imageInput.files[0]);\n\n    imageInput.addEventListener('change', function () {\n        let formData = new FormData();\n        formData.append('file', imageInput.files[0]);\n        console.log('image upload', imageInput.files[0]);\n        fetch(`${backend}/photos`, {\n            method: 'POST',\n            body: formData,\n            credentials: 'include',\n            mode: 'cors',\n        }).then(response => {\n            if (response.status !== 200) {\n                console.log('Error while upload image');\n            }\n            getUserPhoto(id,);\n\n        });\n    });\n}\n\n\n\n//# sourceURL=webpack:///./modules/API/profile.js?");

/***/ }),

/***/ "./modules/API/signup.js":
/*!*******************************!*\
  !*** ./modules/API/signup.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Signup_Signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Signup/Signup */ \"./components/Signup/Signup.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ \"./modules/API/login.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./modules/config.js\");\n\n\n\n\nconst { backend } = _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\nfunction createSignUp (application) {\n    application.innerHTML = '';\n\n    const signUpComponent = new _components_Signup_Signup__WEBPACK_IMPORTED_MODULE_0__[\"SignUp\"]();\n    signUpComponent.parent = application;\n    signUpComponent.renderSignUp();\n\n    const form = application.querySelector('#sign-up-form');\n\n    form.addEventListener('submit', function (e) {\n        e.preventDefault();\n\n        const email = form.elements['email'].value;\n        const password = form.elements['password'].value;\n        const fullname = form.elements['fullname'].value;\n        const username = email.split('@')[0];\n\n        fetch(`${backend}/users`, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json;charset=utf-8',\n            },\n            body: JSON.stringify({\n                email: email,\n                password: password,\n                fullname: fullname,\n                username: username,\n            }),\n            credentials: 'include',\n            mode: 'cors',\n        }).then(response => {\n            console.dir(response);\n            if (response.status === 400) {\n                alert(`Такая почта занята !!`);\n                throw new Error(`Такая почта занята !!`);\n            }\n            if (response.status !== 200) {\n                alert(`Неверный статус: ${response.status}`);\n                throw new Error(`Неверный статус: ${response.status}`);\n            }\n            return response.text();\n        }).then(data => {\n            console.log(`Signed up: ${email}`);\n            Object(_login__WEBPACK_IMPORTED_MODULE_1__[\"login\"])(application, email, password);\n        }).catch(err => {\n            console.error(err);\n        });\n    });\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createSignUp);\n\n//# sourceURL=webpack:///./modules/API/signup.js?");

/***/ }),

/***/ "./modules/config.js":
/*!***************************!*\
  !*** ./modules/config.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst settings = {\n    backend: 'http://localhost:8080',\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (settings);\n\n//# sourceURL=webpack:///./modules/config.js?");

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/main.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./styles/main.css?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ });
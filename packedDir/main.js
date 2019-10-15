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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);\", \"\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);\", \"\"]);\n// Module\nexports.push([module.i, \"header{\\n    background-color: #ffffff;\\n    height: 50px ;\\n}\\n\\n.rounded-circle{\\n    border: 1px solid #2dc68b;\\n    margin-top: 10px;\\n    border-radius: 50%;\\n    height: 80px;\\n    width: 80px;\\n    object-position: center center;\\n    object-fit: fill;\\n    box-sizing: border-box;\\n}\\n.rounded-circle-1{\\n    border: 2px solid #2dc68b;\\n    margin-top: 10px;\\n    border-radius: 50%;\\n    height: 200px;\\n    width: 200px;\\n    object-position: center center;\\n    object-fit: fill;\\n    box-sizing: border-box;\\n}\\n#avatar:hover{\\n      border: 3px solid #2dc68b;\\n\\n  }\\n.logo{\\n    object-position: center center;\\n    object-fit: fill;\\n    height: 50px;\\n    width: 80px;\\n}\\n.container{\\n    background-color: rgb(255, 255, 255);\\n    display: flex;\\n    flex-wrap: nowrap;\\n    align-items: stretch;\\n    height: 90vh;\\n}\\n.msg-count{\\n    display: inline-block;\\n    background-color: #2dc68b;\\n    text-align: center;\\n    margin: 5px 0 0 5px;\\n    border-radius: 50px;\\n    height: 25px;\\n    width: 25px;\\n}\\n.msg-count-wspace{\\n    display: inline-block;\\n    background-color: #2dc68b;\\n    text-align: center;\\n    margin: 5px 0 0 5px;\\n    border-radius: 50px;\\n    height: 20px;\\n    width: 20px;\\n}\\n.msg-count-wspace:hover{\\n    margin: 0 0 0 5px;\\n    background-color: #1d916b;\\n}\\n\\n.msg-count:hover{\\n    margin: 0 0 5px 5px;\\n    background-color: #1d916b;\\n}\\n\\n.row {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: nowrap;\\n    width: 100%;\\n}\\n.chat-menu{\\n    height: 30px;\\n    background-color: rgba(197, 197, 197, 0.07);\\n    box-sizing: border-box;\\n    border-top: 1px solid rgba(197, 197, 197, 0.81);\\n    border-left: 1px solid rgba(197, 197, 197, 0.81);\\n\\n}\\n.name-row{\\n    margin: 100px 0 0 20px;\\n    height: 46px;\\n    font-family: 'Montserrat',  sans-serif;\\n    font-size: 36px;\\n    color: #000000;\\n    font-weight: 400;\\n\\n}\\n.params{\\n    flex-direction: row;\\n}\\n\\n.nick-row{\\n    margin: 30px 0 0 20px;\\n    height: 30px;\\n    font-family: 'Roboto',  sans-serif;\\n    font-size: 24px;\\n    color: black;\\n    font-weight: 200;\\n}\\n\\n.profile-pic{\\n    height: 300px;\\n    flex-direction: row;\\n}\\n.profile-pic-row{\\n    height:120px;\\n}\\n.edit-row{\\n    display: flex;\\n    justify-content: center;\\n    height: 60px;\\n}\\n\\n.name{\\n    margin: 0 0 20px 0;\\n    align-self: stretch;\\n    justify-content:flex-start;\\n    height: 40px;\\n}\\n\\n.msg {\\n    box-sizing: border-box;\\n    background-color: white;\\n    height: 100px;\\n    box-shadow: 0 0 8px rgba(0,0,0,0.2); /* Параметры тени */\\n}\\n.wrkspace {\\n\\n    box-sizing: border-box;\\n    background-color: white;\\n    height: 100px;\\n    box-shadow: 0 0 8px rgba(0,0,0,0.2);\\n}\\n.wrkspace-outer{\\n    flex-direction: column;\\n}\\n\\n.expandable {\\n    border-top: 1px solid #2dc68b;\\n    flex-direction: column;\\n    background: #fff;\\n    overflow: hidden;\\n\\n    transition: max-height .5s ease-in-out;\\n    max-height: 0;\\n    color: transparent;\\n}\\n\\n.clicked {\\n    max-height: 500px;\\n}\\n\\n\\n.msg:hover, .wrkspace-outer:hover, .wrkspace:hover{\\n    box-shadow: 0 0 8px rgba(0,0,0,0.5); /* Параметры тени */\\n\\n}\\n\\n.message{\\n    justify-content:flex-start;\\n    height: 50px;\\n}\\n\\n.pic-ch{\\n    width:70px;\\n    display: flex;\\n    justify-content: left;\\n    height: 40px;\\n    margin: 0 10px 0 10px;\\n}\\n\\n.column{\\n    margin: 0 0 0 0;\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    height: 100%;\\n\\n}\\n.chat-msg{\\n    height: 100%;\\n    align-items: stretch;\\n    justify-content: stretch;\\n}\\n.header-icon{\\n    overflow: hidden;\\n    margin: 0 0 0 30px;\\n}\\n.free-space {\\n    width: 1500px;;\\n}\\n.log-out{\\n    flex-direction: row-reverse;\\n    margin: 20px 20px 0 0;\\n    width: 40%;\\n}\\n.settings{\\n    margin: 0 0 0 60px;\\n    flex-direction: column;\\n    align-items: stretch;\\n}\\n.for-msg{\\n    flex-direction: column;\\n    width: 80%;\\n}\\n.for-img{\\n    flex-direction: column;\\n    margin: 0 0 0 20px;\\n    width: 20%\\n}\\n.for-profile-sett{\\n    height: 150px;\\n    justify-content: center;\\n    flex-direction: column;\\n    width: 60%;\\n}\\n.for-img-profile{\\n    flex-direction: column;\\n\\n    margin-left:100px;\\n    width: 40%;\\n}\\n.left{\\n    width: 40%;\\n}\\n.right{\\n    border-left: 1.5px solid #2dc68b;\\n    margin:auto;\\n    width: 60%;\\n}\\n.messg-text{\\n    background-color: rgba(207, 232, 223, 0.58);\\n    height: 24px;\\n    width:80%;\\n}\\n.messg-count{\\n    margin: 0 20px 0 0;\\n    margin-left: auto;\\n    justify-self: flex-end;\\n    width:10%;\\n}\\n\\n.field{\\n    display: flex;\\n    align-items: flex-end;\\n    vertical-align: bottom;\\n    border-bottom: 1px solid #2dc68b;\\n    width: 70%;\\n    height: 50px;\\n    margin: 0 0 0 20px;\\n    font-family: 'Montserrat', sans-serif;\\n    font-size: 24px;\\n    letter-spacing: -0.2px;\\n    color: #000000;\\n    font-weight: 100;\\n    font-style: normal;\\n}\\n.sett{\\n    margin: 10px 5px 5px 5px;\\n    filter: opacity(0.7);\\n    height: 20px;\\n    width: 20px;\\n    object-position: center center;\\n    object-fit: fill;\\n}\\n.loupe{\\n    margin: 5px 10px 0 20px;\\n    filter: opacity(0.9);\\n    height: 20px;\\n    width: 20px;\\n    object-position: center center;\\n    object-fit: fill;\\n}\\n\\n.icon{\\n    margin: 0 5px 0 5px;\\n    filter: opacity(0.9);\\n    height: 20px;\\n    width: 20px;\\n    object-position: center center;\\n    object-fit: fill;\\n}\\n\\n.starred{\\n    color: #2dc68b;\\n}\\n\\n\\n\\np.wrkspace-info{\\n    display: inline-block;\\n    margin: 0 0 0 10px;\\n    height: 20px;\\n    color: #2dc68b;\\n    font-family: 'Roboto',  sans-serif;\\n}\\np.wrkspace-info-channel{\\n    align-self: center;\\n    display: inline-block;\\n    height: 20px;\\n    color: #2dc68b;\\n    font-family: 'Roboto',  sans-serif;\\n}\\n\\np.person{\\n    margin: 10px 0 0 10px;\\n    font-family: 'Roboto',  sans-serif;\\n    font-size: 20px;\\n    letter-spacing: -0.2px;\\n    word-spacing: -1px;\\n    color: #000000;\\n    font-weight: 400;\\n}\\np.mess{\\n    margin: 5px 0 0 10px;\\n    font-family: 'Roboto',  sans-serif;\\n    font-size: 14px;\\n    color: #000000;\\n    font-weight: 300;\\n}\\np.mess-n{\\n    margin: 5px 0 0 0;\\n    height: inherit;\\n    width: inherit;\\n    display: inline-block;\\n    text-align: center;\\n    font-family: 'Roboto',  sans-serif;\\n    font-size: 12px;\\n    color: #ffffff;\\n    font-weight: 500;\\n}\\n\\np.mess-n-workspace{\\n    margin: 3px 2px 0 0;\\n    height: inherit;\\n    width: inherit;\\n    display: inline-block;\\n    text-align: center;\\n    font-family: 'Roboto',  sans-serif;\\n    font-size: 12px;\\n    color: #ffffff;\\n    font-weight: 500;\\n}\\n\\n.change {\\n    display: flex;\\n    align-items: flex-end;\\n    margin: 15px 0 0 5px;\\n    flex-direction: row;\\n    font-family: 'Roboto', sans-serif;\\n    font-size: 15px;\\n    color: #000000;\\n    font-weight: 300;\\n    text-decoration: none;\\n}\\n.change:hover{\\n    text-decoration: underline;\\n}\\n\\n.attribute{\\n    display: flex;\\n    align-items: flex-end;\\n    width: 150px;\\n    height: 40px;\\n    text-decoration: none;\\n    margin: 5px 0 0 20px;\\n    font-family: 'Roboto', sans-serif;\\n    font-size: 20px;\\n    letter-spacing: -0.5px;\\n    color: #2dc68b;\\n    font-weight: 300;\\n}\\n\\n.loader {\\n    border: 16px solid #f3f3f3; /* Light grey */\\n    border-top: 16px solid #2dc68b; /* Blue */\\n    border-radius: 50%;\\n    width: 120px;\\n    height: 120px;\\n    margin-top: 10px;\\n    animation: spin 2s linear infinite;\\n}\\n\\n.wrkspace-info-column {\\n    flex-direction: column;\\n}\\n\\n.wrkspace-chat {\\n    display:inline-flex;\\n    justify-content: stretch;\\n    width: 100%;\\n    height: 30px;\\n    border-bottom: 1px solid #2dc68b;\\n    margin: 0 20px 0 40px;\\n    flex-direction: row;\\n}\\n\\n.wrkspace-chat-text{\\n    width: 170px;\\n    display:inline-block;\\n    margin: 10px 5px 0 20px;\\n    color: #475C53;\\n    font-family: 'Roboto',  sans-serif;\\n    font-size: 14px;\\n\\n}\\n.icons{\\n    align-self: center;\\n    display:inline-block;\\n    width: 100px;\\n    flex-direction: row;\\n}\\n\\n@keyframes spin {\\n    0% { transform: rotate(0deg); }\\n    100% { transform: rotate(360deg); }\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./styles/profile.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/signup.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/signup.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".log-in-form{\\n    padding: 50px;\\n    position: fixed; top: 50%; left: 50%;\\n    -webkit-transform: translate(-50%, -50%);\\n    -ms-transform: translate(-50%, -50%);\\n    transform: translate(-50%, -50%);\\n    z-index: 1;\\n    background: #FFFFFF;\\n    max-width: 360px;\\n    text-align: center;\\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\\n}\\n.input_field {\\n    font-family: \\\"Roboto\\\", sans-serif;\\n    outline: 0;\\n    border-width: 0 0 2px;\\n    border-color: #C4C4C4;\\n    width: 100%;\\n    margin: 0 0 15px;\\n    box-sizing: border-box;\\n    font-size: 18px;\\n}\\n.submit-button{\\n    padding: 5px 10px 5px 10px;\\n    font-family: \\\"Roboto\\\", sans-serif;\\n    text-transform: uppercase;\\n    outline: 0;\\n    background: #18A88E;\\n    font-style: inherit;\\n    color: white;\\n    font-weight: 500;\\n    font-size: 16px;\\n    margin-left: 236px;\\n    border-radius: 7px;\\n}\\n.back{\\n    padding: 5px 10px 5px 10px;\\n    position: fixed; top: 2%; left: 1%;\\n    font-family: \\\"Roboto\\\", sans-serif;\\n    text-transform: uppercase;\\n    outline: 0;\\n    background: #18A88E;\\n    font-style: inherit;\\n    color: white;\\n    font-weight: 500;\\n    font-size: 14px;\\n\\n\\n}\\n.name{\\n    font-weight: 700;\\n    font-size: 20px;\\n\\n    color: #18A88E;\\n\\n}\\n.title {\\n    background-color: #18A88E;\\n    padding: 40px;\\n\\n}\\n.already{\\n    font-family: \\\"Roboto\\\", sans-serif;\\n    font-size: 15px;\\n    color: #000000;\\n    font-weight: 300;\\n}\\n\\n.error_message{\\n    height: 30px;\\n    color: #ff6575;\\n    text-align: left;\\n    font-family: \\\"Roboto\\\", sans-serif;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./styles/signup.css?../node_modules/css-loader/dist/cjs.js");

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
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  var type = typeof val;\n  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(/*! fs */ 1).readFileSync(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//# sourceURL=webpack:///../node_modules/pug-runtime/index.js?");

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

/***/ "../node_modules/worker-loader/dist/workers/InlineWorker.js":
/*!******************************************************************!*\
  !*** ../node_modules/worker-loader/dist/workers/InlineWorker.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string\n\nvar URL = window.URL || window.webkitURL;\n\nmodule.exports = function (content, url) {\n  try {\n    try {\n      var blob;\n\n      try {\n        // BlobBuilder = Deprecated, but widely implemented\n        var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;\n\n        blob = new BlobBuilder();\n\n        blob.append(content);\n\n        blob = blob.getBlob();\n      } catch (e) {\n        // The proposed API\n        blob = new Blob([content]);\n      }\n\n      return new Worker(URL.createObjectURL(blob));\n    } catch (e) {\n      return new Worker('data:application/javascript,' + encodeURIComponent(content));\n    }\n  } catch (e) {\n    if (!url) {\n      throw Error('Inline worker is not supported');\n    }\n\n    return new Worker(url);\n  }\n};\n\n//# sourceURL=webpack:///../node_modules/worker-loader/dist/workers/InlineWorker.js?");

/***/ }),

/***/ "./components/Header/header.pug":
/*!**************************************!*\
  !*** ./components/Header/header.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (login) {pug_mixins[\"item\"] = pug_interp = function(title, href, section, id){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Ca\" + (\" class=\\\"change\\\"\"+pug.attr(\"href\", href, true, true)+pug.attr(\"data-section\", section, true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = title) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\";\n};\npug_html = pug_html + \"\\u003Cdiv class=\\\"head\\\"\\u003E\\u003Ca href=\\\"\\u002F\\\"\\u003E\\u003Cimg class=\\\"logo\\\" src=\\\"images\\u002Flogo_2.png\\\"\\u003E\\u003C\\u002Fa\\u003E\";\nif (login) {\npug_mixins[\"item\"]('log out', '/logout', 'logout');\npug_mixins[\"item\"]('profile', `/profile`, \"profile\");\n}\nelse {\npug_mixins[\"item\"]('log in', `/login`, \"login\");\npug_mixins[\"item\"]('sign up', `/signup`, \"signUp\");\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";}.call(this,\"login\" in locals_for_with?locals_for_with.login:typeof login!==\"undefined\"?login:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./components/Header/header.pug?");

/***/ }),

/***/ "./components/Login/login.pug":
/*!************************************!*\
  !*** ./components/Login/login.pug ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ca class=\\\"back\\\" href=\\\"\\u002F\\\" data-section=\\\"mainPage\\\"\\u003Eback\\u003C\\u002Fa\\u003E\\u003Cform class=\\\"login-form\\\" method=\\\"POST\\\" action=\\\"\\u002Flogin\\\"\\u003E\\u003Cdiv class=\\\"log-in-form\\\"\\u003E\\u003Ch1 class=\\\"name\\\"\\u003ELog In\\u003C\\u002Fh1\\u003E\\u003Cinput class=\\\"input_field\\\" type=\\\"text\\\" id=\\\"email\\\" placeholder=\\\"email\\\" name=\\\"email\\\"\\u003E\\u003Cinput class=\\\"input_field\\\" type=\\\"password\\\" id=\\\"password\\\" placeholder=\\\"password\\\" name=\\\"password\\\"\\u003E\\u003Cdiv class=\\\"error_message\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"submit-button\\\" type=\\\"submit\\\"\\u003ELog in\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./components/Login/login.pug?");

/***/ }),

/***/ "./components/MainPage/body.pug":
/*!**************************************!*\
  !*** ./components/MainPage/body.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"stage\\\"\\u003E\\u003Cimg class=\\\"box bounce-2\\\" src=\\\"images\\u002Fplus.png\\\" alt=\\\"img\\\"\\u003E\\u003Cimg class=\\\"box bounce-2\\\" src=\\\"images\\u002Fsquare-root-mathematical-sign.png\\\" alt=\\\"img\\\"\\u003E\\u003Cimg class=\\\"box bounce-2\\\" src=\\\"images\\u002Ftherefore-mathematical-symbol.png\\\" alt=\\\"img\\\"\\u003E\\u003Cp class=\\\"text\\\"\\u003EWhatever work you do, you can do it in CoolSlack\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./components/MainPage/body.pug?");

/***/ }),

/***/ "./components/Message/Message.js":
/*!***************************************!*\
  !*** ./components/Message/Message.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../baseComponent */ \"./components/baseComponent.js\");\n\n\nconst msgTempl = __webpack_require__(/*! ./message.pug */ \"./components/Message/message.pug\");\n\nclass MessageComponent extends _baseComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\trender() {\n\t\treturn msgTempl(this._data);\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageComponent);\n\n//# sourceURL=webpack:///./components/Message/Message.js?");

/***/ }),

/***/ "./components/Message/message.pug":
/*!****************************************!*\
  !*** ./components/Message/message.pug ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (lastMsg, name, number) {pug_html = pug_html + \"\\u003Cdiv class=\\\"column for-img\\\"\\u003E\\u003Cimg class=\\\"rounded-circle\\\" src=\\\"images\\u002Fsasha.jpeg\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"column for-msg\\\"\\u003E\\u003Cdiv class=\\\"row name\\\"\\u003E\\u003Cp class=\\\"person\\\"\\u003E\" + (pug.escape(null == (pug_interp = name) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"row message\\\"\\u003E\\u003Cdiv class=\\\"column messg-text\\\"\\u003E\\u003Cp class=\\\"mess\\\"\\u003E\" + (pug.escape(null == (pug_interp = lastMsg) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"column messg-count\\\"\\u003E\\u003Cdiv class=\\\"msg-count\\\"\\u003E\\u003Cp class=\\\"mess-n\\\"\\u003E\" + (pug.escape(null == (pug_interp = number) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";}.call(this,\"lastMsg\" in locals_for_with?locals_for_with.lastMsg:typeof lastMsg!==\"undefined\"?lastMsg:undefined,\"name\" in locals_for_with?locals_for_with.name:typeof name!==\"undefined\"?name:undefined,\"number\" in locals_for_with?locals_for_with.number:typeof number!==\"undefined\"?number:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./components/Message/message.pug?");

/***/ }),

/***/ "./components/Profile/profile.pug":
/*!****************************************!*\
  !*** ./components/Profile/profile.pug ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (chat, email, fstatus, fullname, phone, username) {pug_mixins[\"field\"] = pug_interp = function(pText, fieldText, id){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cp class=\\\"attribute\\\"\\u003E\" + (pug.escape(null == (pug_interp = pText+\":\") ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003Cdiv\" + (\" class=\\\"field\\\"\"+pug.attr(\"id\", id, true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = fieldText) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"settings\"] = pug_interp = function(pText, reference){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv class=\\\"row params\\\"\\u003E\\u003Cp class=\\\"attribute\\\"\\u003E\" + (pug.escape(null == (pug_interp = pText+\"settings\") ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003Ca\" + (\" class=\\\"change\\\"\"+pug.attr(\"href\", reference, true, true)) + \"\\u003E\\u003Cimg class=\\\"sett\\\" src=\\\"images\\u002Fsettings.jpg\\\"\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_html = pug_html + \"\\u003Cdiv class=\\\"container\\\"\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"column left\\\"\\u003E\\u003Cdiv class=\\\"row chat-menu\\\"\\u003E\\u003Cdiv class=\\\"column search\\\"\\u003E\\u003Cimg class=\\\"loupe\\\" src=\\\"images\\u002Floupe_2.png\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"column chat-msg\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"column right\\\"\\u003E\";\nif (chat) {\npug_html = pug_html + \"\\u003Cdiv\\u003Echat here\\u003C\\u002Fdiv\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Cdiv class=\\\"row profile-pic\\\"\\u003E\\u003Cdiv class=\\\"column for-img-profile\\\"\\u003E\\u003Cdiv class=\\\"row profile-pic-row\\\"\\u003E\\u003Cdiv class=\\\"loader\\\" id=\\\"loader\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cimg class=\\\"rounded-circle-1\\\" id=\\\"avatar\\\" src=\\\"images\\u002Fuser.jpg\\\"\\u003E\\u003Cinput id=\\\"file\\\" type=\\\"file\\\" style=\\\"display: none;\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"column for-profile-sett\\\"\\u003E\\u003Cdiv class=\\\"row name-row\\\" id=\\\"fullname-setting\\\"\\u003E\" + (pug.escape(null == (pug_interp = fullname) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"row nick-row\\\" id=\\\"username-setting\\\"\\u003E\" + (pug.escape(null == (pug_interp = username) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"column settings\\\"\\u003E\";\npug_mixins[\"field\"](\"status\", fstatus, \"fstatus-setting\");\npug_mixins[\"field\"](\"email\", email, \"email-setting\");\npug_mixins[\"field\"](\"phone\", phone, \"phone-setting\");\npug_mixins[\"settings\"](\"account \", \"/\");\npug_mixins[\"settings\"](\"privacy \", \"/\");\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";}.call(this,\"chat\" in locals_for_with?locals_for_with.chat:typeof chat!==\"undefined\"?chat:undefined,\"email\" in locals_for_with?locals_for_with.email:typeof email!==\"undefined\"?email:undefined,\"fstatus\" in locals_for_with?locals_for_with.fstatus:typeof fstatus!==\"undefined\"?fstatus:undefined,\"fullname\" in locals_for_with?locals_for_with.fullname:typeof fullname!==\"undefined\"?fullname:undefined,\"phone\" in locals_for_with?locals_for_with.phone:typeof phone!==\"undefined\"?phone:undefined,\"username\" in locals_for_with?locals_for_with.username:typeof username!==\"undefined\"?username:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./components/Profile/profile.pug?");

/***/ }),

/***/ "./components/Signup/signup.pug":
/*!**************************************!*\
  !*** ./components/Signup/signup.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Ca class=\\\"back\\\" href=\\\"\\u002F\\\" data-section=\\\"mainPage\\\"\\u003Eback\\u003C\\u002Fa\\u003E\\u003Cform class=\\\"sign-up-form\\\" method=\\\"POST\\\" action=\\\"\\u002Fsignup\\\"\\u003E\\u003Cdiv class=\\\"log-in-form\\\"\\u003E\\u003Ch1 class=\\\"name\\\"\\u003ESign up\\u003C\\u002Fh1\\u003E\\u003Clabel for=\\\"email\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"input_field\\\" type=\\\"text\\\" id=\\\"email\\\" placeholder=\\\"email\\\" name=\\\"email\\\"\\u003E\\u003Clabel for=\\\"password\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"input_field\\\" type=\\\"password\\\" id=\\\"password\\\" placeholder=\\\"password\\\" name=\\\"password\\\"\\u003E\\u003Clabel for=\\\"fullname\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"input_field\\\" type=\\\"text\\\" id=\\\"fullname\\\" placeholder=\\\"full name\\\" name=\\\"fullname\\\"\\u003E\\u003Cdiv class=\\\"error_message\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"submit-button\\\" type=\\\"submit\\\"\\u003ESign up\\u003C\\u002Fbutton\\u003E\\u003Cp class=\\\"already\\\"\\u003EAlready registered?\\u003C\\u002Fp\\u003E\\u003Ca class=\\\"already\\\" href=\\\"\\u002Flogin\\\" data-section=\\\"login\\\"\\u003ELog in\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./components/Signup/signup.pug?");

/***/ }),

/***/ "./components/WrkSpace/WrkSpace.js":
/*!*****************************************!*\
  !*** ./components/WrkSpace/WrkSpace.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../baseComponent */ \"./components/baseComponent.js\");\n\n\nconst wrkSpaceTempl = __webpack_require__(/*! ./WrkSpace.pug */ \"./components/WrkSpace/WrkSpace.pug\");\nconst wrkSpaceChatTempl = __webpack_require__(/*! ./WrkSpaceChat.pug */ \"./components/WrkSpace/WrkSpaceChat.pug\");\n\nclass WrkSpaceComponent extends _baseComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\trender() {\n\t\tconst wSpace = document.createElement('div');\n\t\twSpace.className = 'row wrkspace-outer';\n\t\twSpace.innerHTML = wrkSpaceTempl(this._data);\n\n\t\t const wspaceChannels = document.createElement('div');\n\t\t wspaceChannels.className = \"row expandable\";\n\t\t this.data.channels.forEach((ch)=>{\n\t\t\twspaceChannels.innerHTML += wrkSpaceChatTempl({\n\t\t\t\tchannel:ch,\n\t\t\t});\n\t\t});\n\t\twSpace.appendChild(wspaceChannels);\n\n\t\treturn wSpace;\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WrkSpaceComponent);\n\n//# sourceURL=webpack:///./components/WrkSpace/WrkSpace.js?");

/***/ }),

/***/ "./components/WrkSpace/WrkSpace.pug":
/*!******************************************!*\
  !*** ./components/WrkSpace/WrkSpace.pug ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (channels, members, title) {pug_html = pug_html + \"\\u003Cdiv class=\\\"row wrkspace\\\"\\u003E\\u003Cdiv class=\\\"column for-img\\\"\\u003E\\u003Cimg class=\\\"rounded-circle\\\" src=\\\"images\\u002Fabkhazia.jpg\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"column for-msg\\\"\\u003E\\u003Cdiv class=\\\"row name\\\"\\u003E\\u003Cp class=\\\"person\\\"\\u003E\" + (pug.escape(null == (pug_interp = title) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"row message\\\"\\u003E\\u003Cdiv class=\\\"column wrkspace-info-column\\\"\\u003E\\u003Cp class=\\\"wrkspace-info\\\"\\u003E\" + (pug.escape(null == (pug_interp = members.length + \" members\") ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003Cp class=\\\"wrkspace-info\\\"\\u003E\" + (pug.escape(null == (pug_interp = channels.length + \" channels\") ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";}.call(this,\"channels\" in locals_for_with?locals_for_with.channels:typeof channels!==\"undefined\"?channels:undefined,\"members\" in locals_for_with?locals_for_with.members:typeof members!==\"undefined\"?members:undefined,\"title\" in locals_for_with?locals_for_with.title:typeof title!==\"undefined\"?title:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./components/WrkSpace/WrkSpace.pug?");

/***/ }),

/***/ "./components/WrkSpace/WrkSpaceChat.pug":
/*!**********************************************!*\
  !*** ./components/WrkSpace/WrkSpaceChat.pug ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (channel) {pug_html = pug_html + \"\\u003Cdiv class=\\\"row wrkspace-chat\\\"\\u003E\\u003Cp class=\\\"wrkspace-chat-text\\\"\\u003E\" + (pug.escape(null == (pug_interp = \"#\"+ channel.title) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003Cdiv class=\\\"row icons\\\"\\u003E\";\nif (channel.private) {\npug_html = pug_html + \"\\u003Cimg class=\\\"icon\\\" src=\\\"images\\u002Flock.jpg\\\"\\u003E\";\n}\nif (channel.public) {\npug_html = pug_html + \"\\u003Cimg class=\\\"icon\\\" src=\\\"images\\u002Fpost.png\\\"\\u003E\";\n}\nif (channel.starred) {\npug_html = pug_html + \"\\u003Cimg class=\\\"icon starred\\\" src=\\\"images\\u002Fstar.png\\\"\\u003E\";\n}\nif (channel.muted) {\npug_html = pug_html + \"\\u003Cimg class=\\\"icon\\\" src=\\\"images\\u002Fmuted.png\\\"\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\nif (channel.members != null) {\npug_html = pug_html + \"\\u003Cp class=\\\"wrkspace-info-channel\\\"\\u003E\" + (pug.escape(null == (pug_interp = channel.members + \" members\") ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\";\n}\nif (channel.messages != null) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"messg-count\\\"\\u003E\\u003Cdiv class=\\\"msg-count-wspace\\\"\\u003E\\u003Cp class=\\\"mess-n-workspace\\\"\\u003E\" + (pug.escape(null == (pug_interp = channel.messages) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";}.call(this,\"channel\" in locals_for_with?locals_for_with.channel:typeof channel!==\"undefined\"?channel:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./components/WrkSpace/WrkSpaceChat.pug?");

/***/ }),

/***/ "./components/baseComponent.js":
/*!*************************************!*\
  !*** ./components/baseComponent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass BaseComponent {\n\tconstructor(data, parent) {\n\t\tthis._data = data;\n\t\tthis._parent = parent;\n\n\t}\n\tget data() {\n\t\treturn this._data;\n\t}\n\n\tset data(dataToSet) {\n\t\tthis._data = {...dataToSet};\n\t}\n\n\tget parent() {\n\t\treturn this._parent;\n\t}\n\n\tset parent(parent) {\n\t\tthis._parent = parent;\n\t}\n\n\trender() {\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseComponent);\n\n//# sourceURL=webpack:///./components/baseComponent.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: bus, router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bus\", function() { return bus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"router\", function() { return router; });\n/* harmony import */ var _scripts_Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Router */ \"./scripts/Router.js\");\n/* harmony import */ var _scripts_Bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Bus */ \"./scripts/Bus.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _views_loginView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/loginView */ \"./views/loginView.js\");\n/* harmony import */ var _views_mainPageView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/mainPageView */ \"./views/mainPageView.js\");\n/* harmony import */ var _views_signUpView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/signUpView */ \"./views/signUpView.js\");\n/* harmony import */ var _views_profileView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/profileView */ \"./views/profileView.js\");\n/* harmony import */ var _views_logOutView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/logOutView */ \"./views/logOutView.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst bus = new _scripts_Bus__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst application = document.getElementById('application');\nconst router = new _scripts_Router__WEBPACK_IMPORTED_MODULE_0__[\"default\"](application);\n\nrouter.register('/', _views_mainPageView__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nrouter.register('/profile', _views_profileView__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nrouter.register('/login', _views_loginView__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nrouter.register('/signup', _views_signUpView__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nrouter.register('/logout', _views_logOutView__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\nrouter.start();\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./modules/API/forms.js":
/*!******************************!*\
  !*** ./modules/API/forms.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./modules/config.js\");\n\n\nconst { backend } = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nfunction validateEmail(email) {\n\tvar re = /^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n\treturn re.test(email);\n}\nfunction createInput (application, data, field, style) {\n\tconst settingField = application.querySelector(`#${field}-setting`);\n\tconst settingInput = document.createElement('input');\n\n\tfunction createInput (e) {\n\t\te.preventDefault();\n\t\tsettingField.innerHTML = '';\n\t\tsettingInput.classList = settingField.classList;\n\t\tsettingInput.id = `status-${field}-editable`;\n\t\tlet temp = settingField.innerHTML;\n\t\tsettingField.innerHTML = '';\n\t\tsettingInput.value = temp;\n\t\tsettingInput.placeholder = `${field}`;\n\t\tsettingInput.style.cssText = style;\n\t\tsettingField.appendChild(settingInput);\n\t\tsettingInput.focus();\n\t\te.target.removeEventListener('dblclick', createInput);\n\t}\n\n\tsettingField.addEventListener('dblclick', createInput);\n\n\tsettingInput.addEventListener('blur', function () {\n\t\tconsole.log(data.id);\n\t\tif (settingInput.value !== '') {\n\t\t\tswitch (field) {\n\t\t\tcase 'fstatus':\n\t\t\t\tdata.fstatus = settingInput.value;\n\t\t\t\tbreak;\n\t\t\tcase 'phone':\n\t\t\t\tdata.phone = settingInput.value;\n\t\t\t\tbreak;\n\t\t\tcase 'email':\n\t\t\t\tif(!validateEmail(settingInput.value)) {\n\t\t\t\t\tsettingField.innerHTML = '';\n\n\t\t\t\t\tsettingField.innerHTML = '<p><span   style=\"font-size: large; color: red; font-family: Arial; \">*very wrong input</span>';\n\t\t\t\t\tdata.email = '';\n\t\t\t\t}else{\n\t\t\t\t\tdata.email = settingInput.value;\n\t\t\t\t}\n\t\t\t\tbreak;\n\t\t\tcase 'username':\n\t\t\t\tdata.username = settingInput.value;\n\t\t\t\tbreak;\n\t\t\tcase 'fullname':\n\t\t\t\tdata.fullname = settingInput.value;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tfetch(`${backend}/users/${data.id}`, {\n\t\t\t\tmethod: 'PUT',\n\t\t\t\theaders: {\n\t\t\t\t\t'Content-Type': 'application/json;charset=utf-8',\n\t\t\t\t},\n\t\t\t\tbody: JSON.stringify(data),\n\t\t\t\tcredentials: 'include',\n\t\t\t\tmode: 'cors',\n\t\t\t}).then(response => {\n\t\t\t\tconsole.dir(response);\n\t\t\t})\n\t\t\t\t.catch(err => {\n\t\t\t\t\tconsole.log(err);\n\t\t\t\t});\n\t\t}\n\t});\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createInput);\n\n//# sourceURL=webpack:///./modules/API/forms.js?");

/***/ }),

/***/ "./modules/API/login.js":
/*!******************************!*\
  !*** ./modules/API/login.js ***!
  \******************************/
/*! exports provided: createLogin, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLogin\", function() { return createLogin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./modules/config.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main */ \"./main.js\");\n\nconst {backend} = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\nfunction validateEmail(email) {\n\tconst re = /^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n\treturn re.test(email);\n}\n\nfunction createLogin(application) {\n\n\tconst form = application.querySelector('.login-form');\n\tconst errorMessage = application.querySelector('.error_message');\n\tconst emailField = document.querySelector('#email');\n\tconst passwordField = document.querySelector('#password');\n\n\temailField.addEventListener('click', () => {\n\t\temailField.style.borderColor = 'C4C4C4';\n\t\terrorMessage.innerHTML = '';\n\t});\n\n\tpasswordField.addEventListener('click', () => {\n\t\tpasswordField.style.borderColor = 'C4C4C4';\n\t\terrorMessage.innerHTML = '';\n\t});\n\n\tform.addEventListener('submit', function (e) {\n\t\te.preventDefault();\n\t\tlet email;\n\t\tlet password;\n\t\tlet correct = true;\n\n\t\temail = form.elements['email'].value;\n\t\tpassword = form.elements['password'].value;\n\n\t\tif (form.elements['password'].value === '') {\n\t\t\tshowError('Please, input password:(');\n\t\t\tpasswordField.style.borderColor = '#ff6575';\n\t\t\tcorrect = false;\n\t\t}\n\t\tif (!validateEmail(form.elements['email'].value)) {\n\t\t\tshowError('Please, input correct email:(');\n\t\t\temailField.style.borderColor = '#ff6575';\n\t\t\tcorrect = false;\n\t\t}\n\t\tif (!correct) {\n\t\t\treturn;\n\t\t}\n\t\t//bus.on('fetchUser', createProfile);\n\t\tlogin(application, email, password);\n\n\t});\n}\n\nfunction login(application, email, password) {\n\n\tfetch(`${backend}/login`, {\n\t\tmethod: 'POST',\n\t\theaders: {\n\t\t\t'Content-Type': 'application/json;charset=utf-8',\n\t\t},\n\t\tbody: JSON.stringify({\n\t\t\temail: email,\n\t\t\tpassword: password,\n\t\t}),\n\t\tcredentials: 'include',\n\t\tmode: 'cors',\n\t}).then(response => {\n\t\tif (response.status === 400) {\n\t\t\tshowError(\"Wrong email or password\");\n\t\t\tthrow new Error(\n\t\t\t\t`Ошибочные данные: ${response.status}`);\n\t\t}\n\t\tif (response.status === 500) {\n\t\t\tshowError(\"Server error:(\");\n\t\t\tthrow new Error(\n\t\t\t\t`Серверу плохо: ${response.status}`);\n\t\t}\n\t\tif (response.status === 200) {\n\t\t\treturn response.json();\n\t\t}\n\t})\n\t\t.then(user => {\n\t\t\tconsole.log(`Logged in: ${user.email}`);\n\t\t\t_main__WEBPACK_IMPORTED_MODULE_1__[\"bus\"].emit('getUser', user);\n\t\t\t_main__WEBPACK_IMPORTED_MODULE_1__[\"router\"].go('/profile');\n\t\t})\n\t\t.catch(err => {\n\t\t\tconsole.error(err);\n\t\t});\n}\n\nfunction showError(text) {\n\tconst errorMessage = application.querySelector('.error_message');\n\terrorMessage.innerHTML = text;\n}\n\n\n\n//# sourceURL=webpack:///./modules/API/login.js?");

/***/ }),

/***/ "./modules/API/logout.js":
/*!*******************************!*\
  !*** ./modules/API/logout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./modules/config.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main */ \"./main.js\");\n\nconst {backend} = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nfunction handleLogout() {\n\tfetch(`${backend}/logout`, {\n\t\tmethod: 'POST',\n\t\theaders: {\n\t\t\t'Content-Type': 'application/json;charset=utf-8',\n\t\t},\n\t\tbody: '',\n\t\tcredentials: 'include',\n\t\tmode: 'cors',\n\t}).then(response => {\n\t\tif (response.status === 500) {\n\t\t\tthrow new Error(\n\t\t\t\t`Серверу плохо:(: ${response.status}`);\n\t\t}\n\t\tif (response.status === 401) {\n\t\t\tthrow new Error(\n\t\t\t\t`Ошибка авторизации: ${response.status}`);\n\t\t}\n\t\tif (response.status === 200) {\n\t\t\treturn response.text();\n\t\t}\n\t})\n\t\t.then(data => {\n\t\t\tconsole.log(data);\n\t\t\t_main__WEBPACK_IMPORTED_MODULE_1__[\"bus\"].emit('userLoggedIn', false);\n\t\t\t_main__WEBPACK_IMPORTED_MODULE_1__[\"router\"].go('/');\n\t\t})\n\t\t.catch(err => {\n\t\t\tconsole.error(err);\n\t\t});\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handleLogout);\n\n//# sourceURL=webpack:///./modules/API/logout.js?");

/***/ }),

/***/ "./modules/API/mainpage.js":
/*!*********************************!*\
  !*** ./modules/API/mainpage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./modules/config.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main */ \"./main.js\");\n\nconst { backend } = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\n\nasync function createMainPage () {\n\ttry {\n\t\tlet response = await fetch(`${backend}/users`, {\n\t\t\tmethod: 'GET',\n\t\t\tcredentials: 'include',\n\t\t\tmode: 'cors',\n\t\t});\n\t\t_main__WEBPACK_IMPORTED_MODULE_1__[\"bus\"].emit('userLoggedIn', response.status === 200);\n\t\t_main__WEBPACK_IMPORTED_MODULE_1__[\"router\"].go('/');\n\n\t} catch (error) {\n\t\tconsole.error(error);\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createMainPage);\n\n//# sourceURL=webpack:///./modules/API/mainpage.js?");

/***/ }),

/***/ "./modules/API/profile.js":
/*!********************************!*\
  !*** ./modules/API/profile.js ***!
  \********************************/
/*! exports provided: createProfile, createInputs, getUserPhoto, assignSomeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProfile\", function() { return createProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createInputs\", function() { return createInputs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserPhoto\", function() { return getUserPhoto; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assignSomeData\", function() { return assignSomeData; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./modules/config.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ \"./modules/API/forms.js\");\n/* harmony import */ var _wrkspaceInteraction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrkspaceInteraction */ \"./modules/API/wrkspaceInteraction.js\");\n/* harmony import */ var _workers_profile_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../workers/profile.worker */ \"./workers/profile.worker.js\");\n/* harmony import */ var _workers_profile_worker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_workers_profile_worker__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../main */ \"./main.js\");\n\n\n\n\n\n\n\nconst { backend } = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\nfunction assignSomeData (data) {\n\tdata[\"chats\"] = [\n\t\t{\n\t\t\tname: \"Alex Spiridonova\",\n\t\t\tnumber: 10,\n\t\t\tlastMsg: \"WTF?\"\n\t\t},\n\t\t{\n\t\t\tname: \"Someone New\",\n\t\t\tnumber: 3,\n\t\t\tlastMsg: \"HYD?\"\n\t\t},\n\t\t{\n\t\t\tname: \"No One\",\n\t\t\tnumber: 1,\n\t\t\tlastMsg: \"?\"\n\t\t},\n\t\t{\n\t\t\tname: \"Bono u2\",\n\t\t\tnumber: \"1\",\n\t\t\tlastMsg: \"Come to concert tonight\",\n\t\t}\n\t];\n\n\tdata[\"wrkspaces\"] = [\n\t\t{\n\t\t\ttitle: \"CoolCode\",\n\t\t\tchannels: [{\n\t\t\t\ttitle: \"important-stuff\",\n\t\t\t\tmembers: 4,\n\t\t\t\tmessages: null,\n\t\t\t\tmuted: true,\n\t\t\t\tstarred: true,\n\t\t\t\tpublic: false,\n\t\t\t\tprivate: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: \"some-weird-stuff\",\n\t\t\t\tmembers: 3,\n\t\t\t\tmessages: 5,\n\t\t\t\tmuted: true,\n\t\t\t\tstarred: false,\n\t\t\t\tpublic: false,\n\t\t\t\tprivate: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: \"Information\",\n\t\t\t\tmembers: null,\n\t\t\t\tmessages: 1,\n\t\t\t\tmuted: false,\n\t\t\t\tstarred: false,\n\t\t\t\tpublic: true,\n\t\t\t\tprivate: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: \"Vasya Romanov\",\n\t\t\t\tmembers: null,\n\t\t\t\tmessages: null,\n\t\t\t\tmuted: true,\n\t\t\t\tstarred: false,\n\t\t\t\tpublic: false,\n\t\t\t\tprivate: true,\n\t\t\t}],\n\t\t\tmembers: [\"AS\", \"Vasya Romanov\", \"Bono\", \"U\"],\n\t\t}\n\t];\n\n}\n\nasync function createProfile () {\n\ttry {\n\t\tlet response = await fetch(`${backend}/users`, {\n\t\t\tmethod: 'GET',\n\t\t\tcredentials: 'include',\n\t\t\tmode: 'cors',\n\t\t});\n\t\tif (response.status !== 200) {\n\t\t\tthrow new Error(\n\t\t\t\t`Not logged in: ${response.status}`);\n\t\t}\n\t\tlet user = await response.json();\n\n\t\tconsole.log(user);\n\t\t_main__WEBPACK_IMPORTED_MODULE_4__[\"bus\"].emit('getUser', user);\n\t\t_main__WEBPACK_IMPORTED_MODULE_4__[\"router\"].go('/profile');\n\t}\n\tcatch (error) {\n\t\tconsole.error(error);\n\t}\n}\n\nasync function createInputs (application, user) {\n\tObject(_forms__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(application, user, 'fstatus',\n\t\t`border: none; outline: none; padding: 0; height: 30px; margin: 0`);\n\tObject(_forms__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(application, user, 'email',\n\t\t`border: none; outline: none; padding: 0; height: 30px; margin: 0`);\n\tObject(_forms__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(application, user, 'username',\n\t\t`border: none; outline: none; margin: 0`);\n\tObject(_forms__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(application, user, 'fullname',\n\t\t`border: none; outline: none; margin: 0`);\n\tObject(_forms__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(application, user, 'phone',\n\t\t`border: none; outline: none; margin: 0`);\n\tcreateImageUpload(user.id);\n\tObject(_wrkspaceInteraction__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\nasync function getUserPhoto (id) {\n\tconsole.log(` Getting user ${id} photo`);\n\ttry{\n\t\tlet response = await fetch(`${backend}/photos/${id}`, {\n\t\t\tmethod: 'GET',\n\t\t\tcredentials: 'include',\n\t\t\tmode: 'cors',\n\t\t});\n\t\tif (response.status !== 200) {\n\t\t\tthrow new Error(\n\t\t\t\t`Не зашли: ${response.status}`);\n\t\t}\n\t\tlet buffer = await response.blob();\n\t\tlet worker = new _workers_profile_worker__WEBPACK_IMPORTED_MODULE_3___default.a();\n\t\tworker.postMessage(buffer);\n\n\t\t worker.onmessage = function(result) {\n\t\t \tdocument.getElementById('avatar').src = result.data;\n\t\t\t_main__WEBPACK_IMPORTED_MODULE_4__[\"bus\"].emit('hideLoader' );\n\t\t};\n\t} catch (error) {\n\t\tconsole.log(error);\n\t}\n}\n\nfunction createImageUpload (id) {\n\tconst imageInput = document.getElementById('file');\n\tconsole.log('image upload created');\n\tconst formData = new FormData();\n\n\tformData.append('file', imageInput.files[0]);\n\n\timageInput.addEventListener('change', function () {\n\t\tlet formData = new FormData();\n\t\tformData.append('file', imageInput.files[0]);\n\t\tconsole.log('image upload', imageInput.files[0]);\n\t\tfetch(`${backend}/photos`, {\n\t\t\tmethod: 'POST',\n\t\t\tbody: formData,\n\t\t\tcredentials: 'include',\n\t\t\tmode: 'cors',\n\t\t}).then(response => {\n\t\t\tif (response.status !== 200) {\n\t\t\t\tconsole.log('Error while upload image');\n\t\t\t}\n\t\t\tgetUserPhoto(id);\n\n\t\t});\n\t});\n}\n\n\n\n//# sourceURL=webpack:///./modules/API/profile.js?");

/***/ }),

/***/ "./modules/API/signup.js":
/*!*******************************!*\
  !*** ./modules/API/signup.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ \"./modules/API/login.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./modules/config.js\");\n\n\n\nconst {backend} = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\nfunction validateEmail(email) {\n\tconst re = /^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n\treturn re.test(email);\n}\n\nfunction createSignUp(application) {\n\tconst form = application.querySelector('.sign-up-form');\n\tvar error = document.createElement('div');\n\terror.className = 'error';\n\terror.style.color = 'red';\n\n\tconst emailField = application.querySelector('#email');\n\tconst passwordField = application.querySelector('#password');\n\tconst fullnameField = application.querySelector('#fullname');\n\tconst errorMessage = application.querySelector('.error_message');\n\temailField.addEventListener('click', () => {\n\t\temailField.style.borderColor = 'C4C4C4';\n\t\terrorMessage.innerHTML = '';\n\t});\n\n\tpasswordField.addEventListener('click', () => {\n\t\tpasswordField.style.borderColor = 'C4C4C4';\n\t\terrorMessage.innerHTML = '';\n\t});\n\n\tfullnameField.addEventListener('click', () => {\n\t\tfullnameField.style.borderColor = 'C4C4C4';\n\t\terrorMessage.innerHTML = '';\n\t});\n\tform.addEventListener('submit', function (e) {\n\t\te.preventDefault();\n\t\terror.innerHTML = '';\n\t\tlet email, username;\n\t\tlet password, fullname;\n\t\tlet correct = true;\n\t\tif (form.elements['password'].value === '') {\n\t\t\tshowError('Please, input password:(');\n\t\t\tpasswordField.style.borderColor = '#ff6575';\n\t\t\tcorrect = false;\n\t\t}\n\t\tif (form.elements['fullname'].value === '') {\n\t\t\tshowError('Please, input name:(');\n\t\t\tfullnameField.style.borderColor = '#ff6575';\n\t\t\tcorrect = false;\n\t\t}\n\t\tif (!validateEmail(form.elements['email'].value)) {\n\t\t\tshowError('Please, input correct email:(');\n\t\t\temailField.style.borderColor = '#ff6575';\n\t\t\tcorrect = false;\n\t\t}\n\t\tif (!correct) {\n\t\t\treturn;\n\t\t}\n\n\t\temail = form.elements['email'].value;\n\t\tpassword = form.elements['password'].value;\n\t\tfullname = form.elements['fullname'].value;\n\t\tusername = email.split('@')[0];\n\t\tfetch(`${backend}/users`, {\n\t\t\tmethod: 'POST',\n\t\t\theaders: {\n\t\t\t\t'Content-Type': 'application/json;charset=utf-8',\n\t\t\t},\n\t\t\tbody: JSON.stringify({\n\t\t\t\temail: email,\n\t\t\t\tpassword: password,\n\t\t\t\tfullname: fullname,\n\t\t\t\tusername: username,\n\t\t\t}),\n\t\t\tcredentials: 'include',\n\t\t\tmode: 'cors',\n\t\t}).then(response => {\n\t\t\tconsole.dir(response);\n\t\t\tif (response.status === 400) {\n\t\t\t\tshowError('Sorry, this email is already registered');\n\t\t\t\temailField.style.borderColor = '#ff6575';\n\t\t\t\tthrow new Error(`Такая почта занята !!`);\n\t\t\t}\n\t\t\tif (response.status !== 200) {\n\t\t\t\tthrow new Error(`Неверный статус: ${response.status}`);\n\t\t\t}\n\t\t\treturn response.text();\n\t\t})\n\t\t\t.then(() => {\n\t\t\t\tconsole.log(`Signed up: ${email}`);\n\t\t\t\tObject(_login__WEBPACK_IMPORTED_MODULE_0__[\"login\"])(application, email, password);\n\n\t\t\t})\n\t\t\t.catch(err => {\n\t\t\t\tconsole.error(err);\n\t\t\t});\n\t});\n\n}\n\nfunction showError(text) {\n\tconst errorMessage = application.querySelector('.error_message');\n\terrorMessage.innerHTML = text;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createSignUp);\n\n//# sourceURL=webpack:///./modules/API/signup.js?");

/***/ }),

/***/ "./modules/API/wrkspaceInteraction.js":
/*!********************************************!*\
  !*** ./modules/API/wrkspaceInteraction.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction openWrkSpaceInfo() {\n\tlet tabs = document.querySelectorAll(\".wrkspace-outer\");\n\ttabs.forEach((tab)=> {\n\t    const openup = tab.querySelector(\".expandable\");\n\t\ttab.addEventListener(\"click\", ()=>{\n\t\t    if (!openup.classList.contains(\"clicked\")) openup.className += \" clicked\";\n\t\t    else openup.classList.remove(\"clicked\");\n\t\t}\n\t\t);\n\t});\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (openWrkSpaceInfo);\n\n//# sourceURL=webpack:///./modules/API/wrkspaceInteraction.js?");

/***/ }),

/***/ "./modules/config.js":
/*!***************************!*\
  !*** ./modules/config.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst settings = {\n\tbackend: 'http://localhost:8080',\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (settings);\n\n//# sourceURL=webpack:///./modules/config.js?");

/***/ }),

/***/ "./scripts/Bus.js":
/*!************************!*\
  !*** ./scripts/Bus.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Bus {\n\tconstructor () {\n\t\tif (Bus.__instance) {\n\t\t\treturn Bus.__instance;\n\t\t}\n\n\t\tthis._handlers = {};\n\n\t\tBus.__instance = this;\n\t}\n\n\ton(eventName, callback) {\n\t\tif (!this._handlers) this._handlers = {};\n\t\tif (!this._handlers[eventName]) {\n\t\t\tthis._handlers[eventName] = [];\n\t\t}\n\t\tthis._handlers[eventName].push(callback);\n\t};\n\n\toff(eventName, callback) {\n\t\tthis._handlers[eventName] = this._handlers[eventName]\n\t\t\t.filter(function (listener) {\n\t\t\t\treturn listener !== callback;\n\t\t\t});\n\t};\n\n\temit (eventName, ...data) {\n\t\tif (!this._handlers || !this._handlers[eventName]) {\n\t\t\treturn;\n\t\t}\n\n\t\tthis._handlers[eventName].forEach(handler => handler.apply(this, data));\n\t};\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bus);\n\n//# sourceURL=webpack:///./scripts/Bus.js?");

/***/ }),

/***/ "./scripts/Router.js":
/*!***************************!*\
  !*** ./scripts/Router.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Router {\n\tconstructor(application) {\n\t\tif (Router.__instance) {\n\t\t\treturn Router.__instance;\n\t\t}\n\n\t\tthis._paths = {};\n\t\tthis._application = application;\n\n\t\tRouter.__instance = this;\n\n\t}\n\n\tregister(path, view) {\n\t\tthis._paths[path] = {\n\t\t\tviewClassName : view,\n\t\t\tviewObject: new view({}, this._application),\n\t\t\tparent : this._application,\n\t\t};\n\t};\n\n\tgo(path) {\n\t\tthis.open(path);\n\t}\n\n\topen(path) {\n\t\tconst currentPath = this._paths[path];\n\t\tif (window.location.pathname !== path) {\n\t\t\twindow.history.pushState(\n\t\t\t\tnull,\n\t\t\t\t'',\n\t\t\t\tpath\n\t\t\t);\n\t\t}\n\t\tcurrentPath.viewObject.show();\n\n\t}\n\n\tstart() {\n\n\t\tthis._application.addEventListener('click', function (event) {\n\t\t\tconst { target } = event;\n\t\t\tif (!(target instanceof HTMLAnchorElement)) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tevent.preventDefault();\n\t\t\tconst link = event.target;\n\t\t\tconsole.log({\n\t\t\t\tpathname: link.pathname\n\t\t\t});\n\n\t\t\tthis.open(link.pathname);\n\t\t}.bind(this));\n\n\t\twindow.onpopstate = function () {\n\t\t\tconst currentPath = window.location.pathname;\n\t\t\tthis.open(currentPath);\n\t\t}.bind(this);\n\n\t\tconst currentPath = window.location.pathname;\n\t\tthis.open(currentPath);\n\t};\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);\n\n//# sourceURL=webpack:///./scripts/Router.js?");

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/main.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./styles/main.css?");

/***/ }),

/***/ "./views/baseView.js":
/*!***************************!*\
  !*** ./views/baseView.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_Bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/Bus */ \"./scripts/Bus.js\");\n\n\nclass BaseView {\n\tconstructor (data = {}, parent = document.body) {\n\t\tthis._data = data;\n\t    this._parent = parent;\n\t    this._active = false;\n\t    this._bus = new _scripts_Bus__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\t};\n\trender() {\n\t    this._parent.innerText = \"NOTHING TO RENDER\";\n\t}\n\tactivate() {\n\t    this._active = true;\n\t    render();\n\t}\n\tdeactivate() {\n\t    this._active = false;\n\t    this._parent.innerHTML = \"\";\n\t}\n\n\tget data() {\n\t\treturn this._data;\n\t}\n\n\tset data(dataToSet) {\n\t\tthis._data = {...dataToSet};\n\t}\n\n\tget parent() {\n\t\treturn this._parent;\n\t}\n\n\tset parent(parent) {\n\t\tthis._parent = parent;\n\t}\n\n\tget active() {\n\t    return this._active;\n\t}\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseView);\n\n//# sourceURL=webpack:///./views/baseView.js?");

/***/ }),

/***/ "./views/logOutView.js":
/*!*****************************!*\
  !*** ./views/logOutView.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _baseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseView */ \"./views/baseView.js\");\n/* harmony import */ var _modules_API_logout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/API/logout */ \"./modules/API/logout.js\");\n\n\n\nclass logoutView extends _baseView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\tconstructor (data, parent) {\n\t\tsuper (data, parent);\n\t\tthis._bus.on('logout', _modules_API_logout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\t};\n\tshow() {\n\t\tthis._bus.emit('logout', this._parent);\n\n\t}\n\trender() {\n\t\tthis._parent.innerHTML = '';\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (logoutView);\n\n//# sourceURL=webpack:///./views/logOutView.js?");

/***/ }),

/***/ "./views/loginView.js":
/*!****************************!*\
  !*** ./views/loginView.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _baseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseView */ \"./views/baseView.js\");\n/* harmony import */ var _modules_API_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/API/login */ \"./modules/API/login.js\");\n\n\nconst loginTemplate = __webpack_require__(/*! ../components/Login/login.pug */ \"./components/Login/login.pug\");\n\nclass loginView extends _baseView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\tconstructor (data, parent) {\n\t\tsuper (data, parent);\n\t\tthis._bus.on('login', _modules_API_login__WEBPACK_IMPORTED_MODULE_1__[\"createLogin\"]);\n\t};\n\tshow() {\n\t\tthis.render();\n\t\tthis._bus.emit('login', this._parent);\n\n\t}\n\trender() {\n\t\tthis._parent.innerHTML = loginTemplate(this._data);\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loginView);\n\n//# sourceURL=webpack:///./views/loginView.js?");

/***/ }),

/***/ "./views/mainPageView.js":
/*!*******************************!*\
  !*** ./views/mainPageView.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _baseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseView */ \"./views/baseView.js\");\n/* harmony import */ var _modules_API_mainpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/API/mainpage */ \"./modules/API/mainpage.js\");\n\n\nconst bodyTemplate = __webpack_require__(/*! ../components/MainPage/body.pug */ \"./components/MainPage/body.pug\");\nconst headerTemplate = __webpack_require__(/*! ../components/Header/header.pug */ \"./components/Header/header.pug\");\n\nclass mainPageView extends _baseView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\tconstructor (data, parent) {\n\t\tsuper (data, parent);\n\t\tthis._bus.on('fetchUsers', _modules_API_mainpage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\t\tthis._bus.on('userLoggedIn', this.userStatus.bind(this));\n\t};\n\tuserStatus(loggedIn) {\n\t\tthis._data[\"login\"] = loggedIn;\n\n\t}\n\tshow() {\n\t\tif (!(\"login\" in this._data))\n\t\t\tthis._bus.emit('fetchUsers', this._parent);\n\t\telse this.render();\n\t}\n\trender() {\n\t\tthis._parent.innerHTML = '';\n\t\tthis._parent.innerHTML = headerTemplate(this._data);\n\t\tthis._parent.innerHTML += bodyTemplate(this._data);\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainPageView);\n\n\n//# sourceURL=webpack:///./views/mainPageView.js?");

/***/ }),

/***/ "./views/profileView.js":
/*!******************************!*\
  !*** ./views/profileView.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _baseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseView */ \"./views/baseView.js\");\n/* harmony import */ var _components_Message_Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Message/Message */ \"./components/Message/Message.js\");\n/* harmony import */ var _components_WrkSpace_WrkSpace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/WrkSpace/WrkSpace */ \"./components/WrkSpace/WrkSpace.js\");\n/* harmony import */ var _modules_API_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/API/profile */ \"./modules/API/profile.js\");\n\n\n\n\nconst profileTemplate = __webpack_require__(/*! ../components/Profile/profile.pug */ \"./components/Profile/profile.pug\");\nconst headerTemplate = __webpack_require__(/*! ../components/Header/header.pug */ \"./components/Header/header.pug\");\n\nclass profileView extends _baseView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\tconstructor (data, parent) {\n\t\tsuper (data, parent);\n\t\tthis._bus.on('drawProfilePage', this.drawAll.bind(this));\n\t\tthis._bus.on('getUser', this.getUser.bind(this));\n\t\tthis._bus.on('fetchUser', _modules_API_profile__WEBPACK_IMPORTED_MODULE_3__[\"createProfile\"]);\n\t\tthis._bus.on('fetchAvatar', _modules_API_profile__WEBPACK_IMPORTED_MODULE_3__[\"getUserPhoto\"]);\n\t\tthis._bus.on('createInputs', _modules_API_profile__WEBPACK_IMPORTED_MODULE_3__[\"createInputs\"]);\n\t\tthis._bus.on('assignData', _modules_API_profile__WEBPACK_IMPORTED_MODULE_3__[\"assignSomeData\"]);\n\t};\n\n\tdrawAll() {\n\t\tthis._bus.emit('assignData', this._data);\n\t\tthis.render();\n\t\tthis.showLoader();\n\t\tthis._bus.on('hideLoader', this.hideLoader);\n\t\tthis._bus.emit('fetchAvatar', this._data[\"user\"].id);\n\t\tthis._bus.emit('createInputs', this._parent, this._data[\"user\"]);\n\t}\n\n\tgetUser(user) {\n\t\tthis._data[\"user\"] = user;\n\t}\n\tshow() {\n\t    if (!this._data[\"user\"])\n\t        this._bus.emit('fetchUser', this._parent);\n\t    else this._bus.emit('drawProfilePage');\n\t}\n\n\thideLoader() {\n\t\tdocument.getElementById(\"loader\").style.display = \"none\";\n\t\tdocument.getElementById(\"avatar\").style.display = \"block\";\n\t}\n\n\tshowLoader() {\n\t\tdocument.getElementById(\"avatar\").style.display = \"none\";\n\t\tdocument.getElementById(\"loader\").style.display = \"block\";\n\n\t}\n\n\trender() {\n\t\tthis._parent.innerHTML = '';\n\t\tthis._data[\"login\"] = true;\n\t\tthis._parent.innerHTML = headerTemplate(this._data);\n\n\t\tthis.data['chat'] = false;\n\t\tthis.parent.innerHTML += profileTemplate(this._data.user);\n\n\t\tconst root = document.getElementsByClassName('chat-msg')[0];\n\n\t\tif (this._data[\"chats\"]) {\n\t\t\tthis.data.chats.forEach((mes) => {\n\t\t\t\tconst mess = new _components_Message_Message__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\t\t\t\tmess.data = mes;\n\t\t\t\tconst message = document.createElement('div');\n\t\t\t\tmessage.className = 'row msg';\n\t\t\t\tmessage.innerHTML = mess.render();\n\t\t\t\troot.appendChild(message);\n\t\t\t});\n\t\t}\n\n\t\tif (this._data[\"wrkspaces\"]) {\n\t\t\tthis.data.wrkspaces.forEach((wsp) => {\n\t\t\t\tconst wrkSpace = new _components_WrkSpace_WrkSpace__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\t\t\t\twrkSpace.data = wsp;\n\t\t\t\tconst w = wrkSpace.render();\n\t\t\t\troot.appendChild(w);\n\t\t\t});\n\t\t}\n\n\t\tconst img = document.getElementById('avatar');\n\t\tconst input = document.getElementById('file');\n\t\timg.addEventListener('click', function () {\n\t\t\tinput.click();\n\n\t\t});\n\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (profileView);\n\n\n//# sourceURL=webpack:///./views/profileView.js?");

/***/ }),

/***/ "./views/signUpView.js":
/*!*****************************!*\
  !*** ./views/signUpView.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _baseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseView */ \"./views/baseView.js\");\n/* harmony import */ var _modules_API_signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/API/signup */ \"./modules/API/signup.js\");\n\n\nconst signupTemplate = __webpack_require__(/*! ../components/Signup/signup.pug */ \"./components/Signup/signup.pug\");\n\nclass signUpView extends _baseView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\tconstructor (data, parent) {\n\t\tsuper (data, parent);\n\t\tthis._bus.on('signUp', _modules_API_signup__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\t};\n\tshow() {\n\t\tthis.render();\n\t\tthis._bus.emit('signUp', this._parent);\n\n\t}\n\trender() {\n\t\tthis._parent.innerHTML = signupTemplate(this._data);\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (signUpView);\n\n//# sourceURL=webpack:///./views/signUpView.js?");

/***/ }),

/***/ "./workers/profile.worker.js":
/*!***********************************!*\
  !*** ./workers/profile.worker.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function() {\n  return __webpack_require__(/*! !../node_modules/worker-loader/dist/workers/InlineWorker.js */ \"../node_modules/worker-loader/dist/workers/InlineWorker.js\")(\"/******/ (function(modules) { // webpackBootstrap\\n/******/ \\t// The module cache\\n/******/ \\tvar installedModules = {};\\n/******/\\n/******/ \\t// The require function\\n/******/ \\tfunction __webpack_require__(moduleId) {\\n/******/\\n/******/ \\t\\t// Check if module is in cache\\n/******/ \\t\\tif(installedModules[moduleId]) {\\n/******/ \\t\\t\\treturn installedModules[moduleId].exports;\\n/******/ \\t\\t}\\n/******/ \\t\\t// Create a new module (and put it into the cache)\\n/******/ \\t\\tvar module = installedModules[moduleId] = {\\n/******/ \\t\\t\\ti: moduleId,\\n/******/ \\t\\t\\tl: false,\\n/******/ \\t\\t\\texports: {}\\n/******/ \\t\\t};\\n/******/\\n/******/ \\t\\t// Execute the module function\\n/******/ \\t\\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\\n/******/\\n/******/ \\t\\t// Flag the module as loaded\\n/******/ \\t\\tmodule.l = true;\\n/******/\\n/******/ \\t\\t// Return the exports of the module\\n/******/ \\t\\treturn module.exports;\\n/******/ \\t}\\n/******/\\n/******/\\n/******/ \\t// expose the modules object (__webpack_modules__)\\n/******/ \\t__webpack_require__.m = modules;\\n/******/\\n/******/ \\t// expose the module cache\\n/******/ \\t__webpack_require__.c = installedModules;\\n/******/\\n/******/ \\t// define getter function for harmony exports\\n/******/ \\t__webpack_require__.d = function(exports, name, getter) {\\n/******/ \\t\\tif(!__webpack_require__.o(exports, name)) {\\n/******/ \\t\\t\\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\\n/******/ \\t\\t}\\n/******/ \\t};\\n/******/\\n/******/ \\t// define __esModule on exports\\n/******/ \\t__webpack_require__.r = function(exports) {\\n/******/ \\t\\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\\n/******/ \\t\\t\\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\\n/******/ \\t\\t}\\n/******/ \\t\\tObject.defineProperty(exports, '__esModule', { value: true });\\n/******/ \\t};\\n/******/\\n/******/ \\t// create a fake namespace object\\n/******/ \\t// mode & 1: value is a module id, require it\\n/******/ \\t// mode & 2: merge all properties of value into the ns\\n/******/ \\t// mode & 4: return value when already ns object\\n/******/ \\t// mode & 8|1: behave like require\\n/******/ \\t__webpack_require__.t = function(value, mode) {\\n/******/ \\t\\tif(mode & 1) value = __webpack_require__(value);\\n/******/ \\t\\tif(mode & 8) return value;\\n/******/ \\t\\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\\n/******/ \\t\\tvar ns = Object.create(null);\\n/******/ \\t\\t__webpack_require__.r(ns);\\n/******/ \\t\\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\\n/******/ \\t\\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\\n/******/ \\t\\treturn ns;\\n/******/ \\t};\\n/******/\\n/******/ \\t// getDefaultExport function for compatibility with non-harmony modules\\n/******/ \\t__webpack_require__.n = function(module) {\\n/******/ \\t\\tvar getter = module && module.__esModule ?\\n/******/ \\t\\t\\tfunction getDefault() { return module['default']; } :\\n/******/ \\t\\t\\tfunction getModuleExports() { return module; };\\n/******/ \\t\\t__webpack_require__.d(getter, 'a', getter);\\n/******/ \\t\\treturn getter;\\n/******/ \\t};\\n/******/\\n/******/ \\t// Object.prototype.hasOwnProperty.call\\n/******/ \\t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\\n/******/\\n/******/ \\t// __webpack_public_path__\\n/******/ \\t__webpack_require__.p = \\\"\\\";\\n/******/\\n/******/\\n/******/ \\t// Load entry module and return exports\\n/******/ \\treturn __webpack_require__(__webpack_require__.s = \\\"./workers/profile.worker.js\\\");\\n/******/ })\\n/************************************************************************/\\n/******/ ({\\n\\n/***/ \\\"./workers/profile.worker.js\\\":\\n/*!***********************************!*\\\\\\n  !*** ./workers/profile.worker.js ***!\\n  \\\\***********************************/\\n/*! no static exports found */\\n/***/ (function(module, exports) {\\n\\neval(\\\"onmessage = function(buffer) {\\\\n\\\\tconsole.log(\\\\\\\"message received\\\\\\\");\\\\n\\\\tlet reader = new FileReaderSync();\\\\n\\\\tlet answer = reader.readAsDataURL(buffer.data);\\\\n\\\\tpostMessage(answer);\\\\n};\\\\n\\\\n//# sourceURL=webpack:///./workers/profile.worker.js?\\\");\\n\\n/***/ })\\n\\n/******/ });\", null);\n};\n\n//# sourceURL=webpack:///./workers/profile.worker.js?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** multi ./main ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./main */\"./main.js\");\n\n\n//# sourceURL=webpack:///multi_./main?");

/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ });
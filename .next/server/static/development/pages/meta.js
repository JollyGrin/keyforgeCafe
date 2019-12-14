module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DeckItem.js":
/*!********************************!*\
  !*** ./components/DeckItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeckItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dean/github/keyforgeCafe/components/DeckItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class DeckItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    // const { item } = this.props;
    console.log(this.props, 'final stage!');
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }

}

/***/ }),

/***/ "./components/DeckLists.js":
/*!*********************************!*\
  !*** ./components/DeckLists.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeckLists; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_DeckItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DeckItem */ "./components/DeckItem.js");

var _jsxFileName = "/Users/dean/github/keyforgeCafe/components/DeckLists.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class DeckLists extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const array = this.props.decks;

    const object = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props.decks);

    console.log(array, 'array');
    console.log(object, 'object');
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    });
  }

}

/***/ }),

/***/ "./components/TheHead.js":
/*!*******************************!*\
  !*** ./components/TheHead.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/dean/github/keyforgeCafe/components/TheHead.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), __jsx("meta", {
  charSet: "utf-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Keyforge Cafe"), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/static/css/styles.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})));

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: getResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResults", function() { return getResults; });
/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airtable */ "airtable");
/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(airtable__WEBPACK_IMPORTED_MODULE_0__);

airtable__WEBPACK_IMPORTED_MODULE_0___default.a.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keyBj1QK7piMXmdoF'
});
const base = airtable__WEBPACK_IMPORTED_MODULE_0___default.a.base('appuxyROrm9vUAbRD');

async function getResults() {
  let results = [];
  await base('Matches').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 5,
    view: 'Grid view'
  }).firstPage((err, records) => {
    if (err) {
      console.error(err);
      return;
    } // console.log(records);
    // results.push(records);


    results = records;
  });
  debugger;
  return results;
}



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./pages/meta.js":
/*!***********************!*\
  !*** ./pages/meta.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return meta; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TheHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TheHead */ "./components/TheHead.js");
/* harmony import */ var _components_DeckLists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DeckLists */ "./components/DeckLists.js");
/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! airtable */ "airtable");
/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(airtable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");
var _jsxFileName = "/Users/dean/github/keyforgeCafe/pages/meta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class meta extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hello',
      records: [],
      raw: ''
    };
  }

  componentDidMount() {
    airtable__WEBPACK_IMPORTED_MODULE_4___default.a.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: 'keyBj1QK7piMXmdoF'
    });
    const base = airtable__WEBPACK_IMPORTED_MODULE_4___default.a.base('appXfwNirfyLrYXkv');
    let acc = [];
    base('Decks').select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 5,
      view: 'Grid view'
    }).firstPage((err, records) => {
      if (err) {
        console.error(err);
        return;
      }

      records.forEach(record => {
        console.log(record);
        const {
          DeckURL
        } = record.fields; //   debugger;

        acc.push(DeckURL);
        this.setState({
          raw: records
        });
      });
      this.setState({
        records: acc
      });
    });
  }

  render() {
    return __jsx("div", {
      className: "jsx-3682392007",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(_components_TheHead__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3682392007" + " " + 'section',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3682392007" + " " + 'columns',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3682392007" + " " + 'column is-8 is-offset-2',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(_components_DeckLists__WEBPACK_IMPORTED_MODULE_3__["default"], {
      decks: this.state.raw,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3682392007",
      __self: this
    }, ".title.jsx-3682392007,.subtitle.jsx-3682392007{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWFuL2dpdGh1Yi9rZXlmb3JnZUNhZmUvcGFnZXMvbWV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRG9CLEFBSXlCLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2RlYW4vZ2l0aHViL2tleWZvcmdlQ2FmZS9wYWdlcy9tZXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRoZUhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9UaGVIZWFkJ1xuaW1wb3J0IERlY2tMaXN0cyBmcm9tICcuLi9jb21wb25lbnRzL0RlY2tMaXN0cydcbmltcG9ydCBBaXJ0YWJsZSBmcm9tICdhaXJ0YWJsZSdcbmltcG9ydCB7IGdldFJlc3VsdHMgfSBmcm9tICcuLi9saWIvZGInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1ldGEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGV4dDogJ2hlbGxvJyxcbiAgICAgIHJlY29yZHM6IFtdLFxuICAgICAgcmF3OiAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgYXBpS2V5OiAna2V5QmoxUUs3cGlNWG1kb0YnXG4gICAgfSlcblxuICAgIGNvbnN0IGJhc2UgPSBBaXJ0YWJsZS5iYXNlKCdhcHBYZndOaXJmeUxyWVhrdicpXG4gICAgbGV0IGFjYyA9IFtdXG5cbiAgICBiYXNlKCdEZWNrcycpXG4gICAgICAuc2VsZWN0KHtcbiAgICAgICAgLy8gU2VsZWN0aW5nIHRoZSBmaXJzdCAzIHJlY29yZHMgaW4gR3JpZCB2aWV3OlxuICAgICAgICBtYXhSZWNvcmRzOiA1LFxuICAgICAgICB2aWV3OiAnR3JpZCB2aWV3J1xuICAgICAgfSlcbiAgICAgIC5maXJzdFBhZ2UoKGVyciwgcmVjb3JkcykgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVjb3JkKVxuICAgICAgICAgIGNvbnN0IHsgRGVja1VSTCB9ID0gcmVjb3JkLmZpZWxkc1xuICAgICAgICAgIC8vICAgZGVidWdnZXI7XG4gICAgICAgICAgYWNjLnB1c2goRGVja1VSTClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF3OiByZWNvcmRzIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmRzOiBhY2MgfSlcbiAgICAgIH0pXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFRoZUhlYWQgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24nPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW5zJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gaXMtOCBpcy1vZmZzZXQtMic+XG4gICAgICAgICAgICAgIDxEZWNrTGlzdHMgZGVja3M9e3RoaXMuc3RhdGUucmF3fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAudGl0bGUsXG4gICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/dean/github/keyforgeCafe/pages/meta.js */"));
  }

}

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/meta.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dean/github/keyforgeCafe/pages/meta.js */"./pages/meta.js");


/***/ }),

/***/ "airtable":
/*!***************************!*\
  !*** external "airtable" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("airtable");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=meta.js.map
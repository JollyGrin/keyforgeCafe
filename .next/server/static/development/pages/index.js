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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dean/github/keyforgeCafe/components/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("footer", {
      className: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("div", {
      className: "content has-text-centered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Keyforge.Cafe"), " by", ' ', __jsx("a", {
      href: "https://dean.lol",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "dean"), " with \uD83C\uDF7B"))));
  }

}

/***/ }),

/***/ "./components/Match.js":
/*!*****************************!*\
  !*** ./components/Match.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Match; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dean/github/keyforgeCafe/components/Match.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Match extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("span", {
      className: "help is-pulled-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "October 2, 2019"))), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), __jsx("div", {
      className: "box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("div", {
      className: "columns is-vcentered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "column is-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("a", {
      href: "https://www.twitch.tv/videos/489285366",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("img", {
      src: "static/media/thumb.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }))), __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("span", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-crown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), " MrBlockchain"), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), " ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-book",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("a", {
      href: "https://www.thecrucibletracker.com/games/41e02720-e534-11e9-8e02-4f62a4e1cd02/log",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Aphidleshy, He who Farms the Valley"))), __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("span", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "JollyGrin"), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), " ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-book",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), ' ', __jsx("a", {
      href: "https://www.thecrucibletracker.com/games/41e02720-e534-11e9-8e02-4f62a4e1cd02/log",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "The Wounding Sensei"))))));
  }

}

/***/ }),

/***/ "./components/Matches.js":
/*!*******************************!*\
  !*** ./components/Matches.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Matches; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Match */ "./components/Match.js");
var _jsxFileName = "/Users/dean/github/keyforgeCafe/components/Matches.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Matches extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, console.log(this.props), __jsx("div", {
      className: "jsx-127488493" + " " + "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("center", {
      className: "jsx-127488493",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-127488493" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Browse Recently Streamed Matches"))), __jsx("div", {
      className: "jsx-127488493",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx(_Match__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "127488493",
      __self: this
    }, ".title.jsx-127488493{color:#98530a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWFuL2dpdGh1Yi9rZXlmb3JnZUNhZmUvY29tcG9uZW50cy9NYXRjaGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCb0IsQUFHMkIsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL2RlYW4vZ2l0aHViL2tleWZvcmdlQ2FmZS9jb21wb25lbnRzL01hdGNoZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYXRjaCBmcm9tICcuL01hdGNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0Y2hlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnByb3BzKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+QnJvd3NlIFJlY2VudGx5IFN0cmVhbWVkIE1hdGNoZXM8L3A+XG4gICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxNYXRjaCAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTg1MzBhO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/dean/github/keyforgeCafe/components/Matches.js */"));
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

/***/ "./components/TheNav.js":
/*!******************************!*\
  !*** ./components/TheNav.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TheNav; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/dean/github/keyforgeCafe/components/TheNav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class TheNav extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("nav", {
      role: "navigation",
      "aria-label": "main navigation",
      className: "jsx-804658862" + " " + "navbar is-transparent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-804658862" + " " + "navbar-brand",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("a", {
      href: "/",
      className: "jsx-804658862" + " " + "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("img", {
      src: "static/media/kfcafe.svg",
      width: "80",
      height: "40",
      className: "jsx-804658862",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }))), __jsx("div", {
      id: "navbarBasicExample",
      className: "jsx-804658862" + " " + "navbar-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-804658862" + " " + "navbar-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-804658862" + " " + "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("strong", {
      className: "jsx-804658862",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "KeyForge.Cafe"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "804658862",
      __self: this
    }, ".navbar-item.jsx-804658862 img.jsx-804658862{max-height:2.5rem;}.navbar-item.jsx-804658862,.navbar-link.jsx-804658862{color:white;}.navbar-item.jsx-804658862,span.jsx-804658862 strong.jsx-804658862{color:white;}.navbar-dropdown.jsx-804658862 .navbar-item.jsx-804658862{color:#98530a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWFuL2dpdGh1Yi9rZXlmb3JnZUNhZmUvY29tcG9uZW50cy9UaGVOYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURvQixBQUcrQixBQUtOLEFBSUEsQUFJRSxZQVBoQixBQUlBLEVBSUEsSUFiQSIsImZpbGUiOiIvVXNlcnMvZGVhbi9naXRodWIva2V5Zm9yZ2VDYWZlL2NvbXBvbmVudHMvVGhlTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoZU5hdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8bmF2XG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyIGlzLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICByb2xlPVwibmF2aWdhdGlvblwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIm1haW4gbmF2aWdhdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9tZWRpYS9rZmNhZmUuc3ZnXCIgd2lkdGg9XCI4MFwiIGhlaWdodD1cIjQwXCIgLz5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgey8qIDxhXG4gICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItYnVyZ2VyIGJ1cmdlclwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtZW51XCJcbiAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCJuYXZiYXJCYXNpY0V4YW1wbGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9hPiAqL31cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXJCYXNpY0V4YW1wbGVcIiBjbGFzc05hbWU9XCJuYXZiYXItbWVudVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc3RhcnRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPktleUZvcmdlLkNhZmU8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgIHsvKiA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPkRvY3VtZW50YXRpb248L2E+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbSBoYXMtZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWxpbmtcIj5Nb3JlPC9hPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+QWJvdXQ8L2E+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPkpvYnM8L2E+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibmF2YmFyLWRpdmlkZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5SZXBvcnQgYW4gaXNzdWU8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5uYXZiYXItaXRlbSBpbWcge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMi41cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXZiYXItaXRlbSxcbiAgICAgICAgICAubmF2YmFyLWxpbmsge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2YmFyLWl0ZW0sXG4gICAgICAgICAgc3BhbiBzdHJvbmcge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXZiYXItZHJvcGRvd24gLm5hdmJhci1pdGVtIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTg1MzBhO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/dean/github/keyforgeCafe/components/TheNav.js */"));
  }

}

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TheHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TheHead */ "./components/TheHead.js");
/* harmony import */ var _components_TheNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TheNav */ "./components/TheNav.js");
/* harmony import */ var _components_Matches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Matches */ "./components/Matches.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");
var _jsxFileName = "/Users/dean/github/keyforgeCafe/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      matchResults: []
    };
  }

  componentDidMount() {
    const matchResults = Object(_lib_db__WEBPACK_IMPORTED_MODULE_6__["getResults"])();
    console.log(matchResults); // this.setState({ matchResults: matchResults });
    // getResults().then(obj => {
    //   console.log(obj[0]);
    // });
  }

  render() {
    return __jsx("div", {
      className: "jsx-1192695500",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(_components_TheHead__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx(_components_TheNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("section", {
      className: "jsx-1192695500" + " " + "hero is-medium",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1192695500" + " " + "hero-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1192695500" + " " + "columns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1192695500" + " " + "column is-8 is-offset-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1192695500" + " " + "columns is-centered is-vcentered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1192695500" + " " + "column is-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("center", {
      className: "jsx-1192695500",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("img", {
      src: "static/media/kfcafe.svg",
      className: "jsx-1192695500",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-1192695500",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-1192695500" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "keyforge.cafe"), __jsx("br", {
      className: "jsx-1192695500",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx("a", {
      href: "#",
      className: "jsx-1192695500" + " " + "button is-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Join the Discord"), __jsx("p", {
      className: "jsx-1192695500" + " " + "help",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("br", {
      className: "jsx-1192695500",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), "Playing & streaming Keyforge! ", __jsx("br", {
      className: "jsx-1192695500",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), "Now streaming with select verified players."))), __jsx("div", {
      className: "jsx-1192695500" + " " + "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("img", {
      src: "static/media/cards.png",
      className: "jsx-1192695500" + " " + "is-pulled-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }))))))), __jsx("section", {
      className: "jsx-1192695500" + " " + "middle-section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1192695500" + " " + "columns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1192695500" + " " + "column is-8 is-offset-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("br", {
      className: "jsx-1192695500",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), __jsx(_components_Matches__WEBPACK_IMPORTED_MODULE_4__["default"], {
      matchResults: this.state.matchResults,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }))), __jsx("br", {
      className: "jsx-1192695500",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1192695500",
      __self: this
    }, ".title.jsx-1192695500,.subtitle.jsx-1192695500{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWFuL2dpdGh1Yi9rZXlmb3JnZUNhZmUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VvQixBQUl5QixZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9kZWFuL2dpdGh1Yi9rZXlmb3JnZUNhZmUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRoZUhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9UaGVIZWFkJztcbmltcG9ydCBUaGVOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9UaGVOYXYnO1xuaW1wb3J0IE1hdGNoZXMgZnJvbSAnLi4vY29tcG9uZW50cy9NYXRjaGVzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHsgZ2V0UmVzdWx0cyB9IGZyb20gJy4uL2xpYi9kYic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1hdGNoUmVzdWx0czogW11cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgbWF0Y2hSZXN1bHRzID0gZ2V0UmVzdWx0cygpO1xuICAgIGNvbnNvbGUubG9nKG1hdGNoUmVzdWx0cyk7XG5cbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgbWF0Y2hSZXN1bHRzOiBtYXRjaFJlc3VsdHMgfSk7XG5cbiAgICAvLyBnZXRSZXN1bHRzKCkudGhlbihvYmogPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2cob2JqWzBdKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFRoZUhlYWQgLz5cbiAgICAgICAgPFRoZU5hdiAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvIGlzLW1lZGl1bVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtOCBpcy1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1jZW50ZXJlZCBpcy12Y2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9tZWRpYS9rZmNhZmUuc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPmtleWZvcmdlLmNhZmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtbGFyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEpvaW4gdGhlIERpc2NvcmRcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVscFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5aW5nICYgc3RyZWFtaW5nIEtleWZvcmdlISA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vdyBzdHJlYW1pbmcgd2l0aCBzZWxlY3QgdmVyaWZpZWQgcGxheWVycy5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpcy1wdWxsZWQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cInN0YXRpYy9tZWRpYS9jYXJkcy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWlkZGxlLXNlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLTggaXMtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxNYXRjaGVzIG1hdGNoUmVzdWx0cz17dGhpcy5zdGF0ZS5tYXRjaFJlc3VsdHN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Rm9vdGVyIC8+XG5cbiAgICAgICAgey8qIDx2aWRlbyBhdXRvUGxheSBsb29wIGlkPVwidmlkZW8tYmFja2dyb3VuZFwiIG11dGVkIHBsYXlzLWlubGluZT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cInN0YXRpYy9tZWRpYS9rZi53ZWJtXCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgIDwvdmlkZW8+ICovfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAudGl0bGUsXG4gICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/dean/github/keyforgeCafe/pages/index.js */"));
  }

}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dean/github/keyforgeCafe/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "airtable":
/*!***************************!*\
  !*** external "airtable" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("airtable");

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
//# sourceMappingURL=index.js.map
webpackHotUpdate("static/development/pages/meta.js",{

/***/ "./pages/meta.js":
/*!***********************!*\
  !*** ./pages/meta.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return meta; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_TheHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TheHead */ "./components/TheHead.js");
/* harmony import */ var _components_DeckLists__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DeckLists */ "./components/DeckLists.js");
/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(airtable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");





var _jsxFileName = "/Users/dean/github/keyforgeCafe/pages/meta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






var meta =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(meta, _Component);

  function meta(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, meta);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(meta).call(this, props));
    _this.state = {
      text: 'hello',
      records: [],
      raw: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(meta, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      airtable__WEBPACK_IMPORTED_MODULE_9___default.a.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: 'keyBj1QK7piMXmdoF'
      });
      var base = airtable__WEBPACK_IMPORTED_MODULE_9___default.a.base('appXfwNirfyLrYXkv');
      var acc = [];
      base('Decks').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 5,
        view: 'Grid view'
      }).firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }

        records.forEach(function (record) {
          console.log(record);
          var DeckURL = record.fields.DeckURL; //   debugger;

          acc.push(DeckURL);

          _this2.setState({
            raw: records
          });
        });

        _this2.setState({
          records: acc
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-3682392007",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx(_components_TheHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      }, __jsx(_components_DeckLists__WEBPACK_IMPORTED_MODULE_8__["default"], {
        decks: this.state.raw,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3682392007",
        __self: this
      }, ".title.jsx-3682392007,.subtitle.jsx-3682392007{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWFuL2dpdGh1Yi9rZXlmb3JnZUNhZmUvcGFnZXMvbWV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRG9CLEFBSXlCLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2RlYW4vZ2l0aHViL2tleWZvcmdlQ2FmZS9wYWdlcy9tZXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRoZUhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9UaGVIZWFkJ1xuaW1wb3J0IERlY2tMaXN0cyBmcm9tICcuLi9jb21wb25lbnRzL0RlY2tMaXN0cydcbmltcG9ydCBBaXJ0YWJsZSBmcm9tICdhaXJ0YWJsZSdcbmltcG9ydCB7IGdldFJlc3VsdHMgfSBmcm9tICcuLi9saWIvZGInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1ldGEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGV4dDogJ2hlbGxvJyxcbiAgICAgIHJlY29yZHM6IFtdLFxuICAgICAgcmF3OiAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgYXBpS2V5OiAna2V5QmoxUUs3cGlNWG1kb0YnXG4gICAgfSlcblxuICAgIGNvbnN0IGJhc2UgPSBBaXJ0YWJsZS5iYXNlKCdhcHBYZndOaXJmeUxyWVhrdicpXG4gICAgbGV0IGFjYyA9IFtdXG5cbiAgICBiYXNlKCdEZWNrcycpXG4gICAgICAuc2VsZWN0KHtcbiAgICAgICAgLy8gU2VsZWN0aW5nIHRoZSBmaXJzdCAzIHJlY29yZHMgaW4gR3JpZCB2aWV3OlxuICAgICAgICBtYXhSZWNvcmRzOiA1LFxuICAgICAgICB2aWV3OiAnR3JpZCB2aWV3J1xuICAgICAgfSlcbiAgICAgIC5maXJzdFBhZ2UoKGVyciwgcmVjb3JkcykgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVjb3JkKVxuICAgICAgICAgIGNvbnN0IHsgRGVja1VSTCB9ID0gcmVjb3JkLmZpZWxkc1xuICAgICAgICAgIC8vICAgZGVidWdnZXI7XG4gICAgICAgICAgYWNjLnB1c2goRGVja1VSTClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF3OiByZWNvcmRzIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNvcmRzOiBhY2MgfSlcbiAgICAgIH0pXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFRoZUhlYWQgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24nPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW5zJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gaXMtOCBpcy1vZmZzZXQtMic+XG4gICAgICAgICAgICAgIDxEZWNrTGlzdHMgZGVja3M9e3RoaXMuc3RhdGUucmF3fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAudGl0bGUsXG4gICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/dean/github/keyforgeCafe/pages/meta.js */"));
    }
  }]);

  return meta;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=meta.js.28f5393c9fa7fbbecc75.hot-update.js.map
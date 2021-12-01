"use strict";
self["webpackHotUpdate_N_E"]("pages/confetti",{

/***/ "./pages/confetti.js":
/*!***************************!*\
  !*** ./pages/confetti.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Confetti; }
/* harmony export */ });
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_canvas_confetti__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-canvas-confetti */ "./node_modules/react-canvas-confetti/dist/index.js");
/* harmony import */ var react_canvas_confetti__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_canvas_confetti__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "C:\\Users\\Jkogerup\\Dev\\simongame\\pages\\confetti.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var Confetti = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Confetti, _React$Component);

  var _super = _createSuper(Confetti);

  function Confetti() {
    var _this;

    (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Confetti);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "getInstance", function (instance) {
      // saving the instance to an internal property
      _this.confetti = instance;
    });

    (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "onClickCustom", function () {
      // starting the animation with custom settings
      _this.confetti({
        particleCount: Math.ceil(Math.random() * 1000),
        spread: 180
      });
    });

    return _this;
  }

  (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Confetti, [{
    key: "render",
    value: function render() {
      var style = {
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: -1
      };
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_canvas_confetti__WEBPACK_IMPORTED_MODULE_8___default()) // set the styles as for a usual react component
        , {
          style: style // set the class name as for a usual react component
          ,
          className: "yourClassName" // set the callback for getting instance. The callback will be called after initialization ReactCanvasConfetti component
          ,
          refConfetti: this.getInstance
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
          onClick: this.onClickCustom,
          children: "Fire with custom"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, this)]
      }, void 0, true);
    }
  }]);

  return Confetti;
}((react__WEBPACK_IMPORTED_MODULE_7___default().Component));



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29uZmV0dGkuODk0MjAwODM4MTdkMWYxMzQ5NjIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztJQUVxQkU7Ozs7Ozs7Ozs7Ozs7Ozs7a1VBQ0wsVUFBQ0MsUUFBRCxFQUFjO0FBQzFCO0FBQ0EsWUFBS0MsUUFBTCxHQUFnQkQsUUFBaEI7QUFDRDs7b1VBRWUsWUFBTTtBQUNwQjtBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUNaQyxRQUFBQSxhQUFhLEVBQUVDLElBQUksQ0FBQ0MsSUFBTCxDQUFVRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsSUFBMUIsQ0FESDtBQUVaQyxRQUFBQSxNQUFNLEVBQUU7QUFGSSxPQUFkO0FBSUQ7Ozs7Ozs7V0FFRCxrQkFBUztBQUNQLFVBQU1DLEtBQUssR0FBRztBQUNaQyxRQUFBQSxRQUFRLEVBQUUsT0FERTtBQUVaQyxRQUFBQSxLQUFLLEVBQUUsTUFGSztBQUdaQyxRQUFBQSxNQUFNLEVBQUUsTUFISTtBQUlaQyxRQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUpHLE9BQWQ7QUFPQSwwQkFDRTtBQUFBLGdDQUNFLDhEQUFDLDhEQUFELENBQ0U7QUFERjtBQUVFLGVBQUssRUFBRUosS0FGVCxDQUdFO0FBSEY7QUFJRSxtQkFBUyxFQUFFLGVBSmIsQ0FLRTtBQUxGO0FBTUUscUJBQVcsRUFBRSxLQUFLSztBQU5wQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBVUU7QUFBUSxpQkFBTyxFQUFFLEtBQUtDLGFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUEsc0JBREY7QUFjRDs7OztFQXBDbUNoQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb25mZXR0aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdENhbnZhc0NvbmZldHRpIGZyb20gXCJyZWFjdC1jYW52YXMtY29uZmV0dGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZldHRpIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBnZXRJbnN0YW5jZSA9IChpbnN0YW5jZSkgPT4ge1xyXG4gICAgLy8gc2F2aW5nIHRoZSBpbnN0YW5jZSB0byBhbiBpbnRlcm5hbCBwcm9wZXJ0eVxyXG4gICAgdGhpcy5jb25mZXR0aSA9IGluc3RhbmNlO1xyXG4gIH07XHJcblxyXG4gIG9uQ2xpY2tDdXN0b20gPSAoKSA9PiB7XHJcbiAgICAvLyBzdGFydGluZyB0aGUgYW5pbWF0aW9uIHdpdGggY3VzdG9tIHNldHRpbmdzXHJcbiAgICB0aGlzLmNvbmZldHRpKHtcclxuICAgICAgcGFydGljbGVDb3VudDogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcclxuICAgICAgc3ByZWFkOiAxODAsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICB6SW5kZXg6IC0xLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxSZWFjdENhbnZhc0NvbmZldHRpXHJcbiAgICAgICAgICAvLyBzZXQgdGhlIHN0eWxlcyBhcyBmb3IgYSB1c3VhbCByZWFjdCBjb21wb25lbnRcclxuICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgIC8vIHNldCB0aGUgY2xhc3MgbmFtZSBhcyBmb3IgYSB1c3VhbCByZWFjdCBjb21wb25lbnRcclxuICAgICAgICAgIGNsYXNzTmFtZT17XCJ5b3VyQ2xhc3NOYW1lXCJ9XHJcbiAgICAgICAgICAvLyBzZXQgdGhlIGNhbGxiYWNrIGZvciBnZXR0aW5nIGluc3RhbmNlLiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaW5pdGlhbGl6YXRpb24gUmVhY3RDYW52YXNDb25mZXR0aSBjb21wb25lbnRcclxuICAgICAgICAgIHJlZkNvbmZldHRpPXt0aGlzLmdldEluc3RhbmNlfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkNsaWNrQ3VzdG9tfT5GaXJlIHdpdGggY3VzdG9tPC9idXR0b24+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RDYW52YXNDb25mZXR0aSIsIkNvbmZldHRpIiwiaW5zdGFuY2UiLCJjb25mZXR0aSIsInBhcnRpY2xlQ291bnQiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsInNwcmVhZCIsInN0eWxlIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInpJbmRleCIsImdldEluc3RhbmNlIiwib25DbGlja0N1c3RvbSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=
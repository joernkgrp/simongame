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

    (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "onClickDefault", function () {
      // starting the animation
      _this.confetti();
    });

    (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "onClickCustom", function () {
      // starting the animation with custom settings
      _this.confetti({
        particleCount: Math.ceil(Math.random() * 1000),
        spread: 180
      });
    });

    (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "onClickCallback", function () {
      // calling console.log after the animation ends
      _this.confetti().then(function () {
        console.log("do something after animation");
      });
    });

    (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "onClickReset", function () {
      // cleaning the canvas
      _this.confetti.reset();
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
          lineNumber: 45,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
          onClick: this.onClickDefault,
          children: "Fire with default"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
          onClick: this.onClickCustom,
          children: "Fire with custom"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
          onClick: this.onClickCallback,
          children: "Fire with callback"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
          onClick: this.onClickReset,
          children: "Reset"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29uZmV0dGkuMmY4NGUyNzc0ODU3MmZhZGE0MTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztJQUVxQkU7Ozs7Ozs7Ozs7Ozs7Ozs7a1VBQ0wsVUFBQ0MsUUFBRCxFQUFjO0FBQzFCO0FBQ0EsWUFBS0MsUUFBTCxHQUFnQkQsUUFBaEI7QUFDRDs7cVVBRWdCLFlBQU07QUFDckI7QUFDQSxZQUFLQyxRQUFMO0FBQ0Q7O29VQUVlLFlBQU07QUFDcEI7QUFDQSxZQUFLQSxRQUFMLENBQWM7QUFDWkMsUUFBQUEsYUFBYSxFQUFFQyxJQUFJLENBQUNDLElBQUwsQ0FBVUQsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLElBQTFCLENBREg7QUFFWkMsUUFBQUEsTUFBTSxFQUFFO0FBRkksT0FBZDtBQUlEOztzVUFFaUIsWUFBTTtBQUN0QjtBQUNBLFlBQUtMLFFBQUwsR0FBZ0JNLElBQWhCLENBQXFCLFlBQU07QUFDekJDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaO0FBQ0QsT0FGRDtBQUdEOzttVUFFYyxZQUFNO0FBQ25CO0FBQ0EsWUFBS1IsUUFBTCxDQUFjUyxLQUFkO0FBQ0Q7Ozs7Ozs7V0FFRCxrQkFBUztBQUNQLFVBQU1DLEtBQUssR0FBRztBQUNaQyxRQUFBQSxRQUFRLEVBQUUsT0FERTtBQUVaQyxRQUFBQSxLQUFLLEVBQUUsTUFGSztBQUdaQyxRQUFBQSxNQUFNLEVBQUUsTUFISTtBQUlaQyxRQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUpHLE9BQWQ7QUFPQSwwQkFDRTtBQUFBLGdDQUNFLDhEQUFDLDhEQUFELENBQ0U7QUFERjtBQUVFLGVBQUssRUFBRUosS0FGVCxDQUdFO0FBSEY7QUFJRSxtQkFBUyxFQUFFLGVBSmIsQ0FLRTtBQUxGO0FBTUUscUJBQVcsRUFBRSxLQUFLSztBQU5wQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBVUU7QUFBUSxpQkFBTyxFQUFFLEtBQUtDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLGVBV0U7QUFBUSxpQkFBTyxFQUFFLEtBQUtDLGFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhGLGVBWUU7QUFBUSxpQkFBTyxFQUFFLEtBQUtDLGVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGLGVBYUU7QUFBUSxpQkFBTyxFQUFFLEtBQUtDLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGO0FBQUEsc0JBREY7QUFpQkQ7Ozs7RUF4RG1DdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29uZmV0dGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RDYW52YXNDb25mZXR0aSBmcm9tIFwicmVhY3QtY2FudmFzLWNvbmZldHRpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25mZXR0aSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgZ2V0SW5zdGFuY2UgPSAoaW5zdGFuY2UpID0+IHtcclxuICAgIC8vIHNhdmluZyB0aGUgaW5zdGFuY2UgdG8gYW4gaW50ZXJuYWwgcHJvcGVydHlcclxuICAgIHRoaXMuY29uZmV0dGkgPSBpbnN0YW5jZTtcclxuICB9O1xyXG5cclxuICBvbkNsaWNrRGVmYXVsdCA9ICgpID0+IHtcclxuICAgIC8vIHN0YXJ0aW5nIHRoZSBhbmltYXRpb25cclxuICAgIHRoaXMuY29uZmV0dGkoKTtcclxuICB9O1xyXG5cclxuICBvbkNsaWNrQ3VzdG9tID0gKCkgPT4ge1xyXG4gICAgLy8gc3RhcnRpbmcgdGhlIGFuaW1hdGlvbiB3aXRoIGN1c3RvbSBzZXR0aW5nc1xyXG4gICAgdGhpcy5jb25mZXR0aSh7XHJcbiAgICAgIHBhcnRpY2xlQ291bnQ6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMCksXHJcbiAgICAgIHNwcmVhZDogMTgwLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25DbGlja0NhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgLy8gY2FsbGluZyBjb25zb2xlLmxvZyBhZnRlciB0aGUgYW5pbWF0aW9uIGVuZHNcclxuICAgIHRoaXMuY29uZmV0dGkoKS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJkbyBzb21ldGhpbmcgYWZ0ZXIgYW5pbWF0aW9uXCIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25DbGlja1Jlc2V0ID0gKCkgPT4ge1xyXG4gICAgLy8gY2xlYW5pbmcgdGhlIGNhbnZhc1xyXG4gICAgdGhpcy5jb25mZXR0aS5yZXNldCgpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgIHpJbmRleDogLTEsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFJlYWN0Q2FudmFzQ29uZmV0dGlcclxuICAgICAgICAgIC8vIHNldCB0aGUgc3R5bGVzIGFzIGZvciBhIHVzdWFsIHJlYWN0IGNvbXBvbmVudFxyXG4gICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgLy8gc2V0IHRoZSBjbGFzcyBuYW1lIGFzIGZvciBhIHVzdWFsIHJlYWN0IGNvbXBvbmVudFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcInlvdXJDbGFzc05hbWVcIn1cclxuICAgICAgICAgIC8vIHNldCB0aGUgY2FsbGJhY2sgZm9yIGdldHRpbmcgaW5zdGFuY2UuIFRoZSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBhZnRlciBpbml0aWFsaXphdGlvbiBSZWFjdENhbnZhc0NvbmZldHRpIGNvbXBvbmVudFxyXG4gICAgICAgICAgcmVmQ29uZmV0dGk9e3RoaXMuZ2V0SW5zdGFuY2V9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tEZWZhdWx0fT5GaXJlIHdpdGggZGVmYXVsdDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkNsaWNrQ3VzdG9tfT5GaXJlIHdpdGggY3VzdG9tPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tDYWxsYmFja30+RmlyZSB3aXRoIGNhbGxiYWNrPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tSZXNldH0+UmVzZXQ8L2J1dHRvbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdENhbnZhc0NvbmZldHRpIiwiQ29uZmV0dGkiLCJpbnN0YW5jZSIsImNvbmZldHRpIiwicGFydGljbGVDb3VudCIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwic3ByZWFkIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNldCIsInN0eWxlIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInpJbmRleCIsImdldEluc3RhbmNlIiwib25DbGlja0RlZmF1bHQiLCJvbkNsaWNrQ3VzdG9tIiwib25DbGlja0NhbGxiYWNrIiwib25DbGlja1Jlc2V0IiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==
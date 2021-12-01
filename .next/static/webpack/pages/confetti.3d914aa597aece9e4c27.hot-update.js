"use strict";
self["webpackHotUpdate_N_E"]("pages/confetti",{

/***/ "./pages/confetti.js":
/*!***************************!*\
  !*** ./pages/confetti.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Fireworks; }
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






function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

var Fireworks = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Fireworks, _React$Component);

  var _super = _createSuper(Fireworks);

  function Fireworks(props) {
    var _this;

    (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Fireworks);

    _this = _super.call(this, props);

    (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "nextTickAnimation", function () {
      _this.animationInstance && _this.animationInstance(_this.getAnimationSettings(0.1, 0.3));
      _this.animationInstance && _this.animationInstance(_this.getAnimationSettings(0.7, 0.9));
    });

    (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "handlerClickStart", function () {
      _this.startAnimation();
    });

    (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "handlerClickPause", function () {
      _this.pauseAnimation();
    });

    (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "handlerClickStop", function () {
      _this.stopAnimation();
    });

    (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "getInstance", function (instance) {
      _this.animationInstance = instance;
    });

    _this.isAnimationEnabled = false;
    _this.animationInstance = null;
    _this.intervalId = null;
    return _this;
  }

  (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Fireworks, [{
    key: "getAnimationSettings",
    value: function getAnimationSettings(originXA, originXB) {
      return {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
        particleCount: 150,
        origin: {
          x: randomInRange(originXA, originXB),
          y: Math.random() - 0.2
        }
      };
    }
  }, {
    key: "startAnimation",
    value: function startAnimation() {
      if (!this.isAnimationEnabled) {
        this.isAnimationEnabled = true;
        this.intervalId = setInterval(this.nextTickAnimation, 400);
      }
    }
  }, {
    key: "pauseAnimation",
    value: function pauseAnimation() {
      this.isAnimationEnabled = false;
      return this.intervalId && clearInterval(this.intervalId);
    }
  }, {
    key: "stopAnimation",
    value: function stopAnimation() {
      this.isAnimationEnabled = false;
      this.animationInstance && this.animationInstance.reset();
      return this.intervalId && clearInterval(this.intervalId);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isAnimationEnabled = false;
      this.intervalId && clearInterval(this.intervalId);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
            onClick: this.handlerClickStart,
            children: "Start"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
            onClick: this.handlerClickPause,
            children: "Pause"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
            onClick: this.handlerClickStop,
            children: "Stop"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_canvas_confetti__WEBPACK_IMPORTED_MODULE_8___default()), {
          refConfetti: this.getInstance,
          style: canvasStyles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }, this)]
      }, void 0, true);
    }
  }]);

  return Fireworks;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29uZmV0dGkuM2Q5MTRhYTU5N2FlY2U5ZTRjMjcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztBQUVBLFNBQVNFLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMvQixTQUFPQyxJQUFJLENBQUNDLE1BQUwsTUFBaUJGLEdBQUcsR0FBR0QsR0FBdkIsSUFBOEJBLEdBQXJDO0FBQ0Q7O0FBRUQsSUFBTUksWUFBWSxHQUFHO0FBQ25CQyxFQUFBQSxRQUFRLEVBQUUsT0FEUztBQUVuQkMsRUFBQUEsYUFBYSxFQUFFLE1BRkk7QUFHbkJDLEVBQUFBLEtBQUssRUFBRSxNQUhZO0FBSW5CQyxFQUFBQSxNQUFNLEVBQUUsTUFKVztBQUtuQkMsRUFBQUEsR0FBRyxFQUFFLENBTGM7QUFNbkJDLEVBQUFBLElBQUksRUFBRTtBQU5hLENBQXJCOztJQVNxQkM7Ozs7O0FBQ25CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQix3VUFxQkMsWUFBTTtBQUN4QixZQUFLQyxpQkFBTCxJQUNFLE1BQUtBLGlCQUFMLENBQXVCLE1BQUtDLG9CQUFMLENBQTBCLEdBQTFCLEVBQStCLEdBQS9CLENBQXZCLENBREY7QUFFQSxZQUFLRCxpQkFBTCxJQUNFLE1BQUtBLGlCQUFMLENBQXVCLE1BQUtDLG9CQUFMLENBQTBCLEdBQTFCLEVBQStCLEdBQS9CLENBQXZCLENBREY7QUFFRCxLQTFCa0I7O0FBQUEsd1VBOENDLFlBQU07QUFDeEIsWUFBS0MsY0FBTDtBQUNELEtBaERrQjs7QUFBQSx3VUFrREMsWUFBTTtBQUN4QixZQUFLQyxjQUFMO0FBQ0QsS0FwRGtCOztBQUFBLHVVQXNEQSxZQUFNO0FBQ3ZCLFlBQUtDLGFBQUw7QUFDRCxLQXhEa0I7O0FBQUEsa1VBK0RMLFVBQUNDLFFBQUQsRUFBYztBQUMxQixZQUFLTCxpQkFBTCxHQUF5QkssUUFBekI7QUFDRCxLQWpFa0I7O0FBRWpCLFVBQUtDLGtCQUFMLEdBQTBCLEtBQTFCO0FBQ0EsVUFBS04saUJBQUwsR0FBeUIsSUFBekI7QUFDQSxVQUFLTyxVQUFMLEdBQWtCLElBQWxCO0FBSmlCO0FBS2xCOzs7O1dBRUQsOEJBQXFCQyxRQUFyQixFQUErQkMsUUFBL0IsRUFBeUM7QUFDdkMsYUFBTztBQUNMQyxRQUFBQSxhQUFhLEVBQUUsRUFEVjtBQUVMQyxRQUFBQSxNQUFNLEVBQUUsR0FGSDtBQUdMQyxRQUFBQSxLQUFLLEVBQUUsRUFIRjtBQUlMQyxRQUFBQSxNQUFNLEVBQUUsQ0FKSDtBQUtMQyxRQUFBQSxhQUFhLEVBQUUsR0FMVjtBQU1MQyxRQUFBQSxNQUFNLEVBQUU7QUFDTkMsVUFBQUEsQ0FBQyxFQUFFOUIsYUFBYSxDQUFDc0IsUUFBRCxFQUFXQyxRQUFYLENBRFY7QUFFTlEsVUFBQUEsQ0FBQyxFQUFFNUIsSUFBSSxDQUFDQyxNQUFMLEtBQWdCO0FBRmI7QUFOSCxPQUFQO0FBV0Q7OztXQVNELDBCQUFpQjtBQUNmLFVBQUksQ0FBQyxLQUFLZ0Isa0JBQVYsRUFBOEI7QUFDNUIsYUFBS0Esa0JBQUwsR0FBMEIsSUFBMUI7QUFDQSxhQUFLQyxVQUFMLEdBQWtCVyxXQUFXLENBQUMsS0FBS0MsaUJBQU4sRUFBeUIsR0FBekIsQ0FBN0I7QUFDRDtBQUNGOzs7V0FFRCwwQkFBaUI7QUFDZixXQUFLYixrQkFBTCxHQUEwQixLQUExQjtBQUNBLGFBQU8sS0FBS0MsVUFBTCxJQUFtQmEsYUFBYSxDQUFDLEtBQUtiLFVBQU4sQ0FBdkM7QUFDRDs7O1dBRUQseUJBQWdCO0FBQ2QsV0FBS0Qsa0JBQUwsR0FBMEIsS0FBMUI7QUFDQSxXQUFLTixpQkFBTCxJQUEwQixLQUFLQSxpQkFBTCxDQUF1QnFCLEtBQXZCLEVBQTFCO0FBQ0EsYUFBTyxLQUFLZCxVQUFMLElBQW1CYSxhQUFhLENBQUMsS0FBS2IsVUFBTixDQUF2QztBQUNEOzs7V0FjRCxnQ0FBdUI7QUFDckIsV0FBS0Qsa0JBQUwsR0FBMEIsS0FBMUI7QUFDQSxXQUFLQyxVQUFMLElBQW1CYSxhQUFhLENBQUMsS0FBS2IsVUFBTixDQUFoQztBQUNEOzs7V0FNRCxrQkFBUztBQUNQLDBCQUNFO0FBQUEsZ0NBQ0U7QUFBQSxrQ0FDRTtBQUFRLG1CQUFPLEVBQUUsS0FBS2UsaUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBUSxtQkFBTyxFQUFFLEtBQUtDLGlCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQVEsbUJBQU8sRUFBRSxLQUFLQyxnQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUUsOERBQUMsOERBQUQ7QUFDRSxxQkFBVyxFQUFFLEtBQUtDLFdBRHBCO0FBRUUsZUFBSyxFQUFFbEM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUEsc0JBREY7QUFhRDs7OztFQWxGb0NQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbmZldHRpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0Q2FudmFzQ29uZmV0dGkgZnJvbSBcInJlYWN0LWNhbnZhcy1jb25mZXR0aVwiO1xyXG5cclxuZnVuY3Rpb24gcmFuZG9tSW5SYW5nZShtaW4sIG1heCkge1xyXG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbn1cclxuXHJcbmNvbnN0IGNhbnZhc1N0eWxlcyA9IHtcclxuICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIHRvcDogMCxcclxuICBsZWZ0OiAwLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyZXdvcmtzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5pc0FuaW1hdGlvbkVuYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYW5pbWF0aW9uSW5zdGFuY2UgPSBudWxsO1xyXG4gICAgdGhpcy5pbnRlcnZhbElkID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGdldEFuaW1hdGlvblNldHRpbmdzKG9yaWdpblhBLCBvcmlnaW5YQikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3RhcnRWZWxvY2l0eTogMzAsXHJcbiAgICAgIHNwcmVhZDogMzYwLFxyXG4gICAgICB0aWNrczogNjAsXHJcbiAgICAgIHpJbmRleDogMCxcclxuICAgICAgcGFydGljbGVDb3VudDogMTUwLFxyXG4gICAgICBvcmlnaW46IHtcclxuICAgICAgICB4OiByYW5kb21JblJhbmdlKG9yaWdpblhBLCBvcmlnaW5YQiksXHJcbiAgICAgICAgeTogTWF0aC5yYW5kb20oKSAtIDAuMixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZXh0VGlja0FuaW1hdGlvbiA9ICgpID0+IHtcclxuICAgIHRoaXMuYW5pbWF0aW9uSW5zdGFuY2UgJiZcclxuICAgICAgdGhpcy5hbmltYXRpb25JbnN0YW5jZSh0aGlzLmdldEFuaW1hdGlvblNldHRpbmdzKDAuMSwgMC4zKSk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkluc3RhbmNlICYmXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW5zdGFuY2UodGhpcy5nZXRBbmltYXRpb25TZXR0aW5ncygwLjcsIDAuOSkpO1xyXG4gIH07XHJcblxyXG4gIHN0YXJ0QW5pbWF0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzQW5pbWF0aW9uRW5hYmxlZCkge1xyXG4gICAgICB0aGlzLmlzQW5pbWF0aW9uRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMubmV4dFRpY2tBbmltYXRpb24sIDQwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwYXVzZUFuaW1hdGlvbigpIHtcclxuICAgIHRoaXMuaXNBbmltYXRpb25FbmFibGVkID0gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcy5pbnRlcnZhbElkICYmIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcclxuICB9XHJcblxyXG4gIHN0b3BBbmltYXRpb24oKSB7XHJcbiAgICB0aGlzLmlzQW5pbWF0aW9uRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5hbmltYXRpb25JbnN0YW5jZSAmJiB0aGlzLmFuaW1hdGlvbkluc3RhbmNlLnJlc2V0KCk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnRlcnZhbElkICYmIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZXJDbGlja1N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbigpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZXJDbGlja1BhdXNlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wYXVzZUFuaW1hdGlvbigpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZXJDbGlja1N0b3AgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnN0b3BBbmltYXRpb24oKTtcclxuICB9O1xyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMuaXNBbmltYXRpb25FbmFibGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmludGVydmFsSWQgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5zdGFuY2UgPSAoaW5zdGFuY2UpID0+IHtcclxuICAgIHRoaXMuYW5pbWF0aW9uSW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlckNsaWNrU3RhcnR9PlN0YXJ0PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlckNsaWNrUGF1c2V9PlBhdXNlPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlckNsaWNrU3RvcH0+U3RvcDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSZWFjdENhbnZhc0NvbmZldHRpXHJcbiAgICAgICAgICByZWZDb25mZXR0aT17dGhpcy5nZXRJbnN0YW5jZX1cclxuICAgICAgICAgIHN0eWxlPXtjYW52YXNTdHlsZXN9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdENhbnZhc0NvbmZldHRpIiwicmFuZG9tSW5SYW5nZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJyYW5kb20iLCJjYW52YXNTdHlsZXMiLCJwb3NpdGlvbiIsInBvaW50ZXJFdmVudHMiLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJGaXJld29ya3MiLCJwcm9wcyIsImFuaW1hdGlvbkluc3RhbmNlIiwiZ2V0QW5pbWF0aW9uU2V0dGluZ3MiLCJzdGFydEFuaW1hdGlvbiIsInBhdXNlQW5pbWF0aW9uIiwic3RvcEFuaW1hdGlvbiIsImluc3RhbmNlIiwiaXNBbmltYXRpb25FbmFibGVkIiwiaW50ZXJ2YWxJZCIsIm9yaWdpblhBIiwib3JpZ2luWEIiLCJzdGFydFZlbG9jaXR5Iiwic3ByZWFkIiwidGlja3MiLCJ6SW5kZXgiLCJwYXJ0aWNsZUNvdW50Iiwib3JpZ2luIiwieCIsInkiLCJzZXRJbnRlcnZhbCIsIm5leHRUaWNrQW5pbWF0aW9uIiwiY2xlYXJJbnRlcnZhbCIsInJlc2V0IiwiaGFuZGxlckNsaWNrU3RhcnQiLCJoYW5kbGVyQ2xpY2tQYXVzZSIsImhhbmRsZXJDbGlja1N0b3AiLCJnZXRJbnN0YW5jZSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=
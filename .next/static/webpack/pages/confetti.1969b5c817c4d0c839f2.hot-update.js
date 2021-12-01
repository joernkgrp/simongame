"use strict";
self["webpackHotUpdate_N_E"]("pages/confetti",{

/***/ "./pages/confetti.js":
/*!***************************!*\
  !*** ./pages/confetti.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ContinuousSlider; },
/* harmony export */   "Confetti": function() { return /* binding */ Confetti; }
/* harmony export */ });
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_canvas_confetti__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-canvas-confetti */ "./node_modules/react-canvas-confetti/dist/index.js");
/* harmony import */ var react_canvas_confetti__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_canvas_confetti__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/react */ "./node_modules/@iconify/react/dist/iconify.mjs");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/index.js");
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Slider */ "./node_modules/@mui/material/Slider/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);









var _jsxFileName = "C:\\Users\\Jkogerup\\Dev\\simongame\\pages\\confetti.js",
    _s = $RefreshSig$();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }











var startValue = 0;
function ContinuousSlider() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_8__.useState(startValue),
      _React$useState2 = (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__.default)(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_12__.default, {
    maxwidth: "md",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__.default, {
      sx: {
        display: "flex",
        alignItems: "center",
        bgcolor: "background.paper",
        height: 1000,
        widht: 1000
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__.default, {
        sx: {
          flexGrow: 1
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_14__.default, {
          spacing: 2,
          direction: "row",
          sx: {
            mb: 1
          },
          alignItems: "center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_10__.Icon, {
            icon: "noto:frowning-face",
            height: "64"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_15__.default, {
            color: "secondary",
            "aria-label": "Mood",
            value: value,
            onChange: handleChange,
            valueLabelDisplay: "auto",
            step: 10,
            marks: true,
            min: 0,
            max: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_10__.Icon, {
            icon: "noto:smiling-face",
            height: "64"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), value == "100" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(Confetti, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 28
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_s(ContinuousSlider, "8UX+DPl6LB4hhKlgr33QMNGIjeI=");

_c = ContinuousSlider;
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
        width: "20%",
        height: "20%",
        zIndex: -1
      };
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((react_canvas_confetti__WEBPACK_IMPORTED_MODULE_9___default()) // set the styles as for a usual react component
        , {
          style: style // set the class name as for a usual react component
          ,
          className: "yourClassName" // set the callback for getting instance. The callback will be called after initialization ReactCanvasConfetti component
          ,
          refConfetti: this.getInstance
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          onClick: this.onClickCustom,
          children: "Fire with custom"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }, this)]
      }, void 0, true);
    }
  }]);

  return Confetti;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);

var _c;

$RefreshReg$(_c, "ContinuousSlider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29uZmV0dGkuMTk2OWI1YzgxN2M0ZDBjODM5ZjIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQUlRLFVBQVUsR0FBRyxDQUFqQjtBQUVlLFNBQVNDLGdCQUFULEdBQTRCO0FBQUE7O0FBQ3pDLHdCQUEwQlQsMkNBQUEsQ0FBZVEsVUFBZixDQUExQjtBQUFBO0FBQUEsTUFBT0UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQ3hDSCxJQUFBQSxRQUFRLENBQUNHLFFBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UsK0RBQUMsNkRBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBQSwyQkFDRSwrREFBQyx1REFBRDtBQUNFLFFBQUUsRUFBRTtBQUNGQyxRQUFBQSxPQUFPLEVBQUUsTUFEUDtBQUVGQyxRQUFBQSxVQUFVLEVBQUUsUUFGVjtBQUdGQyxRQUFBQSxPQUFPLEVBQUUsa0JBSFA7QUFJRkMsUUFBQUEsTUFBTSxFQUFFLElBSk47QUFLRkMsUUFBQUEsS0FBSyxFQUFFO0FBTEwsT0FETjtBQUFBLDhCQVNFLCtEQUFDLHVEQUFEO0FBQUssVUFBRSxFQUFFO0FBQUVDLFVBQUFBLFFBQVEsRUFBRTtBQUFaLFNBQVQ7QUFBQSwrQkFDRSwrREFBQyx5REFBRDtBQUFPLGlCQUFPLEVBQUUsQ0FBaEI7QUFBbUIsbUJBQVMsRUFBQyxLQUE3QjtBQUFtQyxZQUFFLEVBQUU7QUFBRUMsWUFBQUEsRUFBRSxFQUFFO0FBQU4sV0FBdkM7QUFBa0Qsb0JBQVUsRUFBQyxRQUE3RDtBQUFBLGtDQUNFLCtEQUFDLGlEQUFEO0FBQU0sZ0JBQUksRUFBQyxvQkFBWDtBQUFnQyxrQkFBTSxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRSwrREFBQywwREFBRDtBQUNFLGlCQUFLLEVBQUMsV0FEUjtBQUVFLDBCQUFXLE1BRmI7QUFHRSxpQkFBSyxFQUFFWCxLQUhUO0FBSUUsb0JBQVEsRUFBRUUsWUFKWjtBQUtFLDZCQUFpQixFQUFDLE1BTHBCO0FBTUUsZ0JBQUksRUFBRSxFQU5SO0FBT0UsaUJBQUssTUFQUDtBQVFFLGVBQUcsRUFBRSxDQVJQO0FBU0UsZUFBRyxFQUFFO0FBVFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQWFFLCtEQUFDLGlEQUFEO0FBQU0sZ0JBQUksRUFBQyxtQkFBWDtBQUErQixrQkFBTSxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLEVBMEJHRixLQUFLLElBQUksS0FBVCxpQkFBa0IsK0RBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQ0Q7O0dBdkN1QkQ7O0tBQUFBO0FBeUNqQixJQUFNYSxRQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsa1VBQ2dCLFVBQUNDLFFBQUQsRUFBYztBQUMxQjtBQUNBLFlBQUtDLFFBQUwsR0FBZ0JELFFBQWhCO0FBQ0QsS0FKSDs7QUFBQSxvVUFNa0IsWUFBTTtBQUNwQjtBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUNaQyxRQUFBQSxhQUFhLEVBQUVDLElBQUksQ0FBQ0MsSUFBTCxDQUFVRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsSUFBMUIsQ0FESDtBQUVaQyxRQUFBQSxNQUFNLEVBQUU7QUFGSSxPQUFkO0FBSUQsS0FaSDs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxXQWNFLGtCQUFTO0FBQ1AsVUFBTUMsS0FBSyxHQUFHO0FBQ1pDLFFBQUFBLFFBQVEsRUFBRSxPQURFO0FBRVpDLFFBQUFBLEtBQUssRUFBRSxLQUZLO0FBR1pkLFFBQUFBLE1BQU0sRUFBRSxLQUhJO0FBSVplLFFBQUFBLE1BQU0sRUFBRSxDQUFDO0FBSkcsT0FBZDtBQU9BLDBCQUNFO0FBQUEsZ0NBQ0UsK0RBQUMsOERBQUQsQ0FDRTtBQURGO0FBRUUsZUFBSyxFQUFFSCxLQUZULENBR0U7QUFIRjtBQUlFLG1CQUFTLEVBQUUsZUFKYixDQUtFO0FBTEY7QUFNRSxxQkFBVyxFQUFFLEtBQUtJO0FBTnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFVRTtBQUFRLGlCQUFPLEVBQUUsS0FBS0MsYUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQSxzQkFERjtBQWNEO0FBcENIOztBQUFBO0FBQUEsRUFBOEJuQyw0Q0FBOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29uZmV0dGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdENhbnZhc0NvbmZldHRpIGZyb20gXCJyZWFjdC1jYW52YXMtY29uZmV0dGlcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJAaWNvbmlmeS9yZWFjdFwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9TbGlkZXJcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcclxuXHJcbmxldCBzdGFydFZhbHVlID0gMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRpbnVvdXNTbGlkZXIoKSB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShzdGFydFZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heHdpZHRoPVwibWRcIj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcclxuICAgICAgICAgIGhlaWdodDogMTAwMCxcclxuICAgICAgICAgIHdpZGh0OiAxMDAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGRpcmVjdGlvbj1cInJvd1wiIHN4PXt7IG1iOiAxIH19IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPEljb24gaWNvbj1cIm5vdG86ZnJvd25pbmctZmFjZVwiIGhlaWdodD1cIjY0XCIgLz5cclxuICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTW9vZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdmFsdWVMYWJlbERpc3BsYXk9XCJhdXRvXCJcclxuICAgICAgICAgICAgICBzdGVwPXsxMH1cclxuICAgICAgICAgICAgICBtYXJrc1xyXG4gICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICBtYXg9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEljb24gaWNvbj1cIm5vdG86c21pbGluZy1mYWNlXCIgaGVpZ2h0PVwiNjRcIiAvPlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICB7dmFsdWUgPT0gXCIxMDBcIiAmJiA8Q29uZmV0dGkgLz59XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZldHRpIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBnZXRJbnN0YW5jZSA9IChpbnN0YW5jZSkgPT4ge1xyXG4gICAgLy8gc2F2aW5nIHRoZSBpbnN0YW5jZSB0byBhbiBpbnRlcm5hbCBwcm9wZXJ0eVxyXG4gICAgdGhpcy5jb25mZXR0aSA9IGluc3RhbmNlO1xyXG4gIH07XHJcblxyXG4gIG9uQ2xpY2tDdXN0b20gPSAoKSA9PiB7XHJcbiAgICAvLyBzdGFydGluZyB0aGUgYW5pbWF0aW9uIHdpdGggY3VzdG9tIHNldHRpbmdzXHJcbiAgICB0aGlzLmNvbmZldHRpKHtcclxuICAgICAgcGFydGljbGVDb3VudDogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcclxuICAgICAgc3ByZWFkOiAxODAsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgd2lkdGg6IFwiMjAlXCIsXHJcbiAgICAgIGhlaWdodDogXCIyMCVcIixcclxuICAgICAgekluZGV4OiAtMSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8UmVhY3RDYW52YXNDb25mZXR0aVxyXG4gICAgICAgICAgLy8gc2V0IHRoZSBzdHlsZXMgYXMgZm9yIGEgdXN1YWwgcmVhY3QgY29tcG9uZW50XHJcbiAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAvLyBzZXQgdGhlIGNsYXNzIG5hbWUgYXMgZm9yIGEgdXN1YWwgcmVhY3QgY29tcG9uZW50XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1wieW91ckNsYXNzTmFtZVwifVxyXG4gICAgICAgICAgLy8gc2V0IHRoZSBjYWxsYmFjayBmb3IgZ2V0dGluZyBpbnN0YW5jZS4gVGhlIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGluaXRpYWxpemF0aW9uIFJlYWN0Q2FudmFzQ29uZmV0dGkgY29tcG9uZW50XHJcbiAgICAgICAgICByZWZDb25mZXR0aT17dGhpcy5nZXRJbnN0YW5jZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25DbGlja0N1c3RvbX0+RmlyZSB3aXRoIGN1c3RvbTwvYnV0dG9uPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0Q2FudmFzQ29uZmV0dGkiLCJ1c2VTdGF0ZSIsIkljb24iLCJCb3giLCJTdGFjayIsIlNsaWRlciIsIkNvbnRhaW5lciIsInN0YXJ0VmFsdWUiLCJDb250aW51b3VzU2xpZGVyIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImJnY29sb3IiLCJoZWlnaHQiLCJ3aWRodCIsImZsZXhHcm93IiwibWIiLCJDb25mZXR0aSIsImluc3RhbmNlIiwiY29uZmV0dGkiLCJwYXJ0aWNsZUNvdW50IiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJzcHJlYWQiLCJzdHlsZSIsInBvc2l0aW9uIiwid2lkdGgiLCJ6SW5kZXgiLCJnZXRJbnN0YW5jZSIsIm9uQ2xpY2tDdXN0b20iLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9
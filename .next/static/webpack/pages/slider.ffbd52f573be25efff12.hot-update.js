"use strict";
self["webpackHotUpdate_N_E"]("pages/slider",{

/***/ "./pages/slider.js":
/*!*************************!*\
  !*** ./pages/slider.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ContinuousSlider; }
/* harmony export */ });
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/react */ "./node_modules/@iconify/react/dist/iconify.mjs");
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-confetti */ "./node_modules/react-confetti/dist/react-confetti.min.js");
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/index.js");
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Slider */ "./node_modules/@mui/material/Slider/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Jkogerup\\Dev\\simongame\\pages\\slider.js",
    _s = $RefreshSig$();











var defaultLanguage = 0; // English

var startValue = 0;
function ContinuousSlider() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(defaultLanguage),
      _React$useState2 = (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      language = _React$useState2[0],
      setLanguage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__.useState(startValue),
      _React$useState4 = (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__.default, {
    maxwidth: "md",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {
      sx: {
        display: "flex",
        alignItems: "center",
        bgcolor: "background.paper",
        height: 1000,
        widht: 1000
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {
        sx: {
          flexGrow: 1
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {
          variant: "h3",
          children: "Current Mood:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__.default, {
          spacing: 2,
          direction: "row",
          sx: {
            mb: 1
          },
          alignItems: "center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: "noto:frowning-face",
            height: "64"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_9__.default, {
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
            lineNumber: 38,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: "noto:smiling-face",
            height: "64"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), value == "100" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_confetti__WEBPACK_IMPORTED_MODULE_3___default()), {
        gravity: 0.5
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 28
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

_s(ContinuousSlider, "ygnUlEigUZxC49r/mNWJtvFpWlk=");

_c = ContinuousSlider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLmZmYmQ1MmY1NzNiZTI1ZWZmZjEyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSVMsZUFBZSxHQUFHLENBQXRCLEVBQXlCOztBQUN6QixJQUFJQyxVQUFVLEdBQUcsQ0FBakI7QUFFZSxTQUFTQyxnQkFBVCxHQUE0QjtBQUFBOztBQUN6Qyx3QkFBZ0NYLDJDQUFBLENBQWVTLGVBQWYsQ0FBaEM7QUFBQTtBQUFBLE1BQU9HLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUEseUJBQTBCYiwyQ0FBQSxDQUFlVSxVQUFmLENBQTFCO0FBQUE7QUFBQSxNQUFPSSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDeENILElBQUFBLFFBQVEsQ0FBQ0csUUFBRCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSw4REFBQyw0REFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBLDJCQUNFLDhEQUFDLHNEQUFEO0FBQ0UsUUFBRSxFQUFFO0FBQ0ZDLFFBQUFBLE9BQU8sRUFBRSxNQURQO0FBRUZDLFFBQUFBLFVBQVUsRUFBRSxRQUZWO0FBR0ZDLFFBQUFBLE9BQU8sRUFBRSxrQkFIUDtBQUlGQyxRQUFBQSxNQUFNLEVBQUUsSUFKTjtBQUtGQyxRQUFBQSxLQUFLLEVBQUU7QUFMTCxPQUROO0FBQUEsOEJBU0UsOERBQUMsc0RBQUQ7QUFBSyxVQUFFLEVBQUU7QUFBRUMsVUFBQUEsUUFBUSxFQUFFO0FBQVosU0FBVDtBQUFBLGdDQUNFLDhEQUFDLDZEQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLHdEQUFEO0FBQU8saUJBQU8sRUFBRSxDQUFoQjtBQUFtQixtQkFBUyxFQUFDLEtBQTdCO0FBQW1DLFlBQUUsRUFBRTtBQUFFQyxZQUFBQSxFQUFFLEVBQUU7QUFBTixXQUF2QztBQUFrRCxvQkFBVSxFQUFDLFFBQTdEO0FBQUEsa0NBQ0UsOERBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLG9CQUFYO0FBQWdDLGtCQUFNLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLDhEQUFDLHlEQUFEO0FBQ0UsaUJBQUssRUFBQyxXQURSO0FBRUUsMEJBQVcsTUFGYjtBQUdFLGlCQUFLLEVBQUVYLEtBSFQ7QUFJRSxvQkFBUSxFQUFFRSxZQUpaO0FBS0UsNkJBQWlCLEVBQUMsTUFMcEI7QUFNRSxnQkFBSSxFQUFFLEVBTlI7QUFPRSxpQkFBSyxNQVBQO0FBUUUsZUFBRyxFQUFFLENBUlA7QUFTRSxlQUFHLEVBQUU7QUFUUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBYUUsOERBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLG1CQUFYO0FBQStCLGtCQUFNLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsRUEyQkdGLEtBQUssSUFBSSxLQUFULGlCQUFrQiw4REFBQyx1REFBRDtBQUFVLGVBQU8sRUFBRTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0Q7O0dBMUN1Qkg7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NsaWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJAaWNvbmlmeS9yZWFjdFwiO1xyXG5pbXBvcnQgQ29uZmV0dGkgZnJvbSBcInJlYWN0LWNvbmZldHRpXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1NsaWRlclwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XHJcblxyXG5sZXQgZGVmYXVsdExhbmd1YWdlID0gMDsgLy8gRW5nbGlzaFxyXG5sZXQgc3RhcnRWYWx1ZSA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250aW51b3VzU2xpZGVyKCkge1xyXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdExhbmd1YWdlKTtcclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShzdGFydFZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heHdpZHRoPVwibWRcIj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcclxuICAgICAgICAgIGhlaWdodDogMTAwMCxcclxuICAgICAgICAgIHdpZGh0OiAxMDAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+Q3VycmVudCBNb29kOjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBkaXJlY3Rpb249XCJyb3dcIiBzeD17eyBtYjogMSB9fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxJY29uIGljb249XCJub3RvOmZyb3duaW5nLWZhY2VcIiBoZWlnaHQ9XCI2NFwiIC8+XHJcbiAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1vb2RcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlTGFiZWxEaXNwbGF5PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgc3RlcD17MTB9XHJcbiAgICAgICAgICAgICAgbWFya3NcclxuICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgbWF4PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJY29uIGljb249XCJub3RvOnNtaWxpbmctZmFjZVwiIGhlaWdodD1cIjY0XCIgLz5cclxuICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAge3ZhbHVlID09IFwiMTAwXCIgJiYgPENvbmZldHRpIGdyYXZpdHk9ezAuNX0gLz59XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkljb24iLCJDb25mZXR0aSIsIkJveCIsIlN0YWNrIiwiU2xpZGVyIiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeSIsImRlZmF1bHRMYW5ndWFnZSIsInN0YXJ0VmFsdWUiLCJDb250aW51b3VzU2xpZGVyIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJiZ2NvbG9yIiwiaGVpZ2h0Iiwid2lkaHQiLCJmbGV4R3JvdyIsIm1iIl0sInNvdXJjZVJvb3QiOiIifQ==
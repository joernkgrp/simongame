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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {
          sx: {
            mx: "auto"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {
            variant: "body1",
            children: "\xBFCu\xE1l es su estado de \xE1nimo actual?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {
          variant: "body1",
          children: "What is your current mood?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
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
            lineNumber: 42,
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
            lineNumber: 43,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: "noto:smiling-face",
            height: "64"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
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
        lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLmJiYzcyZThlZDkzNzVjZjQ2NDEyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSVMsZUFBZSxHQUFHLENBQXRCLEVBQXlCOztBQUN6QixJQUFJQyxVQUFVLEdBQUcsQ0FBakI7QUFFZSxTQUFTQyxnQkFBVCxHQUE0QjtBQUFBOztBQUN6Qyx3QkFBZ0NYLDJDQUFBLENBQWVTLGVBQWYsQ0FBaEM7QUFBQTtBQUFBLE1BQU9HLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUEseUJBQTBCYiwyQ0FBQSxDQUFlVSxVQUFmLENBQTFCO0FBQUE7QUFBQSxNQUFPSSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDeENILElBQUFBLFFBQVEsQ0FBQ0csUUFBRCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSw4REFBQyw0REFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBLDJCQUNFLDhEQUFDLHNEQUFEO0FBQ0UsUUFBRSxFQUFFO0FBQ0ZDLFFBQUFBLE9BQU8sRUFBRSxNQURQO0FBRUZDLFFBQUFBLFVBQVUsRUFBRSxRQUZWO0FBR0ZDLFFBQUFBLE9BQU8sRUFBRSxrQkFIUDtBQUlGQyxRQUFBQSxNQUFNLEVBQUUsSUFKTjtBQUtGQyxRQUFBQSxLQUFLLEVBQUU7QUFMTCxPQUROO0FBQUEsOEJBU0UsOERBQUMsc0RBQUQ7QUFBSyxVQUFFLEVBQUU7QUFBRUMsVUFBQUEsUUFBUSxFQUFFO0FBQVosU0FBVDtBQUFBLGdDQUNFLDhEQUFDLHNEQUFEO0FBQUssWUFBRSxFQUFFO0FBQUVDLFlBQUFBLEVBQUUsRUFBRTtBQUFOLFdBQVQ7QUFBQSxpQ0FDRSw4REFBQyw2REFBRDtBQUFZLG1CQUFPLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUUsOERBQUMsNkRBQUQ7QUFBWSxpQkFBTyxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBT0UsOERBQUMsd0RBQUQ7QUFBTyxpQkFBTyxFQUFFLENBQWhCO0FBQW1CLG1CQUFTLEVBQUMsS0FBN0I7QUFBbUMsWUFBRSxFQUFFO0FBQUVDLFlBQUFBLEVBQUUsRUFBRTtBQUFOLFdBQXZDO0FBQWtELG9CQUFVLEVBQUMsUUFBN0Q7QUFBQSxrQ0FDRSw4REFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsb0JBQVg7QUFBZ0Msa0JBQU0sRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUsOERBQUMseURBQUQ7QUFDRSxpQkFBSyxFQUFDLFdBRFI7QUFFRSwwQkFBVyxNQUZiO0FBR0UsaUJBQUssRUFBRVosS0FIVDtBQUlFLG9CQUFRLEVBQUVFLFlBSlo7QUFLRSw2QkFBaUIsRUFBQyxNQUxwQjtBQU1FLGdCQUFJLEVBQUUsRUFOUjtBQU9FLGlCQUFLLE1BUFA7QUFRRSxlQUFHLEVBQUUsQ0FSUDtBQVNFLGVBQUcsRUFBRTtBQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFhRSw4REFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsbUJBQVg7QUFBK0Isa0JBQU0sRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixFQWdDR0YsS0FBSyxJQUFJLEtBQVQsaUJBQWtCLDhEQUFDLHVEQUFEO0FBQVUsZUFBTyxFQUFFO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNDRDs7R0EvQ3VCSDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2xpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIkBpY29uaWZ5L3JlYWN0XCI7XHJcbmltcG9ydCBDb25mZXR0aSBmcm9tIFwicmVhY3QtY29uZmV0dGlcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU2xpZGVyXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuXHJcbmxldCBkZWZhdWx0TGFuZ3VhZ2UgPSAwOyAvLyBFbmdsaXNoXHJcbmxldCBzdGFydFZhbHVlID0gMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRpbnVvdXNTbGlkZXIoKSB7XHJcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSBSZWFjdC51c2VTdGF0ZShkZWZhdWx0TGFuZ3VhZ2UpO1xyXG5cclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKHN0YXJ0VmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4d2lkdGg9XCJtZFwiPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGJnY29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAwLFxyXG4gICAgICAgICAgd2lkaHQ6IDEwMDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICA8Qm94IHN4PXt7IG14OiBcImF1dG9cIiB9fT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XHJcbiAgICAgICAgICAgICAgwr9DdcOhbCBlcyBzdSBlc3RhZG8gZGUgw6FuaW1vIGFjdHVhbD9cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5XaGF0IGlzIHlvdXIgY3VycmVudCBtb29kPzwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBkaXJlY3Rpb249XCJyb3dcIiBzeD17eyBtYjogMSB9fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxJY29uIGljb249XCJub3RvOmZyb3duaW5nLWZhY2VcIiBoZWlnaHQ9XCI2NFwiIC8+XHJcbiAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1vb2RcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlTGFiZWxEaXNwbGF5PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgc3RlcD17MTB9XHJcbiAgICAgICAgICAgICAgbWFya3NcclxuICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgbWF4PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJY29uIGljb249XCJub3RvOnNtaWxpbmctZmFjZVwiIGhlaWdodD1cIjY0XCIgLz5cclxuICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAge3ZhbHVlID09IFwiMTAwXCIgJiYgPENvbmZldHRpIGdyYXZpdHk9ezAuNX0gLz59XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkljb24iLCJDb25mZXR0aSIsIkJveCIsIlN0YWNrIiwiU2xpZGVyIiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeSIsImRlZmF1bHRMYW5ndWFnZSIsInN0YXJ0VmFsdWUiLCJDb250aW51b3VzU2xpZGVyIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJiZ2NvbG9yIiwiaGVpZ2h0Iiwid2lkaHQiLCJmbGV4R3JvdyIsIm14IiwibWIiXSwic291cmNlUm9vdCI6IiJ9
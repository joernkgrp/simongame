"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game",{

/***/ "./pages/game.js":
/*!***********************!*\
  !*** ./pages/game.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RowAndColumnSpacing; }\n/* harmony export */ });\n/* harmony import */ var _Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Link */ \"./src/Link.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/joernkogerup/Developer/simongame/pages/game.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__.default)(function (_ref) {\n  var theme = _ref.theme;\n  return _objectSpread(_objectSpread({}, theme.typography.body2), {}, {\n    padding: theme.spacing(1),\n    textAlign: 'center',\n    color: theme.palette.text.secondary\n  });\n});\nfunction RowAndColumnSpacing() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n    sx: {\n      width: '100%',\n      borderRadius: '50%'\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n      container: true,\n      rowSpacing: 4,\n      columnSpacing: {\n        xs: 4,\n        sm: 4,\n        md: 4\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n        item: true,\n        xs: 6,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n          sx: {\n            width: 300,\n            height: 300,\n            align: center,\n            bgcolor: 'red',\n            '&:hover': {\n              backgroundColor: 'red',\n              opacity: [0.9, 0.8, 0.7]\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n        item: true,\n        xs: 6,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n          sx: {\n            width: 300,\n            height: 300,\n            bgcolor: 'blue',\n            '&:hover': {\n              backgroundColor: 'blue',\n              opacity: [0.9, 0.8, 0.7]\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n        item: true,\n        xs: 6,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n          sx: {\n            width: 300,\n            height: 300,\n            bgcolor: 'green',\n            '&:hover': {\n              backgroundColor: 'green',\n              opacity: [0.9, 0.8, 0.7]\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n        item: true,\n        xs: 6,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n          sx: {\n            width: 300,\n            height: 300,\n            bgcolor: 'yellow',\n            '&:hover': {\n              backgroundColor: 'yellow',\n              opacity: [0.9, 0.8, 0.7]\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n      component: \"div\",\n      sx: {\n        visibility: 'hidden'\n      },\n      children: \"Visibility Hidden\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__.default, {\n      variant: \"contained\",\n      component: _src_Link__WEBPACK_IMPORTED_MODULE_2__.default,\n      noLinkStyle: true,\n      href: \"/\",\n      children: \"Zur\\xFCck\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n_c = RowAndColumnSpacing;\n\nvar _c;\n\n$RefreshReg$(_c, \"RowAndColumnSpacing\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxZQUFFLEVBQUU7QUFDRlYsWUFBQUEsS0FBSyxFQUFFLEdBREw7QUFFRkssWUFBQUEsTUFBTSxFQUFFLEdBRk47QUFHRkcsWUFBQUEsT0FBTyxFQUFFLFFBSFA7QUFJRix1QkFBVztBQUNUQyxjQUFBQSxlQUFlLEVBQUUsUUFEUjtBQUVUQyxjQUFBQSxPQUFPLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVg7QUFGQTtBQUpUO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUF3REUsOERBQUMsc0RBQUQ7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFxQixRQUFFLEVBQUU7QUFBRUMsUUFBQUEsVUFBVSxFQUFFO0FBQWQsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4REYsZUEyREUsOERBQUMseURBQUQ7QUFBUSxhQUFPLEVBQUMsV0FBaEI7QUFBNEIsZUFBUyxFQUFFeEIsOENBQXZDO0FBQTZDLGlCQUFXLE1BQXhEO0FBQXlELFVBQUksRUFBQyxHQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlFRDtLQWxFdUJZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbWUuanM/M2IzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IENhcmQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBMaW5rIGZyb20gJy4uL3NyYy9MaW5rJztcblxuY29uc3QgSXRlbSA9IHN0eWxlZChQYXBlcikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgLi4udGhlbWUudHlwb2dyYXBoeS5ib2R5MixcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvd0FuZENvbHVtblNwYWNpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJSYWRpdXM6ICc1MCUnIH19PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHJvd1NwYWNpbmc9ezR9IGNvbHVtblNwYWNpbmc9e3sgeHM6IDQsIHNtOiA0LCBtZDogNCB9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICAgIGFsaWduOiBjZW50ZXIsXG4gICAgICAgICAgICAgIGJnY29sb3I6ICdyZWQnLFxuICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFswLjksIDAuOCwgMC43XSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgICAgYmdjb2xvcjogJ2JsdWUnLFxuICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibHVlJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMC45LCAwLjgsIDAuN10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICAgIGJnY29sb3I6ICdncmVlbicsXG4gICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMC45LCAwLjgsIDAuN10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICAgIGJnY29sb3I6ICd5ZWxsb3cnLFxuICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFswLjksIDAuOCwgMC43XSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEJveCBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9fT5cbiAgICAgICAgVmlzaWJpbGl0eSBIaWRkZW5cbiAgICAgIDwvQm94PlxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29tcG9uZW50PXtMaW5rfSBub0xpbmtTdHlsZSBocmVmPVwiL1wiPlxuICAgICAgICBadXLDvGNrXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImRpc3BsYXkiLCJHcmlkIiwiUGFwZXIiLCJCb3giLCJDYXJkIiwiQ2FyZEFjdGlvbnMiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJMaW5rIiwiSXRlbSIsInRoZW1lIiwidHlwb2dyYXBoeSIsImJvZHkyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiUm93QW5kQ29sdW1uU3BhY2luZyIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwieHMiLCJzbSIsIm1kIiwiaGVpZ2h0IiwiYWxpZ24iLCJjZW50ZXIiLCJiZ2NvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsInZpc2liaWxpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game.js\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RowAndColumnSpacing; }\n/* harmony export */ });\n/* harmony import */ var _Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Link */ \"./src/Link.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/joernkogerup/Developer/simongame/pages/game.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__.default)(function (_ref) {\n  var theme = _ref.theme;\n  return _objectSpread(_objectSpread({}, theme.typography.body2), {}, {\n    padding: theme.spacing(1),\n    textAlign: 'center',\n    color: theme.palette.text.secondary\n  });\n});\nfunction RowAndColumnSpacing() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n    sx: {\n      width: '100%',\n      borderRadius: '50%'\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n      container: true,\n      rowSpacing: 4,\n      columnSpacing: {\n        xs: 4,\n        sm: 4,\n        md: 4\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n        item: true,\n        xs: 6,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n          sx: {\n            width: 200,\n            height: 200,\n            minWidth: 100,\n            minheight: 100,\n            mx: \"auto\",\n            bgcolor: 'red',\n            '&:hover': {\n              backgroundColor: 'red',\n              opacity: [0.9, 0.8, 0.7]\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n        item: true,\n        xs: 6,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n          sx: {\n            width: 200,\n            height: 200,\n            minWidth: 100,\n            minheight: 100,\n            mx: \"auto\",\n            bgcolor: 'blue',\n            '&:hover': {\n              backgroundColor: 'blue',\n              opacity: [0.9, 0.8, 0.7]\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n        item: true,\n        xs: 6,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n          sx: {\n            width: 200,\n            height: 200,\n            minWidth: 100,\n            minheight: 100,\n            mx: \"auto\",\n            bgcolor: 'green',\n            '&:hover': {\n              backgroundColor: 'green',\n              opacity: [0.9, 0.8, 0.7]\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n        item: true,\n        xs: 6,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n          sx: {\n            width: 200,\n            height: 200,\n            minWidth: 100,\n            minheight: 100,\n            mx: \"auto\",\n            bgcolor: 'yellow',\n            '&:hover': {\n              backgroundColor: 'yellow',\n              opacity: [0.9, 0.8, 0.7]\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n      component: \"div\",\n      sx: {\n        visibility: 'hidden'\n      },\n      children: \"Visibility Hidden\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n      sx: {\n        mx: \"auto\",\n        width: 200\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_src_Link__WEBPACK_IMPORTED_MODULE_2__.default, {\n        href: \"/\",\n        color: \"secondary\",\n        children: \"Zur\\xFCck\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}\n_c = RowAndColumnSpacing;\n\nvar _c;\n\n$RefreshReg$(_c, \"RowAndColumnSpacing\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBLFlBdEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEVEO0tBL0V1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS5qcz8zYjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tICdAbXVpL3N5c3RlbSc7XG5pbXBvcnQgeyBzcGFjaW5nIH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IENhcmQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBMaW5rIGZyb20gJy4uL3NyYy9MaW5rJztcblxuY29uc3QgSXRlbSA9IHN0eWxlZChQYXBlcikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgLi4udGhlbWUudHlwb2dyYXBoeS5ib2R5MixcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvd0FuZENvbHVtblNwYWNpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17e3dpZHRoOiAnMTAwJScsIGJvcmRlclJhZGl1czogJzUwJScgfX0+XG4gICAgICA8R3JpZCBjb250YWluZXIgcm93U3BhY2luZz17NH0gY29sdW1uU3BhY2luZz17eyB4czogNCwgc206IDQsIG1kOiA0IH19PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgbWluaGVpZ2h0OiAxMDAsXG4gICAgICAgICAgICAgIG14OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgYmdjb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogWzAuOSwgMC44LCAwLjddLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgICAgICAgICBtaW5oZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgICAgbXg6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICBiZ2NvbG9yOiAnYmx1ZScsXG4gICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFswLjksIDAuOCwgMC43XSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgbWluaGVpZ2h0OiAxMDAsXG4gICAgICAgICAgICAgIG14OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgYmdjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFswLjksIDAuOCwgMC43XSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgbWluaGVpZ2h0OiAxMDAsXG4gICAgICAgICAgICAgIG14OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgYmdjb2xvcjogJ3llbGxvdycsXG4gICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogWzAuOSwgMC44LCAwLjddLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8Qm94IGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH19PlxuICAgICAgICBWaXNpYmlsaXR5IEhpZGRlblxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IHN4PXt7IG14OiBcImF1dG9cIiwgd2lkdGg6IDIwMCB9fT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjb2xvcj1cInNlY29uZGFyeVwiPlxuICAgICAgICAgIFp1csO8Y2tcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJkaXNwbGF5Iiwic3BhY2luZyIsIkdyaWQiLCJQYXBlciIsIkJveCIsIkNhcmQiLCJDYXJkQWN0aW9ucyIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsIkxpbmsiLCJJdGVtIiwidGhlbWUiLCJ0eXBvZ3JhcGh5IiwiYm9keTIiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsIlJvd0FuZENvbHVtblNwYWNpbmciLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsInhzIiwic20iLCJtZCIsImhlaWdodCIsIm1pbldpZHRoIiwibWluaGVpZ2h0IiwibXgiLCJiZ2NvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsInZpc2liaWxpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game.js\n");

/***/ })

});
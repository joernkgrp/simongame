"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/colors/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n // Create a theme instance.\n\nvar theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n  margin: 5,\n\n  /* 5% Abstand auf allen Seiten */\n  typography: {\n    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '\"Segoe UI\"', 'Roboto', '\"Helvetica Neue\"', 'Arial', 'sans-serif', '\"Apple Color Emoji\"', '\"Segoe UI Emoji\"', '\"Segoe UI Symbol\"'].join(',')\n  },\n  palette: {\n    primary: {\n      main: '#303f9f'\n    },\n    secondary: {\n      main: '#e64a19'\n    },\n    error: {\n      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400\n    },\n    myred: {\n      main: '#d32f2f',\n      contrastText: '#fff'\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0NBR0E7O0FBQ0EsSUFBTUUsS0FBSyxHQUFHRixpRUFBVyxDQUFDO0FBQ3hCRyxFQUFBQSxNQUFNLEVBQUUsQ0FEZ0I7O0FBQ0w7QUFDbkJDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxVQUFVLEVBQUUsQ0FDVixlQURVLEVBRVYsb0JBRlUsRUFHVixZQUhVLEVBSVYsUUFKVSxFQUtWLGtCQUxVLEVBTVYsT0FOVSxFQU9WLFlBUFUsRUFRVixxQkFSVSxFQVNWLGtCQVRVLEVBVVYsbUJBVlUsRUFXVkMsSUFYVSxDQVdMLEdBWEs7QUFERixHQUZZO0FBZ0J4QkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxJQUFJLEVBQUU7QUFEQyxLQURGO0FBSVBDLElBQUFBLFNBQVMsRUFBRTtBQUNURCxNQUFBQSxJQUFJLEVBQUU7QUFERyxLQUpKO0FBT1BFLElBQUFBLEtBQUssRUFBRTtBQUNMRixNQUFBQSxJQUFJLEVBQUVSLDBEQUFRVztBQURULEtBUEE7QUFVUEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xKLE1BQUFBLElBQUksRUFBRSxTQUREO0FBRUxLLE1BQUFBLFlBQVksRUFBRTtBQUZUO0FBVkE7QUFoQmUsQ0FBRCxDQUF6QjtBQWlDQSwrREFBZVosS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdGhlbWUuanM/Y2MzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCB7IHJlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvY29sb3JzJztcblxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHsgXG4gIG1hcmdpbjogNSwgICAgICAgICAvKiA1JSBBYnN0YW5kIGF1ZiBhbGxlbiBTZWl0ZW4gKi9cbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6IFtcbiAgICAgICctYXBwbGUtc3lzdGVtJyxcbiAgICAgICdCbGlua01hY1N5c3RlbUZvbnQnLFxuICAgICAgJ1wiU2Vnb2UgVUlcIicsXG4gICAgICAnUm9ib3RvJyxcbiAgICAgICdcIkhlbHZldGljYSBOZXVlXCInLFxuICAgICAgJ0FyaWFsJyxcbiAgICAgICdzYW5zLXNlcmlmJyxcbiAgICAgICdcIkFwcGxlIENvbG9yIEVtb2ppXCInLFxuICAgICAgJ1wiU2Vnb2UgVUkgRW1vamlcIicsXG4gICAgICAnXCJTZWdvZSBVSSBTeW1ib2xcIicsXG4gICAgXS5qb2luKCcsJyksXG4gIH0sXG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnIzMwM2Y5ZicsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjZTY0YTE5JyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiByZWQuQTQwMCxcbiAgICB9LFxuICAgIG15cmVkOiB7XG4gICAgICBtYWluOiAnI2QzMmYyZicsXG4gICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVRoZW1lIiwicmVkIiwidGhlbWUiLCJtYXJnaW4iLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsImpvaW4iLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJlcnJvciIsIkE0MDAiLCJteXJlZCIsImNvbnRyYXN0VGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme.js\n");

/***/ })

});
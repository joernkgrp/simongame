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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RowAndColumnSpacing; }\n/* harmony export */ });\n/* harmony import */ var _Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Stack */ \"./node_modules/@mui/material/Stack/index.js\");\n/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Snackbar */ \"./node_modules/@mui/material/Snackbar/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Close */ \"./node_modules/@mui/icons-material/Close.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/joernkogerup/Developer/simongame/pages/game.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction RowAndColumnSpacing() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),\n      _React$useState2 = (0,_Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),\n      open = _React$useState2[0],\n      setOpen = _React$useState2[1];\n\n  var handleClick = function handleClick() {\n    setOpen(true);\n  };\n\n  var handleClose = function handleClose(event, reason) {\n    if (reason === 'clickaway') {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  var action = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n      color: \"secondary\",\n      size: \"small\",\n      onClick: handleClose,\n      children: \"CLOSE\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__.default, {\n      size: \"small\",\n      \"aria-label\": \"close\",\n      color: \"inherit\",\n      onClick: handleClose,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__.default, {\n        fontSize: \"small\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n\n  function returnMe() {\n    for (var i = 0; i < 3; i++) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {\n        item: true,\n        xs: 6,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.default, {\n          sx: {\n            width: '100%',\n            height: 250,\n            minWidth: 100,\n            minheight: 100,\n            borderRadius: 4,\n            mx: \"auto\",\n            bgcolor: '#d32f2f',\n            '&:hover': {\n              backgroundColor: '#9a0007',\n              opacity: [1, 1, 1]\n            }\n          },\n          onClick: handleClick\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_8__.default, {\n          open: open,\n          autoHideDuration: 3000,\n          onClose: handleClose,\n          message: \"You have pressed the red button\",\n          action: action\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this);\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.default, {\n    sx: {\n      width: '100%',\n      p: 2\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {\n      container: true,\n      rowSpacing: 2,\n      columnSpacing: 2,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {\n        item: true,\n        xs: 6,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.default, {\n          sx: {\n            width: '100%',\n            height: 250,\n            minWidth: 100,\n            minheight: 100,\n            borderRadius: 4,\n            mx: \"auto\",\n            bgcolor: '#d32f2f',\n            '&:hover': {\n              backgroundColor: '#9a0007',\n              opacity: [1, 1, 1]\n            }\n          },\n          onClick: handleClick\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_8__.default, {\n          open: open,\n          autoHideDuration: 3000,\n          onClose: handleClose,\n          message: \"You have pressed the red button\",\n          action: action\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {\n        item: true,\n        xs: 6,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.default, {\n          sx: {\n            width: '100%',\n            height: 250,\n            minWidth: 100,\n            minheight: 100,\n            borderRadius: 4,\n            mx: \"auto\",\n            bgcolor: '#1976d2',\n            '&:hover': {\n              backgroundColor: '#004ba0',\n              opacity: [1, 1, 1]\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {\n        item: true,\n        xs: 6,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.default, {\n          sx: {\n            width: '100%',\n            height: 250,\n            minWidth: 100,\n            minheight: 100,\n            borderRadius: 4,\n            mx: \"auto\",\n            bgcolor: '#388e3c',\n            '&:hover': {\n              backgroundColor: '#00600f',\n              opacity: [1, 1, 1]\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {\n        item: true,\n        xs: 6,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.default, {\n          sx: {\n            width: '100%',\n            height: 250,\n            minWidth: 100,\n            minheight: 100,\n            borderRadius: 4,\n            mx: \"auto\",\n            bgcolor: '#fbc02d',\n            '&:hover': {\n              backgroundColor: '#c49000',\n              opacity: [1, 1, 1]\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.default, {\n      component: \"div\",\n      sx: {\n        visibility: 'hidden'\n      },\n      children: \"Visibility Hidden\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__.default, {\n      spacing: 2,\n      direction: \"row\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n        variant: \"contained\",\n        href: \"/\",\n        children: \"Go back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 157,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n        variant: \"outlined\",\n        children: \"I need help\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 5\n  }, this);\n}\n\n_s(RowAndColumnSpacing, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n\n_c = RowAndColumnSpacing;\n\nvar _c;\n\n$RefreshReg$(_c, \"RowAndColumnSpacing\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQU8sQ0FBUDtBQUZBO0FBUlQ7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQStFRSw4REFBQyxzREFBRDtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQXFCLFFBQUUsRUFBRTtBQUFFRSxRQUFBQSxVQUFVLEVBQUU7QUFBZCxPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9FRixlQWtGRSw4REFBQyx3REFBRDtBQUFPLGFBQU8sRUFBRSxDQUFoQjtBQUFtQixlQUFTLEVBQUMsS0FBN0I7QUFBQSw4QkFDRSw4REFBQyx5REFBRDtBQUFRLGVBQU8sRUFBQyxXQUFoQjtBQUE0QixZQUFJLEVBQUMsR0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLHlEQUFEO0FBQVEsZUFBTyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUZEOztHQXhKdUJyQjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS5qcz8zYjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFN0YWNrIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3RhY2snO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU25hY2tiYXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvd0FuZENvbHVtblNwYWNpbmcoKSB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKGV2ZW50LCByZWFzb24pID0+IHtcbiAgICBpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGFjdGlvbiA9IChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgc2l6ZT1cInNtYWxsXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICBDTE9TRVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxuICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgID5cbiAgICAgICAgPENsb3NlSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xuXG4gIGZ1bmN0aW9uIHJldHVybk1lKCl7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICAgIG1pbldpZHRoOiAxMDAsXG4gICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgIG14OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgYmdjb2xvcjogJyNkMzJmMmYnLFxuICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOWEwMDA3JyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMSwgMV0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U25hY2tiYXJcbiAgICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXszMDAwfVxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICBtZXNzYWdlPVwiWW91IGhhdmUgcHJlc3NlZCB0aGUgcmVkIGJ1dHRvblwiXG4gICAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXt7IHdpZHRoOiAnMTAwJScsIHA6IDIsIH19PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHJvd1NwYWNpbmc9ezJ9IGNvbHVtblNwYWNpbmc9ezJ9PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgbWluaGVpZ2h0OiAxMDAsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgbXg6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICBiZ2NvbG9yOiAnI2QzMmYyZicsXG4gICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM5YTAwMDcnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFsxLCAxLCAxXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTbmFja2JhclxuICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezMwMDB9XG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgIG1lc3NhZ2U9XCJZb3UgaGF2ZSBwcmVzc2VkIHRoZSByZWQgYnV0dG9uXCJcbiAgICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICAgIG1pbldpZHRoOiAxMDAsXG4gICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgIG14OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgYmdjb2xvcjogJyMxOTc2ZDInLFxuICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA0YmEwJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMSwgMV0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICAgIG1pbldpZHRoOiAxMDAsXG4gICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgIG14OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgYmdjb2xvcjogJyMzODhlM2MnLFxuICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA2MDBmJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMSwgMV0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICAgIG1pbldpZHRoOiAxMDAsXG4gICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgIG14OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgYmdjb2xvcjogJyNmYmMwMmQnLFxuICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYzQ5MDAwJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMSwgMV0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgdmlzaWJpbGl0eTogJ2hpZGRlbicgfX0+XG4gICAgICAgIFZpc2liaWxpdHkgSGlkZGVuXG4gICAgICA8L0JveD5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBkaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgaHJlZj1cIi9cIiA+R28gYmFjazwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPkkgbmVlZCBoZWxwPC9CdXR0b24+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiR3JpZCIsIkJveCIsIkJ1dHRvbiIsIlN0YWNrIiwiU25hY2tiYXIiLCJJY29uQnV0dG9uIiwiQ2xvc2VJY29uIiwiUm93QW5kQ29sdW1uU3BhY2luZyIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDbGljayIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJhY3Rpb24iLCJyZXR1cm5NZSIsImkiLCJ3aWR0aCIsImhlaWdodCIsIm1pbldpZHRoIiwibWluaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwibXgiLCJiZ2NvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsInAiLCJ2aXNpYmlsaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/game.js\n");

/***/ })

});
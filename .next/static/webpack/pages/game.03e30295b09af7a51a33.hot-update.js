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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RowAndColumnSpacing; }\n/* harmony export */ });\n/* harmony import */ var _Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Stack */ \"./node_modules/@mui/material/Stack/index.js\");\n/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Snackbar */ \"./node_modules/@mui/material/Snackbar/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Close */ \"./node_modules/@mui/icons-material/Close.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/joernkogerup/Developer/simongame/pages/game.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction RowAndColumnSpacing() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState([]),\n      _React$useState2 = (0,_Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),\n      snackPack = _React$useState2[0],\n      setSnackPack = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__.useState(false),\n      _React$useState4 = (0,_Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState3, 2),\n      open = _React$useState4[0],\n      setOpen = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3__.useState(undefined),\n      _React$useState6 = (0,_Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState5, 2),\n      messageInfo = _React$useState6[0],\n      setMessageInfo = _React$useState6[1];\n\n  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {\n    if (snackPack.length && !messageInfo) {\n      // Set a new snack when we don't have an active one\n      setMessageInfo(_objectSpread({}, snackPack[0]));\n      setSnackPack(function (prev) {\n        return prev.slice(1);\n      });\n      setOpen(true);\n    } else if (snackPack.length && messageInfo && open) {\n      // Close an active snack when a new one is added\n      setOpen(false);\n    }\n  }, [snackPack, messageInfo, open]);\n\n  var handleClick = function handleClick(message) {\n    return function () {\n      setSnackPack(function (prev) {\n        return [].concat((0,_Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(prev), [{\n          message: message,\n          key: new Date().getTime()\n        }]);\n      });\n    };\n  };\n\n  var handleClose = function handleClose(event, reason) {\n    if (reason === 'clickaway') {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  var handleExited = function handleExited() {\n    setMessageInfo(undefined);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__.default, {\n    maxWidth: \"lg\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n      sx: {\n        flexGrow: 1\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__.default, {\n        position: \"static\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__.default, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, {\n            href: \"/\",\n            size: \"large\",\n            edge: \"start\",\n            color: \"inherit\",\n            \"aria-label\": \"menu\",\n            sx: {\n              mr: 2\n            },\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {\n            variant: \"h6\",\n            component: \"div\",\n            sx: {\n              flexGrow: 1\n            },\n            children: \"Simon Game\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n      sx: {\n        width: '100%',\n        p: 2\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__.default, {\n        container: true,\n        rowSpacing: 2,\n        columnSpacing: 2,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__.default, {\n          item: true,\n          xs: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n            sx: {\n              width: '100%',\n              height: 250,\n              minWidth: 100,\n              minheight: 100,\n              borderRadius: 4,\n              mx: \"auto\",\n              bgcolor: '#d32f2f',\n              '&:hover': {\n                backgroundColor: '#9a0007',\n                opacity: [1, 1, 1]\n              }\n            },\n            onClick: handleClick('Red')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__.default, {\n          item: true,\n          xs: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n            sx: {\n              width: '100%',\n              height: 250,\n              minWidth: 100,\n              minheight: 100,\n              borderRadius: 4,\n              mx: \"auto\",\n              bgcolor: '#1976d2',\n              '&:hover': {\n                backgroundColor: '#004ba0',\n                opacity: [1, 1, 1]\n              }\n            },\n            onClick: handleClick('Blue')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__.default, {\n          item: true,\n          xs: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n            sx: {\n              width: '100%',\n              height: 250,\n              minWidth: 100,\n              minheight: 100,\n              borderRadius: 4,\n              mx: \"auto\",\n              bgcolor: '#388e3c',\n              '&:hover': {\n                backgroundColor: '#00600f',\n                opacity: [1, 1, 1]\n              }\n            },\n            onClick: handleClick('Green')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__.default, {\n          item: true,\n          xs: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n            sx: {\n              width: '100%',\n              height: 250,\n              minWidth: 100,\n              minheight: 100,\n              borderRadius: 4,\n              mx: \"auto\",\n              bgcolor: '#fbc02d',\n              '&:hover': {\n                backgroundColor: '#c49000',\n                opacity: [1, 1, 1]\n              }\n            },\n            onClick: handleClick('Yellow')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_13__.default, {\n        open: open,\n        autoHideDuration: 2000,\n        onClose: handleClose,\n        TransitionProps: {\n          onExited: handleExited\n        },\n        message: messageInfo ? messageInfo.message : undefined,\n        action: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, {\n            \"aria-label\": \"close\",\n            color: \"inherit\",\n            sx: {\n              p: 0.5\n            },\n            onClick: handleClose,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 158,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 152,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 13\n        }, this)\n      }, messageInfo ? messageInfo.key : undefined, false, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n        component: \"div\",\n        sx: {\n          visibility: 'hidden'\n        },\n        children: \"Visibility Hidden\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 163,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_14__.default, {\n        spacing: 2,\n        direction: \"row\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_15__.default, {\n          variant: \"contained\",\n          href: \"/\",\n          children: \"Go back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 167,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 166,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, this);\n}\n\n_s(RowAndColumnSpacing, \"FHpDN7yzS7sbxw+UjNc44M3c3gM=\");\n\n_c = RowAndColumnSpacing;\n\nvar _c;\n\n$RefreshReg$(_c, \"RowAndColumnSpacing\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU1ksbUJBQVQsR0FBK0I7QUFBQTs7QUFDNUMsd0JBQWtDWiwyQ0FBQSxDQUFlLEVBQWYsQ0FBbEM7QUFBQTtBQUFBLE1BQU9jLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EseUJBQXdCZiwyQ0FBQSxDQUFlLEtBQWYsQ0FBeEI7QUFBQTtBQUFBLE1BQU9nQixJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSx5QkFBc0NqQiwyQ0FBQSxDQUFla0IsU0FBZixDQUF0QztBQUFBO0FBQUEsTUFBT0MsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFFQXBCLEVBQUFBLDRDQUFBLENBQWdCLFlBQU07QUFDcEIsUUFBSWMsU0FBUyxDQUFDUSxNQUFWLElBQW9CLENBQUNILFdBQXpCLEVBQXNDO0FBQ3BDO0FBQ0FDLE1BQUFBLGNBQWMsbUJBQU1OLFNBQVMsQ0FBQyxDQUFELENBQWYsRUFBZDtBQUNBQyxNQUFBQSxZQUFZLENBQUMsVUFBQ1EsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQVgsQ0FBVjtBQUFBLE9BQUQsQ0FBWjtBQUNBUCxNQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsS0FMRCxNQUtPLElBQUlILFNBQVMsQ0FBQ1EsTUFBVixJQUFvQkgsV0FBcEIsSUFBbUNILElBQXZDLEVBQTZDO0FBQ2xEO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQyxLQUFELENBQVA7QUFDRDtBQUNGLEdBVkQsRUFVRyxDQUFDSCxTQUFELEVBQVlLLFdBQVosRUFBeUJILElBQXpCLENBVkg7O0FBWUEsTUFBTVMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRDtBQUFBLFdBQWEsWUFBTTtBQUNyQ1gsTUFBQUEsWUFBWSxDQUFDLFVBQUNRLElBQUQ7QUFBQSxxTEFBY0EsSUFBZCxJQUFvQjtBQUFFRyxVQUFBQSxPQUFPLEVBQVBBLE9BQUY7QUFBV0MsVUFBQUEsR0FBRyxFQUFFLElBQUlDLElBQUosR0FBV0MsT0FBWDtBQUFoQixTQUFwQjtBQUFBLE9BQUQsQ0FBWjtBQUNELEtBRm1CO0FBQUEsR0FBcEI7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3JDLFFBQUlBLE1BQU0sS0FBSyxXQUFmLEVBQTRCO0FBQzFCO0FBQ0Q7O0FBQ0RmLElBQUFBLE9BQU8sQ0FBQyxLQUFELENBQVA7QUFDRCxHQUxEOztBQU9BLE1BQU1nQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCYixJQUFBQSxjQUFjLENBQUNGLFNBQUQsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UsOERBQUMsNERBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBQSw0QkFDRSw4REFBQyxzREFBRDtBQUFLLFFBQUUsRUFBRTtBQUFFZ0IsUUFBQUEsUUFBUSxFQUFFO0FBQVosT0FBVDtBQUFBLDZCQUNFLDhEQUFDLHlEQUFEO0FBQVEsZ0JBQVEsRUFBQyxRQUFqQjtBQUFBLCtCQUNFLDhEQUFDLDBEQUFEO0FBQUEsa0NBQ0UsOERBQUMsNkRBQUQ7QUFDRSxnQkFBSSxFQUFDLEdBRFA7QUFFRSxnQkFBSSxFQUFDLE9BRlA7QUFHRSxnQkFBSSxFQUFDLE9BSFA7QUFJRSxpQkFBSyxFQUFDLFNBSlI7QUFLRSwwQkFBVyxNQUxiO0FBTUUsY0FBRSxFQUFFO0FBQUVDLGNBQUFBLEVBQUUsRUFBRTtBQUFOLGFBTk47QUFBQSxtQ0FRRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQVdFLDhEQUFDLDhEQUFEO0FBQVksbUJBQU8sRUFBQyxJQUFwQjtBQUF5QixxQkFBUyxFQUFDLEtBQW5DO0FBQXlDLGNBQUUsRUFBRTtBQUFFRCxjQUFBQSxRQUFRLEVBQUU7QUFBWixhQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBcUJFLDhEQUFDLHNEQUFEO0FBQUssUUFBRSxFQUFFO0FBQUVFLFFBQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCQyxRQUFBQSxDQUFDLEVBQUU7QUFBcEIsT0FBVDtBQUFBLDhCQUNFLDhEQUFDLHdEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixrQkFBVSxFQUFFLENBQTVCO0FBQStCLHFCQUFhLEVBQUUsQ0FBOUM7QUFBQSxnQ0FDRSw4REFBQyx3REFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQUEsaUNBQ0UsOERBQUMsc0RBQUQ7QUFDRSxjQUFFLEVBQUU7QUFDRkQsY0FBQUEsS0FBSyxFQUFFLE1BREw7QUFFRkUsY0FBQUEsTUFBTSxFQUFFLEdBRk47QUFHRkMsY0FBQUEsUUFBUSxFQUFFLEdBSFI7QUFJRkMsY0FBQUEsU0FBUyxFQUFFLEdBSlQ7QUFLRkMsY0FBQUEsWUFBWSxFQUFFLENBTFo7QUFNRkMsY0FBQUEsRUFBRSxFQUFFLE1BTkY7QUFPRkMsY0FBQUEsT0FBTyxFQUFFLFNBUFA7QUFRRix5QkFBVztBQUNUQyxnQkFBQUEsZUFBZSxFQUFFLFNBRFI7QUFFVEMsZ0JBQUFBLE9BQU8sRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUZBO0FBUlQsYUFETjtBQWNFLG1CQUFPLEVBQUVwQixXQUFXLENBQUMsS0FBRDtBQWR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQW1CRSw4REFBQyx3REFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQUEsaUNBQ0UsOERBQUMsc0RBQUQ7QUFDRSxjQUFFLEVBQUU7QUFDRlcsY0FBQUEsS0FBSyxFQUFFLE1BREw7QUFFRkUsY0FBQUEsTUFBTSxFQUFFLEdBRk47QUFHRkMsY0FBQUEsUUFBUSxFQUFFLEdBSFI7QUFJRkMsY0FBQUEsU0FBUyxFQUFFLEdBSlQ7QUFLRkMsY0FBQUEsWUFBWSxFQUFFLENBTFo7QUFNRkMsY0FBQUEsRUFBRSxFQUFFLE1BTkY7QUFPRkMsY0FBQUEsT0FBTyxFQUFFLFNBUFA7QUFRRix5QkFBVztBQUNUQyxnQkFBQUEsZUFBZSxFQUFFLFNBRFI7QUFFVEMsZ0JBQUFBLE9BQU8sRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUZBO0FBUlQsYUFETjtBQWNFLG1CQUFPLEVBQUVwQixXQUFXLENBQUMsTUFBRDtBQWR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQkYsZUFxQ0UsOERBQUMsd0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFBLGlDQUNFLDhEQUFDLHNEQUFEO0FBQ0UsY0FBRSxFQUFFO0FBQ0ZXLGNBQUFBLEtBQUssRUFBRSxNQURMO0FBRUZFLGNBQUFBLE1BQU0sRUFBRSxHQUZOO0FBR0ZDLGNBQUFBLFFBQVEsRUFBRSxHQUhSO0FBSUZDLGNBQUFBLFNBQVMsRUFBRSxHQUpUO0FBS0ZDLGNBQUFBLFlBQVksRUFBRSxDQUxaO0FBTUZDLGNBQUFBLEVBQUUsRUFBRSxNQU5GO0FBT0ZDLGNBQUFBLE9BQU8sRUFBRSxTQVBQO0FBUUYseUJBQVc7QUFDVEMsZ0JBQUFBLGVBQWUsRUFBRSxTQURSO0FBRVRDLGdCQUFBQSxPQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7QUFGQTtBQVJULGFBRE47QUFjRSxtQkFBTyxFQUFFcEIsV0FBVyxDQUFDLE9BQUQ7QUFkdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckNGLGVBdURFLDhEQUFDLHdEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBQSxpQ0FDRSw4REFBQyxzREFBRDtBQUNFLGNBQUUsRUFBRTtBQUNGVyxjQUFBQSxLQUFLLEVBQUUsTUFETDtBQUVGRSxjQUFBQSxNQUFNLEVBQUUsR0FGTjtBQUdGQyxjQUFBQSxRQUFRLEVBQUUsR0FIUjtBQUlGQyxjQUFBQSxTQUFTLEVBQUUsR0FKVDtBQUtGQyxjQUFBQSxZQUFZLEVBQUUsQ0FMWjtBQU1GQyxjQUFBQSxFQUFFLEVBQUUsTUFORjtBQU9GQyxjQUFBQSxPQUFPLEVBQUUsU0FQUDtBQVFGLHlCQUFXO0FBQ1RDLGdCQUFBQSxlQUFlLEVBQUUsU0FEUjtBQUVUQyxnQkFBQUEsT0FBTyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBRkE7QUFSVCxhQUROO0FBY0UsbUJBQU8sRUFBRXBCLFdBQVcsQ0FBQyxRQUFEO0FBZHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQTJFRSw4REFBQyw0REFBRDtBQUVFLFlBQUksRUFBRVQsSUFGUjtBQUdFLHdCQUFnQixFQUFFLElBSHBCO0FBSUUsZUFBTyxFQUFFYyxXQUpYO0FBS0UsdUJBQWUsRUFBRTtBQUFFZ0IsVUFBQUEsUUFBUSxFQUFFYjtBQUFaLFNBTG5CO0FBTUUsZUFBTyxFQUFFZCxXQUFXLEdBQUdBLFdBQVcsQ0FBQ08sT0FBZixHQUF5QlIsU0FOL0M7QUFPRSxjQUFNLGVBQ0osOERBQUMsMkNBQUQ7QUFBQSxpQ0FDRSw4REFBQyw2REFBRDtBQUNFLDBCQUFXLE9BRGI7QUFFRSxpQkFBSyxFQUFDLFNBRlI7QUFHRSxjQUFFLEVBQUU7QUFBRW1CLGNBQUFBLENBQUMsRUFBRTtBQUFMLGFBSE47QUFJRSxtQkFBTyxFQUFFUCxXQUpYO0FBQUEsbUNBTUUsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkosU0FDT1gsV0FBVyxHQUFHQSxXQUFXLENBQUNRLEdBQWYsR0FBcUJULFNBRHZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzRUYsZUErRkUsOERBQUMsc0RBQUQ7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBcUIsVUFBRSxFQUFFO0FBQUU2QixVQUFBQSxVQUFVLEVBQUU7QUFBZCxTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9GRixlQWtHRSw4REFBQyx5REFBRDtBQUFPLGVBQU8sRUFBRSxDQUFoQjtBQUFtQixpQkFBUyxFQUFDLEtBQTdCO0FBQUEsK0JBQ0UsOERBQUMsMERBQUQ7QUFBUSxpQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGNBQUksRUFBQyxHQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEhEOztHQTlKdUJuQzs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS5qcz8zYjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFN0YWNrIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3RhY2snO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU25hY2tiYXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvd0FuZENvbHVtblNwYWNpbmcoKSB7XG4gIGNvbnN0IFtzbmFja1BhY2ssIHNldFNuYWNrUGFja10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lc3NhZ2VJbmZvLCBzZXRNZXNzYWdlSW5mb10gPSBSZWFjdC51c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNuYWNrUGFjay5sZW5ndGggJiYgIW1lc3NhZ2VJbmZvKSB7XG4gICAgICAvLyBTZXQgYSBuZXcgc25hY2sgd2hlbiB3ZSBkb24ndCBoYXZlIGFuIGFjdGl2ZSBvbmVcbiAgICAgIHNldE1lc3NhZ2VJbmZvKHsgLi4uc25hY2tQYWNrWzBdIH0pO1xuICAgICAgc2V0U25hY2tQYWNrKChwcmV2KSA9PiBwcmV2LnNsaWNlKDEpKTtcbiAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChzbmFja1BhY2subGVuZ3RoICYmIG1lc3NhZ2VJbmZvICYmIG9wZW4pIHtcbiAgICAgIC8vIENsb3NlIGFuIGFjdGl2ZSBzbmFjayB3aGVuIGEgbmV3IG9uZSBpcyBhZGRlZFxuICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfVxuICB9LCBbc25hY2tQYWNrLCBtZXNzYWdlSW5mbywgb3Blbl0pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKG1lc3NhZ2UpID0+ICgpID0+IHtcbiAgICBzZXRTbmFja1BhY2soKHByZXYpID0+IFsuLi5wcmV2LCB7IG1lc3NhZ2UsIGtleTogbmV3IERhdGUoKS5nZXRUaW1lKCkgfV0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKGV2ZW50LCByZWFzb24pID0+IHtcbiAgICBpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFeGl0ZWQgPSAoKSA9PiB7XG4gICAgc2V0TWVzc2FnZUluZm8odW5kZWZpbmVkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSB9fT5cbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibWVudVwiXG4gICAgICAgICAgICAgIHN4PXt7IG1yOiAyIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZsZXhHcm93OiAxIH19PlxuICAgICAgICAgICAgICBTaW1vbiBHYW1lXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8L0FwcEJhcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IHN4PXt7IHdpZHRoOiAnMTAwJScsIHA6IDIsIH19PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgcm93U3BhY2luZz17Mn0gY29sdW1uU3BhY2luZz17Mn0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogJyNkMzJmMmYnLFxuICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzlhMDAwNycsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMSwgMV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soJ1JlZCcpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogJyMxOTc2ZDInLFxuICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwNGJhMCcsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMSwgMV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soJ0JsdWUnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICBtaW5oZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgICAgbXg6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIGJnY29sb3I6ICcjMzg4ZTNjJyxcbiAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDYwMGYnLFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogWzEsIDEsIDFdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrKCdHcmVlbicpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogJyNmYmMwMmQnLFxuICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2M0OTAwMCcsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMSwgMV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soJ1llbGxvdycpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPFNuYWNrYmFyXG4gICAgICAgICAga2V5PXttZXNzYWdlSW5mbyA/IG1lc3NhZ2VJbmZvLmtleSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezIwMDB9XG4gICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgVHJhbnNpdGlvblByb3BzPXt7IG9uRXhpdGVkOiBoYW5kbGVFeGl0ZWQgfX1cbiAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlSW5mbyA/IG1lc3NhZ2VJbmZvLm1lc3NhZ2UgOiB1bmRlZmluZWR9XG4gICAgICAgICAgYWN0aW9uPXtcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgc3g9e3sgcDogMC41IH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8Qm94IGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH19PlxuICAgICAgICAgIFZpc2liaWxpdHkgSGlkZGVuXG4gICAgICAgIDwvQm94PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gZGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgaHJlZj1cIi9cIiA+R28gYmFjazwvQnV0dG9uPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBCYXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkNvbnRhaW5lciIsIkdyaWQiLCJCb3giLCJCdXR0b24iLCJTdGFjayIsIlNuYWNrYmFyIiwiSWNvbkJ1dHRvbiIsIkNsb3NlSWNvbiIsIlJvd0FuZENvbHVtblNwYWNpbmciLCJ1c2VTdGF0ZSIsInNuYWNrUGFjayIsInNldFNuYWNrUGFjayIsIm9wZW4iLCJzZXRPcGVuIiwidW5kZWZpbmVkIiwibWVzc2FnZUluZm8iLCJzZXRNZXNzYWdlSW5mbyIsInVzZUVmZmVjdCIsImxlbmd0aCIsInByZXYiLCJzbGljZSIsImhhbmRsZUNsaWNrIiwibWVzc2FnZSIsImtleSIsIkRhdGUiLCJnZXRUaW1lIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsInJlYXNvbiIsImhhbmRsZUV4aXRlZCIsImZsZXhHcm93IiwibXIiLCJ3aWR0aCIsInAiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1pbmhlaWdodCIsImJvcmRlclJhZGl1cyIsIm14IiwiYmdjb2xvciIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiLCJvbkV4aXRlZCIsInZpc2liaWxpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game.js\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RowAndColumnSpacing; }\n/* harmony export */ });\n/* harmony import */ var _Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Snackbar */ \"./node_modules/@mui/material/Snackbar/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Close */ \"./node_modules/@mui/icons-material/Close.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/joernkogerup/Developer/simongame/pages/game.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction RowAndColumnSpacing() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState([]),\n      _React$useState2 = (0,_Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),\n      snackPack = _React$useState2[0],\n      setSnackPack = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__.useState(false),\n      _React$useState4 = (0,_Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState3, 2),\n      open = _React$useState4[0],\n      setOpen = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3__.useState(undefined),\n      _React$useState6 = (0,_Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState5, 2),\n      messageInfo = _React$useState6[0],\n      setMessageInfo = _React$useState6[1];\n\n  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {\n    if (snackPack.length && !messageInfo) {\n      // Set a new snack when we don't have an active one\n      setMessageInfo(_objectSpread({}, snackPack[0]));\n      setSnackPack(function (prev) {\n        return prev.slice(1);\n      });\n      setOpen(true);\n    } else if (snackPack.length && messageInfo && open) {\n      // Close an active snack when a new one is added\n      setOpen(false);\n    }\n  }, [snackPack, messageInfo, open]);\n\n  var handleClick = function handleClick(message) {\n    return function () {\n      setSnackPack(function (prev) {\n        return [].concat((0,_Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(prev), [{\n          message: message,\n          key: new Date().getTime()\n        }]);\n      });\n    };\n  };\n\n  var handleClose = function handleClose(event, reason) {\n    if (reason === 'clickaway') {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  var handleExited = function handleExited() {\n    setMessageInfo(undefined);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__.default, {\n    maxWidth: \"false\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n      sx: {\n        flexGrow: 1\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__.default, {\n        position: \"static\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__.default, {\n          children: [\"CLOSE\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {\n            variant: \"h6\",\n            component: \"div\",\n            sx: {\n              flexGrow: 1\n            },\n            children: \"Simon Game\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__.default, {\n            href: \"/\",\n            size: \"large\",\n            edge: \"start\",\n            color: \"inherit\",\n            \"aria-label\": \"menu\",\n            sx: {\n              mr: 2\n            },\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n      sx: {\n        width: '100%',\n        p: 2\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__.default, {\n        container: true,\n        rowSpacing: 2,\n        columnSpacing: 2,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__.default, {\n          item: true,\n          xs: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n            sx: {\n              width: '100%',\n              height: 250,\n              minWidth: 100,\n              minheight: 100,\n              borderRadius: 4,\n              mx: \"auto\",\n              bgcolor: '#d32f2f',\n              '&:hover': {\n                backgroundColor: '#9a0007',\n                opacity: [1, 1, 1]\n              }\n            },\n            onClick: handleClick('Red')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__.default, {\n          item: true,\n          xs: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n            sx: {\n              width: '100%',\n              height: 250,\n              minWidth: 100,\n              minheight: 100,\n              borderRadius: 4,\n              mx: \"auto\",\n              bgcolor: '#1976d2',\n              '&:hover': {\n                backgroundColor: '#004ba0',\n                opacity: [1, 1, 1]\n              }\n            },\n            onClick: handleClick('Blue')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__.default, {\n          item: true,\n          xs: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n            sx: {\n              width: '100%',\n              height: 250,\n              minWidth: 100,\n              minheight: 100,\n              borderRadius: 4,\n              mx: \"auto\",\n              bgcolor: '#388e3c',\n              '&:hover': {\n                backgroundColor: '#00600f',\n                opacity: [1, 1, 1]\n              }\n            },\n            onClick: handleClick('Green')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__.default, {\n          item: true,\n          xs: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n            sx: {\n              width: '100%',\n              height: 250,\n              minWidth: 100,\n              minheight: 100,\n              borderRadius: 4,\n              mx: \"auto\",\n              bgcolor: '#fbc02d',\n              '&:hover': {\n                backgroundColor: '#c49000',\n                opacity: [1, 1, 1]\n              }\n            },\n            onClick: handleClick('Yellow')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_13__.default, {\n        open: open,\n        autoHideDuration: 2000,\n        onClose: handleClose,\n        TransitionProps: {\n          onExited: handleExited\n        },\n        message: messageInfo ? messageInfo.message : undefined,\n        action: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__.default, {\n            \"aria-label\": \"close\",\n            color: \"inherit\",\n            sx: {\n              p: 0.5\n            },\n            onClick: handleClose,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 160,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 154,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 153,\n          columnNumber: 13\n        }, this)\n      }, messageInfo ? messageInfo.key : undefined, false, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, this);\n}\n\n_s(RowAndColumnSpacing, \"FHpDN7yzS7sbxw+UjNc44M3c3gM=\");\n\n_c = RowAndColumnSpacing;\n\nvar _c;\n\n$RefreshReg$(_c, \"RowAndColumnSpacing\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNZLG1CQUFULEdBQStCO0FBQUE7O0FBQzVDLHdCQUFrQ1osMkNBQUEsQ0FBZSxFQUFmLENBQWxDO0FBQUE7QUFBQSxNQUFPYyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLHlCQUF3QmYsMkNBQUEsQ0FBZSxLQUFmLENBQXhCO0FBQUE7QUFBQSxNQUFPZ0IsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EseUJBQXNDakIsMkNBQUEsQ0FBZWtCLFNBQWYsQ0FBdEM7QUFBQTtBQUFBLE1BQU9DLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBRUFwQixFQUFBQSw0Q0FBQSxDQUFnQixZQUFNO0FBQ3BCLFFBQUljLFNBQVMsQ0FBQ1EsTUFBVixJQUFvQixDQUFDSCxXQUF6QixFQUFzQztBQUNwQztBQUNBQyxNQUFBQSxjQUFjLG1CQUFNTixTQUFTLENBQUMsQ0FBRCxDQUFmLEVBQWQ7QUFDQUMsTUFBQUEsWUFBWSxDQUFDLFVBQUNRLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFYLENBQVY7QUFBQSxPQUFELENBQVo7QUFDQVAsTUFBQUEsT0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNELEtBTEQsTUFLTyxJQUFJSCxTQUFTLENBQUNRLE1BQVYsSUFBb0JILFdBQXBCLElBQW1DSCxJQUF2QyxFQUE2QztBQUNsRDtBQUNBQyxNQUFBQSxPQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0Q7QUFDRixHQVZELEVBVUcsQ0FBQ0gsU0FBRCxFQUFZSyxXQUFaLEVBQXlCSCxJQUF6QixDQVZIOztBQVlBLE1BQU1TLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE9BQUQ7QUFBQSxXQUFhLFlBQU07QUFDckNYLE1BQUFBLFlBQVksQ0FBQyxVQUFDUSxJQUFEO0FBQUEscUxBQWNBLElBQWQsSUFBb0I7QUFBRUcsVUFBQUEsT0FBTyxFQUFQQSxPQUFGO0FBQVdDLFVBQUFBLEdBQUcsRUFBRSxJQUFJQyxJQUFKLEdBQVdDLE9BQVg7QUFBaEIsU0FBcEI7QUFBQSxPQUFELENBQVo7QUFDRCxLQUZtQjtBQUFBLEdBQXBCOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNyQyxRQUFJQSxNQUFNLEtBQUssV0FBZixFQUE0QjtBQUMxQjtBQUNEOztBQUNEZixJQUFBQSxPQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsR0FMRDs7QUFPQSxNQUFNZ0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QmIsSUFBQUEsY0FBYyxDQUFDRixTQUFELENBQWQ7QUFDRCxHQUZEOztBQUlBLHNCQUNFLDhEQUFDLDREQUFEO0FBQVcsWUFBUSxFQUFDLE9BQXBCO0FBQUEsNEJBQ0UsOERBQUMsc0RBQUQ7QUFBSyxRQUFFLEVBQUU7QUFBRWdCLFFBQUFBLFFBQVEsRUFBRTtBQUFaLE9BQVQ7QUFBQSw2QkFDRSw4REFBQyx5REFBRDtBQUFRLGdCQUFRLEVBQUMsUUFBakI7QUFBQSwrQkFDRSw4REFBQywwREFBRDtBQUFBLDJDQUdFLDhEQUFDLDZEQUFEO0FBQVksbUJBQU8sRUFBQyxJQUFwQjtBQUF5QixxQkFBUyxFQUFDLEtBQW5DO0FBQXlDLGNBQUUsRUFBRTtBQUFFQSxjQUFBQSxRQUFRLEVBQUU7QUFBWixhQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRixlQU1FLDhEQUFDLDhEQUFEO0FBQ0UsZ0JBQUksRUFBQyxHQURQO0FBRUUsZ0JBQUksRUFBQyxPQUZQO0FBR0UsZ0JBQUksRUFBQyxPQUhQO0FBSUUsaUJBQUssRUFBQyxTQUpSO0FBS0UsMEJBQVcsTUFMYjtBQU1FLGNBQUUsRUFBRTtBQUFFQyxjQUFBQSxFQUFFLEVBQUU7QUFBTixhQU5OO0FBQUEsbUNBUUUsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQXVCRSw4REFBQyxzREFBRDtBQUFLLFFBQUUsRUFBRTtBQUFFQyxRQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsUUFBQUEsQ0FBQyxFQUFFO0FBQXBCLE9BQVQ7QUFBQSw4QkFDRSw4REFBQyx3REFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0Isa0JBQVUsRUFBRSxDQUE1QjtBQUErQixxQkFBYSxFQUFFLENBQTlDO0FBQUEsZ0NBQ0UsOERBQUMsd0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFBLGlDQUNFLDhEQUFDLHNEQUFEO0FBQ0UsY0FBRSxFQUFFO0FBQ0ZELGNBQUFBLEtBQUssRUFBRSxNQURMO0FBRUZFLGNBQUFBLE1BQU0sRUFBRSxHQUZOO0FBR0ZDLGNBQUFBLFFBQVEsRUFBRSxHQUhSO0FBSUZDLGNBQUFBLFNBQVMsRUFBRSxHQUpUO0FBS0ZDLGNBQUFBLFlBQVksRUFBRSxDQUxaO0FBTUZDLGNBQUFBLEVBQUUsRUFBRSxNQU5GO0FBT0ZDLGNBQUFBLE9BQU8sRUFBRSxTQVBQO0FBUUYseUJBQVc7QUFDVEMsZ0JBQUFBLGVBQWUsRUFBRSxTQURSO0FBRVRDLGdCQUFBQSxPQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7QUFGQTtBQVJULGFBRE47QUFjRSxtQkFBTyxFQUFFcEIsV0FBVyxDQUFDLEtBQUQ7QUFkdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFtQkUsOERBQUMsd0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFBLGlDQUNFLDhEQUFDLHNEQUFEO0FBQ0UsY0FBRSxFQUFFO0FBQ0ZXLGNBQUFBLEtBQUssRUFBRSxNQURMO0FBRUZFLGNBQUFBLE1BQU0sRUFBRSxHQUZOO0FBR0ZDLGNBQUFBLFFBQVEsRUFBRSxHQUhSO0FBSUZDLGNBQUFBLFNBQVMsRUFBRSxHQUpUO0FBS0ZDLGNBQUFBLFlBQVksRUFBRSxDQUxaO0FBTUZDLGNBQUFBLEVBQUUsRUFBRSxNQU5GO0FBT0ZDLGNBQUFBLE9BQU8sRUFBRSxTQVBQO0FBUUYseUJBQVc7QUFDVEMsZ0JBQUFBLGVBQWUsRUFBRSxTQURSO0FBRVRDLGdCQUFBQSxPQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7QUFGQTtBQVJULGFBRE47QUFjRSxtQkFBTyxFQUFFcEIsV0FBVyxDQUFDLE1BQUQ7QUFkdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJGLGVBcUNFLDhEQUFDLHdEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBQSxpQ0FDRSw4REFBQyxzREFBRDtBQUNFLGNBQUUsRUFBRTtBQUNGVyxjQUFBQSxLQUFLLEVBQUUsTUFETDtBQUVGRSxjQUFBQSxNQUFNLEVBQUUsR0FGTjtBQUdGQyxjQUFBQSxRQUFRLEVBQUUsR0FIUjtBQUlGQyxjQUFBQSxTQUFTLEVBQUUsR0FKVDtBQUtGQyxjQUFBQSxZQUFZLEVBQUUsQ0FMWjtBQU1GQyxjQUFBQSxFQUFFLEVBQUUsTUFORjtBQU9GQyxjQUFBQSxPQUFPLEVBQUUsU0FQUDtBQVFGLHlCQUFXO0FBQ1RDLGdCQUFBQSxlQUFlLEVBQUUsU0FEUjtBQUVUQyxnQkFBQUEsT0FBTyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBRkE7QUFSVCxhQUROO0FBY0UsbUJBQU8sRUFBRXBCLFdBQVcsQ0FBQyxPQUFEO0FBZHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJDRixlQXVERSw4REFBQyx3REFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQUEsaUNBQ0UsOERBQUMsc0RBQUQ7QUFDRSxjQUFFLEVBQUU7QUFDRlcsY0FBQUEsS0FBSyxFQUFFLE1BREw7QUFFRkUsY0FBQUEsTUFBTSxFQUFFLEdBRk47QUFHRkMsY0FBQUEsUUFBUSxFQUFFLEdBSFI7QUFJRkMsY0FBQUEsU0FBUyxFQUFFLEdBSlQ7QUFLRkMsY0FBQUEsWUFBWSxFQUFFLENBTFo7QUFNRkMsY0FBQUEsRUFBRSxFQUFFLE1BTkY7QUFPRkMsY0FBQUEsT0FBTyxFQUFFLFNBUFA7QUFRRix5QkFBVztBQUNUQyxnQkFBQUEsZUFBZSxFQUFFLFNBRFI7QUFFVEMsZ0JBQUFBLE9BQU8sRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUZBO0FBUlQsYUFETjtBQWNFLG1CQUFPLEVBQUVwQixXQUFXLENBQUMsUUFBRDtBQWR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUEyRUUsOERBQUMsNERBQUQ7QUFFRSxZQUFJLEVBQUVULElBRlI7QUFHRSx3QkFBZ0IsRUFBRSxJQUhwQjtBQUlFLGVBQU8sRUFBRWMsV0FKWDtBQUtFLHVCQUFlLEVBQUU7QUFBRWdCLFVBQUFBLFFBQVEsRUFBRWI7QUFBWixTQUxuQjtBQU1FLGVBQU8sRUFBRWQsV0FBVyxHQUFHQSxXQUFXLENBQUNPLE9BQWYsR0FBeUJSLFNBTi9DO0FBT0UsY0FBTSxlQUNKLDhEQUFDLDJDQUFEO0FBQUEsaUNBQ0UsOERBQUMsOERBQUQ7QUFDRSwwQkFBVyxPQURiO0FBRUUsaUJBQUssRUFBQyxTQUZSO0FBR0UsY0FBRSxFQUFFO0FBQUVtQixjQUFBQSxDQUFDLEVBQUU7QUFBTCxhQUhOO0FBSUUsbUJBQU8sRUFBRVAsV0FKWDtBQUFBLG1DQU1FLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKLFNBQ09YLFdBQVcsR0FBR0EsV0FBVyxDQUFDUSxHQUFmLEdBQXFCVCxTQUR2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBIRDs7R0ExSnVCTjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS5qcz8zYjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFN0YWNrIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3RhY2snO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU25hY2tiYXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvd0FuZENvbHVtblNwYWNpbmcoKSB7XG4gIGNvbnN0IFtzbmFja1BhY2ssIHNldFNuYWNrUGFja10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lc3NhZ2VJbmZvLCBzZXRNZXNzYWdlSW5mb10gPSBSZWFjdC51c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNuYWNrUGFjay5sZW5ndGggJiYgIW1lc3NhZ2VJbmZvKSB7XG4gICAgICAvLyBTZXQgYSBuZXcgc25hY2sgd2hlbiB3ZSBkb24ndCBoYXZlIGFuIGFjdGl2ZSBvbmVcbiAgICAgIHNldE1lc3NhZ2VJbmZvKHsgLi4uc25hY2tQYWNrWzBdIH0pO1xuICAgICAgc2V0U25hY2tQYWNrKChwcmV2KSA9PiBwcmV2LnNsaWNlKDEpKTtcbiAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChzbmFja1BhY2subGVuZ3RoICYmIG1lc3NhZ2VJbmZvICYmIG9wZW4pIHtcbiAgICAgIC8vIENsb3NlIGFuIGFjdGl2ZSBzbmFjayB3aGVuIGEgbmV3IG9uZSBpcyBhZGRlZFxuICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfVxuICB9LCBbc25hY2tQYWNrLCBtZXNzYWdlSW5mbywgb3Blbl0pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKG1lc3NhZ2UpID0+ICgpID0+IHtcbiAgICBzZXRTbmFja1BhY2soKHByZXYpID0+IFsuLi5wcmV2LCB7IG1lc3NhZ2UsIGtleTogbmV3IERhdGUoKS5nZXRUaW1lKCkgfV0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKGV2ZW50LCByZWFzb24pID0+IHtcbiAgICBpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFeGl0ZWQgPSAoKSA9PiB7XG4gICAgc2V0TWVzc2FnZUluZm8odW5kZWZpbmVkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJmYWxzZVwiPlxuICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSB9fT5cbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgQ0xPU0VcblxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZmxleEdyb3c6IDEgfX0+XG4gICAgICAgICAgICAgIFNpbW9uIEdhbWVcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm1lbnVcIlxuICAgICAgICAgICAgICBzeD17eyBtcjogMiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8L0FwcEJhcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IHN4PXt7IHdpZHRoOiAnMTAwJScsIHA6IDIsIH19PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgcm93U3BhY2luZz17Mn0gY29sdW1uU3BhY2luZz17Mn0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogJyNkMzJmMmYnLFxuICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzlhMDAwNycsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMSwgMV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soJ1JlZCcpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogJyMxOTc2ZDInLFxuICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwNGJhMCcsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMSwgMV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soJ0JsdWUnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICBtaW5oZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgICAgbXg6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIGJnY29sb3I6ICcjMzg4ZTNjJyxcbiAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDYwMGYnLFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogWzEsIDEsIDFdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrKCdHcmVlbicpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogJyNmYmMwMmQnLFxuICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2M0OTAwMCcsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMSwgMV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soJ1llbGxvdycpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPFNuYWNrYmFyXG4gICAgICAgICAga2V5PXttZXNzYWdlSW5mbyA/IG1lc3NhZ2VJbmZvLmtleSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezIwMDB9XG4gICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgVHJhbnNpdGlvblByb3BzPXt7IG9uRXhpdGVkOiBoYW5kbGVFeGl0ZWQgfX1cbiAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlSW5mbyA/IG1lc3NhZ2VJbmZvLm1lc3NhZ2UgOiB1bmRlZmluZWR9XG4gICAgICAgICAgYWN0aW9uPXtcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgc3g9e3sgcDogMC41IH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBCYXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkNvbnRhaW5lciIsIkdyaWQiLCJCb3giLCJCdXR0b24iLCJTdGFjayIsIlNuYWNrYmFyIiwiSWNvbkJ1dHRvbiIsIkNsb3NlSWNvbiIsIlJvd0FuZENvbHVtblNwYWNpbmciLCJ1c2VTdGF0ZSIsInNuYWNrUGFjayIsInNldFNuYWNrUGFjayIsIm9wZW4iLCJzZXRPcGVuIiwidW5kZWZpbmVkIiwibWVzc2FnZUluZm8iLCJzZXRNZXNzYWdlSW5mbyIsInVzZUVmZmVjdCIsImxlbmd0aCIsInByZXYiLCJzbGljZSIsImhhbmRsZUNsaWNrIiwibWVzc2FnZSIsImtleSIsIkRhdGUiLCJnZXRUaW1lIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsInJlYXNvbiIsImhhbmRsZUV4aXRlZCIsImZsZXhHcm93IiwibXIiLCJ3aWR0aCIsInAiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1pbmhlaWdodCIsImJvcmRlclJhZGl1cyIsIm14IiwiYmdjb2xvciIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiLCJvbkV4aXRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/game.js\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/game";
exports.ids = ["pages/game"];
exports.modules = {

/***/ "./pages/game.js":
/*!***********************!*\
  !*** ./pages/game.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RowAndColumnSpacing)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/AppBar */ \"@mui/material/AppBar\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Toolbar */ \"@mui/material/Toolbar\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Stack */ \"@mui/material/Stack\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Snackbar */ \"@mui/material/Snackbar\");\n/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Close */ \"@mui/icons-material/Close\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);\nvar _jsxFileName = \"/Users/joernkogerup/Developer/simongame/pages/game.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction RowAndColumnSpacing() {\n  const [snackPack, setSnackPack] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);\n  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n  const [messageInfo, setMessageInfo] = react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined);\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\n    if (snackPack.length && !messageInfo) {\n      // Set a new snack when we don't have an active one\n      setMessageInfo(_objectSpread({}, snackPack[0]));\n      setSnackPack(prev => prev.slice(1));\n      setOpen(true);\n    } else if (snackPack.length && messageInfo && open) {\n      // Close an active snack when a new one is added\n      setOpen(false);\n    }\n  }, [snackPack, messageInfo, open]);\n\n  const handleClick = message => () => {\n    setSnackPack(prev => [...prev, {\n      message,\n      key: new Date().getTime()\n    }]);\n  };\n\n  const handleClose = (event, reason) => {\n    if (reason === 'clickaway') {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  const handleExited = () => {\n    setMessageInfo(undefined);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_4___default()), {\n    maxWidth: \"false\",\n    sx: {\n      px: 0\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n      sx: {\n        flexGrow: 1\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default()), {\n        position: \"static\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2___default()), {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {\n            href: \"/\",\n            size: \"large\",\n            edge: \"start\",\n            color: \"inherit\",\n            \"aria-label\": \"menu\",\n            sx: {\n              mr: 2\n            },\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {\n            variant: \"h6\",\n            component: \"div\",\n            sx: {\n              flexGrow: 1\n            },\n            children: \"Simon Game\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n      sx: {\n        width: '100%',\n        p: 2\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n        container: true,\n        rowSpacing: 2,\n        columnSpacing: 2,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n          item: true,\n          xs: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n            sx: {\n              width: '100%',\n              height: 250,\n              minWidth: 100,\n              minheight: 100,\n              borderRadius: 4,\n              mx: \"auto\",\n              bgcolor: '#d32f2f',\n              '&:hover': {\n                backgroundColor: '#9a0007',\n                opacity: [1, 1, 1]\n              }\n            },\n            onClick: handleClick('Red')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n          item: true,\n          xs: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n            sx: {\n              width: '100%',\n              height: 250,\n              minWidth: 100,\n              minheight: 100,\n              borderRadius: 4,\n              mx: \"auto\",\n              bgcolor: '#1976d2',\n              '&:hover': {\n                backgroundColor: '#004ba0',\n                opacity: [1, 1, 1]\n              }\n            },\n            onClick: handleClick('Blue')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n          item: true,\n          xs: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n            sx: {\n              width: '100%',\n              height: 250,\n              minWidth: 100,\n              minheight: 100,\n              borderRadius: 4,\n              mx: \"auto\",\n              bgcolor: '#388e3c',\n              '&:hover': {\n                backgroundColor: '#00600f',\n                opacity: [1, 1, 1]\n              }\n            },\n            onClick: handleClick('Green')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n          item: true,\n          xs: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n            sx: {\n              width: '100%',\n              height: 250,\n              minWidth: 100,\n              minheight: 100,\n              borderRadius: 4,\n              mx: \"auto\",\n              bgcolor: '#fbc02d',\n              '&:hover': {\n                backgroundColor: '#c49000',\n                opacity: [1, 1, 1]\n              }\n            },\n            onClick: handleClick('Yellow')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_9___default()), {\n        open: open,\n        autoHideDuration: 2000,\n        onClose: handleClose,\n        TransitionProps: {\n          onExited: handleExited\n        },\n        message: messageInfo ? messageInfo.message : undefined,\n        action: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {\n            \"aria-label\": \"close\",\n            color: \"inherit\",\n            sx: {\n              p: 0.5\n            },\n            onClick: handleClose,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 158,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 152,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 13\n        }, this)\n      }, messageInfo ? messageInfo.key : undefined, false, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLGNBM0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdIRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2dhbWUuanM/M2IzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBTdGFjayBmcm9tICdAbXVpL21hdGVyaWFsL1N0YWNrJztcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbXVpL21hdGVyaWFsL1NuYWNrYmFyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb3dBbmRDb2x1bW5TcGFjaW5nKCkge1xuICBjb25zdCBbc25hY2tQYWNrLCBzZXRTbmFja1BhY2tdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZXNzYWdlSW5mbywgc2V0TWVzc2FnZUluZm9dID0gUmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzbmFja1BhY2subGVuZ3RoICYmICFtZXNzYWdlSW5mbykge1xuICAgICAgLy8gU2V0IGEgbmV3IHNuYWNrIHdoZW4gd2UgZG9uJ3QgaGF2ZSBhbiBhY3RpdmUgb25lXG4gICAgICBzZXRNZXNzYWdlSW5mbyh7IC4uLnNuYWNrUGFja1swXSB9KTtcbiAgICAgIHNldFNuYWNrUGFjaygocHJldikgPT4gcHJldi5zbGljZSgxKSk7XG4gICAgICBzZXRPcGVuKHRydWUpO1xuICAgIH0gZWxzZSBpZiAoc25hY2tQYWNrLmxlbmd0aCAmJiBtZXNzYWdlSW5mbyAmJiBvcGVuKSB7XG4gICAgICAvLyBDbG9zZSBhbiBhY3RpdmUgc25hY2sgd2hlbiBhIG5ldyBvbmUgaXMgYWRkZWRcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfSwgW3NuYWNrUGFjaywgbWVzc2FnZUluZm8sIG9wZW5dKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChtZXNzYWdlKSA9PiAoKSA9PiB7XG4gICAgc2V0U25hY2tQYWNrKChwcmV2KSA9PiBbLi4ucHJldiwgeyBtZXNzYWdlLCBrZXk6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH1dKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudCwgcmVhc29uKSA9PiB7XG4gICAgaWYgKHJlYXNvbiA9PT0gJ2NsaWNrYXdheScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRXhpdGVkID0gKCkgPT4ge1xuICAgIHNldE1lc3NhZ2VJbmZvKHVuZGVmaW5lZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwiZmFsc2VcIiBzeD17eyBweDogMCwgfX0+XG4gICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxLCB9fT5cbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibWVudVwiXG4gICAgICAgICAgICAgIHN4PXt7IG1yOiAyIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZsZXhHcm93OiAxIH19PlxuICAgICAgICAgICAgICBTaW1vbiBHYW1lXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8L0FwcEJhcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IHN4PXt7IHdpZHRoOiAnMTAwJScsIHA6IDIsIH19PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgcm93U3BhY2luZz17Mn0gY29sdW1uU3BhY2luZz17Mn0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogJyNkMzJmMmYnLFxuICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzlhMDAwNycsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMSwgMV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soJ1JlZCcpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogJyMxOTc2ZDInLFxuICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwNGJhMCcsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMSwgMV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soJ0JsdWUnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICBtaW5oZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgICAgbXg6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIGJnY29sb3I6ICcjMzg4ZTNjJyxcbiAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDYwMGYnLFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogWzEsIDEsIDFdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrKCdHcmVlbicpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogJyNmYmMwMmQnLFxuICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2M0OTAwMCcsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMSwgMV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soJ1llbGxvdycpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPFNuYWNrYmFyXG4gICAgICAgICAga2V5PXttZXNzYWdlSW5mbyA/IG1lc3NhZ2VJbmZvLmtleSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezIwMDB9XG4gICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgVHJhbnNpdGlvblByb3BzPXt7IG9uRXhpdGVkOiBoYW5kbGVFeGl0ZWQgfX1cbiAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlSW5mbyA/IG1lc3NhZ2VJbmZvLm1lc3NhZ2UgOiB1bmRlZmluZWR9XG4gICAgICAgICAgYWN0aW9uPXtcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgc3g9e3sgcDogMC41IH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBCYXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkNvbnRhaW5lciIsIkdyaWQiLCJCb3giLCJCdXR0b24iLCJTdGFjayIsIlNuYWNrYmFyIiwiSWNvbkJ1dHRvbiIsIkNsb3NlSWNvbiIsIlJvd0FuZENvbHVtblNwYWNpbmciLCJzbmFja1BhY2siLCJzZXRTbmFja1BhY2siLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwibWVzc2FnZUluZm8iLCJzZXRNZXNzYWdlSW5mbyIsInVuZGVmaW5lZCIsInVzZUVmZmVjdCIsImxlbmd0aCIsInByZXYiLCJzbGljZSIsImhhbmRsZUNsaWNrIiwibWVzc2FnZSIsImtleSIsIkRhdGUiLCJnZXRUaW1lIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsInJlYXNvbiIsImhhbmRsZUV4aXRlZCIsInB4IiwiZmxleEdyb3ciLCJtciIsIndpZHRoIiwicCIsImhlaWdodCIsIm1pbldpZHRoIiwibWluaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwibXgiLCJiZ2NvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsIm9uRXhpdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/game.js\n");

/***/ }),

/***/ "@mui/icons-material/Close":
/*!********************************************!*\
  !*** external "@mui/icons-material/Close" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Container":
/*!******************************************!*\
  !*** external "@mui/material/Container" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ "@mui/material/Grid":
/*!*************************************!*\
  !*** external "@mui/material/Grid" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/Snackbar":
/*!*****************************************!*\
  !*** external "@mui/material/Snackbar" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Snackbar");

/***/ }),

/***/ "@mui/material/Stack":
/*!**************************************!*\
  !*** external "@mui/material/Stack" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/game.js"));
module.exports = __webpack_exports__;

})();
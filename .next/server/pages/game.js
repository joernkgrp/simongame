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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RowAndColumnSpacing)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/AppBar */ \"@mui/material/AppBar\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Toolbar */ \"@mui/material/Toolbar\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Dialog */ \"@mui/material/Dialog\");\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/DialogActions */ \"@mui/material/DialogActions\");\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/DialogContent */ \"@mui/material/DialogContent\");\n/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/DialogContentText */ \"@mui/material/DialogContentText\");\n/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/DialogTitle */ \"@mui/material/DialogTitle\");\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);\nvar _jsxFileName = \"/Users/joernkogerup/Developer/simongame/pages/game.js\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction RowAndColumnSpacing() {\n  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(true);\n\n  const handleClickOpen = () => {\n    setOpen(true);\n  };\n\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_4___default()), {\n    sx: {\n      px: 0\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n      sx: {\n        flexGrow: 1\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default()), {\n        position: \"fixed\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2___default()), {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {\n            variant: \"h6\",\n            component: \"div\",\n            sx: {\n              flexGrow: 1\n            },\n            children: \"Remember the button\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_8___default()), {\n      open: open,\n      onClose: handleClose,\n      \"aria-labelledby\": \"alert-dialog-title\",\n      \"aria-describedby\": \"alert-dialog-description\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default()), {\n        id: \"alert-dialog-title\",\n        children: \"How to start\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_10___default()), {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_11___default()), {\n          id: \"alert-dialog-description\",\n          children: \"Remember the random button lighting up and reproduce the order by pressing the right button.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_9___default()), {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {\n          onClick: handleClose,\n          children: \"Okay\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n      sx: {\n        width: '100%',\n        mt: 8,\n        p: 2\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n        container: true,\n        rowSpacing: 2,\n        columnSpacing: 2,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n          item: true,\n          xs: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n            sx: {\n              width: '100%',\n              height: 200,\n              minWidth: 100,\n              minheight: 100,\n              borderRadius: 4,\n              mx: \"auto\",\n              bgcolor: '#d32f2f',\n              '&:hover': {\n                backgroundColor: '#9a0007',\n                opacity: [1, 1, 1]\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n          item: true,\n          xs: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n            sx: {\n              width: '100%',\n              height: 200,\n              minWidth: 100,\n              minheight: 100,\n              borderRadius: 4,\n              mx: \"auto\",\n              bgcolor: '#1976d2',\n              '&:hover': {\n                backgroundColor: '#004ba0',\n                opacity: [1, 1, 1]\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n          item: true,\n          xs: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n            sx: {\n              width: '100%',\n              height: 200,\n              minWidth: 100,\n              minheight: 100,\n              borderRadius: 4,\n              mx: \"auto\",\n              bgcolor: '#388e3c',\n              '&:hover': {\n                backgroundColor: '#00600f',\n                opacity: [1, 1, 1]\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n          item: true,\n          xs: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n            sx: {\n              width: '100%',\n              height: 200,\n              minWidth: 100,\n              minheight: 100,\n              borderRadius: 4,\n              mx: \"auto\",\n              bgcolor: '#fbc02d',\n              '&:hover': {\n                backgroundColor: '#c49000',\n                opacity: [1, 1, 1]\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUZBO0FBUlQ7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQ0YsZUFvREUsK0RBQUMsMkRBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFBLGlDQUNFLCtEQUFDLDBEQUFEO0FBQ0UsY0FBRSxFQUFFO0FBQ0ZWLGNBQUFBLEtBQUssRUFBRSxNQURMO0FBRUZHLGNBQUFBLE1BQU0sRUFBRSxHQUZOO0FBR0ZDLGNBQUFBLFFBQVEsRUFBRSxHQUhSO0FBSUZDLGNBQUFBLFNBQVMsRUFBRSxHQUpUO0FBS0ZDLGNBQUFBLFlBQVksRUFBRSxDQUxaO0FBTUZDLGNBQUFBLEVBQUUsRUFBRSxNQU5GO0FBT0ZDLGNBQUFBLE9BQU8sRUFBRSxTQVBQO0FBUUYseUJBQVc7QUFDVEMsZ0JBQUFBLGVBQWUsRUFBRSxTQURSO0FBRVRDLGdCQUFBQSxPQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7QUFGQTtBQVJUO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9nYW1lLmpzPzNiMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nQ29udGVudFRleHQnO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nVGl0bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb3dBbmRDb2x1bW5TcGFjaW5nKCkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBoYW5kbGVDbGlja09wZW4gPSAoKSA9PiB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgc3g9e3sgcHg6IDB9fT5cbiAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEsICB9fT5cbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCI+XG4gICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBmbGV4R3JvdzogMSB9fT5cbiAgICAgICAgICAgICAgUmVtZW1iZXIgdGhlIGJ1dHRvblxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgPC9BcHBCYXI+XG4gICAgICA8L0JveD5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImFsZXJ0LWRpYWxvZy10aXRsZVwiXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJhbGVydC1kaWFsb2ctZGVzY3JpcHRpb25cIlxuICAgICAgPlxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJhbGVydC1kaWFsb2ctdGl0bGVcIj5cbiAgICAgICAgICB7XCJIb3cgdG8gc3RhcnRcIn1cbiAgICAgICAgPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0IGlkPVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICBSZW1lbWJlciB0aGUgcmFuZG9tIGJ1dHRvbiBsaWdodGluZyB1cCBhbmQgcmVwcm9kdWNlIHRoZSBvcmRlciBieSBwcmVzc2luZyB0aGUgcmlnaHQgYnV0dG9uLlxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICBPa2F5XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgIDwvRGlhbG9nPlxuXG4gICAgICA8Qm94IHN4PXt7IHdpZHRoOiAnMTAwJScsIG10OiA4LCBwOiAyLCB9fT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHJvd1NwYWNpbmc9ezJ9IGNvbHVtblNwYWNpbmc9ezJ9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICBtaW5oZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgICAgbXg6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIGJnY29sb3I6ICcjZDMyZjJmJyxcbiAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM5YTAwMDcnLFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogWzEsIDEsIDFdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgbWluaGVpZ2h0OiAxMDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICAgICAgICAgIG14OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnIzE5NzZkMicsXG4gICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA0YmEwJyxcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFsxLCAxLCAxXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogJyMzODhlM2MnLFxuICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwNjAwZicsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMSwgMV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICBtaW5oZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgICAgbXg6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIGJnY29sb3I6ICcjZmJjMDJkJyxcbiAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNjNDkwMDAnLFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogWzEsIDEsIDFdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBCYXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkNvbnRhaW5lciIsIkdyaWQiLCJCb3giLCJCdXR0b24iLCJEaWFsb2ciLCJEaWFsb2dBY3Rpb25zIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0NvbnRlbnRUZXh0IiwiRGlhbG9nVGl0bGUiLCJSb3dBbmRDb2x1bW5TcGFjaW5nIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsImhhbmRsZUNsaWNrT3BlbiIsImhhbmRsZUNsb3NlIiwicHgiLCJmbGV4R3JvdyIsIndpZHRoIiwibXQiLCJwIiwiaGVpZ2h0IiwibWluV2lkdGgiLCJtaW5oZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJteCIsImJnY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGFjaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/game.js\n");

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

/***/ "@mui/material/Dialog":
/*!***************************************!*\
  !*** external "@mui/material/Dialog" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ "@mui/material/DialogActions":
/*!**********************************************!*\
  !*** external "@mui/material/DialogActions" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/DialogActions");

/***/ }),

/***/ "@mui/material/DialogContent":
/*!**********************************************!*\
  !*** external "@mui/material/DialogContent" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/DialogContent");

/***/ }),

/***/ "@mui/material/DialogContentText":
/*!**************************************************!*\
  !*** external "@mui/material/DialogContentText" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@mui/material/DialogContentText");

/***/ }),

/***/ "@mui/material/DialogTitle":
/*!********************************************!*\
  !*** external "@mui/material/DialogTitle" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/DialogTitle");

/***/ }),

/***/ "@mui/material/Grid":
/*!*************************************!*\
  !*** external "@mui/material/Grid" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

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
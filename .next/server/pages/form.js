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
exports.id = "pages/form";
exports.ids = ["pages/form"];
exports.modules = {

/***/ "./pages/form.js":
/*!***********************!*\
  !*** ./pages/form.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Avatar */ \"@mui/material/Avatar\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/MenuItem */ \"@mui/material/MenuItem\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/InputLabel */ \"@mui/material/InputLabel\");\n/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/FormControl */ \"@mui/material/FormControl\");\n/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/FormHelperText */ \"@mui/material/FormHelperText\");\n/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Select */ \"@mui/material/Select\");\n/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Settings */ \"@mui/icons-material/Settings\");\n/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/PlayArrow */ \"@mui/icons-material/PlayArrow\");\n/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ \"@mui/icons-material/ArrowBack\");\n/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);\nvar _jsxFileName = \"/Users/joernkogerup/Developer/simongame/pages/form.js\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Form() {\n  const [handicap, setHandicap] = react__WEBPACK_IMPORTED_MODULE_0__.useState(3);\n\n  const handleChange = event => {\n    setHandicap(event.target.value);\n  };\n\n  const handleSubmit = event => {\n    event.preventDefault();\n    const data = new FormData(event.currentTarget); // eslint-disable-next-line no-console\n\n    console.log({\n      email: data.get('email'),\n      password: data.get('password')\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_10___default()), {\n    component: \"main\",\n    maxWidth: \"m\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {\n      sx: {\n        marginTop: 2,\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'center'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1___default()), {\n        sx: {\n          m: 1,\n          bgcolor: 'secondary.main'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_12___default()), {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {\n        component: \"h1\",\n        variant: \"h5\",\n        children: \"A few more things\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {\n        component: \"form\",\n        onSubmit: handleSubmit,\n        noValidate: true,\n        sx: {\n          mt: 1\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n          margin: \"normal\",\n          fullWidth: true,\n          label: \"Your name\",\n          name: \"name\",\n          placeholder: \"John Doe\",\n          helperText: \"Please type in your name.\",\n          autoFocus: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {\n          sx: {\n            mt: 2\n          },\n          fullWidth: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {\n            id: \"demo-simple-select-helper-label\",\n            children: \"Your handicap\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_11___default()), {\n            value: handicap,\n            label: \"Your handicap\",\n            onChange: handleChange,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n              value: 0,\n              children: \"I can\\u2019t see\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 33\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n              value: 1,\n              children: \"I can\\u2019t hear\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 33\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n              value: 2,\n              children: \"I can neither see nor hear\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 33\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n              value: 3,\n              children: \"I have no handicap\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 33\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_7___default()), {\n            children: \"Please select a handicap.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {\n          sx: {\n            mt: 2\n          },\n          fullWidth: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {\n            id: \"demo-simple-select-helper-label\",\n            children: \"Your input type\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_11___default()), {\n            value: handicap,\n            label: \"Your input type\",\n            onChange: handleChange,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n              value: 0,\n              children: \"Speak\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 33\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n              value: 1,\n              children: \"Touch or click\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 33\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n              value: 2,\n              children: \"Sense\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 33\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n              value: 3,\n              children: \"All types\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 33\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_7___default()), {\n            children: \"Please select an input type.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n          startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_13___default()), {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 40\n          }, this),\n          type: \"submit\",\n          fullWidth: true,\n          variant: \"contained\",\n          sx: {\n            mt: 4\n          },\n          href: \"/game\",\n          children: \"Start Game\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n          startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)((_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_14___default()), {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 40\n          }, this),\n          fullWidth: true,\n          variant: \"outlined\",\n          sx: {\n            mt: 2\n          },\n          href: \"/\",\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 13\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtEQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF4QkosZUFzQ0ksK0RBQUMsNkRBQUQ7QUFDSSxtQkFBUyxlQUFFLCtEQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRGY7QUFFSSxjQUFJLEVBQUMsUUFGVDtBQUdJLG1CQUFTLE1BSGI7QUFJSSxpQkFBTyxFQUFDLFdBSlo7QUFLSSxZQUFFLEVBQUU7QUFBRW9CLFlBQUFBLEVBQUUsRUFBRTtBQUFOLFdBTFI7QUFNSSxjQUFJLEVBQUMsT0FOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0Q0osZUFnREksK0RBQUMsNkRBQUQ7QUFDSSxtQkFBUyxlQUFFLCtEQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRGY7QUFFSSxtQkFBUyxNQUZiO0FBR0ksaUJBQU8sRUFBQyxVQUhaO0FBSUksWUFBRSxFQUFFO0FBQUVBLFlBQUFBLEVBQUUsRUFBRTtBQUFOLFdBSlI7QUFLSSxjQUFJLEVBQUMsR0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURSO0FBNkVIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvZm9ybS5qcz8wNTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BdmF0YXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnVJdGVtJztcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSW5wdXRMYWJlbCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSAnQG11aS9tYXRlcmlhbC9Gb3JtSGVscGVyVGV4dCc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG11aS9tYXRlcmlhbC9TZWxlY3QnO1xuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NldHRpbmdzJztcbmltcG9ydCBQbGF5QXJyb3dJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGxheUFycm93JztcbmltcG9ydCBBcnJvd0JhY2tJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcbiAgICBjb25zdCBbaGFuZGljYXAsIHNldEhhbmRpY2FwXSA9IFJlYWN0LnVzZVN0YXRlKDMpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldEhhbmRpY2FwKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmxvZyh7XG4gICAgICAgICAgICBlbWFpbDogZGF0YS5nZXQoJ2VtYWlsJyksXG4gICAgICAgICAgICBwYXNzd29yZDogZGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJtXCI+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3g9e3sgbTogMSwgYmdjb2xvcjogJ3NlY29uZGFyeS5tYWluJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nc0ljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBIGZldyBtb3JlIHRoaW5nc1xuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG5vVmFsaWRhdGUgc3g9e3sgbXQ6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSm9obiBEb2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJQbGVhc2UgdHlwZSBpbiB5b3VyIG5hbWUuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgbXQ6IDIgfX0gZnVsbFdpZHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWhlbHBlci1sYWJlbFwiPllvdXIgaGFuZGljYXA8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aGFuZGljYXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBoYW5kaWNhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezB9PkkgY2Fu4oCZdCBzZWU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezF9PkkgY2Fu4oCZdCBoZWFyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsyfT5JIGNhbiBuZWl0aGVyIHNlZSBub3IgaGVhcjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17M30+SSBoYXZlIG5vIGhhbmRpY2FwPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQ+UGxlYXNlIHNlbGVjdCBhIGhhbmRpY2FwLjwvRm9ybUhlbHBlclRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IG10OiAyIH19IGZ1bGxXaWR0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1oZWxwZXItbGFiZWxcIj5Zb3VyIGlucHV0IHR5cGU8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aGFuZGljYXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBpbnB1dCB0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MH0+U3BlYWs8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezF9PlRvdWNoIG9yIGNsaWNrPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsyfT5TZW5zZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17M30+QWxsIHR5cGVzPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQ+UGxlYXNlIHNlbGVjdCBhbiBpbnB1dCB0eXBlLjwvRm9ybUhlbHBlclRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PFBsYXlBcnJvd0ljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbXQ6IDQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2dhbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IEdhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PEFycm93QmFja0ljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtdDogMn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXZhdGFyIiwiQnV0dG9uIiwiVGV4dEZpZWxkIiwiTWVudUl0ZW0iLCJJbnB1dExhYmVsIiwiRm9ybUNvbnRyb2wiLCJGb3JtSGVscGVyVGV4dCIsIkJveCIsIlR5cG9ncmFwaHkiLCJDb250YWluZXIiLCJTZWxlY3QiLCJTZXR0aW5nc0ljb24iLCJQbGF5QXJyb3dJY29uIiwiQXJyb3dCYWNrSWNvbiIsIkZvcm0iLCJoYW5kaWNhcCIsInNldEhhbmRpY2FwIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiRm9ybURhdGEiLCJjdXJyZW50VGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwiZ2V0IiwicGFzc3dvcmQiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtIiwiYmdjb2xvciIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/form.js\n");

/***/ }),

/***/ "@mui/icons-material/ArrowBack":
/*!************************************************!*\
  !*** external "@mui/icons-material/ArrowBack" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBack");

/***/ }),

/***/ "@mui/icons-material/PlayArrow":
/*!************************************************!*\
  !*** external "@mui/icons-material/PlayArrow" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/PlayArrow");

/***/ }),

/***/ "@mui/icons-material/Settings":
/*!***********************************************!*\
  !*** external "@mui/icons-material/Settings" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ "@mui/material/Avatar":
/*!***************************************!*\
  !*** external "@mui/material/Avatar" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

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

/***/ "@mui/material/FormControl":
/*!********************************************!*\
  !*** external "@mui/material/FormControl" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ "@mui/material/FormHelperText":
/*!***********************************************!*\
  !*** external "@mui/material/FormHelperText" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/FormHelperText");

/***/ }),

/***/ "@mui/material/InputLabel":
/*!*******************************************!*\
  !*** external "@mui/material/InputLabel" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ "@mui/material/MenuItem":
/*!*****************************************!*\
  !*** external "@mui/material/MenuItem" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ "@mui/material/Select":
/*!***************************************!*\
  !*** external "@mui/material/Select" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Select");

/***/ }),

/***/ "@mui/material/TextField":
/*!******************************************!*\
  !*** external "@mui/material/TextField" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

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
var __webpack_exports__ = (__webpack_exec__("./pages/form.js"));
module.exports = __webpack_exports__;

})();
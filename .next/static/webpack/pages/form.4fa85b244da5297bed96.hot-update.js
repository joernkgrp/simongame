"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/form",{

/***/ "./pages/form.js":
/*!***********************!*\
  !*** ./pages/form.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var _Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/MenuItem */ \"./node_modules/@mui/material/MenuItem/index.js\");\n/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/InputLabel */ \"./node_modules/@mui/material/InputLabel/index.js\");\n/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/FormControl */ \"./node_modules/@mui/material/FormControl/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_icons_material_AccessibilityNew__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/AccessibilityNew */ \"./node_modules/@mui/icons-material/AccessibilityNew.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Select */ \"./node_modules/@mui/material/Select/index.js\");\n/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/PlayArrow */ \"./node_modules/@mui/icons-material/PlayArrow.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/joernkogerup/Developer/simongame/pages/form.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)();\nfunction Form() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(0),\n      _React$useState2 = (0,_Users_joernkogerup_Developer_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),\n      handicap = _React$useState2[0],\n      setHandicap = _React$useState2[1];\n\n  var handleChange = function handleChange(event) {\n    setHandicap(event.target.value);\n  };\n\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n    var data = new FormData(event.currentTarget); // eslint-disable-next-line no-console\n\n    console.log({\n      email: data.get('email'),\n      password: data.get('password')\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n    theme: theme,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_4__.default, {\n      component: \"main\",\n      maxWidth: \"xs\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n        sx: {\n          marginTop: 8,\n          display: 'flex',\n          flexDirection: 'column',\n          alignItems: 'center'\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_7__.default, {\n          sx: {\n            m: 1,\n            bgcolor: 'secondary.main'\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_AccessibilityNew__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {\n          component: \"h1\",\n          variant: \"h5\",\n          children: \"Hey, you!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n          component: \"form\",\n          onSubmit: handleSubmit,\n          noValidate: true,\n          sx: {\n            mt: 1\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__.default, {\n            margin: \"normal\",\n            required: true,\n            fullWidth: true,\n            id: \"name\",\n            label: \"Your name\",\n            name: \"name\",\n            autoFocus: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11__.default, {\n            sx: {\n              m: 1,\n              minWidth: 120\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_12__.default, {\n              id: \"demo-simple-select-helper-label\",\n              children: \"Age\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 9\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_13__.default, {\n              labelId: \"demo-simple-select-helper-label\",\n              id: \"demo-simple-select-helper\",\n              value: handicap,\n              label: \"Age\",\n              onChange: handleChange,\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {\n                value: \"\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"em\", {\n                  children: \"None\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 78,\n                  columnNumber: 13\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 11\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {\n                value: 10,\n                children: \"Ten\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 11\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {\n                value: 20,\n                children: \"Twenty\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 11\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {\n                value: 30,\n                children: \"Thirty\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 11\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 9\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FormHelperText, {\n              children: \"With label + helper text\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11__.default, {\n            sx: {\n              my: 2\n            },\n            component: \"fieldset\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_12__.default, {\n              children: \"Your handicap\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_13__.default, {\n              margin: \"normal\",\n              required: true,\n              fullWidth: true,\n              id: \"demo-simple-select\",\n              value: handicap,\n              label: \"Handicap\",\n              onChange: handleChange,\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {\n                value: 0,\n                selected: true,\n                children: \"\\uD83C\\uDDFA\\uD83C\\uDDF8 English\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 97,\n                columnNumber: 33\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {\n                value: 1,\n                children: \"\\uD83C\\uDDE9\\uD83C\\uDDEA Deutsch\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 98,\n                columnNumber: 33\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {\n                value: 2,\n                children: \"\\uD83C\\uDDEB\\uD83C\\uDDF7 Fran\\xE7ais\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 99,\n                columnNumber: 33\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {\n                value: 3,\n                children: \"\\uD83C\\uDDEA\\uD83C\\uDDF8 Espa\\xF1ol\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 33\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_15__.default, {\n            startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_16__.default, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 40\n            }, this),\n            type: \"submit\",\n            fullWidth: true,\n            variant: \"contained\",\n            sx: {\n              mt: 3,\n              mb: 2\n            },\n            children: \"Start Game\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Form, \"3CpkkuAFX6XGT0WjjMCWChOdle8=\");\n\n_c = Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLHNDQVNJLDhEQUFDLDREQUFEO0FBQVUscUJBQUssRUFBRSxDQUFqQjtBQUFvQix3QkFBUSxFQUFFLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVRKLGVBVUksOERBQUMsNERBQUQ7QUFBVSxxQkFBSyxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVZKLGVBV0ksOERBQUMsNERBQUQ7QUFBVSxxQkFBSyxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVhKLGVBWUksOERBQUMsNERBQUQ7QUFBVSxxQkFBSyxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBNUJKLGVBNkNJLDhEQUFDLDBEQUFEO0FBQ0kscUJBQVMsZUFBRSw4REFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURmO0FBRUksZ0JBQUksRUFBQyxRQUZUO0FBR0kscUJBQVMsTUFIYjtBQUlJLG1CQUFPLEVBQUMsV0FKWjtBQUtJLGNBQUUsRUFBRTtBQUFFb0IsY0FBQUEsRUFBRSxFQUFFLENBQU47QUFBU0csY0FBQUEsRUFBRSxFQUFFO0FBQWIsYUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE3Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTZFSDs7R0E5RnVCM0I7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Zvcm0uanM/MDU2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXZhdGFyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51SXRlbSc7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0lucHV0TGFiZWwnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbXVpL21hdGVyaWFsL0NoZWNrYm94JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgQWNjZXNzaWJpbGl0eU5ld0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2Nlc3NpYmlsaXR5TmV3JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG11aS9tYXRlcmlhbC9TZWxlY3QnO1xuaW1wb3J0IFBsYXlBcnJvd0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QbGF5QXJyb3cnO1xuaW1wb3J0IHsgY3JlYXRlVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcbiAgICBjb25zdCBbaGFuZGljYXAsIHNldEhhbmRpY2FwXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldEhhbmRpY2FwKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmxvZyh7XG4gICAgICAgICAgICBlbWFpbDogZGF0YS5nZXQoJ2VtYWlsJyksXG4gICAgICAgICAgICBwYXNzd29yZDogZGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPlxuICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHN4PXt7IG06IDEsIGJnY29sb3I6ICdzZWNvbmRhcnkubWFpbicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjZXNzaWJpbGl0eU5ld0ljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBIZXksIHlvdSFcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBub1ZhbGlkYXRlIHN4PXt7IG10OiAxIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyBtOiAxLCBtaW5XaWR0aDogMTIwIH19PlxuICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1oZWxwZXItbGFiZWxcIj5BZ2U8L0lucHV0TGFiZWw+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWhlbHBlci1sYWJlbFwiXG4gICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtaGVscGVyXCJcbiAgICAgICAgICB2YWx1ZT17aGFuZGljYXB9XG4gICAgICAgICAgbGFiZWw9XCJBZ2VcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgID5cbiAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJcIj5cbiAgICAgICAgICAgIDxlbT5Ob25lPC9lbT5cbiAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MTB9PlRlbjwvTWVudUl0ZW0+XG4gICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsyMH0+VHdlbnR5PC9NZW51SXRlbT5cbiAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezMwfT5UaGlydHk8L01lbnVJdGVtPlxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0PldpdGggbGFiZWwgKyBoZWxwZXIgdGV4dDwvRm9ybUhlbHBlclRleHQ+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IG15OiAyIH19IGNvbXBvbmVudD1cImZpZWxkc2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWw+WW91ciBoYW5kaWNhcDwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtoYW5kaWNhcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIYW5kaWNhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezB9IHNlbGVjdGVkPXt0cnVlfT7wn4e68J+HuCBFbmdsaXNoPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsxfT7wn4ep8J+HqiBEZXV0c2NoPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsyfT7wn4er8J+HtyBGcmFuw6dhaXM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezN9PvCfh6rwn4e4IEVzcGHDsW9sPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8UGxheUFycm93SWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtdDogMywgbWI6IDIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBHYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXZhdGFyIiwiQnV0dG9uIiwiQ3NzQmFzZWxpbmUiLCJUZXh0RmllbGQiLCJNZW51SXRlbSIsIklucHV0TGFiZWwiLCJGb3JtQ29udHJvbCIsIkZvcm1Db250cm9sTGFiZWwiLCJDaGVja2JveCIsIkxpbmsiLCJHcmlkIiwiQm94IiwiQWNjZXNzaWJpbGl0eU5ld0ljb24iLCJUeXBvZ3JhcGh5IiwiQ29udGFpbmVyIiwiU2VsZWN0IiwiUGxheUFycm93SWNvbiIsImNyZWF0ZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsInRoZW1lIiwiRm9ybSIsInVzZVN0YXRlIiwiaGFuZGljYXAiLCJzZXRIYW5kaWNhcCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJjb25zb2xlIiwibG9nIiwiZW1haWwiLCJnZXQiLCJwYXNzd29yZCIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm0iLCJiZ2NvbG9yIiwibXQiLCJtaW5XaWR0aCIsIm15IiwibWIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/form.js\n");

/***/ })

});
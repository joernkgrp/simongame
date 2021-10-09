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
exports.id = "pages/grid";
exports.ids = ["pages/grid"];
exports.modules = {

/***/ "./pages/grid.js":
/*!***********************!*\
  !*** ./pages/grid.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gap)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Stack */ \"@mui/material/Stack\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nconst _excluded = [\"sx\"];\nvar _jsxFileName = \"/Users/joernkogerup/Developer/simongame/pages/grid.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\n\n\nfunction Item(props) {\n  const {\n    sx\n  } = props,\n        other = _objectWithoutProperties(props, _excluded);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread({\n    sx: _objectSpread({\n      bgcolor: 'primary.main',\n      color: 'white',\n      p: 1,\n      textAlign: 'center',\n      fontSize: 19,\n      fontWeight: '700'\n    }, sx)\n  }, other), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n\nItem.propTypes = {\n  sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)\n};\nfunction Gap() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    style: {\n      width: '100%'\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {\n      sx: {\n        display: 'grid',\n        gap: 1,\n        gridTemplateColumns: 'repeat(2, 1fr)'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {\n        sx: {\n          width: '100%',\n          height: 250,\n          minWidth: 100,\n          minheight: 100,\n          mx: \"auto\",\n          bgcolor: 'blue',\n          '&:hover': {\n            backgroundColor: 'blue',\n            opacity: [0.9, 0.8, 0.7]\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {\n        sx: {\n          width: '100%',\n          height: 250,\n          minWidth: 100,\n          minheight: 100,\n          mx: \"auto\",\n          bgcolor: 'blue',\n          '&:hover': {\n            backgroundColor: 'blue',\n            opacity: [0.9, 0.8, 0.7]\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {\n        sx: {\n          width: '100%',\n          height: 250,\n          minWidth: 100,\n          minheight: 100,\n          mx: \"auto\",\n          bgcolor: 'blue',\n          '&:hover': {\n            backgroundColor: 'blue',\n            opacity: [0.9, 0.8, 0.7]\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {\n        sx: {\n          width: '100%',\n          height: 250,\n          minWidth: 100,\n          minheight: 100,\n          mx: \"auto\",\n          bgcolor: 'blue',\n          '&:hover': {\n            backgroundColor: 'blue',\n            opacity: [0.9, 0.8, 0.7]\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {\n      sx: {\n        my: 2\n      },\n      spacing: 2,\n      direction: \"row\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n        variant: \"contained\",\n        href: \"/\",\n        children: \"Go back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ncmlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ssSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ25CLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFtQkQsS0FBekI7QUFBQSxRQUFlRSxLQUFmLDRCQUF5QkYsS0FBekI7O0FBQ0Esc0JBQ0UsOERBQUMsMERBQUQ7QUFDRSxNQUFFO0FBQ0FHLE1BQUFBLE9BQU8sRUFBRSxjQURUO0FBRUFDLE1BQUFBLEtBQUssRUFBRSxPQUZQO0FBR0FDLE1BQUFBLENBQUMsRUFBRSxDQUhIO0FBSUFDLE1BQUFBLFNBQVMsRUFBRSxRQUpYO0FBS0FDLE1BQUFBLFFBQVEsRUFBRSxFQUxWO0FBTUFDLE1BQUFBLFVBQVUsRUFBRTtBQU5aLE9BT0dQLEVBUEg7QUFESixLQVVNQyxLQVZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztBQUVESCxJQUFJLENBQUNVLFNBQUwsR0FBaUI7QUFDZlIsRUFBQUEsRUFBRSxFQUFFTiwwREFBZ0JlO0FBREwsQ0FBakI7QUFJZSxTQUFTQyxHQUFULEdBQWU7QUFDNUIsc0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FBWjtBQUFBLDRCQUNFLDhEQUFDLDBEQUFEO0FBQ0UsUUFBRSxFQUFFO0FBQ0ZDLFFBQUFBLE9BQU8sRUFBRSxNQURQO0FBRUZDLFFBQUFBLEdBQUcsRUFBRSxDQUZIO0FBR0ZDLFFBQUFBLG1CQUFtQixFQUFFO0FBSG5CLE9BRE47QUFBQSw4QkFPRSw4REFBQywwREFBRDtBQUNJLFVBQUUsRUFBRTtBQUNGSCxVQUFBQSxLQUFLLEVBQUUsTUFETDtBQUVGSSxVQUFBQSxNQUFNLEVBQUUsR0FGTjtBQUdGQyxVQUFBQSxRQUFRLEVBQUUsR0FIUjtBQUlGQyxVQUFBQSxTQUFTLEVBQUUsR0FKVDtBQUtGQyxVQUFBQSxFQUFFLEVBQUUsTUFMRjtBQU1GaEIsVUFBQUEsT0FBTyxFQUFFLE1BTlA7QUFPRixxQkFBVztBQUNUaUIsWUFBQUEsZUFBZSxFQUFFLE1BRFI7QUFFVEMsWUFBQUEsT0FBTyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYO0FBRkE7QUFQVDtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQXFCRSw4REFBQywwREFBRDtBQUNJLFVBQUUsRUFBRTtBQUNGVCxVQUFBQSxLQUFLLEVBQUUsTUFETDtBQUVGSSxVQUFBQSxNQUFNLEVBQUUsR0FGTjtBQUdGQyxVQUFBQSxRQUFRLEVBQUUsR0FIUjtBQUlGQyxVQUFBQSxTQUFTLEVBQUUsR0FKVDtBQUtGQyxVQUFBQSxFQUFFLEVBQUUsTUFMRjtBQU1GaEIsVUFBQUEsT0FBTyxFQUFFLE1BTlA7QUFPRixxQkFBVztBQUNUaUIsWUFBQUEsZUFBZSxFQUFFLE1BRFI7QUFFVEMsWUFBQUEsT0FBTyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYO0FBRkE7QUFQVDtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkYsZUFtQ0UsOERBQUMsMERBQUQ7QUFDSSxVQUFFLEVBQUU7QUFDRlQsVUFBQUEsS0FBSyxFQUFFLE1BREw7QUFFRkksVUFBQUEsTUFBTSxFQUFFLEdBRk47QUFHRkMsVUFBQUEsUUFBUSxFQUFFLEdBSFI7QUFJRkMsVUFBQUEsU0FBUyxFQUFFLEdBSlQ7QUFLRkMsVUFBQUEsRUFBRSxFQUFFLE1BTEY7QUFNRmhCLFVBQUFBLE9BQU8sRUFBRSxNQU5QO0FBT0YscUJBQVc7QUFDVGlCLFlBQUFBLGVBQWUsRUFBRSxNQURSO0FBRVRDLFlBQUFBLE9BQU8sRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWDtBQUZBO0FBUFQ7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkNGLGVBaURFLDhEQUFDLDBEQUFEO0FBQ0ksVUFBRSxFQUFFO0FBQ0ZULFVBQUFBLEtBQUssRUFBRSxNQURMO0FBRUZJLFVBQUFBLE1BQU0sRUFBRSxHQUZOO0FBR0ZDLFVBQUFBLFFBQVEsRUFBRSxHQUhSO0FBSUZDLFVBQUFBLFNBQVMsRUFBRSxHQUpUO0FBS0ZDLFVBQUFBLEVBQUUsRUFBRSxNQUxGO0FBTUZoQixVQUFBQSxPQUFPLEVBQUUsTUFOUDtBQU9GLHFCQUFXO0FBQ1RpQixZQUFBQSxlQUFlLEVBQUUsTUFEUjtBQUVUQyxZQUFBQSxPQUFPLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVg7QUFGQTtBQVBUO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWlFRSw4REFBQyw0REFBRDtBQUFPLFFBQUUsRUFBRTtBQUFDQyxRQUFBQSxFQUFFLEVBQUM7QUFBSixPQUFYO0FBQW1CLGFBQU8sRUFBRSxDQUE1QjtBQUErQixlQUFTLEVBQUMsS0FBekM7QUFBQSw2QkFDQSw4REFBQyw2REFBRDtBQUFRLGVBQU8sRUFBQyxXQUFoQjtBQUE0QixZQUFJLEVBQUMsR0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvZ3JpZC5qcz9kODdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFN0YWNrIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3RhY2snO1xuXG5mdW5jdGlvbiBJdGVtKHByb3BzKSB7XG4gIGNvbnN0IHsgc3gsIC4uLm90aGVyIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzeD17e1xuICAgICAgICBiZ2NvbG9yOiAncHJpbWFyeS5tYWluJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHA6IDEsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGZvbnRTaXplOiAxOSxcbiAgICAgICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgICAgIC4uLnN4LFxuICAgICAgfX1cbiAgICAgIHsuLi5vdGhlcn1cbiAgICAvPlxuICApO1xufVxuXG5JdGVtLnByb3BUeXBlcyA9IHtcbiAgc3g6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYXAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgPEJveFxuICAgICAgICBzeD17e1xuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICBnYXA6IDEsXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgyLCAxZnIpJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICAgIG1pbldpZHRoOiAxMDAsXG4gICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxuICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIGJnY29sb3I6ICdibHVlJyxcbiAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmx1ZScsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogWzAuOSwgMC44LCAwLjddLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgbWluaGVpZ2h0OiAxMDAsXG4gICAgICAgICAgICAgIG14OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgYmdjb2xvcjogJ2JsdWUnLFxuICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibHVlJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMC45LCAwLjgsIDAuN10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGhlaWdodDogMjUwLFxuICAgICAgICAgICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgICAgICAgICBtaW5oZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgICAgbXg6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICBiZ2NvbG9yOiAnYmx1ZScsXG4gICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFswLjksIDAuOCwgMC43XSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICAgIG1pbldpZHRoOiAxMDAsXG4gICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxuICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIGJnY29sb3I6ICdibHVlJyxcbiAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmx1ZScsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogWzAuOSwgMC44LCAwLjddLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8U3RhY2sgc3g9e3tteToyfX0gc3BhY2luZz17Mn0gZGlyZWN0aW9uPVwicm93XCI+XG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBocmVmPVwiL1wiID5HbyBiYWNrPC9CdXR0b24+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiQm94IiwiQnV0dG9uIiwiU3RhY2siLCJJdGVtIiwicHJvcHMiLCJzeCIsIm90aGVyIiwiYmdjb2xvciIsImNvbG9yIiwicCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInByb3BUeXBlcyIsIm9iamVjdCIsIkdhcCIsIndpZHRoIiwiZGlzcGxheSIsImdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1pbmhlaWdodCIsIm14IiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsIm15Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/grid.js\n");

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

/***/ "@mui/material/Stack":
/*!**************************************!*\
  !*** external "@mui/material/Stack" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

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
var __webpack_exports__ = (__webpack_exec__("./pages/grid.js"));
module.exports = __webpack_exports__;

})();
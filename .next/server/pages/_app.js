"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CssBaseline */ "@mui/material/CssBaseline");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var _src_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/createEmotionCache */ "./src/createEmotionCache.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Jkogerup\\Dev\\simongame\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // Client-side cache, shared for the whole session of the user in the browser.


const clientSideEmotionCache = (0,_src_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__.default)();
function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_5__.CacheProvider, {
    value: emotionCache,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("title", {
        children: "Simon Game"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
      theme: _src_theme__WEBPACK_IMPORTED_MODULE_6__.default,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
MyApp.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType.isRequired),
  emotionCache: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};

/***/ }),

/***/ "./src/createEmotionCache.js":
/*!***********************************!*\
  !*** ./src/createEmotionCache.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ "@emotion/cache");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);

function createEmotionCache() {
  return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({
    key: 'css'
  });
}

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ "@mui/material/colors");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);

 // Create a theme instance.

const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
  palette: {
    primary: {
      main: "#303f9f"
    },
    secondary: {
      main: "#e64a19"
    },
    error: {
      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400
    },
    myred: {
      main: "#d32f2f",
      contrastText: "#fff"
    }
  },
  typography: {
    fontFamily: ["Outfit", "sans-serif"].join(","),
    h1: {
      fontWeight: 600,
      fontSize: "1.75rem"
    },
    h2: {
      fontWeight: 400,
      fontSize: "1.25rem",
      color: "primary.dark"
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L25leHRqcy8uL3NyYy9jcmVhdGVFbW90aW9uQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vc3JjL3RoZW1lLmpzIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBlbW90aW9uL2NhY2hlXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQGVtb3Rpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3JjL3RoZW1lJztcclxuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICcuLi9zcmMvY3JlYXRlRW1vdGlvbkNhY2hlJztcclxuXHJcbi8vIENsaWVudC1zaWRlIGNhY2hlLCBzaGFyZWQgZm9yIHRoZSB3aG9sZSBzZXNzaW9uIG9mIHRoZSB1c2VyIGluIHRoZSBicm93c2VyLlxyXG5jb25zdCBjbGllbnRTaWRlRW1vdGlvbkNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wcykge1xyXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBlbW90aW9uQ2FjaGUgPSBjbGllbnRTaWRlRW1vdGlvbkNhY2hlLCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhY2hlUHJvdmlkZXIgdmFsdWU9e2Vtb3Rpb25DYWNoZX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5TaW1vbiBHYW1lPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC9DYWNoZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbk15QXBwLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG4gIGVtb3Rpb25DYWNoZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuIiwiaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25DYWNoZSgpIHtcclxuICByZXR1cm4gY3JlYXRlQ2FjaGUoeyBrZXk6ICdjc3MnIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XHJcbmltcG9ydCB7IHJlZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiO1xyXG5cclxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogXCIjMzAzZjlmXCIsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46IFwiI2U2NGExOVwiLFxyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgIG1haW46IHJlZC5BNDAwLFxyXG4gICAgfSxcclxuICAgIG15cmVkOiB7XHJcbiAgICAgIG1haW46IFwiI2QzMmYyZlwiLFxyXG4gICAgICBjb250cmFzdFRleHQ6IFwiI2ZmZlwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHR5cG9ncmFwaHk6IHtcclxuICAgIGZvbnRGYW1pbHk6IFtcIk91dGZpdFwiLCBcInNhbnMtc2VyaWZcIl0uam9pbihcIixcIiksXHJcbiAgICBoMToge1xyXG4gICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgIGZvbnRTaXplOiBcIjEuNzVyZW1cIixcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGZvbnRTaXplOiBcIjEuMjVyZW1cIixcclxuICAgICAgY29sb3I6IFwicHJpbWFyeS5kYXJrXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2NhY2hlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkhlYWQiLCJUaGVtZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJDYWNoZVByb3ZpZGVyIiwidGhlbWUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJjbGllbnRTaWRlRW1vdGlvbkNhY2hlIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsImVtb3Rpb25DYWNoZSIsInBhZ2VQcm9wcyIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImNyZWF0ZUNhY2hlIiwia2V5IiwiY3JlYXRlVGhlbWUiLCJyZWQiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJlcnJvciIsIkE0MDAiLCJteXJlZCIsImNvbnRyYXN0VGV4dCIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Iiwiam9pbiIsImgxIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiaDIiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=
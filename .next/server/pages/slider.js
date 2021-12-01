"use strict";
(() => {
var exports = {};
exports.id = "pages/slider";
exports.ids = ["pages/slider"];
exports.modules = {

/***/ "./pages/slider.js":
/*!*************************!*\
  !*** ./pages/slider.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContinuousSlider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/react */ "@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-confetti */ "react-confetti");
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Stack */ "@mui/material/Stack");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Slider */ "@mui/material/Slider");
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Container */ "@mui/material/Container");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Jkogerup\\Dev\\simongame\\pages\\slider.js";










let defaultLanguage = 0; // English

let startValue = 0;
function ContinuousSlider() {
  const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultLanguage);
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(startValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default()), {
    maxwidth: "md",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
      sx: {
        display: "flex",
        alignItems: "center",
        bgcolor: "background.paper",
        height: 1000,
        widht: 1000
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
        sx: {
          flexGrow: 1
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
          sx: {
            typography: "h1",
            color: "primary.main",
            textAlign: "center",
            mb: 1
          },
          children: "What is your current mood?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
          sx: {
            typography: "h2",
            textAlign: "center"
          },
          children: "\xBFCu\xE1l es tu estado de \xE1nimo actual?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
          spacing: 2,
          direction: "row",
          sx: {
            mt: 4
          },
          alignItems: "center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            icon: "noto:frowning-face",
            height: "64"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Slider__WEBPACK_IMPORTED_MODULE_5___default()), {
            color: "secondary",
            "aria-label": "Mood",
            value: value,
            onChange: handleChange,
            valueLabelDisplay: "auto",
            step: 10,
            marks: true,
            min: 0,
            max: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            icon: "noto:smiling-face",
            height: "64"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), value == "100" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_confetti__WEBPACK_IMPORTED_MODULE_2___default()), {
        gravity: 0.5
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 28
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@iconify/react":
/*!*********************************!*\
  !*** external "@iconify/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@iconify/react");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Container":
/*!******************************************!*\
  !*** external "@mui/material/Container" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ "@mui/material/Slider":
/*!***************************************!*\
  !*** external "@mui/material/Slider" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Slider");

/***/ }),

/***/ "@mui/material/Stack":
/*!**************************************!*\
  !*** external "@mui/material/Stack" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

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

/***/ "react-confetti":
/*!*********************************!*\
  !*** external "react-confetti" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-confetti");

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
var __webpack_exports__ = (__webpack_exec__("./pages/slider.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUN6RUQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvc2xpZGVyLmpzIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBpY29uaWZ5L3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Cb3hcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvU2xpZGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtY29uZmV0dGlcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJAaWNvbmlmeS9yZWFjdFwiO1xyXG5pbXBvcnQgQ29uZmV0dGkgZnJvbSBcInJlYWN0LWNvbmZldHRpXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1NsaWRlclwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XHJcblxyXG5sZXQgZGVmYXVsdExhbmd1YWdlID0gMDsgLy8gRW5nbGlzaFxyXG5sZXQgc3RhcnRWYWx1ZSA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250aW51b3VzU2xpZGVyKCkge1xyXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdExhbmd1YWdlKTtcclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShzdGFydFZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heHdpZHRoPVwibWRcIj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcclxuICAgICAgICAgIGhlaWdodDogMTAwMCxcclxuICAgICAgICAgIHdpZGh0OiAxMDAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHR5cG9ncmFwaHk6IFwiaDFcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5Lm1haW5cIixcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgbWI6IDEsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFdoYXQgaXMgeW91ciBjdXJyZW50IG1vb2Q/XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICB0eXBvZ3JhcGh5OiBcImgyXCIsXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDCv0N1w6FsIGVzIHR1IGVzdGFkbyBkZSDDoW5pbW8gYWN0dWFsP1xyXG4gICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGRpcmVjdGlvbj1cInJvd1wiIHN4PXt7IG10OiA0IH19IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPEljb24gaWNvbj1cIm5vdG86ZnJvd25pbmctZmFjZVwiIGhlaWdodD1cIjY0XCIgLz5cclxuICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTW9vZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdmFsdWVMYWJlbERpc3BsYXk9XCJhdXRvXCJcclxuICAgICAgICAgICAgICBzdGVwPXsxMH1cclxuICAgICAgICAgICAgICBtYXJrc1xyXG4gICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICBtYXg9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEljb24gaWNvbj1cIm5vdG86c21pbGluZy1mYWNlXCIgaGVpZ2h0PVwiNjRcIiAvPlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICB7dmFsdWUgPT0gXCIxMDBcIiAmJiA8Q29uZmV0dGkgZ3Jhdml0eT17MC41fSAvPn1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBpY29uaWZ5L3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvU2xpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvbmZldHRpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkljb24iLCJDb25mZXR0aSIsIkJveCIsIlN0YWNrIiwiU2xpZGVyIiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeSIsImRlZmF1bHRMYW5ndWFnZSIsInN0YXJ0VmFsdWUiLCJDb250aW51b3VzU2xpZGVyIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJiZ2NvbG9yIiwiaGVpZ2h0Iiwid2lkaHQiLCJmbGV4R3JvdyIsInR5cG9ncmFwaHkiLCJjb2xvciIsInRleHRBbGlnbiIsIm1iIiwibXQiXSwic291cmNlUm9vdCI6IiJ9
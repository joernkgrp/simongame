"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Avatar */ "@mui/material/Avatar");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ "@mui/material/AppBar");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Stack */ "@mui/material/Stack");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Slider */ "@mui/material/Slider");
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ "@mui/material/Button");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Container */ "@mui/material/Container");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_Copyright__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/Copyright */ "./src/Copyright.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/FormControl */ "@mui/material/FormControl");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/FormHelperText */ "@mui/material/FormHelperText");
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/InputLabel */ "@mui/material/InputLabel");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/MenuItem */ "@mui/material/MenuItem");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Select */ "@mui/material/Select");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Toolbar */ "@mui/material/Toolbar");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_icons_material_AccessibilityNew__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material/AccessibilityNew */ "@mui/icons-material/AccessibilityNew");
/* harmony import */ var _mui_icons_material_AccessibilityNew__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AccessibilityNew__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material/ArrowForward */ "@mui/icons-material/ArrowForward");
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__);
var _jsxFileName = "C:\\Users\\Jkogerup\\Dev\\simongame\\pages\\index.js";






















let defaultLanguage = 0; // English

let startValue = 0;
function ContinuousSlider() {
  const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultLanguage);
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(startValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default()), {
    maxWidth: "sm",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4___default()), {
      position: "fixed",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17___default()), {
          variant: "h6",
          component: "div",
          sx: {
            flexGrow: 1
          },
          children: "Senso"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3___default()), {
        sx: {
          mt: 10,
          mb: 1,
          bgcolor: "secondary.main"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_icons_material_AccessibilityNew__WEBPACK_IMPORTED_MODULE_18___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17___default()), {
        variant: "h6",
        component: "div",
        sx: {
          flexGrow: 1
        },
        children: "Hey, you!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11___default()), {
        sx: {
          my: 4
        },
        fullWidth: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_13___default()), {
          children: "Language"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_15___default()), {
          value: language,
          label: "Language",
          onChange: handleChange,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14___default()), {
            value: 0,
            selected: true,
            children: "\uD83C\uDDFA\uD83C\uDDF8 English"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14___default()), {
            value: 1,
            disabled: true,
            children: "\uD83C\uDDE9\uD83C\uDDEA Deutsch"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14___default()), {
            value: 2,
            disabled: true,
            children: "\uD83C\uDDE9\uD83C\uDDEA Leichtes Deutsch"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14___default()), {
            value: 3,
            disabled: true,
            children: "\uD83C\uDDEB\uD83C\uDDF7 Fran\xE7ais"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14___default()), {
            value: 4,
            disabled: true,
            children: "\uD83C\uDDEA\uD83C\uDDF8 Espa\xF1ol"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_12___default()), {
          children: "Please select a language."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
        endIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_19___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 20
        }, this),
        type: "submit",
        fullWidth: true,
        variant: "contained",
        href: "/form",
        children: "Continue"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_src_Copyright__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/Copyright.js":
/*!**************************!*\
  !*** ./src/Copyright.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Copyright)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Link */ "@mui/material/Link");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Jkogerup\\Dev\\simongame\\src\\Copyright.js";




function Copyright() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default()), {
    variant: "body2",
    color: "text.secondary",
    align: "center",
    sx: {
      pt: 2
    },
    children: ["© ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
      color: "inherit",
      href: "https://mui.com/",
      children: "J\xF6rn,"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), " ", new Date().getFullYear()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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

/***/ "@mui/icons-material/AccessibilityNew":
/*!*******************************************************!*\
  !*** external "@mui/icons-material/AccessibilityNew" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/AccessibilityNew");

/***/ }),

/***/ "@mui/icons-material/ArrowForward":
/*!***************************************************!*\
  !*** external "@mui/icons-material/ArrowForward" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowForward");

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

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

/***/ "@mui/material/Link":
/*!*************************************!*\
  !*** external "@mui/material/Link" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Link");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSXFCLGVBQWUsR0FBRyxDQUF0QixFQUF5Qjs7QUFDekIsSUFBSUMsVUFBVSxHQUFHLENBQWpCO0FBRWUsU0FBU0MsZ0JBQVQsR0FBNEI7QUFDekMsUUFBTSxDQUFDQyxRQUFELEVBQVdDLFdBQVgsSUFBMEJ6QiwyQ0FBQSxDQUFlcUIsZUFBZixDQUFoQztBQUVBLFFBQU0sQ0FBQ0ssS0FBRCxFQUFRQyxRQUFSLElBQW9CM0IsMkNBQUEsQ0FBZXNCLFVBQWYsQ0FBMUI7O0FBRUEsUUFBTU0sWUFBWSxHQUFHLENBQUNDLEtBQUQsRUFBUUMsUUFBUixLQUFxQjtBQUN4Q0gsSUFBQUEsUUFBUSxDQUFDRyxRQUFELENBQVI7QUFDRCxHQUZEOztBQUlBLHNCQUNFLCtEQUFDLGdFQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQUEsNEJBQ0UsK0RBQUMsNkRBQUQ7QUFBUSxjQUFRLEVBQUMsT0FBakI7QUFBQSw2QkFDRSwrREFBQywrREFBRDtBQUFBLCtCQUNFLCtEQUFDLGtFQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUF5QixtQkFBUyxFQUFDLEtBQW5DO0FBQXlDLFlBQUUsRUFBRTtBQUFFQyxZQUFBQSxRQUFRLEVBQUU7QUFBWixXQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFTRSwrREFBQywwREFBRDtBQUNFLFFBQUUsRUFBRTtBQUNGQyxRQUFBQSxPQUFPLEVBQUUsTUFEUDtBQUVGQyxRQUFBQSxhQUFhLEVBQUUsUUFGYjtBQUdGQyxRQUFBQSxVQUFVLEVBQUU7QUFIVixPQUROO0FBQUEsOEJBT0UsK0RBQUMsNkRBQUQ7QUFBUSxVQUFFLEVBQUU7QUFBRUMsVUFBQUEsRUFBRSxFQUFFLEVBQU47QUFBVUMsVUFBQUEsRUFBRSxFQUFFLENBQWQ7QUFBaUJDLFVBQUFBLE9BQU8sRUFBRTtBQUExQixTQUFaO0FBQUEsK0JBQ0UsK0RBQUMsOEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVVFLCtEQUFDLGtFQUFEO0FBQVksZUFBTyxFQUFDLElBQXBCO0FBQXlCLGlCQUFTLEVBQUMsS0FBbkM7QUFBeUMsVUFBRSxFQUFFO0FBQUVOLFVBQUFBLFFBQVEsRUFBRTtBQUFaLFNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFhRSwrREFBQyxtRUFBRDtBQUFhLFVBQUUsRUFBRTtBQUFFTyxVQUFBQSxFQUFFLEVBQUU7QUFBTixTQUFqQjtBQUE0QixpQkFBUyxNQUFyQztBQUFBLGdDQUNFLCtEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsK0RBQUMsOERBQUQ7QUFBUSxlQUFLLEVBQUVkLFFBQWY7QUFBeUIsZUFBSyxFQUFDLFVBQS9CO0FBQTBDLGtCQUFRLEVBQUVJLFlBQXBEO0FBQUEsa0NBQ0UsK0RBQUMsZ0VBQUQ7QUFBVSxpQkFBSyxFQUFFLENBQWpCO0FBQW9CLG9CQUFRLEVBQUUsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSwrREFBQyxnRUFBRDtBQUFVLGlCQUFLLEVBQUUsQ0FBakI7QUFBb0Isb0JBQVEsRUFBRSxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQU9FLCtEQUFDLGdFQUFEO0FBQVUsaUJBQUssRUFBRSxDQUFqQjtBQUFvQixvQkFBUSxFQUFFLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGLGVBVUUsK0RBQUMsZ0VBQUQ7QUFBVSxpQkFBSyxFQUFFLENBQWpCO0FBQW9CLG9CQUFRLEVBQUUsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkYsZUFhRSwrREFBQyxnRUFBRDtBQUFVLGlCQUFLLEVBQUUsQ0FBakI7QUFBb0Isb0JBQVEsRUFBRSxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFtQkUsK0RBQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLGVBa0NFLCtEQUFDLDZEQUFEO0FBQ0UsZUFBTyxlQUFFLCtEQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFg7QUFFRSxZQUFJLEVBQUMsUUFGUDtBQUdFLGlCQUFTLE1BSFg7QUFJRSxlQUFPLEVBQUMsV0FKVjtBQUtFLFlBQUksRUFBQyxPQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbENGLGVBMkNFLCtEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5REQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZEO0FBQ0E7QUFDQTs7QUFFZSxTQUFTakIsU0FBVCxHQUFxQjtBQUNsQyxzQkFDRSw4REFBQyxpRUFBRDtBQUNFLFdBQU8sRUFBQyxPQURWO0FBRUUsU0FBSyxFQUFDLGdCQUZSO0FBR0UsU0FBSyxFQUFDLFFBSFI7QUFJRSxNQUFFLEVBQUU7QUFBRTZCLE1BQUFBLEVBQUUsRUFBRTtBQUFOLEtBSk47QUFBQSxlQU1HLElBTkgsZUFPRSw4REFBQywyREFBRDtBQUFTLFdBQUssRUFBQyxTQUFmO0FBQXlCLFVBQUksRUFBQyxrQkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixFQVNhLEdBVGIsRUFVRyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOzs7Ozs7Ozs7O0FDbkJEOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL25leHRqcy8uL3NyYy9Db3B5cmlnaHQuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQGljb25pZnkvcmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FjY2Vzc2liaWxpdHlOZXdcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0JveFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Gb3JtSGVscGVyVGV4dFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvSW5wdXRMYWJlbFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvTGlua1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL1NlbGVjdFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvU2xpZGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtY29uZmV0dGlcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJAaWNvbmlmeS9yZWFjdFwiO1xyXG5pbXBvcnQgQ29uZmV0dGkgZnJvbSBcInJlYWN0LWNvbmZldHRpXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1NsaWRlclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgQ29weXJpZ2h0IGZyb20gXCIuLi9zcmMvQ29weXJpZ2h0XCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbFwiO1xyXG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRm9ybUhlbHBlclRleHRcIjtcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvSW5wdXRMYWJlbFwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTWVudUl0ZW1cIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9TZWxlY3RcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBBY2Nlc3NpYmlsaXR5TmV3SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BY2Nlc3NpYmlsaXR5TmV3XCI7XHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFwiO1xyXG5cclxubGV0IGRlZmF1bHRMYW5ndWFnZSA9IDA7IC8vIEVuZ2xpc2hcclxubGV0IHN0YXJ0VmFsdWUgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGludW91c1NsaWRlcigpIHtcclxuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRMYW5ndWFnZSk7XHJcblxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoc3RhcnRWYWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgIFNlbnNvXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuXHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEF2YXRhciBzeD17eyBtdDogMTAsIG1iOiAxLCBiZ2NvbG9yOiBcInNlY29uZGFyeS5tYWluXCIgfX0+XHJcbiAgICAgICAgICA8QWNjZXNzaWJpbGl0eU5ld0ljb24gLz5cclxuICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgICAgIEhleSwgeW91IVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgbXk6IDQgfX0gZnVsbFdpZHRoPlxyXG4gICAgICAgICAgPElucHV0TGFiZWw+TGFuZ3VhZ2U8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8U2VsZWN0IHZhbHVlPXtsYW5ndWFnZX0gbGFiZWw9XCJMYW5ndWFnZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezB9IHNlbGVjdGVkPXt0cnVlfT5cclxuICAgICAgICAgICAgICDwn4e68J+HuCBFbmdsaXNoXHJcbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MX0gZGlzYWJsZWQ9e3RydWV9PlxyXG4gICAgICAgICAgICAgIPCfh6nwn4eqIERldXRzY2hcclxuICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsyfSBkaXNhYmxlZD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAg8J+HqfCfh6ogTGVpY2h0ZXMgRGV1dHNjaFxyXG4gICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezN9IGRpc2FibGVkPXt0cnVlfT5cclxuICAgICAgICAgICAgICDwn4er8J+HtyBGcmFuw6dhaXNcclxuICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXs0fSBkaXNhYmxlZD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAg8J+HqvCfh7ggRXNwYcOxb2xcclxuICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlBsZWFzZSBzZWxlY3QgYSBsYW5ndWFnZS48L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZEljb24gLz59XHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICBocmVmPVwiL2Zvcm1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIENvbnRpbnVlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPENvcHlyaWdodCAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IE11aUxpbmsgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeVxyXG4gICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcclxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICBzeD17eyBwdDogMiB9fVxyXG4gICAgPlxyXG4gICAgICB7XCLCqSBcIn1cclxuICAgICAgPE11aUxpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cImh0dHBzOi8vbXVpLmNvbS9cIj5cclxuICAgICAgICBKw7ZybixcclxuICAgICAgPC9NdWlMaW5rPntcIiBcIn1cclxuICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBpY29uaWZ5L3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjZXNzaWJpbGl0eU5ld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0F2YXRhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvRm9ybUhlbHBlclRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9JbnB1dExhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvU2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvU2xpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb25mZXR0aVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJY29uIiwiQ29uZmV0dGkiLCJBdmF0YXIiLCJBcHBCYXIiLCJCb3giLCJTdGFjayIsIlNsaWRlciIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkNvcHlyaWdodCIsIkZvcm1Db250cm9sIiwiRm9ybUhlbHBlclRleHQiLCJJbnB1dExhYmVsIiwiTWVudUl0ZW0iLCJTZWxlY3QiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkFjY2Vzc2liaWxpdHlOZXdJY29uIiwiQXJyb3dGb3J3YXJkSWNvbiIsImRlZmF1bHRMYW5ndWFnZSIsInN0YXJ0VmFsdWUiLCJDb250aW51b3VzU2xpZGVyIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiZmxleEdyb3ciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtdCIsIm1iIiwiYmdjb2xvciIsIm15IiwiTXVpTGluayIsInB0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==
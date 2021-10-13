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
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Avatar */ "@mui/material/Avatar");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/AppBar */ "@mui/material/AppBar");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Button */ "@mui/material/Button");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ "@mui/material/Container");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_Copyright__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Copyright */ "./src/Copyright.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/FormControl */ "@mui/material/FormControl");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/FormHelperText */ "@mui/material/FormHelperText");
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/InputLabel */ "@mui/material/InputLabel");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/MenuItem */ "@mui/material/MenuItem");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Select */ "@mui/material/Select");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Toolbar */ "@mui/material/Toolbar");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_icons_material_AccessibilityNew__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/AccessibilityNew */ "@mui/icons-material/AccessibilityNew");
/* harmony import */ var _mui_icons_material_AccessibilityNew__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AccessibilityNew__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/ArrowForward */ "@mui/icons-material/ArrowForward");
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "C:\\Users\\Jkogerup\\Dev\\simongame\\pages\\index.js";

















function Index() {
  const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);

  const handleChange = event => {
    setLanguage(event.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
    maxWidth: "sm",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default()), {
      position: "fixed",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {
          variant: "h6",
          component: "div",
          sx: {
            flexGrow: 1
          },
          children: "Senso"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1___default()), {
        sx: {
          mt: 10,
          mb: 1,
          bgcolor: "secondary.main"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_icons_material_AccessibilityNew__WEBPACK_IMPORTED_MODULE_14___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {
        variant: "h6",
        component: "div",
        sx: {
          flexGrow: 1
        },
        children: "Hey, you!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7___default()), {
        sx: {
          my: 4
        },
        fullWidth: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9___default()), {
          children: "Language"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_11___default()), {
          value: language,
          label: "Language",
          onChange: handleChange,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
            value: 0,
            selected: true,
            children: "\uD83C\uDDFA\uD83C\uDDF8 English"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
            value: 1,
            disabled: true,
            children: "\uD83C\uDDE9\uD83C\uDDEA Deutsch"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
            value: 2,
            disabled: true,
            children: "\uD83C\uDDEB\uD83C\uDDF7 Fran\xE7ais"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
            value: 3,
            disabled: true,
            children: "\uD83C\uDDEA\uD83C\uDDF8 Espa\xF1ol"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_8___default()), {
          children: "Please select a language."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
        endIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_15___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 20
        }, this),
        type: "submit",
        fullWidth: true,
        variant: "contained",
        href: "/form",
        children: "Continue"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_src_Copyright__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9zcmMvQ29weXJpZ2h0LmpzIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjZXNzaWJpbGl0eU5ld1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0F2YXRhclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQm94XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0Zvcm1IZWxwZXJUZXh0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9JbnB1dExhYmVsXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9MaW5rXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9NZW51SXRlbVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvU2VsZWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcclxuaW1wb3J0IENvcHlyaWdodCBmcm9tIFwiLi4vc3JjL0NvcHlyaWdodFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gXCJAbXVpL21hdGVyaWFsL0Zvcm1IZWxwZXJUZXh0XCI7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCJAbXVpL21hdGVyaWFsL0lucHV0TGFiZWxcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL01lbnVJdGVtXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU2VsZWN0XCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL1Rvb2xiYXJcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgQWNjZXNzaWJpbGl0eU5ld0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjZXNzaWJpbGl0eU5ld1wiO1xyXG5pbXBvcnQgQXJyb3dGb3J3YXJkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgIFNlbnNvXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuXHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEF2YXRhciBzeD17eyBtdDogMTAsIG1iOiAxLCBiZ2NvbG9yOiBcInNlY29uZGFyeS5tYWluXCIgfX0+XHJcbiAgICAgICAgICA8QWNjZXNzaWJpbGl0eU5ld0ljb24gLz5cclxuICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgICAgIEhleSwgeW91IVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgbXk6IDQgfX0gZnVsbFdpZHRoPlxyXG4gICAgICAgICAgPElucHV0TGFiZWw+TGFuZ3VhZ2U8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8U2VsZWN0IHZhbHVlPXtsYW5ndWFnZX0gbGFiZWw9XCJMYW5ndWFnZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezB9IHNlbGVjdGVkPXt0cnVlfT5cclxuICAgICAgICAgICAgICDwn4e68J+HuCBFbmdsaXNoXHJcbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MX0gZGlzYWJsZWQ9e3RydWV9PlxyXG4gICAgICAgICAgICAgIPCfh6nwn4eqIERldXRzY2hcclxuICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsyfSBkaXNhYmxlZD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAg8J+Hq/Cfh7cgRnJhbsOnYWlzXHJcbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17M30gZGlzYWJsZWQ9e3RydWV9PlxyXG4gICAgICAgICAgICAgIPCfh6rwn4e4IEVzcGHDsW9sXHJcbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDxGb3JtSGVscGVyVGV4dD5QbGVhc2Ugc2VsZWN0IGEgbGFuZ3VhZ2UuPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRJY29uIC8+fVxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgaHJlZj1cIi9mb3JtXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBDb250aW51ZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBNdWlMaW5rIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHlcclxuICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXHJcbiAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgc3g9e3sgcHQ6IDIgfX1cclxuICAgID5cclxuICAgICAge1wiwqkgXCJ9XHJcbiAgICAgIDxNdWlMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCJodHRwczovL211aS5jb20vXCI+XHJcbiAgICAgICAgSsO2cm4sXHJcbiAgICAgIDwvTXVpTGluaz57XCIgXCJ9XHJcbiAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FjY2Vzc2liaWxpdHlOZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Cb3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0Zvcm1IZWxwZXJUZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvSW5wdXRMYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1NlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJBdmF0YXIiLCJBcHBCYXIiLCJCb3giLCJCdXR0b24iLCJDb250YWluZXIiLCJDb3B5cmlnaHQiLCJGb3JtQ29udHJvbCIsIkZvcm1IZWxwZXJUZXh0IiwiSW5wdXRMYWJlbCIsIk1lbnVJdGVtIiwiU2VsZWN0IiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJBY2Nlc3NpYmlsaXR5TmV3SWNvbiIsIkFycm93Rm9yd2FyZEljb24iLCJJbmRleCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwibWIiLCJiZ2NvbG9yIiwibXkiLCJNdWlMaW5rIiwicHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwic291cmNlUm9vdCI6IiJ9
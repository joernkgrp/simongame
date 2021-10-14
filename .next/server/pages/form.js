"use strict";
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
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
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/FormControl */ "@mui/material/FormControl");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/FormHelperText */ "@mui/material/FormHelperText");
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/InputLabel */ "@mui/material/InputLabel");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/MenuItem */ "@mui/material/MenuItem");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Select */ "@mui/material/Select");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/TextField */ "@mui/material/TextField");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Toolbar */ "@mui/material/Toolbar");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Settings */ "@mui/icons-material/Settings");
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/ArrowForward */ "@mui/icons-material/ArrowForward");
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "@mui/icons-material/ArrowBack");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "C:\\Users\\Jkogerup\\Dev\\simongame\\pages\\form.js";


















function Form() {
  const [handicap, setHandicap] = react__WEBPACK_IMPORTED_MODULE_0__.useState(3);

  const handleChange = event => {
    setHandicap(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget); // eslint-disable-next-line no-console

    console.log({
      email: data.get("email"),
      password: data.get("password")
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
    component: "main",
    maxWidth: "sm",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default()), {
      position: "fixed",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {
          variant: "h6",
          component: "div",
          sx: {
            flexGrow: 1
          },
          children: "Senso"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1___default()), {
        sx: {
          mt: 10,
          mb: 1,
          bgcolor: "secondary.main"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_14___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {
        component: "h1",
        variant: "h5",
        children: "A few more things"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
        component: "form",
        onSubmit: handleSubmit,
        noValidate: true,
        sx: {
          mt: 2
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11___default()), {
          margin: "normal",
          fullWidth: true,
          label: "Your name",
          name: "name",
          placeholder: "John Doe",
          helperText: "Please type in your name.",
          autoFocus: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
          sx: {
            mt: 3
          },
          fullWidth: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_8___default()), {
            id: "demo-simple-select-helper-label",
            children: "Your handicap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_10___default()), {
            value: handicap,
            label: "Your handicap",
            onChange: handleChange,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
              value: 0,
              children: "I can\u2019t see"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
              value: 1,
              children: "I can\u2019t hear"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
              value: 2,
              children: "I can neither see nor hear"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
              value: 3,
              children: "I have no handicap"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_7___default()), {
            children: "Please select a handicap."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
          sx: {
            mt: 4
          },
          fullWidth: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_8___default()), {
            id: "demo-simple-select-helper-label",
            children: "Your input type"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_10___default()), {
            value: handicap,
            label: "Your input type",
            onChange: handleChange,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
              value: 0,
              children: "Speak"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
              value: 1,
              children: "Touch or click"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
              value: 2,
              children: "Sense"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
              value: 3,
              children: "All types"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_7___default()), {
            children: "Please select an input type."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
          endIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_15___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 22
          }, this),
          type: "submit",
          fullWidth: true,
          variant: "contained",
          sx: {
            mt: 4
          },
          href: "/mode",
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
          startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_16___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 24
          }, this),
          fullWidth: true,
          variant: "outlined",
          sx: {
            mt: 2
          },
          href: "/",
          children: "Back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@mui/icons-material/ArrowBack":
/*!************************************************!*\
  !*** external "@mui/icons-material/ArrowBack" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBack");

/***/ }),

/***/ "@mui/icons-material/ArrowForward":
/*!***************************************************!*\
  !*** external "@mui/icons-material/ArrowForward" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowForward");

/***/ }),

/***/ "@mui/icons-material/Settings":
/*!***********************************************!*\
  !*** external "@mui/icons-material/Settings" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Settings");

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
var __webpack_exports__ = (__webpack_exec__("./pages/form.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QURGO0FBd0ZEOzs7Ozs7Ozs7O0FDM0hEOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3NcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Cb3hcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvRm9ybUhlbHBlclRleHRcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0lucHV0TGFiZWxcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL01lbnVJdGVtXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9TZWxlY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbFwiO1xyXG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRm9ybUhlbHBlclRleHRcIjtcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvSW5wdXRMYWJlbFwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTWVudUl0ZW1cIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9TZWxlY3RcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3NcIjtcclxuaW1wb3J0IEFycm93Rm9yd2FyZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkXCI7XHJcbmltcG9ydCBBcnJvd0JhY2tJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFja1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcclxuICBjb25zdCBbaGFuZGljYXAsIHNldEhhbmRpY2FwXSA9IFJlYWN0LnVzZVN0YXRlKDMpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEhhbmRpY2FwKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICBjb25zb2xlLmxvZyh7XHJcbiAgICAgIGVtYWlsOiBkYXRhLmdldChcImVtYWlsXCIpLFxyXG4gICAgICBwYXNzd29yZDogZGF0YS5nZXQoXCJwYXNzd29yZFwiKSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgIFNlbnNvXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuXHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEF2YXRhciBzeD17eyBtdDogMTAsIG1iOiAxLCBiZ2NvbG9yOiBcInNlY29uZGFyeS5tYWluXCIgfX0+XHJcbiAgICAgICAgICA8U2V0dGluZ3NJY29uIC8+XHJcbiAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cclxuICAgICAgICAgIEEgZmV3IG1vcmUgdGhpbmdzXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxCb3ggY29tcG9uZW50PVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG5vVmFsaWRhdGUgc3g9e3sgbXQ6IDIgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2huIERvZVwiXHJcbiAgICAgICAgICAgIGhlbHBlclRleHQ9XCJQbGVhc2UgdHlwZSBpbiB5b3VyIG5hbWUuXCJcclxuICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IG10OiAzIH19IGZ1bGxXaWR0aD5cclxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtaGVscGVyLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgWW91ciBoYW5kaWNhcFxyXG4gICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICB2YWx1ZT17aGFuZGljYXB9XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIGhhbmRpY2FwXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXswfT5JIGNhbuKAmXQgc2VlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezF9PkkgY2Fu4oCZdCBoZWFyPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezJ9PkkgY2FuIG5laXRoZXIgc2VlIG5vciBoZWFyPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezN9PkkgaGF2ZSBubyBoYW5kaWNhcDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQ+UGxlYXNlIHNlbGVjdCBhIGhhbmRpY2FwLjwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IG10OiA0IH19IGZ1bGxXaWR0aD5cclxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtaGVscGVyLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgWW91ciBpbnB1dCB0eXBlXHJcbiAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtoYW5kaWNhcH1cclxuICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgaW5wdXQgdHlwZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MH0+U3BlYWs8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MX0+VG91Y2ggb3IgY2xpY2s8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17Mn0+U2Vuc2U8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17M30+QWxsIHR5cGVzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDxGb3JtSGVscGVyVGV4dD5QbGVhc2Ugc2VsZWN0IGFuIGlucHV0IHR5cGUuPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRJY29uIC8+fVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBzeD17eyBtdDogNCB9fVxyXG4gICAgICAgICAgICBocmVmPVwiL21vZGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDb250aW51ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PEFycm93QmFja0ljb24gLz59XHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBzeD17eyBtdDogMiB9fVxyXG4gICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEJhY2tcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5nc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0F2YXRhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvRm9ybUhlbHBlclRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9JbnB1dExhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9TZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXZhdGFyIiwiQXBwQmFyIiwiQm94IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRm9ybUNvbnRyb2wiLCJGb3JtSGVscGVyVGV4dCIsIklucHV0TGFiZWwiLCJNZW51SXRlbSIsIlNlbGVjdCIsIlRleHRGaWVsZCIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiU2V0dGluZ3NJY29uIiwiQXJyb3dGb3J3YXJkSWNvbiIsIkFycm93QmFja0ljb24iLCJGb3JtIiwiaGFuZGljYXAiLCJzZXRIYW5kaWNhcCIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIkZvcm1EYXRhIiwiY3VycmVudFRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbCIsImdldCIsInBhc3N3b3JkIiwiZmxleEdyb3ciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtdCIsIm1iIiwiYmdjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=
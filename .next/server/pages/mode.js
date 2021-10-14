"use strict";
(() => {
var exports = {};
exports.id = "pages/mode";
exports.ids = ["pages/mode"];
exports.modules = {

/***/ "./pages/mode.js":
/*!***********************!*\
  !*** ./pages/mode.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckboxListSecondary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/AppBar */ "@mui/material/AppBar");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Avatar */ "@mui/material/Avatar");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ "@mui/material/Button");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Checkbox */ "@mui/material/Checkbox");
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Container */ "@mui/material/Container");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/List */ "@mui/material/List");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItem */ "@mui/material/ListItem");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItemButton */ "@mui/material/ListItemButton");
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItemText */ "@mui/material/ListItemText");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ "@mui/material/ListItemAvatar");
/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Settings */ "@mui/icons-material/Settings");
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Toolbar */ "@mui/material/Toolbar");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "@mui/icons-material/ArrowBack");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/PlayArrow */ "@mui/icons-material/PlayArrow");
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "C:\\Users\\Jkogerup\\Dev\\simongame\\pages\\mode.js";


















function CheckboxListSecondary() {
  const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_0__.useState([1]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default()), {
    component: "main",
    maxWidth: "sm",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default()), {
      position: "fixed",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_13___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
          mt: 10,
          mb: 1,
          bgcolor: "secondary.main"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_12___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
        component: "h1",
        variant: "h5",
        children: "Please select a mode"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_List__WEBPACK_IMPORTED_MODULE_7___default()), {
        dense: true,
        sx: {
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          mt: 2,
          ml: -2
        },
        children: ["Colors", "Animal sounds", "Music instruments", "Random"].map(value => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8___default()), {
            secondaryAction: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4___default()), {
              edge: "end",
              onChange: handleToggle(value),
              checked: checked.indexOf(value) !== -1,
              inputProps: {
                "aria-labelledby": labelId
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 21
            }, this),
            disablePadding: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_9___default()), {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_11___default()), {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default()), {
                  sx: {
                    mr: 2,
                    width: 56,
                    height: 56
                  },
                  src: `/static/images/${value}.jpg`
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10___default()), {
                id: labelId,
                primary: `${value}`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 19
            }, this)
          }, value, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        endIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_16___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 20
        }, this),
        type: "submit",
        fullWidth: true,
        variant: "contained",
        sx: {
          mt: 4
        },
        href: "/game",
        children: "Play"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_15___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 22
        }, this),
        fullWidth: true,
        variant: "outlined",
        sx: {
          mt: 2
        },
        href: "/form",
        children: "Back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
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

/***/ "@mui/material/Checkbox":
/*!*****************************************!*\
  !*** external "@mui/material/Checkbox" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Checkbox");

/***/ }),

/***/ "@mui/material/Container":
/*!******************************************!*\
  !*** external "@mui/material/Container" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ "@mui/material/List":
/*!*************************************!*\
  !*** external "@mui/material/List" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ "@mui/material/ListItem":
/*!*****************************************!*\
  !*** external "@mui/material/ListItem" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ "@mui/material/ListItemAvatar":
/*!***********************************************!*\
  !*** external "@mui/material/ListItemAvatar" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/ListItemAvatar");

/***/ }),

/***/ "@mui/material/ListItemButton":
/*!***********************************************!*\
  !*** external "@mui/material/ListItemButton" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/ListItemButton");

/***/ }),

/***/ "@mui/material/ListItemText":
/*!*********************************************!*\
  !*** external "@mui/material/ListItemText" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

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
var __webpack_exports__ = (__webpack_exec__("./pages/mode.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGI7QUFFRSxpQkFBUyxNQUZYO0FBR0UsZUFBTyxFQUFDLFVBSFY7QUFJRSxVQUFFLEVBQUU7QUFBRUEsVUFBQUEsRUFBRSxFQUFFO0FBQU4sU0FKTjtBQUtFLFlBQUksRUFBQyxPQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUZEOzs7Ozs7Ozs7O0FDekhEOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL21vZGUuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlBcnJvd1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3NcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Cb3hcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQ2hlY2tib3hcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvTGlzdFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtQXZhdGFyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbUJ1dHRvblwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0NoZWNrYm94XCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbUJ1dHRvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1BdmF0YXJcIjtcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrXCI7XHJcbmltcG9ydCBQbGF5QXJyb3dJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlBcnJvd1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tib3hMaXN0U2Vjb25kYXJ5KCkge1xyXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlKFsxXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICh2YWx1ZSkgPT4gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gY2hlY2tlZC5pbmRleE9mKHZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0NoZWNrZWQgPSBbLi4uY2hlY2tlZF07XHJcblxyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgbmV3Q2hlY2tlZC5wdXNoKHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld0NoZWNrZWQuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hlY2tlZChuZXdDaGVja2VkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJzbVwiPlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIj5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICBTZW5zb1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcblxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxBdmF0YXIgc3g9e3sgbXQ6IDEwLCBtYjogMSwgYmdjb2xvcjogXCJzZWNvbmRhcnkubWFpblwiIH19PlxyXG4gICAgICAgICAgPFNldHRpbmdzSWNvbiAvPlxyXG4gICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICBQbGVhc2Ugc2VsZWN0IGEgbW9kZVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIGRlbnNlXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiAzNjAsXHJcbiAgICAgICAgICAgIGJnY29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxyXG4gICAgICAgICAgICBtdDogMixcclxuICAgICAgICAgICAgbWw6IC0yLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7W1wiQ29sb3JzXCIsIFwiQW5pbWFsIHNvdW5kc1wiLCBcIk11c2ljIGluc3RydW1lbnRzXCIsIFwiUmFuZG9tXCJdLm1hcChcclxuICAgICAgICAgICAgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbGFiZWxJZCA9IGBjaGVja2JveC1saXN0LXNlY29uZGFyeS1sYWJlbC0ke3ZhbHVlfWA7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb249e1xyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWQuaW5kZXhPZih2YWx1ZSkgIT09IC0xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbElkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlUGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtcjogMiwgd2lkdGg6IDU2LCBoZWlnaHQ6IDU2IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9zdGF0aWMvaW1hZ2VzLyR7dmFsdWV9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpZD17bGFiZWxJZH0gcHJpbWFyeT17YCR7dmFsdWV9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0xpc3Q+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGVuZEljb249ezxQbGF5QXJyb3dJY29uIC8+fVxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgc3g9e3sgbXQ6IDQgfX1cclxuICAgICAgICAgIGhyZWY9XCIvZ2FtZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUGxheVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHN0YXJ0SWNvbj17PEFycm93QmFja0ljb24gLz59XHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBzeD17eyBtdDogMiB9fVxyXG4gICAgICAgICAgaHJlZj1cIi9mb3JtXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBCYWNrXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlBcnJvd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NldHRpbmdzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQ2hlY2tib3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9MaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbUF2YXRhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcEJhciIsIkF2YXRhciIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiQm94IiwiQ29udGFpbmVyIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbVRleHQiLCJMaXN0SXRlbUF2YXRhciIsIlNldHRpbmdzSWNvbiIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiQXJyb3dCYWNrSWNvbiIsIlBsYXlBcnJvd0ljb24iLCJDaGVja2JveExpc3RTZWNvbmRhcnkiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsInVzZVN0YXRlIiwiaGFuZGxlVG9nZ2xlIiwidmFsdWUiLCJjdXJyZW50SW5kZXgiLCJpbmRleE9mIiwibmV3Q2hlY2tlZCIsInB1c2giLCJzcGxpY2UiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwibWIiLCJiZ2NvbG9yIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1sIiwibWFwIiwibGFiZWxJZCIsIm1yIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==
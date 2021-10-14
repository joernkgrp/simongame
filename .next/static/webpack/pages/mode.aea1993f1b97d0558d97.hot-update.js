"use strict";
self["webpackHotUpdate_N_E"]("pages/mode",{

/***/ "./pages/mode.js":
/*!***********************!*\
  !*** ./pages/mode.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CheckboxListSecondary; }
/* harmony export */ });
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/index.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Checkbox */ "./node_modules/@mui/material/Checkbox/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/index.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/ListItem/index.js");
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/ListItemButton */ "./node_modules/@mui/material/ListItemButton/index.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/ListItemText/index.js");
/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ "./node_modules/@mui/material/ListItemAvatar/index.js");
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Settings */ "./node_modules/@mui/icons-material/Settings.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material/PlayArrow */ "./node_modules/@mui/icons-material/PlayArrow.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Jkogerup\\Dev\\simongame\\pages\\mode.js",
    _s = $RefreshSig$();



















function CheckboxListSecondary() {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState([1]),
      _React$useState2 = (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  var handleToggle = function handleToggle(value) {
    return function () {
      var currentIndex = checked.indexOf(value);

      var newChecked = (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(checked);

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_4__.default, {
    component: "main",
    maxWidth: "sm",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__.default, {
      position: "fixed",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__.default, {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9__.default, {
        sx: {
          mt: 10,
          mb: 1,
          bgcolor: "secondary.main"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {
        component: "h1",
        variant: "h5",
        children: "Please select a mode"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_11__.default, {
        dense: true,
        sx: {
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          mt: 2,
          ml: -2
        },
        children: ["Colors", "Animal sounds", "Music instruments", "Random"].map(function (value) {
          var labelId = "checkbox-list-secondary-label-".concat(value);
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_12__.default, {
            secondaryAction: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13__.default, {
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
            }, _this),
            disablePadding: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_14__.default, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_15__.default, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9__.default, {
                  sx: {
                    mr: 2,
                    width: 56,
                    height: 56
                  },
                  src: "/static/images/".concat(value, ".jpg")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16__.default, {
                id: labelId,
                primary: "".concat(value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 19
            }, _this)
          }, value, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_17__.default, {
        endIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_18__.default, {}, void 0, false, {
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
        href: "/mode",
        children: "Play"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_17__.default, {
        startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_19__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 22
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

_s(CheckboxListSecondary, "/QTm1xQsB7RZxmL77nUYHlkFXa0=");

_c = CheckboxListSecondary;

var _c;

$RefreshReg$(_c, "CheckboxListSecondary");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW9kZS5hZWExOTkzZjFiOTdkMDU1OGQ5Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU2lCLHFCQUFULEdBQWlDO0FBQUE7O0FBQUE7O0FBQzlDLHdCQUE4QmpCLDJDQUFBLENBQWUsQ0FBQyxDQUFELENBQWYsQ0FBOUI7QUFBQTtBQUFBLE1BQU9tQixPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxXQUFXLFlBQU07QUFDcEMsVUFBTUMsWUFBWSxHQUFHSixPQUFPLENBQUNLLE9BQVIsQ0FBZ0JGLEtBQWhCLENBQXJCOztBQUNBLFVBQU1HLFVBQVUsR0FBRyxtSkFBSU4sT0FBUCxDQUFoQjs7QUFFQSxVQUFJSSxZQUFZLEtBQUssQ0FBQyxDQUF0QixFQUF5QjtBQUN2QkUsUUFBQUEsVUFBVSxDQUFDQyxJQUFYLENBQWdCSixLQUFoQjtBQUNELE9BRkQsTUFFTztBQUNMRyxRQUFBQSxVQUFVLENBQUNFLE1BQVgsQ0FBa0JKLFlBQWxCLEVBQWdDLENBQWhDO0FBQ0Q7O0FBRURILE1BQUFBLFVBQVUsQ0FBQ0ssVUFBRCxDQUFWO0FBQ0QsS0FYb0I7QUFBQSxHQUFyQjs7QUFhQSxzQkFDRSw4REFBQyw0REFBRDtBQUFXLGFBQVMsRUFBQyxNQUFyQjtBQUE0QixZQUFRLEVBQUMsSUFBckM7QUFBQSw0QkFDRSw4REFBQyx5REFBRDtBQUFRLGNBQVEsRUFBQyxPQUFqQjtBQUFBLDZCQUNFLDhEQUFDLDBEQUFEO0FBQUEsK0JBQ0UsOERBQUMsNkRBQUQ7QUFBWSxpQkFBTyxFQUFDLElBQXBCO0FBQXlCLG1C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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkRGLGVBaUVFLDhEQUFDLDBEQUFEO0FBQ0UsaUJBQVMsZUFBRSw4REFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURiO0FBRUUsaUJBQVMsTUFGWDtBQUdFLGVBQU8sRUFBQyxVQUhWO0FBSUUsVUFBRSxFQUFFO0FBQUVBLFVBQUFBLEVBQUUsRUFBRTtBQUFOLFNBSk47QUFLRSxZQUFJLEVBQUMsR0FMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVGRDs7R0F2R3VCZjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0NoZWNrYm94XCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbUJ1dHRvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1BdmF0YXJcIjtcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrXCI7XHJcbmltcG9ydCBQbGF5QXJyb3dJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlBcnJvd1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tib3hMaXN0U2Vjb25kYXJ5KCkge1xyXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlKFsxXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICh2YWx1ZSkgPT4gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gY2hlY2tlZC5pbmRleE9mKHZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0NoZWNrZWQgPSBbLi4uY2hlY2tlZF07XHJcblxyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgbmV3Q2hlY2tlZC5wdXNoKHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld0NoZWNrZWQuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hlY2tlZChuZXdDaGVja2VkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJzbVwiPlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIj5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICBTZW5zb1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcblxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxBdmF0YXIgc3g9e3sgbXQ6IDEwLCBtYjogMSwgYmdjb2xvcjogXCJzZWNvbmRhcnkubWFpblwiIH19PlxyXG4gICAgICAgICAgPFNldHRpbmdzSWNvbiAvPlxyXG4gICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICBQbGVhc2Ugc2VsZWN0IGEgbW9kZVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIGRlbnNlXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiAzNjAsXHJcbiAgICAgICAgICAgIGJnY29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxyXG4gICAgICAgICAgICBtdDogMixcclxuICAgICAgICAgICAgbWw6IC0yLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7W1wiQ29sb3JzXCIsIFwiQW5pbWFsIHNvdW5kc1wiLCBcIk11c2ljIGluc3RydW1lbnRzXCIsIFwiUmFuZG9tXCJdLm1hcChcclxuICAgICAgICAgICAgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbGFiZWxJZCA9IGBjaGVja2JveC1saXN0LXNlY29uZGFyeS1sYWJlbC0ke3ZhbHVlfWA7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb249e1xyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWQuaW5kZXhPZih2YWx1ZSkgIT09IC0xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbElkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlUGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtcjogMiwgd2lkdGg6IDU2LCBoZWlnaHQ6IDU2IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9zdGF0aWMvaW1hZ2VzLyR7dmFsdWV9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpZD17bGFiZWxJZH0gcHJpbWFyeT17YCR7dmFsdWV9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0xpc3Q+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGVuZEljb249ezxQbGF5QXJyb3dJY29uIC8+fVxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgc3g9e3sgbXQ6IDQgfX1cclxuICAgICAgICAgIGhyZWY9XCIvbW9kZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUGxheVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHN0YXJ0SWNvbj17PEFycm93QmFja0ljb24gLz59XHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBzeD17eyBtdDogMiB9fVxyXG4gICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEJhY2tcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcEJhciIsIkF2YXRhciIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiQm94IiwiQ29udGFpbmVyIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbVRleHQiLCJMaXN0SXRlbUF2YXRhciIsIlNldHRpbmdzSWNvbiIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiQXJyb3dCYWNrSWNvbiIsIlBsYXlBcnJvd0ljb24iLCJDaGVja2JveExpc3RTZWNvbmRhcnkiLCJ1c2VTdGF0ZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiaGFuZGxlVG9nZ2xlIiwidmFsdWUiLCJjdXJyZW50SW5kZXgiLCJpbmRleE9mIiwibmV3Q2hlY2tlZCIsInB1c2giLCJzcGxpY2UiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwibWIiLCJiZ2NvbG9yIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1sIiwibWFwIiwibGFiZWxJZCIsIm1yIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==
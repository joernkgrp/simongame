"use strict";
self["webpackHotUpdate_N_E"]("pages/mode",{

/***/ "./node_modules/@mui/icons-material/PlayArrow.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/icons-material/PlayArrow.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M8 5v14l11-7z"
}), 'PlayArrow');

exports.default = _default;

/***/ }),

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
        children: "Continue"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW9kZS5mNmU5YjRmNWM3M2Q0Yjc4ZjczYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQSw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixlQUFlO0FBQ2Y7QUFDQSw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0U7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNpQixxQkFBVCxHQUFpQztBQUFBOztBQUFBOztBQUM5Qyx3QkFBOEJqQiwyQ0FBQSxDQUFlLENBQUMsQ0FBRCxDQUFmLENBQTlCO0FBQUE7QUFBQSxNQUFPbUIsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFEO0FBQUEsV0FBVyxZQUFNO0FBQ3BDLFVBQU1DLFlBQVksR0FBR0osT0FBTyxDQUFDSyxPQUFSLENBQWdCRixLQUFoQixDQUFyQjs7QUFDQSxVQUFNRyxVQUFVLEdBQUcsbUpBQUlOLE9BQVAsQ0FBaEI7O0FBRUEsVUFBSUksWUFBWSxLQUFLLENBQUMsQ0FBdEIsRUFBeUI7QUFDdkJFLFFBQUFBLFVBQVUsQ0FBQ0MsSUFBWCxDQUFnQkosS0FBaEI7QUFDRCxPQUZELE1BRU87QUFDTEcsUUFBQUEsVUFBVSxDQUFDRSxNQUFYLENBQWtCSixZQUFsQixFQUFnQyxDQUFoQztBQUNEOztBQUVESCxNQUFBQSxVQUFVLENBQUNLLFVBQUQsQ0FB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QUE7QUFBQTtBQUFBLGNBZEYsZUF1REUsOERBQUMsMERBQUQ7QUFDRSxlQUFPLGVBQUUsOERBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEWDtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsaUJBQVMsTUFIWDtBQUlFLGVBQU8sRUFBQyxXQUpWO0FBS0UsVUFBRSxFQUFFO0FBQUVVLFVBQUFBLEVBQUUsRUFBRTtBQUFOLFNBTE47QUFNRSxZQUFJLEVBQUMsT0FOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZERixlQWlFRSw4REFBQywwREFBRDtBQUNFLGlCQUFTLGVBQUUsOERBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEYjtBQUVFLGlCQUFTLE1BRlg7QUFHRSxlQUFPLEVBQUMsVUFIVjtBQUlFLFVBQUUsRUFBRTtBQUFFQSxVQUFBQSxFQUFFLEVBQUU7QUFBTixTQUpOO0FBS0UsWUFBSSxFQUFDLEdBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1RkQ7O0dBdkd1QmY7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlBcnJvdy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxuXHJcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XHJcblxyXG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XHJcblxyXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xyXG4gIGQ6IFwiTTggNXYxNGwxMS03elwiXHJcbn0pLCAnUGxheUFycm93Jyk7XHJcblxyXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0NoZWNrYm94XCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbUJ1dHRvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1BdmF0YXJcIjtcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrXCI7XHJcbmltcG9ydCBQbGF5QXJyb3dJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlBcnJvd1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tib3hMaXN0U2Vjb25kYXJ5KCkge1xyXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlKFsxXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICh2YWx1ZSkgPT4gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gY2hlY2tlZC5pbmRleE9mKHZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0NoZWNrZWQgPSBbLi4uY2hlY2tlZF07XHJcblxyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgbmV3Q2hlY2tlZC5wdXNoKHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld0NoZWNrZWQuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hlY2tlZChuZXdDaGVja2VkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJzbVwiPlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIj5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICBTZW5zb1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcblxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxBdmF0YXIgc3g9e3sgbXQ6IDEwLCBtYjogMSwgYmdjb2xvcjogXCJzZWNvbmRhcnkubWFpblwiIH19PlxyXG4gICAgICAgICAgPFNldHRpbmdzSWNvbiAvPlxyXG4gICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICBQbGVhc2Ugc2VsZWN0IGEgbW9kZVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIGRlbnNlXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiAzNjAsXHJcbiAgICAgICAgICAgIGJnY29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxyXG4gICAgICAgICAgICBtdDogMixcclxuICAgICAgICAgICAgbWw6IC0yLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7W1wiQ29sb3JzXCIsIFwiQW5pbWFsIHNvdW5kc1wiLCBcIk11c2ljIGluc3RydW1lbnRzXCIsIFwiUmFuZG9tXCJdLm1hcChcclxuICAgICAgICAgICAgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbGFiZWxJZCA9IGBjaGVja2JveC1saXN0LXNlY29uZGFyeS1sYWJlbC0ke3ZhbHVlfWA7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb249e1xyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWQuaW5kZXhPZih2YWx1ZSkgIT09IC0xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbElkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlUGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtcjogMiwgd2lkdGg6IDU2LCBoZWlnaHQ6IDU2IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9zdGF0aWMvaW1hZ2VzLyR7dmFsdWV9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpZD17bGFiZWxJZH0gcHJpbWFyeT17YCR7dmFsdWV9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0xpc3Q+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGVuZEljb249ezxQbGF5QXJyb3dJY29uIC8+fVxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgc3g9e3sgbXQ6IDQgfX1cclxuICAgICAgICAgIGhyZWY9XCIvbW9kZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ29udGludWVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBzdGFydEljb249ezxBcnJvd0JhY2tJY29uIC8+fVxyXG4gICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgc3g9e3sgbXQ6IDIgfX1cclxuICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBCYWNrXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBCYXIiLCJBdmF0YXIiLCJCdXR0b24iLCJDaGVja2JveCIsIkJveCIsIkNvbnRhaW5lciIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1UZXh0IiwiTGlzdEl0ZW1BdmF0YXIiLCJTZXR0aW5nc0ljb24iLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkFycm93QmFja0ljb24iLCJQbGF5QXJyb3dJY29uIiwiQ2hlY2tib3hMaXN0U2Vjb25kYXJ5IiwidXNlU3RhdGUiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImhhbmRsZVRvZ2dsZSIsInZhbHVlIiwiY3VycmVudEluZGV4IiwiaW5kZXhPZiIsIm5ld0NoZWNrZWQiLCJwdXNoIiwic3BsaWNlIiwiZmxleEdyb3ciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtdCIsIm1iIiwiYmdjb2xvciIsIndpZHRoIiwibWF4V2lkdGgiLCJtbCIsIm1hcCIsImxhYmVsSWQiLCJtciIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=
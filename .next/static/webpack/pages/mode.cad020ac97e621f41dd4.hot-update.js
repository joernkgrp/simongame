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
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/index.js");
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Checkbox */ "./node_modules/@mui/material/Checkbox/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/index.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/ListItem/index.js");
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/ListItemButton */ "./node_modules/@mui/material/ListItemButton/index.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/ListItemText/index.js");
/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ "./node_modules/@mui/material/ListItemAvatar/index.js");
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Settings */ "./node_modules/@mui/icons-material/Settings.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
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
          lineNumber: 35,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__.default, {
        sx: {
          mt: 10,
          bgcolor: "secondary.main"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {
        component: "h1",
        variant: "h5",
        children: "A few more things"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_10__.default, {
        dense: true,
        sx: {
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          mt: 10,
          ml: -2
        },
        children: ["Colors", "Animal sounds", "Music instruments", "Random"].map(function (value) {
          var labelId = "checkbox-list-secondary-label-".concat(value);
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11__.default, {
            secondaryAction: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_12__.default, {
              edge: "end",
              onChange: handleToggle(value),
              checked: checked.indexOf(value) !== -1,
              inputProps: {
                "aria-labelledby": labelId
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 19
            }, _this),
            disablePadding: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_13__.default, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_14__.default, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__.default, {
                  sx: {
                    mr: 2,
                    width: 56,
                    height: 56
                  },
                  src: "/static/images/".concat(value, ".jpg")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_15__.default, {
                id: labelId,
                primary: "".concat(value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, _this)
          }, value, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW9kZS5jYWQwMjBhYzk3ZTYyMWY0MWRkNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU2EscUJBQVQsR0FBaUM7QUFBQTs7QUFBQTs7QUFDOUMsd0JBQThCYiwyQ0FBQSxDQUFlLENBQUMsQ0FBRCxDQUFmLENBQTlCO0FBQUE7QUFBQSxNQUFPZSxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxXQUFXLFlBQU07QUFDcEMsVUFBTUMsWUFBWSxHQUFHSixPQUFPLENBQUNLLE9BQVIsQ0FBZ0JGLEtBQWhCLENBQXJCOztBQUNBLFVBQU1HLFVBQVUsR0FBRyxtSkFBSU4sT0FBUCxDQUFoQjs7QUFFQSxVQUFJSSxZQUFZLEtBQUssQ0FBQyxDQUF0QixFQUF5QjtBQUN2QkUsUUFBQUEsVUFBVSxDQUFDQyxJQUFYLENBQWdCSixLQUFoQjtBQUNELE9BRkQsTUFFTztBQUNMRyxRQUFBQSxVQUFVLENBQUNFLE1BQVgsQ0FBa0JKLFlBQWxCLEVBQWdDLENBQWhDO0FBQ0Q7O0FBRURILE1BQUFBLFVBQVUsQ0FBQ0ssVUFBRCxDQUFWO0FBQ0QsS0FYb0I7QUFBQSxHQUFyQjs7QUFhQSxzQkFDRSw4REFBQyw0REFBRDtBQUFXLGFBQVMsRUFBQyxNQUFyQjtBQUE0QixZQUFRLEVBQUMsSUFBckM7QUFBQSw0QkFDRSw4REFBQyx5REFBRDtBQUFRLGNBQVEsRUFBQyxPQUFqQjtBQUFBLDZCQUNFLDhEQUFDLDBEQUFEO0FBQUEsK0JBQ0UsOERBQUMsNkRBQUQ7QUFBWSxpQkFBTyxFQUFDLElBQXBCO0FBQXlCLG1CQUFTLEVBQUMsS0FBbkM7QUFBeUMsWUFBRSxFQUFFO0FBQUVHLFlBQUFBLFFBQVEsRUFBRTtBQUFaLFdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVNFLDhEQUFDLEdBQUQ7QUFDRSxRQUFFLEVBQUU7QUFDRkMsUUFBQUEsT0FBTyxFQUFFLE1BRFA7QUFFRkMsUUFBQUEsYUFBYSxFQUFFLFFBRmI7QUFHRkMsUUFBQUEsVUFBVSxFQUFFO0FBSFYsT0FETjtBQUFBLDhCQU9FLDhEQUFDLHlEQUFEO0FBQVEsVUFBRSxFQUFFO0FBQUVDLFVBQUFBLEVBQUUsRUFBRSxFQUFOO0FBQVVDLFVBQUFBLE9BQU8sRUFBRTtBQUFuQixTQUFaO0FBQUEsK0JBQ0UsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVVFLDhEQUFDLDZEQUFEO0FBQVksaUJBQVMsRUFBQyxJQUF0QjtBQUEyQixlQUFPLEVBQUMsSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQWNBLDhEQUFDLHdEQUFEO0FBQ0UsYUFBSyxNQURQO0FBRUUsVUFBRSxFQUFFO0FBQ0ZDLFVBQUFBLEtBQUssRUFBRSxNQURMO0FBRUZDLFVBQUFBLFFBQVEsRUFBRSxHQUZSO0FBR0ZGLFVBQUFBLE9BQU8sRUFBRSxrQkFIUDtBQUlGRCxVQUFBQSxFQUFFLEVBQUUsRUFKRjtBQUtGSSxVQUFBQSxFQUFFLEVBQUUsQ0FBQztBQUxILFNBRk47QUFBQSxrQkFVRyxDQUFDLFFBQUQsRUFBVyxlQUFYLEVBQTRCLG1CQUE1QixFQUFpRCxRQUFqRCxFQUEyREMsR0FBM0QsQ0FDQyxVQUFDZixLQUFELEVBQVc7QUFDVCxjQUFNZ0IsT0FBTywyQ0FBb0NoQixLQUFwQyxDQUFiO0FBQ0EsOEJBQ0UsOERBQUMsNERBQUQ7QUFFRSwyQkFBZSxlQUNiLDhEQUFDLDREQUFEO0FBQ0Usa0JBQUksRUFBQyxLQURQO0FBRUUsc0JBQVEsRUFBRUQsWUFBWSxDQUFDQyxLQUFELENBRnhCO0FBR0UscUJBQU8sRUFBRUgsT0FBTyxDQUFDSyxPQUFSLENBQWdCRixLQUFoQixNQUEyQixDQUFDLENBSHZDO0FBSUUsd0JBQVUsRUFBRTtBQUFFLG1DQUFtQmdCO0FBQXJCO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISjtBQVVFLDBCQUFjLE1BVmhCO0FBQUEsbUNBWUUsOERBQUMsa0VBQUQ7QUFBQSxzQ0FDRSw4REFBQyxrRUFBRDtBQUFBLHVDQUNFLDhEQUFDLHlEQUFEO0FBQ0Usb0JBQUUsRUFBRTtBQUFFQyxvQkFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0wsb0JBQUFBLEtBQUssRUFBRSxFQUFoQjtBQUFvQk0sb0JBQUFBLE1BQU0sRUFBRTtBQUE1QixtQkFETjtBQUVFLHFCQUFHLDJCQUFvQmxCLEtBQXBCO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFPRSw4REFBQyxnRUFBRDtBQUFjLGtCQUFFLEVBQUVnQixPQUFsQjtBQUEyQix1QkFBTyxZQUFLaEIsS0FBTDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpGLGFBQ09BLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQXdCRCxTQTNCRjtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1FRDs7R0FuRnVCTDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0NoZWNrYm94XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbUJ1dHRvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1BdmF0YXJcIjtcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrYm94TGlzdFNlY29uZGFyeSgpIHtcclxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSBSZWFjdC51c2VTdGF0ZShbMV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAodmFsdWUpID0+ICgpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGNoZWNrZWQuaW5kZXhPZih2YWx1ZSk7XHJcbiAgICBjb25zdCBuZXdDaGVja2VkID0gWy4uLmNoZWNrZWRdO1xyXG5cclxuICAgIGlmIChjdXJyZW50SW5kZXggPT09IC0xKSB7XHJcbiAgICAgIG5ld0NoZWNrZWQucHVzaCh2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdDaGVja2VkLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENoZWNrZWQobmV3Q2hlY2tlZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwic21cIj5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCI+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgICAgICAgU2Vuc29cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8QXZhdGFyIHN4PXt7IG10OiAxMCwgYmdjb2xvcjogXCJzZWNvbmRhcnkubWFpblwiIH19PlxyXG4gICAgICAgICAgPFNldHRpbmdzSWNvbiAvPlxyXG4gICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICBBIGZldyBtb3JlIHRoaW5nc1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgIDxMaXN0XHJcbiAgICAgICAgZGVuc2VcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgbWF4V2lkdGg6IDM2MCxcclxuICAgICAgICAgIGJnY29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxyXG4gICAgICAgICAgbXQ6IDEwLFxyXG4gICAgICAgICAgbWw6IC0yLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7W1wiQ29sb3JzXCIsIFwiQW5pbWFsIHNvdW5kc1wiLCBcIk11c2ljIGluc3RydW1lbnRzXCIsIFwiUmFuZG9tXCJdLm1hcChcclxuICAgICAgICAgICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbElkID0gYGNoZWNrYm94LWxpc3Qtc2Vjb25kYXJ5LWxhYmVsLSR7dmFsdWV9YDtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgIGtleT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb249e1xyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkLmluZGV4T2YodmFsdWUpICE9PSAtMX1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGxhYmVsSWQgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVQYWRkaW5nXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbXI6IDIsIHdpZHRoOiA1NiwgaGVpZ2h0OiA1NiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL3N0YXRpYy9pbWFnZXMvJHt2YWx1ZX0uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IGlkPXtsYWJlbElkfSBwcmltYXJ5PXtgJHt2YWx1ZX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcEJhciIsIkF2YXRhciIsIkNoZWNrYm94IiwiQ29udGFpbmVyIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbVRleHQiLCJMaXN0SXRlbUF2YXRhciIsIlNldHRpbmdzSWNvbiIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiQ2hlY2tib3hMaXN0U2Vjb25kYXJ5IiwidXNlU3RhdGUiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImhhbmRsZVRvZ2dsZSIsInZhbHVlIiwiY3VycmVudEluZGV4IiwiaW5kZXhPZiIsIm5ld0NoZWNrZWQiLCJwdXNoIiwic3BsaWNlIiwiZmxleEdyb3ciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtdCIsImJnY29sb3IiLCJ3aWR0aCIsIm1heFdpZHRoIiwibWwiLCJtYXAiLCJsYWJlbElkIiwibXIiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9
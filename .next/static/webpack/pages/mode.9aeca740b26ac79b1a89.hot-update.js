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
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Checkbox */ "./node_modules/@mui/material/Checkbox/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/index.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/ListItem/index.js");
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/ListItemButton */ "./node_modules/@mui/material/ListItemButton/index.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/ListItemText/index.js");
/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ "./node_modules/@mui/material/ListItemAvatar/index.js");
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
          lineNumber: 34,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__.default, {
      sx: {
        mt: 10,
        bgcolor: "secondary.main"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SettingsIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {
      component: "h1",
      variant: "h5",
      children: "A few more things"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_9__.default, {
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
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__.default, {
          secondaryAction: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_11__.default, {
            edge: "end",
            onChange: handleToggle(value),
            checked: checked.indexOf(value) !== -1,
            inputProps: {
              "aria-labelledby": labelId
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 19
          }, _this),
          disablePadding: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12__.default, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_13__.default, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__.default, {
                sx: {
                  mr: 2,
                  width: 56,
                  height: 56
                },
                src: "/static/images/".concat(value, ".jpg")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_14__.default, {
              id: labelId,
              primary: "".concat(value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }, _this)
        }, value, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW9kZS45YWVjYTc0MGIyNmFjNzliMWE4OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU1kscUJBQVQsR0FBaUM7QUFBQTs7QUFBQTs7QUFDOUMsd0JBQThCWiwyQ0FBQSxDQUFlLENBQUMsQ0FBRCxDQUFmLENBQTlCO0FBQUE7QUFBQSxNQUFPYyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxXQUFXLFlBQU07QUFDcEMsVUFBTUMsWUFBWSxHQUFHSixPQUFPLENBQUNLLE9BQVIsQ0FBZ0JGLEtBQWhCLENBQXJCOztBQUNBLFVBQU1HLFVBQVUsR0FBRyxtSkFBSU4sT0FBUCxDQUFoQjs7QUFFQSxVQUFJSSxZQUFZLEtBQUssQ0FBQyxDQUF0QixFQUF5QjtBQUN2QkUsUUFBQUEsVUFBVSxDQUFDQyxJQUFYLENBQWdCSixLQUFoQjtBQUNELE9BRkQsTUFFTztBQUNMRyxRQUFBQSxVQUFVLENBQUNFLE1BQVgsQ0FBa0JKLFlBQWxCLEVBQWdDLENBQWhDO0FBQ0Q7O0FBRURILE1BQUFBLFVBQVUsQ0FBQ0ssVUFBRCxDQUFWO0FBQ0QsS0FYb0I7QUFBQSxHQUFyQjs7QUFhQSxzQkFDRSw4REFBQyw0REFBRDtBQUFXLGFBQVMsRUFBQyxNQUFyQjtBQUE0QixZQUFRLEVBQUMsSUFBckM7QUFBQSw0QkFDRSw4REFBQyx5REFBRDtBQUFRLGNBQVEsRUFBQyxPQUFqQjtBQUFBLDZCQUNFLDhEQUFDLDBEQUFEO0FBQUEsK0JBQ0UsOERBQUMsNkRBQUQ7QUFBWSxpQkFBTyxFQUFDLElBQXBCO0FBQXlCLG1CQUFTLEVBQUMsS0FBbkM7QUFBeUMsWUFBRSxFQUFFO0FBQUVHLFlBQUFBLFFBQVEsRUFBRTtBQUFaLFdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVNFLDhEQUFDLHlEQUFEO0FBQVEsUUFBRSxFQUFFO0FBQUVDLFFBQUFBLEVBQUUsRUFBRSxFQUFOO0FBQVVDLFFBQUFBLE9BQU8sRUFBRTtBQUFuQixPQUFaO0FBQUEsNkJBQ0ksOERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBWUksOERBQUMsNkRBQUQ7QUFBWSxlQUFTLEVBQUMsSUFBdEI7QUFBMkIsYUFBTyxFQUFDLElBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkosZUFnQkUsOERBQUMsdURBQUQ7QUFDRSxXQUFLLE1BRFA7QUFFRSxRQUFFLEVBQUU7QUFDRkMsUUFBQUEsS0FBSyxFQUFFLE1BREw7QUFFRkMsUUFBQUEsUUFBUSxFQUFFLEdBRlI7QUFHRkYsUUFBQUEsT0FBTyxFQUFFLGtCQUhQO0FBSUZELFFBQUFBLEVBQUUsRUFBRSxFQUpGO0FBS0ZJLFFBQUFBLEVBQUUsRUFBRSxDQUFDO0FBTEgsT0FGTjtBQUFBLGdCQVVHLENBQUMsUUFBRCxFQUFXLGVBQVgsRUFBNEIsbUJBQTVCLEVBQWlELFFBQWpELEVBQTJEQyxHQUEzRCxDQUNDLFVBQUNaLEtBQUQsRUFBVztBQUNULFlBQU1hLE9BQU8sMkNBQW9DYixLQUFwQyxDQUFiO0FBQ0EsNEJBQ0UsOERBQUMsNERBQUQ7QUFFRSx5QkFBZSxlQUNiLDhEQUFDLDREQUFEO0FBQ0UsZ0JBQUksRUFBQyxLQURQO0FBRUUsb0JBQVEsRUFBRUQsWUFBWSxDQUFDQyxLQUFELENBRnhCO0FBR0UsbUJBQU8sRUFBRUgsT0FBTyxDQUFDSyxPQUFSLENBQWdCRixLQUFoQixNQUEyQixDQUFDLENBSHZDO0FBSUUsc0JBQVUsRUFBRTtBQUFFLGlDQUFtQmE7QUFBckI7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBVUUsd0JBQWMsTUFWaEI7QUFBQSxpQ0FZRSw4REFBQyxrRUFBRDtBQUFBLG9DQUNFLDhEQUFDLGtFQUFEO0FBQUEscUNBQ0UsOERBQUMseURBQUQ7QUFDRSxrQkFBRSxFQUFFO0FBQUVDLGtCQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTTCxrQkFBQUEsS0FBSyxFQUFFLEVBQWhCO0FBQW9CTSxrQkFBQUEsTUFBTSxFQUFFO0FBQTVCLGlCQUROO0FBRUUsbUJBQUcsMkJBQW9CZixLQUFwQjtBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBT0UsOERBQUMsZ0VBQUQ7QUFBYyxnQkFBRSxFQUFFYSxPQUFsQjtBQUEyQixxQkFBTyxZQUFLYixLQUFMO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkYsV0FDT0EsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBd0JELE9BM0JGO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJERDs7R0EzRXVCTDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0NoZWNrYm94XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbUJ1dHRvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1BdmF0YXJcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja2JveExpc3RTZWNvbmRhcnkoKSB7XHJcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gUmVhY3QudXNlU3RhdGUoWzFdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKHZhbHVlKSA9PiAoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBjaGVja2VkLmluZGV4T2YodmFsdWUpO1xyXG4gICAgY29uc3QgbmV3Q2hlY2tlZCA9IFsuLi5jaGVja2VkXTtcclxuXHJcbiAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xyXG4gICAgICBuZXdDaGVja2VkLnB1c2godmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3Q2hlY2tlZC5zcGxpY2UoY3VycmVudEluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDaGVja2VkKG5ld0NoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgIFNlbnNvXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuXHJcbiAgICAgIDxBdmF0YXIgc3g9e3sgbXQ6IDEwLCBiZ2NvbG9yOiBcInNlY29uZGFyeS5tYWluXCIgfX0+XHJcbiAgICAgICAgICA8U2V0dGluZ3NJY29uIC8+XHJcbiAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cclxuICAgICAgICAgIEEgZmV3IG1vcmUgdGhpbmdzXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgPExpc3RcclxuICAgICAgICBkZW5zZVxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBtYXhXaWR0aDogMzYwLFxyXG4gICAgICAgICAgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXHJcbiAgICAgICAgICBtdDogMTAsXHJcbiAgICAgICAgICBtbDogLTIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtbXCJDb2xvcnNcIiwgXCJBbmltYWwgc291bmRzXCIsIFwiTXVzaWMgaW5zdHJ1bWVudHNcIiwgXCJSYW5kb21cIl0ubWFwKFxyXG4gICAgICAgICAgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSWQgPSBgY2hlY2tib3gtbGlzdC1zZWNvbmRhcnktbGFiZWwtJHt2YWx1ZX1gO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAga2V5PXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIHNlY29uZGFyeUFjdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGUodmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWQuaW5kZXhPZih2YWx1ZSkgIT09IC0xfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgXCJhcmlhLWxhYmVsbGVkYnlcIjogbGFiZWxJZCB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZVBhZGRpbmdcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtcjogMiwgd2lkdGg6IDU2LCBoZWlnaHQ6IDU2IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Avc3RhdGljL2ltYWdlcy8ke3ZhbHVlfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgaWQ9e2xhYmVsSWR9IHByaW1hcnk9e2Ake3ZhbHVlfWB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBCYXIiLCJBdmF0YXIiLCJDaGVja2JveCIsIkNvbnRhaW5lciIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1UZXh0IiwiTGlzdEl0ZW1BdmF0YXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkNoZWNrYm94TGlzdFNlY29uZGFyeSIsInVzZVN0YXRlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJoYW5kbGVUb2dnbGUiLCJ2YWx1ZSIsImN1cnJlbnRJbmRleCIsImluZGV4T2YiLCJuZXdDaGVja2VkIiwicHVzaCIsInNwbGljZSIsImZsZXhHcm93IiwibXQiLCJiZ2NvbG9yIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1sIiwibWFwIiwibGFiZWxJZCIsIm1yIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==
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
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/index.js");
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Checkbox */ "./node_modules/@mui/material/Checkbox/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/index.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/ListItem/index.js");
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItemButton */ "./node_modules/@mui/material/ListItemButton/index.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/ListItemText/index.js");
/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ "./node_modules/@mui/material/ListItemAvatar/index.js");
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_8__.default, {
      dense: true,
      sx: {
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        mt: 10
      },
      children: ["Colors", "Animal sounds", "Music instruments", "Random"].map(function (value) {
        var labelId = "checkbox-list-secondary-label-".concat(value);
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9__.default, {
          secondaryAction: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__.default, {
            edge: "end",
            onChange: handleToggle(value),
            checked: checked.indexOf(value) !== -1,
            inputProps: {
              "aria-labelledby": labelId
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 19
          }, _this),
          disablePadding: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_11__.default, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_12__.default, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_13__.default, {
                sx: {
                  mr: 1,
                  width: 56,
                  height: 56
                },
                src: "/static/images/".concat(value, ".jpg")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_14__.default, {
              id: labelId,
              primary: "".concat(value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 17
          }, _this)
        }, value, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW9kZS4yZmRiMWEzZWE4MjRkZjMyYzNkOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU1kscUJBQVQsR0FBaUM7QUFBQTs7QUFBQTs7QUFDOUMsd0JBQThCWiwyQ0FBQSxDQUFlLENBQUMsQ0FBRCxDQUFmLENBQTlCO0FBQUE7QUFBQSxNQUFPYyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxXQUFXLFlBQU07QUFDcEMsVUFBTUMsWUFBWSxHQUFHSixPQUFPLENBQUNLLE9BQVIsQ0FBZ0JGLEtBQWhCLENBQXJCOztBQUNBLFVBQU1HLFVBQVUsR0FBRyxtSkFBSU4sT0FBUCxDQUFoQjs7QUFFQSxVQUFJSSxZQUFZLEtBQUssQ0FBQyxDQUF0QixFQUF5QjtBQUN2QkUsUUFBQUEsVUFBVSxDQUFDQyxJQUFYLENBQWdCSixLQUFoQjtBQUNELE9BRkQsTUFFTztBQUNMRyxRQUFBQSxVQUFVLENBQUNFLE1BQVgsQ0FBa0JKLFlBQWxCLEVBQWdDLENBQWhDO0FBQ0Q7O0FBRURILE1BQUFBLFVBQVUsQ0FBQ0ssVUFBRCxDQUFWO0FBQ0QsS0FYb0I7QUFBQSxHQUFyQjs7QUFhQSxzQkFDRSw4REFBQyw0REFBRDtBQUFXLGFBQVMsRUFBQyxNQUFyQjtBQUE0QixZQUFRLEVBQUMsSUFBckM7QUFBQSw0QkFDRSw4REFBQyx5REFBRDtBQUFRLGNBQVEsRUFBQyxPQUFqQjtBQUFBLDZCQUNFLDhEQUFDLDBEQUFEO0FBQUEsK0JBQ0UsOERBQUMsNkRBQUQ7QUFBWSxpQkFBTyxFQUFDLElBQXBCO0FBQXlCLG1CQUFTLEVBQUMsS0FBbkM7QUFBeUMsWUFBRSxFQUFFO0FBQUVHLFlBQUFBLFFBQVEsRUFBRTtBQUFaLFdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVNFLDhEQUFDLHVEQUFEO0FBQ0UsV0FBSyxNQURQO0FBRUUsUUFBRSxFQUFFO0FBQ0ZDLFFBQUFBLEtBQUssRUFBRSxNQURMO0FBRUZDLFFBQUFBLFFBQVEsRUFBRSxHQUZSO0FBR0ZDLFFBQUFBLE9BQU8sRUFBRSxrQkFIUDtBQUlGQyxRQUFBQSxFQUFFLEVBQUU7QUFKRixPQUZOO0FBQUEsZ0JBU0csQ0FBQyxRQUFELEVBQVcsZUFBWCxFQUE0QixtQkFBNUIsRUFBaUQsUUFBakQsRUFBMkRDLEdBQTNELENBQ0MsVUFBQ1gsS0FBRCxFQUFXO0FBQ1QsWUFBTVksT0FBTywyQ0FBb0NaLEtBQXBDLENBQWI7QUFDQSw0QkFDRSw4REFBQywyREFBRDtBQUVFLHlCQUFlLGVBQ2IsOERBQUMsNERBQUQ7QUFDRSxnQkFBSSxFQUFDLEtBRFA7QUFFRSxvQkFBUSxFQUFFRCxZQUFZLENBQUNDLEtBQUQsQ0FGeEI7QUFHRSxtQkFBTyxFQUFFSCxPQUFPLENBQUNLLE9BQVIsQ0FBZ0JGLEtBQWhCLE1BQTJCLENBQUMsQ0FIdkM7QUFJRSxzQkFBVSxFQUFFO0FBQUUsaUNBQW1CWTtBQUFyQjtBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEo7QUFVRSx3QkFBYyxNQVZoQjtBQUFBLGlDQVlFLDhEQUFDLGtFQUFEO0FBQUEsb0NBQ0UsOERBQUMsa0VBQUQ7QUFBQSxxQ0FDRSw4REFBQywwREFBRDtBQUNFLGtCQUFFLEVBQUU7QUFBRUMsa0JBQUFBLEVBQUUsRUFBQyxDQUFMO0FBQU9OLGtCQUFBQSxLQUFLLEVBQUUsRUFBZDtBQUFrQk8sa0JBQUFBLE1BQU0sRUFBRTtBQUExQixpQkFETjtBQUVFLG1CQUFHLDJCQUFvQmQsS0FBcEI7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU9FLDhEQUFDLGdFQUFEO0FBQWMsZ0JBQUUsRUFBRVksT0FBbEI7QUFBMkIscUJBQU8sWUFBS1osS0FBTDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpGLFdBQ09BLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQXdCRCxPQTNCRjtBQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1ERDs7R0FuRXVCTDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0NoZWNrYm94XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbUJ1dHRvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1BdmF0YXJcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja2JveExpc3RTZWNvbmRhcnkoKSB7XHJcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gUmVhY3QudXNlU3RhdGUoWzFdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKHZhbHVlKSA9PiAoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBjaGVja2VkLmluZGV4T2YodmFsdWUpO1xyXG4gICAgY29uc3QgbmV3Q2hlY2tlZCA9IFsuLi5jaGVja2VkXTtcclxuXHJcbiAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xyXG4gICAgICBuZXdDaGVja2VkLnB1c2godmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3Q2hlY2tlZC5zcGxpY2UoY3VycmVudEluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDaGVja2VkKG5ld0NoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgIFNlbnNvXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuXHJcbiAgICAgIDxMaXN0XHJcbiAgICAgICAgZGVuc2VcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgbWF4V2lkdGg6IDM2MCxcclxuICAgICAgICAgIGJnY29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxyXG4gICAgICAgICAgbXQ6IDEwLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7W1wiQ29sb3JzXCIsIFwiQW5pbWFsIHNvdW5kc1wiLCBcIk11c2ljIGluc3RydW1lbnRzXCIsIFwiUmFuZG9tXCJdLm1hcChcclxuICAgICAgICAgICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbElkID0gYGNoZWNrYm94LWxpc3Qtc2Vjb25kYXJ5LWxhYmVsLSR7dmFsdWV9YDtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgIGtleT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb249e1xyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkLmluZGV4T2YodmFsdWUpICE9PSAtMX1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGxhYmVsSWQgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVQYWRkaW5nXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbXI6MSx3aWR0aDogNTYsIGhlaWdodDogNTYgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9zdGF0aWMvaW1hZ2VzLyR7dmFsdWV9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpZD17bGFiZWxJZH0gcHJpbWFyeT17YCR7dmFsdWV9YH0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcEJhciIsIkF2YXRhciIsIkNoZWNrYm94IiwiQ29udGFpbmVyIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbVRleHQiLCJMaXN0SXRlbUF2YXRhciIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiQ2hlY2tib3hMaXN0U2Vjb25kYXJ5IiwidXNlU3RhdGUiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImhhbmRsZVRvZ2dsZSIsInZhbHVlIiwiY3VycmVudEluZGV4IiwiaW5kZXhPZiIsIm5ld0NoZWNrZWQiLCJwdXNoIiwic3BsaWNlIiwiZmxleEdyb3ciLCJ3aWR0aCIsIm1heFdpZHRoIiwiYmdjb2xvciIsIm10IiwibWFwIiwibGFiZWxJZCIsIm1yIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==
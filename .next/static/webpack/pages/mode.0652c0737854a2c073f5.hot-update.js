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
          lineNumber: 36,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
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
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {
        component: "h1",
        variant: "h5",
        children: "Please select a mode"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_11__.default, {
        dense: true,
        sx: {
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          mt: 4,
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
              lineNumber: 73,
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
                  lineNumber: 84,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16__.default, {
                id: labelId,
                primary: "".concat(value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 19
            }, _this)
          }, value, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW9kZS4wNjUyYzA3Mzc4NTRhMmMwNzNmNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU2MscUJBQVQsR0FBaUM7QUFBQTs7QUFBQTs7QUFDOUMsd0JBQThCZCwyQ0FBQSxDQUFlLENBQUMsQ0FBRCxDQUFmLENBQTlCO0FBQUE7QUFBQSxNQUFPZ0IsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFEO0FBQUEsV0FBVyxZQUFNO0FBQ3BDLFVBQU1DLFlBQVksR0FBR0osT0FBTyxDQUFDSyxPQUFSLENBQWdCRixLQUFoQixDQUFyQjs7QUFDQSxVQUFNRyxVQUFVLEdBQUcsbUpBQUlOLE9BQVAsQ0FBaEI7O0FBRUEsVUFBSUksWUFBWSxLQUFLLENBQUMsQ0FBdEIsRUFBeUI7QUFDdkJFLFFBQUFBLFVBQVUsQ0FBQ0MsSUFBWCxDQUFnQkosS0FBaEI7QUFDRCxPQUZELE1BRU87QUFDTEcsUUFBQUEsVUFBVSxDQUFDRSxNQUFYLENBQWtCSixZQUFsQixFQUFnQyxDQUFoQztBQUNEOztBQUVESCxNQUFBQSxVQUFVLENBQUNLLFVBQUQsQ0FBVjtBQUNELEtBWG9CO0FBQUEsR0FBckI7O0FBYUEsc0JBQ0UsOERBQUMsNERBQUQ7QUFBVyxhQUFTLEVBQUMsTUFBckI7QUFBNEIsWUFBUSxFQUFDLElBQXJDO0FBQUEsNEJBQ0UsOERBQUMseURBQUQ7QUFBUSxjQUFRLEVBQUMsT0FBakI7QUFBQSw2QkFDRSw4REFBQywwREFBRDtBQUFBLCtCQUNFLDhEQUFDLDZEQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUF5QixtQkFBUyxFQUFDLEtBQW5DO0FBQXlDLFlBQUUsRUFBRTtBQUFFRyxZQUFBQSxRQUFRLEVBQUU7QUFBWixXQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFTRSw4REFBQyxzREFBRDtBQUNFLFFBQUUsRUFBRTtBQUNGQyxRQUFBQSxPQUFPLEVBQUUsTUFEUDtBQUVGQyxRQUFBQSxhQUFhLEVBQUUsUUFGYjtBQUdGQyxRQUFBQSxVQUFVLEVBQUU7QUFIVixPQUROO0FBQUEsOEJBT0UsOERBQUMseURBQUQ7QUFBUSxVQUFFLEVBQUU7QUFBR0MsVUFBQUEsRUFBRSxFQUFFLEVBQVA7QUFBV0MsVUFBQUEsRUFBRSxFQUFFLENBQWY7QUFBbUJDLFVBQUFBLE9BQU8sRUFBRTtBQUE1QixTQUFaO0FBQUEsK0JBQ0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVVFLDhEQUFDLDZEQUFEO0FBQVksaUJBQVMsRUFBQyxJQUF0QjtBQUEyQixlQUFPLEVBQUMsSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQWNFLDhEQUFDLHdEQUFEO0FBQ0UsYUFBSyxNQURQO0FBRUUsVUFBRSxFQUFFO0FBQ0ZDLFVBQUFBLEtBQUssRUFBRSxNQURMO0FBRUZDLFVBQUFBLFFBQVEsRUFBRSxHQUZSO0FBR0ZGLFVBQUFBLE9BQU8sRUFBRSxrQkFIUDtBQUlGRixVQUFBQSxFQUFFLEVBQUUsQ0FKRjtBQUtGSyxVQUFBQSxFQUFFLEVBQUUsQ0FBQztBQUxILFNBRk47QUFBQSxrQkFVRyxDQUFDLFFBQUQsRUFBVyxlQUFYLEVBQTRCLG1CQUE1QixFQUFpRCxRQUFqRCxFQUEyREMsR0FBM0QsQ0FDQyxVQUFDaEIsS0FBRCxFQUFXO0FBQ1QsY0FBTWlCLE9BQU8sMkNBQW9DakIsS0FBcEMsQ0FBYjtBQUNBLDhCQUNFLDhEQUFDLDREQUFEO0FBRUUsMkJBQWUsZUFDYiw4REFBQyw0REFBRDtBQUNFLGtCQUFJLEVBQUMsS0FEUDtBQUVFLHNCQUFRLEVBQUVELFlBQVksQ0FBQ0MsS0FBRCxDQUZ4QjtBQUdFLHFCQUFPLEVBQUVILE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkYsS0FBaEIsTUFBMkIsQ0FBQyxDQUh2QztBQUlFLHdCQUFVLEVBQUU7QUFBRSxtQ0FBbUJpQjtBQUFyQjtBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEo7QUFVRSwwQkFBYyxNQVZoQjtBQUFBLG1DQVlFLDhEQUFDLGtFQUFEO0FBQUEsc0NBQ0UsOERBQUMsa0VBQUQ7QUFBQSx1Q0FDRSw4REFBQyx5REFBRDtBQUNFLG9CQUFFLEVBQUU7QUFBRUMsb0JBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNMLG9CQUFBQSxLQUFLLEVBQUUsRUFBaEI7QUFBb0JNLG9CQUFBQSxNQUFNLEVBQUU7QUFBNUIsbUJBRE47QUFFRSxxQkFBRywyQkFBb0JuQixLQUFwQjtBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBT0UsOERBQUMsZ0VBQUQ7QUFBYyxrQkFBRSxFQUFFaUIsT0FBbEI7QUFBMkIsdUJBQU8sWUFBS2pCLEtBQUw7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRixhQUNPQSxLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUF3QkQsU0EzQkY7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtRUQ7O0dBbkZ1Qkw7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCI7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DaGVja2JveFwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1CdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1CdXR0b25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtQXZhdGFyXCI7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3NcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja2JveExpc3RTZWNvbmRhcnkoKSB7XHJcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gUmVhY3QudXNlU3RhdGUoWzFdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKHZhbHVlKSA9PiAoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBjaGVja2VkLmluZGV4T2YodmFsdWUpO1xyXG4gICAgY29uc3QgbmV3Q2hlY2tlZCA9IFsuLi5jaGVja2VkXTtcclxuXHJcbiAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xyXG4gICAgICBuZXdDaGVja2VkLnB1c2godmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3Q2hlY2tlZC5zcGxpY2UoY3VycmVudEluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDaGVja2VkKG5ld0NoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgIFNlbnNvXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuXHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEF2YXRhciBzeD17eyAgbXQ6IDEwLCBtYjogMSwgIGJnY29sb3I6IFwic2Vjb25kYXJ5Lm1haW5cIiB9fT5cclxuICAgICAgICAgIDxTZXR0aW5nc0ljb24gLz5cclxuICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgUGxlYXNlIHNlbGVjdCBhIG1vZGVcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgIDxMaXN0XHJcbiAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogMzYwLFxyXG4gICAgICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcclxuICAgICAgICAgICAgbXQ6IDQsXHJcbiAgICAgICAgICAgIG1sOiAtMixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1tcIkNvbG9yc1wiLCBcIkFuaW1hbCBzb3VuZHNcIiwgXCJNdXNpYyBpbnN0cnVtZW50c1wiLCBcIlJhbmRvbVwiXS5tYXAoXHJcbiAgICAgICAgICAgICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGxhYmVsSWQgPSBgY2hlY2tib3gtbGlzdC1zZWNvbmRhcnktbGFiZWwtJHt2YWx1ZX1gO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAga2V5PXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5QWN0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRvZ2dsZSh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkLmluZGV4T2YodmFsdWUpICE9PSAtMX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgXCJhcmlhLWxhYmVsbGVkYnlcIjogbGFiZWxJZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZVBhZGRpbmdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbXI6IDIsIHdpZHRoOiA1NiwgaGVpZ2h0OiA1NiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Avc3RhdGljL2ltYWdlcy8ke3ZhbHVlfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgaWQ9e2xhYmVsSWR9IHByaW1hcnk9e2Ake3ZhbHVlfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwQmFyIiwiQXZhdGFyIiwiQ2hlY2tib3giLCJCb3giLCJDb250YWluZXIiLCJMaXN0IiwiTGlzdEl0ZW0iLCJMaXN0SXRlbUJ1dHRvbiIsIkxpc3RJdGVtVGV4dCIsIkxpc3RJdGVtQXZhdGFyIiwiU2V0dGluZ3NJY29uIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJDaGVja2JveExpc3RTZWNvbmRhcnkiLCJ1c2VTdGF0ZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiaGFuZGxlVG9nZ2xlIiwidmFsdWUiLCJjdXJyZW50SW5kZXgiLCJpbmRleE9mIiwibmV3Q2hlY2tlZCIsInB1c2giLCJzcGxpY2UiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwibWIiLCJiZ2NvbG9yIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1sIiwibWFwIiwibGFiZWxJZCIsIm1yIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==
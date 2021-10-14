"use strict";
self["webpackHotUpdate_N_E"]("pages/game",{

/***/ "./pages/game.js":
/*!***********************!*\
  !*** ./pages/game.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RowAndColumnSpacing; }
/* harmony export */ });
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Dialog */ "./node_modules/@mui/material/Dialog/index.js");
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/DialogActions */ "./node_modules/@mui/material/DialogActions/index.js");
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/DialogContent */ "./node_modules/@mui/material/DialogContent/index.js");
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/DialogContentText */ "./node_modules/@mui/material/DialogContentText/index.js");
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/DialogTitle */ "./node_modules/@mui/material/DialogTitle/index.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Jkogerup\\Dev\\simongame\\pages\\game.js",
    _s = $RefreshSig$();















function RowAndColumnSpacing() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(true),
      _React$useState2 = (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleClickOpen = function handleClickOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__.default, {
    sx: {
      px: 0
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__.default, {
      position: "fixed",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {
          variant: "h6",
          component: "div",
          sx: {
            flexGrow: 1
          },
          children: "Senso"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__.default, {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__.default, {
        id: "alert-dialog-title",
        children: "How to start"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_10__.default, {
          id: "alert-dialog-description",
          children: "Remember the random tile lighting up and reproduce the order."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__.default, {
          onClick: handleClose,
          children: "Okay"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__.default, {
      sx: {
        width: "100%",
        mt: 8,
        p: 2
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__.default, {
        container: true,
        rowSpacing: 2,
        columnSpacing: 2,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__.default, {
          item: true,
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__.default, {
            sx: {
              width: "100%",
              height: 200,
              minWidth: 100,
              minheight: 100,
              borderRadius: 4,
              mx: "auto",
              bgcolor: "#d32f2f",
              "&:hover": {
                backgroundColor: "#9a0007",
                opacity: [1, 1, 1]
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__.default, {
          item: true,
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__.default, {
            sx: {
              width: "100%",
              height: 200,
              minWidth: 100,
              minheight: 100,
              borderRadius: 4,
              mx: "auto",
              bgcolor: "#1976d2",
              "&:hover": {
                backgroundColor: "#004ba0",
                opacity: [1, 1, 1]
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__.default, {
          item: true,
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__.default, {
            sx: {
              width: "100%",
              height: 200,
              minWidth: 100,
              minheight: 100,
              borderRadius: 4,
              mx: "auto",
              bgcolor: "#388e3c",
              "&:hover": {
                backgroundColor: "#00600f",
                opacity: [1, 1, 1]
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__.default, {
          item: true,
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__.default, {
            sx: {
              width: "100%",
              height: 200,
              minWidth: 100,
              minheight: 100,
              borderRadius: 4,
              mx: "auto",
              bgcolor: "#fbc02d",
              "&:hover": {
                backgroundColor: "#c49000",
                opacity: [1, 1, 1]
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(RowAndColumnSpacing, "dVkDIfRb5RN4FjtonjBYYwpg89o=");

_c = RowAndColumnSpacing;

var _c;

$RefreshReg$(_c, "RowAndColumnSpacing");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZS5mMWU2N2FjMmE5N2U4NjJjYjc5Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNhLG1CQUFULEdBQStCO0FBQUE7O0FBQzVDLHdCQUF3QmIsMkNBQUEsQ0FBZSxJQUFmLENBQXhCO0FBQUE7QUFBQSxNQUFPZSxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJELElBQUFBLE9BQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJGLElBQUFBLE9BQU8sQ0FBQyxLQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLHNCQUNFLDhEQUFDLDREQUFEO0FBQVcsTUFBRSxFQUFFO0FBQUVHLE1BQUFBLEVBQUUsRUFBRTtBQUFOLEtBQWY7QUFBQSw0QkFDRSw4REFBQyx5REFBRDtBQUFRLGNBQVEsRUFBQyxPQUFqQjtBQUFBLDZCQUNFLDhEQUFDLDBEQUFEO0FBQUEsK0JBQ0UsOERBQUMsNkRBQUQ7QUFBWSxpQkFBTyxFQUFDLElBQXBCO0FBQXlCLG1CQUFTLEVBQUMsS0FBbkM7QUFBeUMsWUFBRSxFQUFFO0FBQUVDLFlBQUFBLFFBQVEsRUFBRTtBQUFaLFdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVNFLDhEQUFDLHlEQUFEO0FBQ0UsVUFBSSxFQUFFTCxJQURSO0FBRUUsYUFBTyxFQUFFRyxXQUZYO0FBR0UseUJBQWdCLG9CQUhsQjtBQUlFLDBCQUFpQiwwQkFKbkI7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LENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUZBO0FBUlQ7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQ0YsZUFvREUsOERBQUMsd0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFBLGlDQUNFLDhEQUFDLHVEQUFEO0FBQ0UsY0FBRSxFQUFFO0FBQ0ZWLGNBQUFBLEtBQUssRUFBRSxNQURMO0FBRUZHLGNBQUFBLE1BQU0sRUFBRSxHQUZOO0FBR0ZDLGNBQUFBLFFBQVEsRUFBRSxHQUhSO0FBSUZDLGNBQUFBLFNBQVMsRUFBRSxHQUpUO0FBS0ZDLGNBQUFBLFlBQVksRUFBRSxDQUxaO0FBTUZDLGNBQUFBLEVBQUUsRUFBRSxNQU5GO0FBT0ZDLGNBQUFBLE9BQU8sRUFBRSxTQVBQO0FBUUYseUJBQVc7QUFDVEMsZ0JBQUFBLGVBQWUsRUFBRSxTQURSO0FBRVRDLGdCQUFBQSxPQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7QUFGQTtBQVJUO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxR0Q7O0dBaEh1QmxCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG11aS9tYXRlcmlhbC9EaWFsb2dcIjtcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG11aS9tYXRlcmlhbC9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG11aS9tYXRlcmlhbC9EaWFsb2dDb250ZW50VGV4dFwiO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm93QW5kQ29sdW1uU3BhY2luZygpIHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIHN4PXt7IHB4OiAwIH19PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIj5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICBTZW5zb1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcblxyXG4gICAgICA8RGlhbG9nXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJhbGVydC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJhbGVydC1kaWFsb2ctZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiYWxlcnQtZGlhbG9nLXRpdGxlXCI+e1wiSG93IHRvIHN0YXJ0XCJ9PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dCBpZD1cImFsZXJ0LWRpYWxvZy1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBSZW1lbWJlciB0aGUgcmFuZG9tIHRpbGUgbGlnaHRpbmcgdXAgYW5kIHJlcHJvZHVjZSB0aGUgb3JkZXIuXHJcbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9Pk9rYXk8L0J1dHRvbj5cclxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG5cclxuICAgICAgPEJveCBzeD17eyB3aWR0aDogXCIxMDAlXCIsIG10OiA4LCBwOiAyIH19PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciByb3dTcGFjaW5nPXsyfSBjb2x1bW5TcGFjaW5nPXsyfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwLFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgICAgbXg6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogXCIjZDMyZjJmXCIsXHJcbiAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzlhMDAwN1wiLFxyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMSwgMV0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBtaW5oZWlnaHQ6IDEwMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICAgIG14OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgIGJnY29sb3I6IFwiIzE5NzZkMlwiLFxyXG4gICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDRiYTBcIixcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogWzEsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTAwLFxyXG4gICAgICAgICAgICAgICAgbWluaGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICBiZ2NvbG9yOiBcIiMzODhlM2NcIixcclxuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDA2MDBmXCIsXHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFsxLCAxLCAxXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwLFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgIG1pbmhlaWdodDogMTAwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgICAgbXg6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogXCIjZmJjMDJkXCIsXHJcbiAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M0OTAwMFwiLFxyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMSwgMV0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwQmFyIiwiQm94IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJEaWFsb2ciLCJEaWFsb2dBY3Rpb25zIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0NvbnRlbnRUZXh0IiwiRGlhbG9nVGl0bGUiLCJHcmlkIiwiUm93QW5kQ29sdW1uU3BhY2luZyIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDbGlja09wZW4iLCJoYW5kbGVDbG9zZSIsInB4IiwiZmxleEdyb3ciLCJ3aWR0aCIsIm10IiwicCIsImhlaWdodCIsIm1pbldpZHRoIiwibWluaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwibXgiLCJiZ2NvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=
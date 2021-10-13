"use strict";
self["webpackHotUpdate_N_E"]("pages/form",{

/***/ "./pages/form.js":
/*!***********************!*\
  !*** ./pages/form.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Form; }
/* harmony export */ });
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/index.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/index.js");
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/FormHelperText */ "./node_modules/@mui/material/FormHelperText/index.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/index.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/index.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Settings */ "./node_modules/@mui/icons-material/Settings.js");
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material/ArrowForward */ "./node_modules/@mui/icons-material/ArrowForward.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Jkogerup\\Dev\\simongame\\pages\\form.js",
    _s = $RefreshSig$();



















function Form() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(3),
      _React$useState2 = (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      handicap = _React$useState2[0],
      setHandicap = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setHandicap(event.target.value);
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.currentTarget); // eslint-disable-next-line no-console

    console.log({
      email: data.get("email"),
      password: data.get("password")
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__.default, {
    component: "main",
    maxWidth: "sm",
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__.default, {
        sx: {
          mt: 10,
          mb: 1,
          bgcolor: "secondary.main"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {
        component: "h1",
        variant: "h5",
        children: "A few more things"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
        component: "form",
        onSubmit: handleSubmit,
        noValidate: true,
        sx: {
          mt: 2
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__.default, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11__.default, {
          sx: {
            mt: 3
          },
          fullWidth: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_12__.default, {
            id: "demo-simple-select-helper-label",
            children: "Your handicap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_13__.default, {
            value: handicap,
            label: "Your handicap",
            onChange: handleChange,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
              value: 0,
              children: "I can\u2019t see"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
              value: 1,
              children: "I can\u2019t hear"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
              value: 2,
              children: "I can neither see nor hear"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_15__.default, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11__.default, {
          sx: {
            mt: 4
          },
          fullWidth: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_12__.default, {
            id: "demo-simple-select-helper-label",
            children: "Your input type"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_13__.default, {
            value: handicap,
            label: "Your input type",
            onChange: handleChange,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
              value: 0,
              children: "Speak"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
              value: 1,
              children: "Touch or click"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
              value: 2,
              children: "Sense"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_15__.default, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
          endIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_17__.default, {}, void 0, false, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
          startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_18__.default, {}, void 0, false, {
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

_s(Form, "b3grn1Mw3T5Sud9uFrWl1tRpx+4=");

_c = Form;

var _c;

$RefreshReg$(_c, "Form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9ybS5mODIyZDkxZDI5Y2IxNDU5MjYwMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNpQixJQUFULEdBQWdCO0FBQUE7O0FBQzdCLHdCQUFnQ2pCLDJDQUFBLENBQWUsQ0FBZixDQUFoQztBQUFBO0FBQUEsTUFBT21CLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCRixJQUFBQSxXQUFXLENBQUNFLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNILEtBQUQsRUFBVztBQUM5QkEsSUFBQUEsS0FBSyxDQUFDSSxjQUFOO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLElBQUlDLFFBQUosQ0FBYU4sS0FBSyxDQUFDTyxhQUFuQixDQUFiLENBRjhCLENBRzlCOztBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUNWQyxNQUFBQSxLQUFLLEVBQUVMLElBQUksQ0FBQ00sR0FBTCxDQUFTLE9BQVQsQ0FERztBQUVWQyxNQUFBQSxRQUFRLEVBQUVQLElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQVQ7QUFGQSxLQUFaO0FBSUQsR0FSRDs7QUFVQSxzQkFDRSw4REFBQyw0REFBRDtBQUFXLGFBQVMsRUFBQyxNQUFyQjtBQUE0QixZQUFRLEVBQUMsSUFBckM7QUFBQSw0QkFDRSw4REFBQyx5REFBRDtBQUFRLGNBQVEsRUFBQyxPQUFqQjtBQUFBLDZCQUNFLDhEQUFDLDBEQUFEO0FBQUEsK0JBQ0UsOERBQUMs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0ZEOztHQXpHdUJ0Qjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Gb3JtSGVscGVyVGV4dFwiO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9JbnB1dExhYmVsXCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9NZW51SXRlbVwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJAbXVpL21hdGVyaWFsL1NlbGVjdFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgQXJyb3dGb3J3YXJkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRcIjtcclxuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKCkge1xyXG4gIGNvbnN0IFtoYW5kaWNhcCwgc2V0SGFuZGljYXBdID0gUmVhY3QudXNlU3RhdGUoMyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0SGFuZGljYXAoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgIGNvbnNvbGUubG9nKHtcclxuICAgICAgZW1haWw6IGRhdGEuZ2V0KFwiZW1haWxcIiksXHJcbiAgICAgIHBhc3N3b3JkOiBkYXRhLmdldChcInBhc3N3b3JkXCIpLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwic21cIj5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCI+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgICAgICAgU2Vuc29cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8QXZhdGFyIHN4PXt7IG10OiAxMCwgbWI6IDEsIGJnY29sb3I6IFwic2Vjb25kYXJ5Lm1haW5cIiB9fT5cclxuICAgICAgICAgIDxTZXR0aW5nc0ljb24gLz5cclxuICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgQSBmZXcgbW9yZSB0aGluZ3NcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPEJveCBjb21wb25lbnQ9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gbm9WYWxpZGF0ZSBzeD17eyBtdDogMiB9fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIGxhYmVsPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkpvaG4gRG9lXCJcclxuICAgICAgICAgICAgaGVscGVyVGV4dD1cIlBsZWFzZSB0eXBlIGluIHlvdXIgbmFtZS5cIlxyXG4gICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgbXQ6IDMgfX0gZnVsbFdpZHRoPlxyXG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1oZWxwZXItbGFiZWxcIj5cclxuICAgICAgICAgICAgICBZb3VyIGhhbmRpY2FwXHJcbiAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtoYW5kaWNhcH1cclxuICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgaGFuZGljYXBcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezB9PkkgY2Fu4oCZdCBzZWU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MX0+SSBjYW7igJl0IGhlYXI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17Mn0+SSBjYW4gbmVpdGhlciBzZWUgbm9yIGhlYXI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17M30+SSBoYXZlIG5vIGhhbmRpY2FwPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDxGb3JtSGVscGVyVGV4dD5QbGVhc2Ugc2VsZWN0IGEgaGFuZGljYXAuPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgbXQ6IDQgfX0gZnVsbFdpZHRoPlxyXG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1oZWxwZXItbGFiZWxcIj5cclxuICAgICAgICAgICAgICBZb3VyIGlucHV0IHR5cGVcclxuICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2hhbmRpY2FwfVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBpbnB1dCB0eXBlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXswfT5TcGVhazwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsxfT5Ub3VjaCBvciBjbGljazwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsyfT5TZW5zZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXszfT5BbGwgdHlwZXM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlBsZWFzZSBzZWxlY3QgYW4gaW5wdXQgdHlwZS48L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgZW5kSWNvbj17PEFycm93Rm9yd2FyZEljb24gLz59XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIHN4PXt7IG10OiA0IH19XHJcbiAgICAgICAgICAgIGhyZWY9XCIvbW9kZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENvbnRpbnVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8QXJyb3dCYWNrSWNvbiAvPn1cclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIHN4PXt7IG10OiAyIH19XHJcbiAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBdmF0YXIiLCJBcHBCYXIiLCJCb3giLCJCdXR0b24iLCJDb250YWluZXIiLCJGb3JtQ29udHJvbCIsIkZvcm1IZWxwZXJUZXh0IiwiSW5wdXRMYWJlbCIsIk1lbnVJdGVtIiwiU2VsZWN0IiwiVGV4dEZpZWxkIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJTZXR0aW5nc0ljb24iLCJBcnJvd0ZvcndhcmRJY29uIiwiQXJyb3dCYWNrSWNvbiIsIkZvcm0iLCJ1c2VTdGF0ZSIsImhhbmRpY2FwIiwic2V0SGFuZGljYXAiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiRm9ybURhdGEiLCJjdXJyZW50VGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwiZ2V0IiwicGFzc3dvcmQiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwibWIiLCJiZ2NvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==
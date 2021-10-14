"use strict";
self["webpackHotUpdate_N_E"]("pages/form",{

/***/ "./node_modules/@mui/icons-material/ArrowForward.js":
/*!**********************************************************!*\
  !*** ./node_modules/@mui/icons-material/ArrowForward.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
}), 'ArrowForward');

exports.default = _default;

/***/ }),

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
          lineNumber: 41,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
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
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {
        component: "h1",
        variant: "h5",
        children: "A few more things"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
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
          lineNumber: 61,
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
            lineNumber: 71,
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
              lineNumber: 79,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
              value: 1,
              children: "I can\u2019t hear"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
              value: 2,
              children: "I can neither see nor hear"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
              value: 3,
              children: "I have no handicap"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_15__.default, {
            children: "Please select a handicap."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
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
            lineNumber: 87,
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
              lineNumber: 95,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
              value: 1,
              children: "Touch or click"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
              value: 2,
              children: "Sense"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
              value: 3,
              children: "All types"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_15__.default, {
            children: "Please select an input type."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
          startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_17__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 24
          }, this),
          type: "submit",
          fullWidth: true,
          variant: "contained",
          sx: {
            mt: 4
          },
          href: "/mode",
          children: "Start Game"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
          startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_18__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
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
          lineNumber: 112,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9ybS4yMTdjMzA4YzIxYTMwMzZmNmFjZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQSw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixlQUFlO0FBQ2Y7QUFDQSw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0U7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNrQixJQUFULEdBQWdCO0FBQUE7O0FBQzdCLHdCQUFnQ2xCLDJDQUFBLENBQWUsQ0FBZixDQUFoQztBQUFBO0FBQUEsTUFBT29CLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCRixJQUFBQSxXQUFXLENBQUNFLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNILEtBQUQsRUFBVztBQUM5QkEsSUFBQUEsS0FBSyxDQUFDSSxjQUFOO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLElBQUlDLFFBQUosQ0FBYU4sS0FBSyxDQUFDTyxhQUFuQixDQUFiLENBRjhCLENBRzlCOztBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUNWQyxNQUFBQSxLQUFLLEVBQUVMLElBQUksQ0FBQ00sR0FBTCxDQUFTLE9BQVQsQ0FERztBQUVW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LGVBb0RFLDhEQUFDLDBEQUFEO0FBQ0UsbUJBQVMsZUFBRSw4REFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURiO0FBRUUsbUJBQVMsTUFGWDtBQUdFLGlCQUFPLEVBQUMsVUFIVjtBQUlFLFlBQUUsRUFBRTtBQUFFQSxZQUFBQSxFQUFFLEVBQUU7QUFBTixXQUpOO0FBS0UsY0FBSSxFQUFDLEdBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0ZEOztHQXpHdUJ0Qjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xyXG5cclxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcclxuXHJcbnZhciBfanN4UnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcclxuXHJcbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XHJcbiAgZDogXCJtMTIgNC0xLjQxIDEuNDFMMTYuMTcgMTFINHYyaDEyLjE3bC01LjU4IDUuNTlMMTIgMjBsOC04elwiXHJcbn0pLCAnQXJyb3dGb3J3YXJkJyk7XHJcblxyXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Gb3JtSGVscGVyVGV4dFwiO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9JbnB1dExhYmVsXCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9NZW51SXRlbVwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJAbXVpL21hdGVyaWFsL1NlbGVjdFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgQXJyb3dGb3J3YXJkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRcIjtcclxuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrXCI7XHJcbmltcG9ydCBQbGF5QXJyb3dJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlBcnJvd1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcclxuICBjb25zdCBbaGFuZGljYXAsIHNldEhhbmRpY2FwXSA9IFJlYWN0LnVzZVN0YXRlKDMpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEhhbmRpY2FwKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICBjb25zb2xlLmxvZyh7XHJcbiAgICAgIGVtYWlsOiBkYXRhLmdldChcImVtYWlsXCIpLFxyXG4gICAgICBwYXNzd29yZDogZGF0YS5nZXQoXCJwYXNzd29yZFwiKSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgIFNlbnNvXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuXHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEF2YXRhciBzeD17eyBtdDogMTAsIG1iOiAxLCBiZ2NvbG9yOiBcInNlY29uZGFyeS5tYWluXCIgfX0+XHJcbiAgICAgICAgICA8U2V0dGluZ3NJY29uIC8+XHJcbiAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cclxuICAgICAgICAgIEEgZmV3IG1vcmUgdGhpbmdzXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxCb3ggY29tcG9uZW50PVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG5vVmFsaWRhdGUgc3g9e3sgbXQ6IDIgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2huIERvZVwiXHJcbiAgICAgICAgICAgIGhlbHBlclRleHQ9XCJQbGVhc2UgdHlwZSBpbiB5b3VyIG5hbWUuXCJcclxuICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IG10OiAzIH19IGZ1bGxXaWR0aD5cclxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtaGVscGVyLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgWW91ciBoYW5kaWNhcFxyXG4gICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICB2YWx1ZT17aGFuZGljYXB9XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIGhhbmRpY2FwXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXswfT5JIGNhbuKAmXQgc2VlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezF9PkkgY2Fu4oCZdCBoZWFyPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezJ9PkkgY2FuIG5laXRoZXIgc2VlIG5vciBoZWFyPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezN9PkkgaGF2ZSBubyBoYW5kaWNhcDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQ+UGxlYXNlIHNlbGVjdCBhIGhhbmRpY2FwLjwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IG10OiA0IH19IGZ1bGxXaWR0aD5cclxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtaGVscGVyLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgWW91ciBpbnB1dCB0eXBlXHJcbiAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtoYW5kaWNhcH1cclxuICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgaW5wdXQgdHlwZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MH0+U3BlYWs8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MX0+VG91Y2ggb3IgY2xpY2s8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17Mn0+U2Vuc2U8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17M30+QWxsIHR5cGVzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDxGb3JtSGVscGVyVGV4dD5QbGVhc2Ugc2VsZWN0IGFuIGlucHV0IHR5cGUuPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PEFycm93Rm9yd2FyZEljb24gLz59XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIHN4PXt7IG10OiA0IH19XHJcbiAgICAgICAgICAgIGhyZWY9XCIvbW9kZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBcnJvd0JhY2tJY29uIC8+fVxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgc3g9e3sgbXQ6IDIgfX1cclxuICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBCYWNrXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF2YXRhciIsIkFwcEJhciIsIkJveCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkZvcm1Db250cm9sIiwiRm9ybUhlbHBlclRleHQiLCJJbnB1dExhYmVsIiwiTWVudUl0ZW0iLCJTZWxlY3QiLCJUZXh0RmllbGQiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIlNldHRpbmdzSWNvbiIsIkFycm93Rm9yd2FyZEljb24iLCJBcnJvd0JhY2tJY29uIiwiUGxheUFycm93SWNvbiIsIkZvcm0iLCJ1c2VTdGF0ZSIsImhhbmRpY2FwIiwic2V0SGFuZGljYXAiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiRm9ybURhdGEiLCJjdXJyZW50VGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwiZ2V0IiwicGFzc3dvcmQiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwibWIiLCJiZ2NvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==
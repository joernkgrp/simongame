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
          children: "Continue"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9ybS44MjFlNDM1MTk1ZTM2NWJiY2JjYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU2tCLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0Isd0JBQWdDbEIsMkNBQUEsQ0FBZSxDQUFmLENBQWhDO0FBQUE7QUFBQSxNQUFPb0IsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDOUJGLElBQUFBLFdBQVcsQ0FBQ0UsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0gsS0FBRCxFQUFXO0FBQzlCQSxJQUFBQSxLQUFLLENBQUNJLGNBQU47QUFDQSxRQUFNQyxJQUFJLEdBQUcsSUFBSUMsUUFBSixDQUFhTixLQUFLLENBQUNPLGFBQW5CLENBQWIsQ0FGOEIsQ0FHOUI7O0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQ1ZDLE1BQUFBLEtBQUssRUFBRUwsSUFBSSxDQUFDTSxHQUFMLENBQVMsT0FBVCxDQURHO0FBRVZDLE1BQUFBLFFBQVEsRUFBRVAsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBVDtBQUZBLEtBQVo7QUFJRCxHQVJEOztBQVVBLHNCQUNFLDhEQUFDLDREQUFEO0FBQVcsYUFBUyxFQUFDLE1BQXJCO0FBQTRCLFlBQVEsRUFBQyxJQUFyQztBQUFBLDRCQUNFLDhEQUFDLHlEQUFEO0FBQVEsY0FBUSxFQUFDLE9BQWpCO0FBQUEsNkJBQ0UsOERBQUMsMERBQUQ7QUFBQSwrQkFDRSw4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REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3RkQ7O0dBekd1QnRCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0F2YXRhclwiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gXCJAbXVpL21hdGVyaWFsL0Zvcm1IZWxwZXJUZXh0XCI7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCJAbXVpL21hdGVyaWFsL0lucHV0TGFiZWxcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL01lbnVJdGVtXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU2VsZWN0XCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL1Rvb2xiYXJcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NldHRpbmdzXCI7XHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFwiO1xyXG5pbXBvcnQgQXJyb3dCYWNrSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tcIjtcclxuaW1wb3J0IFBsYXlBcnJvd0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvUGxheUFycm93XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKCkge1xyXG4gIGNvbnN0IFtoYW5kaWNhcCwgc2V0SGFuZGljYXBdID0gUmVhY3QudXNlU3RhdGUoMyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0SGFuZGljYXAoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgIGNvbnNvbGUubG9nKHtcclxuICAgICAgZW1haWw6IGRhdGEuZ2V0KFwiZW1haWxcIiksXHJcbiAgICAgIHBhc3N3b3JkOiBkYXRhLmdldChcInBhc3N3b3JkXCIpLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwic21cIj5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCI+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgICAgICAgU2Vuc29cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8QXZhdGFyIHN4PXt7IG10OiAxMCwgbWI6IDEsIGJnY29sb3I6IFwic2Vjb25kYXJ5Lm1haW5cIiB9fT5cclxuICAgICAgICAgIDxTZXR0aW5nc0ljb24gLz5cclxuICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgQSBmZXcgbW9yZSB0aGluZ3NcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPEJveCBjb21wb25lbnQ9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gbm9WYWxpZGF0ZSBzeD17eyBtdDogMiB9fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIGxhYmVsPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkpvaG4gRG9lXCJcclxuICAgICAgICAgICAgaGVscGVyVGV4dD1cIlBsZWFzZSB0eXBlIGluIHlvdXIgbmFtZS5cIlxyXG4gICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgbXQ6IDMgfX0gZnVsbFdpZHRoPlxyXG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1oZWxwZXItbGFiZWxcIj5cclxuICAgICAgICAgICAgICBZb3VyIGhhbmRpY2FwXHJcbiAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtoYW5kaWNhcH1cclxuICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgaGFuZGljYXBcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezB9PkkgY2Fu4oCZdCBzZWU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MX0+SSBjYW7igJl0IGhlYXI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17Mn0+SSBjYW4gbmVpdGhlciBzZWUgbm9yIGhlYXI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17M30+SSBoYXZlIG5vIGhhbmRpY2FwPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDxGb3JtSGVscGVyVGV4dD5QbGVhc2Ugc2VsZWN0IGEgaGFuZGljYXAuPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgbXQ6IDQgfX0gZnVsbFdpZHRoPlxyXG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1oZWxwZXItbGFiZWxcIj5cclxuICAgICAgICAgICAgICBZb3VyIGlucHV0IHR5cGVcclxuICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2hhbmRpY2FwfVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBpbnB1dCB0eXBlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXswfT5TcGVhazwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsxfT5Ub3VjaCBvciBjbGljazwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsyfT5TZW5zZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXszfT5BbGwgdHlwZXM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlBsZWFzZSBzZWxlY3QgYW4gaW5wdXQgdHlwZS48L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8QXJyb3dGb3J3YXJkSWNvbiAvPn1cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgc3g9e3sgbXQ6IDQgfX1cclxuICAgICAgICAgICAgaHJlZj1cIi9tb2RlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ29udGludWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBcnJvd0JhY2tJY29uIC8+fVxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgc3g9e3sgbXQ6IDIgfX1cclxuICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBCYWNrXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF2YXRhciIsIkFwcEJhciIsIkJveCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkZvcm1Db250cm9sIiwiRm9ybUhlbHBlclRleHQiLCJJbnB1dExhYmVsIiwiTWVudUl0ZW0iLCJTZWxlY3QiLCJUZXh0RmllbGQiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIlNldHRpbmdzSWNvbiIsIkFycm93Rm9yd2FyZEljb24iLCJBcnJvd0JhY2tJY29uIiwiUGxheUFycm93SWNvbiIsIkZvcm0iLCJ1c2VTdGF0ZSIsImhhbmRpY2FwIiwic2V0SGFuZGljYXAiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiRm9ybURhdGEiLCJjdXJyZW50VGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwiZ2V0IiwicGFzc3dvcmQiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwibWIiLCJiZ2NvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==
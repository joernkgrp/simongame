"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ "./node_modules/@mui/material/colors/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

 // Create a theme instance.

var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
  typography: {
    fontFamily: ["Outfit", "sans-serif"].join(","),
    h1: {
      fontWeight: 600,
      fontSize: "2rem"
    },
    h2: {
      fontWeight: 400,
      fontSize: "1.25rem",
      color: "primary.main"
    }
  },
  palette: {
    primary: {
      main: "#303f9f"
    },
    secondary: {
      main: "#e64a19"
    },
    error: {
      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400
    },
    myred: {
      main: "#d32f2f",
      contrastText: "#fff"
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42MTQ0OTQyMmZiYjg5ZjNjYTQ5MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQU1FLEtBQUssR0FBR0YsaUVBQVcsQ0FBQztBQUN4QkcsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFVBQVUsRUFBRSxDQUFDLFFBQUQsRUFBVyxZQUFYLEVBQXlCQyxJQUF6QixDQUE4QixHQUE5QixDQURGO0FBRVZDLElBQUFBLEVBQUUsRUFBRTtBQUNGQyxNQUFBQSxVQUFVLEVBQUUsR0FEVjtBQUVGQyxNQUFBQSxRQUFRLEVBQUU7QUFGUixLQUZNO0FBTVZDLElBQUFBLEVBQUUsRUFBRTtBQUNGRixNQUFBQSxVQUFVLEVBQUUsR0FEVjtBQUVGQyxNQUFBQSxRQUFRLEVBQUUsU0FGUjtBQUdGRSxNQUFBQSxLQUFLLEVBQUU7QUFITDtBQU5NLEdBRFk7QUFheEJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxPQUFPLEVBQUU7QUFDUEMsTUFBQUEsSUFBSSxFQUFFO0FBREMsS0FERjtBQUlQQyxJQUFBQSxTQUFTLEVBQUU7QUFDVEQsTUFBQUEsSUFBSSxFQUFFO0FBREcsS0FKSjtBQU9QRSxJQUFBQSxLQUFLLEVBQUU7QUFDTEYsTUFBQUEsSUFBSSxFQUFFWiwwREFBUWU7QUFEVCxLQVBBO0FBVVBDLElBQUFBLEtBQUssRUFBRTtBQUNMSixNQUFBQSxJQUFJLEVBQUUsU0FERDtBQUVMSyxNQUFBQSxZQUFZLEVBQUU7QUFGVDtBQVZBO0FBYmUsQ0FBRCxDQUF6QjtBQThCQSwrREFBZWhCLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XHJcbmltcG9ydCB7IHJlZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiO1xyXG5cclxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gIHR5cG9ncmFwaHk6IHtcclxuICAgIGZvbnRGYW1pbHk6IFtcIk91dGZpdFwiLCBcInNhbnMtc2VyaWZcIl0uam9pbihcIixcIiksXHJcbiAgICBoMToge1xyXG4gICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgIGZvbnRTaXplOiBcIjJyZW1cIixcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGZvbnRTaXplOiBcIjEuMjVyZW1cIixcclxuICAgICAgY29sb3I6IFwicHJpbWFyeS5tYWluXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiBcIiMzMDNmOWZcIixcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogXCIjZTY0YTE5XCIsXHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IHtcclxuICAgICAgbWFpbjogcmVkLkE0MDAsXHJcbiAgICB9LFxyXG4gICAgbXlyZWQ6IHtcclxuICAgICAgbWFpbjogXCIjZDMyZjJmXCIsXHJcbiAgICAgIGNvbnRyYXN0VGV4dDogXCIjZmZmXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInJlZCIsInRoZW1lIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJqb2luIiwiaDEiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJoMiIsImNvbG9yIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiZXJyb3IiLCJBNDAwIiwibXlyZWQiLCJjb250cmFzdFRleHQiXSwic291cmNlUm9vdCI6IiJ9
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
  },
  typography: {
    fontFamily: ["Outfit", "sans-serif"].join(","),
    h1: {
      fontWeight: 600,
      fontSize: "2rem",
      color: "primary"
    },
    h2: {
      fontWeight: 400,
      fontSize: "1.25rem",
      color: "primary.dark"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zYTkwMjEwNGI1YWVhMDNmY2Q1Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQU1FLEtBQUssR0FBR0YsaUVBQVcsQ0FBQztBQUN4QkcsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxJQUFJLEVBQUU7QUFEQyxLQURGO0FBSVBDLElBQUFBLFNBQVMsRUFBRTtBQUNURCxNQUFBQSxJQUFJLEVBQUU7QUFERyxLQUpKO0FBT1BFLElBQUFBLEtBQUssRUFBRTtBQUNMRixNQUFBQSxJQUFJLEVBQUVKLDBEQUFRTztBQURULEtBUEE7QUFVUEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xKLE1BQUFBLElBQUksRUFBRSxTQUREO0FBRUxLLE1BQUFBLFlBQVksRUFBRTtBQUZUO0FBVkEsR0FEZTtBQWdCeEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxVQUFVLEVBQUUsQ0FBQyxRQUFELEVBQVcsWUFBWCxFQUF5QkMsSUFBekIsQ0FBOEIsR0FBOUIsQ0FERjtBQUVWQyxJQUFBQSxFQUFFLEVBQUU7QUFDRkMsTUFBQUEsVUFBVSxFQUFFLEdBRFY7QUFFRkMsTUFBQUEsUUFBUSxFQUFFLE1BRlI7QUFHRkMsTUFBQUEsS0FBSyxFQUFFO0FBSEwsS0FGTTtBQU9WQyxJQUFBQSxFQUFFLEVBQUU7QUFDRkgsTUFBQUEsVUFBVSxFQUFFLEdBRFY7QUFFRkMsTUFBQUEsUUFBUSxFQUFFLFNBRlI7QUFHRkMsTUFBQUEsS0FBSyxFQUFFO0FBSEw7QUFQTTtBQWhCWSxDQUFELENBQXpCO0FBK0JBLCtEQUFlZixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90aGVtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIjtcclxuXHJcbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICBwYWxldHRlOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46IFwiIzMwM2Y5ZlwiLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBtYWluOiBcIiNlNjRhMTlcIixcclxuICAgIH0sXHJcbiAgICBlcnJvcjoge1xyXG4gICAgICBtYWluOiByZWQuQTQwMCxcclxuICAgIH0sXHJcbiAgICBteXJlZDoge1xyXG4gICAgICBtYWluOiBcIiNkMzJmMmZcIixcclxuICAgICAgY29udHJhc3RUZXh0OiBcIiNmZmZcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBmb250RmFtaWx5OiBbXCJPdXRmaXRcIiwgXCJzYW5zLXNlcmlmXCJdLmpvaW4oXCIsXCIpLFxyXG4gICAgaDE6IHtcclxuICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICBmb250U2l6ZTogXCIycmVtXCIsXHJcbiAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGZvbnRTaXplOiBcIjEuMjVyZW1cIixcclxuICAgICAgY29sb3I6IFwicHJpbWFyeS5kYXJrXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInJlZCIsInRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiZXJyb3IiLCJBNDAwIiwibXlyZWQiLCJjb250cmFzdFRleHQiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsImpvaW4iLCJoMSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9
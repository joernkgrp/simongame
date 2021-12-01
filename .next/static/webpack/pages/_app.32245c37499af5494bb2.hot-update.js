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
    fontFamily: ["Recursive", "sans-serif"].join(","),
    h1: {
      fontFamily: "Inter",
      fontWeight: 300,
      fontSize: "2.25rem"
    },
    h2: {
      fontFamily: "JetBrains Mono",
      fontWeight: 700,
      fontSize: "1.25rem",
      color: "#003a62"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zMjI0NWMzNzQ5OWFmNTQ5NGJiMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQU1FLEtBQUssR0FBR0YsaUVBQVcsQ0FBQztBQUN4QkcsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFVBQVUsRUFBRSxDQUFDLFdBQUQsRUFBYyxZQUFkLEVBQTRCQyxJQUE1QixDQUFpQyxHQUFqQyxDQURGO0FBRVZDLElBQUFBLEVBQUUsRUFBRTtBQUNGRixNQUFBQSxVQUFVLEVBQUUsT0FEVjtBQUVGRyxNQUFBQSxVQUFVLEVBQUUsR0FGVjtBQUdGQyxNQUFBQSxRQUFRLEVBQUU7QUFIUixLQUZNO0FBT1ZDLElBQUFBLEVBQUUsRUFBRTtBQUNGTCxNQUFBQSxVQUFVLEVBQUUsZ0JBRFY7QUFFRkcsTUFBQUEsVUFBVSxFQUFFLEdBRlY7QUFHRkMsTUFBQUEsUUFBUSxFQUFFLFNBSFI7QUFJRkUsTUFBQUEsS0FBSyxFQUFFO0FBSkw7QUFQTSxHQURZO0FBZXhCQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRTtBQURDLEtBREY7QUFJUEMsSUFBQUEsU0FBUyxFQUFFO0FBQ1RELE1BQUFBLElBQUksRUFBRTtBQURHLEtBSko7QUFPUEUsSUFBQUEsS0FBSyxFQUFFO0FBQ0xGLE1BQUFBLElBQUksRUFBRVosMERBQVFlO0FBRFQsS0FQQTtBQVVQQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEosTUFBQUEsSUFBSSxFQUFFLFNBREQ7QUFFTEssTUFBQUEsWUFBWSxFQUFFO0FBRlQ7QUFWQTtBQWZlLENBQUQsQ0FBekI7QUFnQ0EsK0RBQWVoQixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90aGVtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIjtcclxuXHJcbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBmb250RmFtaWx5OiBbXCJSZWN1cnNpdmVcIiwgXCJzYW5zLXNlcmlmXCJdLmpvaW4oXCIsXCIpLFxyXG4gICAgaDE6IHtcclxuICAgICAgZm9udEZhbWlseTogXCJJbnRlclwiLFxyXG4gICAgICBmb250V2VpZ2h0OiAzMDAsXHJcbiAgICAgIGZvbnRTaXplOiBcIjIuMjVyZW1cIixcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICBmb250RmFtaWx5OiBcIkpldEJyYWlucyBNb25vXCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgZm9udFNpemU6IFwiMS4yNXJlbVwiLFxyXG4gICAgICBjb2xvcjogXCIjMDAzYTYyXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiBcIiMzMDNmOWZcIixcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogXCIjZTY0YTE5XCIsXHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IHtcclxuICAgICAgbWFpbjogcmVkLkE0MDAsXHJcbiAgICB9LFxyXG4gICAgbXlyZWQ6IHtcclxuICAgICAgbWFpbjogXCIjZDMyZjJmXCIsXHJcbiAgICAgIGNvbnRyYXN0VGV4dDogXCIjZmZmXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInJlZCIsInRoZW1lIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJqb2luIiwiaDEiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJoMiIsImNvbG9yIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiZXJyb3IiLCJBNDAwIiwibXlyZWQiLCJjb250cmFzdFRleHQiXSwic291cmNlUm9vdCI6IiJ9
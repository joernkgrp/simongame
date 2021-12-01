"use strict";
(() => {
var exports = {};
exports.id = "pages/confetti";
exports.ids = ["pages/confetti"];
exports.modules = {

/***/ "./pages/confetti.js":
/*!***************************!*\
  !*** ./pages/confetti.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContinuousSlider),
/* harmony export */   "Confetti": () => (/* binding */ Confetti)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_canvas_confetti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-canvas-confetti */ "react-canvas-confetti");
/* harmony import */ var react_canvas_confetti__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_canvas_confetti__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/react */ "@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Stack */ "@mui/material/Stack");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Slider */ "@mui/material/Slider");
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Container */ "@mui/material/Container");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Jkogerup\\Dev\\simongame\\pages\\confetti.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











let startValue = 0;
function ContinuousSlider() {
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(startValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default()), {
    maxwidth: "md",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
      sx: {
        display: "flex",
        alignItems: "center",
        bgcolor: "background.paper",
        height: 1000,
        widht: 1000
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
        sx: {
          flexGrow: 1
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
          spacing: 2,
          direction: "row",
          sx: {
            mb: 1
          },
          alignItems: "center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: "noto:frowning-face",
            height: "64"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((_mui_material_Slider__WEBPACK_IMPORTED_MODULE_5___default()), {
            color: "secondary",
            "aria-label": "Mood",
            value: value,
            onChange: handleChange,
            valueLabelDisplay: "auto",
            step: 10,
            marks: true,
            min: 0,
            max: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: "noto:smiling-face",
            height: "64"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), value == "100" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Confetti, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 28
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
class Confetti extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "getInstance", instance => {
      // saving the instance to an internal property
      this.confetti = instance;
    });

    _defineProperty(this, "onClickCustom", () => {
      // starting the animation with custom settings
      this.confetti({
        particleCount: Math.ceil(Math.random() * 1000),
        spread: 180
      });
    });
  }

  render() {
    const style = {
      position: "fixed",
      width: "100%",
      height: "100%",
      zIndex: -1
    };
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((react_canvas_confetti__WEBPACK_IMPORTED_MODULE_1___default()) // set the styles as for a usual react component
      , {
        style: style // set the class name as for a usual react component
        ,
        className: "yourClassName" // set the callback for getting instance. The callback will be called after initialization ReactCanvasConfetti component
        ,
        refConfetti: this.getInstance
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
        onClick: this.onClickCustom,
        children: "Fire with custom"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }

}

/***/ }),

/***/ "@iconify/react":
/*!*********************************!*\
  !*** external "@iconify/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@iconify/react");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Container":
/*!******************************************!*\
  !*** external "@mui/material/Container" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ "@mui/material/Slider":
/*!***************************************!*\
  !*** external "@mui/material/Slider" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Slider");

/***/ }),

/***/ "@mui/material/Stack":
/*!**************************************!*\
  !*** external "@mui/material/Stack" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-canvas-confetti":
/*!****************************************!*\
  !*** external "react-canvas-confetti" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react-canvas-confetti");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/confetti.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFKRyxLQUFkO0FBT0Esd0JBQ0U7QUFBQSw4QkFDRSw4REFBQyw4REFBRCxDQUNFO0FBREY7QUFFRSxhQUFLLEVBQUVILEtBRlQsQ0FHRTtBQUhGO0FBSUUsaUJBQVMsRUFBRSxlQUpiLENBS0U7QUFMRjtBQU1FLG1CQUFXLEVBQUUsS0FBS0k7QUFOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUU7QUFBUSxlQUFPLEVBQUUsS0FBS0MsYUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBLG9CQURGO0FBY0Q7O0FBcEMyQzs7Ozs7Ozs7OztBQ3BEOUM7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2NvbmZldHRpLmpzIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBpY29uaWZ5L3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Cb3hcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvU2xpZGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtY2FudmFzLWNvbmZldHRpXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdENhbnZhc0NvbmZldHRpIGZyb20gXCJyZWFjdC1jYW52YXMtY29uZmV0dGlcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJAaWNvbmlmeS9yZWFjdFwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9TbGlkZXJcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcclxuXHJcbmxldCBzdGFydFZhbHVlID0gMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRpbnVvdXNTbGlkZXIoKSB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShzdGFydFZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heHdpZHRoPVwibWRcIj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcclxuICAgICAgICAgIGhlaWdodDogMTAwMCxcclxuICAgICAgICAgIHdpZGh0OiAxMDAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGRpcmVjdGlvbj1cInJvd1wiIHN4PXt7IG1iOiAxIH19IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPEljb24gaWNvbj1cIm5vdG86ZnJvd25pbmctZmFjZVwiIGhlaWdodD1cIjY0XCIgLz5cclxuICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTW9vZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdmFsdWVMYWJlbERpc3BsYXk9XCJhdXRvXCJcclxuICAgICAgICAgICAgICBzdGVwPXsxMH1cclxuICAgICAgICAgICAgICBtYXJrc1xyXG4gICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICBtYXg9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEljb24gaWNvbj1cIm5vdG86c21pbGluZy1mYWNlXCIgaGVpZ2h0PVwiNjRcIiAvPlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICB7dmFsdWUgPT0gXCIxMDBcIiAmJiA8Q29uZmV0dGkgLz59XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZldHRpIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBnZXRJbnN0YW5jZSA9IChpbnN0YW5jZSkgPT4ge1xyXG4gICAgLy8gc2F2aW5nIHRoZSBpbnN0YW5jZSB0byBhbiBpbnRlcm5hbCBwcm9wZXJ0eVxyXG4gICAgdGhpcy5jb25mZXR0aSA9IGluc3RhbmNlO1xyXG4gIH07XHJcblxyXG4gIG9uQ2xpY2tDdXN0b20gPSAoKSA9PiB7XHJcbiAgICAvLyBzdGFydGluZyB0aGUgYW5pbWF0aW9uIHdpdGggY3VzdG9tIHNldHRpbmdzXHJcbiAgICB0aGlzLmNvbmZldHRpKHtcclxuICAgICAgcGFydGljbGVDb3VudDogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcclxuICAgICAgc3ByZWFkOiAxODAsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICB6SW5kZXg6IC0xLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxSZWFjdENhbnZhc0NvbmZldHRpXHJcbiAgICAgICAgICAvLyBzZXQgdGhlIHN0eWxlcyBhcyBmb3IgYSB1c3VhbCByZWFjdCBjb21wb25lbnRcclxuICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgIC8vIHNldCB0aGUgY2xhc3MgbmFtZSBhcyBmb3IgYSB1c3VhbCByZWFjdCBjb21wb25lbnRcclxuICAgICAgICAgIGNsYXNzTmFtZT17XCJ5b3VyQ2xhc3NOYW1lXCJ9XHJcbiAgICAgICAgICAvLyBzZXQgdGhlIGNhbGxiYWNrIGZvciBnZXR0aW5nIGluc3RhbmNlLiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaW5pdGlhbGl6YXRpb24gUmVhY3RDYW52YXNDb25mZXR0aSBjb21wb25lbnRcclxuICAgICAgICAgIHJlZkNvbmZldHRpPXt0aGlzLmdldEluc3RhbmNlfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkNsaWNrQ3VzdG9tfT5GaXJlIHdpdGggY3VzdG9tPC9idXR0b24+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGljb25pZnkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Cb3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9TbGlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9TdGFja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jYW52YXMtY29uZmV0dGlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0Q2FudmFzQ29uZmV0dGkiLCJ1c2VTdGF0ZSIsIkljb24iLCJCb3giLCJTdGFjayIsIlNsaWRlciIsIkNvbnRhaW5lciIsInN0YXJ0VmFsdWUiLCJDb250aW51b3VzU2xpZGVyIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImJnY29sb3IiLCJoZWlnaHQiLCJ3aWRodCIsImZsZXhHcm93IiwibWIiLCJDb25mZXR0aSIsIkNvbXBvbmVudCIsImluc3RhbmNlIiwiY29uZmV0dGkiLCJwYXJ0aWNsZUNvdW50IiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJzcHJlYWQiLCJyZW5kZXIiLCJzdHlsZSIsInBvc2l0aW9uIiwid2lkdGgiLCJ6SW5kZXgiLCJnZXRJbnN0YW5jZSIsIm9uQ2xpY2tDdXN0b20iXSwic291cmNlUm9vdCI6IiJ9
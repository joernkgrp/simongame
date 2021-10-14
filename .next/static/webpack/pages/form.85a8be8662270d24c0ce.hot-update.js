"use strict";
self["webpackHotUpdate_N_E"]("pages/form",{

/***/ "./node_modules/@mui/material/Toolbar/Toolbar.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/material/Toolbar/Toolbar.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/core */ "./node_modules/@mui/core/index.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _toolbarClasses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toolbarClasses */ "./node_modules/@mui/material/Toolbar/toolbarClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


const _excluded = ["className", "component", "disableGutters", "variant"];









const useUtilityClasses = ownerState => {
  const {
    classes,
    disableGutters,
    variant
  } = ownerState;
  const slots = {
    root: ['root', !disableGutters && 'gutters', variant]
  };
  return (0,_mui_core__WEBPACK_IMPORTED_MODULE_6__.unstable_composeClasses)(slots, _toolbarClasses__WEBPACK_IMPORTED_MODULE_7__.getToolbarUtilityClass, classes);
};

const ToolbarRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__.default)('div', {
  name: 'MuiToolbar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableGutters && styles.gutters, styles[ownerState.variant]];
  }
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center'
}, !ownerState.disableGutters && {
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}, ownerState.variant === 'dense' && {
  minHeight: 48
}), ({
  theme,
  ownerState
}) => ownerState.variant === 'regular' && theme.mixins.toolbar);
const Toolbar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Toolbar(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__.default)({
    props: inProps,
    name: 'MuiToolbar'
  });

  const {
    className,
    component = 'div',
    disableGutters = false,
    variant = 'regular'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, props, {
    component,
    disableGutters,
    variant
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ToolbarRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    as: component,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other));
});
 true ? Toolbar.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properites to be used to lay out the children.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'regular']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./node_modules/@mui/material/Toolbar/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mui/material/Toolbar/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Toolbar__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "toolbarClasses": function() { return /* reexport safe */ _toolbarClasses__WEBPACK_IMPORTED_MODULE_1__.default; }
/* harmony export */ });
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _toolbarClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbarClasses */ "./node_modules/@mui/material/Toolbar/toolbarClasses.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _toolbarClasses__WEBPACK_IMPORTED_MODULE_1__) if(["default","toolbarClasses"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _toolbarClasses__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);




/***/ }),

/***/ "./node_modules/@mui/material/Toolbar/toolbarClasses.js":
/*!**************************************************************!*\
  !*** ./node_modules/@mui/material/Toolbar/toolbarClasses.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getToolbarUtilityClass": function() { return /* binding */ getToolbarUtilityClass; }
/* harmony export */ });
/* harmony import */ var _mui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/core */ "./node_modules/@mui/core/index.js");

function getToolbarUtilityClass(slot) {
  return (0,_mui_core__WEBPACK_IMPORTED_MODULE_0__.generateUtilityClass)('MuiToolbar', slot);
}
const toolbarClasses = (0,_mui_core__WEBPACK_IMPORTED_MODULE_0__.generateUtilityClasses)('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
/* harmony default export */ __webpack_exports__["default"] = (toolbarClasses);

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
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material/PlayArrow */ "./node_modules/@mui/icons-material/PlayArrow.js");
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
          startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_17__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9ybS44NWE4YmU4NjYyMjcwZDI0YzBjZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9HO0FBQzFDO0FBQzFEO0FBQytCO0FBQ0k7QUFDWDtBQUM4QztBQUNsQjtBQUNkO0FBQ29CO0FBQ1Y7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLFNBQVMsa0VBQWMsUUFBUSxtRUFBc0I7QUFDckQ7QUFDQTtBQUNBLG9CQUFvQix1REFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUMsS0FBSywyRUFBUTtBQUNkO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRCw2QkFBNkIsNkNBQWdCO0FBQzdDLGdCQUFnQiw4REFBYTtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixnQkFBZ0IsZ0dBQTZCO0FBQzdDO0FBQ0EscUJBQXFCLDJFQUFRLEdBQUc7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0Isc0RBQUksY0FBYywyRUFBUTtBQUNoRDtBQUNBLGVBQWUsNkNBQUk7QUFDbkI7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0QsS0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBEQUFnQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMERB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QUFBLGdCQTFDRixlQW9ERSw4REFBQywwREFBRDtBQUNFLG1CQUFTLGVBQUUsOERBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEYjtBQUVFLG1CQUFTLE1BRlg7QUFHRSxpQkFBTyxFQUFDLFVBSFY7QUFJRSxZQUFFLEVBQUU7QUFBRUEsWUFBQUEsRUFBRSxFQUFFO0FBQU4sV0FKTjtBQUtFLGNBQUksRUFBQyxHQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdGRDs7R0F6R3VCdEI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL1Rvb2xiYXIvVG9vbGJhci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvVG9vbGJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvVG9vbGJhci90b29sYmFyQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcclxuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XHJcbmNvbnN0IF9leGNsdWRlZCA9IFtcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcImRpc2FibGVHdXR0ZXJzXCIsIFwidmFyaWFudFwiXTtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgdW5zdGFibGVfY29tcG9zZUNsYXNzZXMgYXMgY29tcG9zZUNsYXNzZXMgfSBmcm9tICdAbXVpL2NvcmUnO1xyXG5pbXBvcnQgdXNlVGhlbWVQcm9wcyBmcm9tICcuLi9zdHlsZXMvdXNlVGhlbWVQcm9wcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVzL3N0eWxlZCc7XHJcbmltcG9ydCB7IGdldFRvb2xiYXJVdGlsaXR5Q2xhc3MgfSBmcm9tICcuL3Rvb2xiYXJDbGFzc2VzJztcclxuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuXHJcbmNvbnN0IHVzZVV0aWxpdHlDbGFzc2VzID0gb3duZXJTdGF0ZSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY2xhc3NlcyxcclxuICAgIGRpc2FibGVHdXR0ZXJzLFxyXG4gICAgdmFyaWFudFxyXG4gIH0gPSBvd25lclN0YXRlO1xyXG4gIGNvbnN0IHNsb3RzID0ge1xyXG4gICAgcm9vdDogWydyb290JywgIWRpc2FibGVHdXR0ZXJzICYmICdndXR0ZXJzJywgdmFyaWFudF1cclxuICB9O1xyXG4gIHJldHVybiBjb21wb3NlQ2xhc3NlcyhzbG90cywgZ2V0VG9vbGJhclV0aWxpdHlDbGFzcywgY2xhc3Nlcyk7XHJcbn07XHJcblxyXG5jb25zdCBUb29sYmFyUm9vdCA9IHN0eWxlZCgnZGl2Jywge1xyXG4gIG5hbWU6ICdNdWlUb29sYmFyJyxcclxuICBzbG90OiAnUm9vdCcsXHJcbiAgb3ZlcnJpZGVzUmVzb2x2ZXI6IChwcm9wcywgc3R5bGVzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG93bmVyU3RhdGVcclxuICAgIH0gPSBwcm9wcztcclxuICAgIHJldHVybiBbc3R5bGVzLnJvb3QsICFvd25lclN0YXRlLmRpc2FibGVHdXR0ZXJzICYmIHN0eWxlcy5ndXR0ZXJzLCBzdHlsZXNbb3duZXJTdGF0ZS52YXJpYW50XV07XHJcbiAgfVxyXG59KSgoe1xyXG4gIHRoZW1lLFxyXG4gIG93bmVyU3RhdGVcclxufSkgPT4gX2V4dGVuZHMoe1xyXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG59LCAhb3duZXJTdGF0ZS5kaXNhYmxlR3V0dGVycyAmJiB7XHJcbiAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpXHJcbiAgfVxyXG59LCBvd25lclN0YXRlLnZhcmlhbnQgPT09ICdkZW5zZScgJiYge1xyXG4gIG1pbkhlaWdodDogNDhcclxufSksICh7XHJcbiAgdGhlbWUsXHJcbiAgb3duZXJTdGF0ZVxyXG59KSA9PiBvd25lclN0YXRlLnZhcmlhbnQgPT09ICdyZWd1bGFyJyAmJiB0aGVtZS5taXhpbnMudG9vbGJhcik7XHJcbmNvbnN0IFRvb2xiYXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUb29sYmFyKGluUHJvcHMsIHJlZikge1xyXG4gIGNvbnN0IHByb3BzID0gdXNlVGhlbWVQcm9wcyh7XHJcbiAgICBwcm9wczogaW5Qcm9wcyxcclxuICAgIG5hbWU6ICdNdWlUb29sYmFyJ1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBjb21wb25lbnQgPSAnZGl2JyxcclxuICAgIGRpc2FibGVHdXR0ZXJzID0gZmFsc2UsXHJcbiAgICB2YXJpYW50ID0gJ3JlZ3VsYXInXHJcbiAgfSA9IHByb3BzLFxyXG4gICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCk7XHJcblxyXG4gIGNvbnN0IG93bmVyU3RhdGUgPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcclxuICAgIGNvbXBvbmVudCxcclxuICAgIGRpc2FibGVHdXR0ZXJzLFxyXG4gICAgdmFyaWFudFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlVXRpbGl0eUNsYXNzZXMob3duZXJTdGF0ZSk7XHJcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KFRvb2xiYXJSb290LCBfZXh0ZW5kcyh7XHJcbiAgICBhczogY29tcG9uZW50LFxyXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcclxuICAgIHJlZjogcmVmLFxyXG4gICAgb3duZXJTdGF0ZTogb3duZXJTdGF0ZVxyXG4gIH0sIG90aGVyKSk7XHJcbn0pO1xyXG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUb29sYmFyLnByb3BUeXBlc1xyXG4vKiByZW1vdmUtcHJvcHR5cGVzICovXHJcbj0ge1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XHJcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgVG9vbGJhciBjaGlsZHJlbiwgdXN1YWxseSBhIG1peHR1cmUgb2YgYEljb25CdXR0b25gLCBgQnV0dG9uYCBhbmQgYFR5cG9ncmFwaHlgLlxyXG4gICAqIFRoZSBUb29sYmFyIGlzIGEgZmxleCBjb250YWluZXIsIGFsbG93aW5nIGZsZXggaXRlbSBwcm9wZXJpdGVzIHRvIGJlIHVzZWQgdG8gbGF5IG91dCB0aGUgY2hpbGRyZW4uXHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG5cclxuICAvKipcclxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgLyoqXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxyXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXHJcblxyXG4gIC8qKlxyXG4gICAqIElmIGB0cnVlYCwgZGlzYWJsZXMgZ3V0dGVyIHBhZGRpbmcuXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKi9cclxuICBkaXNhYmxlR3V0dGVyczogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzeXN0ZW0gcHJvcCB0aGF0IGFsbG93cyBkZWZpbmluZyBzeXN0ZW0gb3ZlcnJpZGVzIGFzIHdlbGwgYXMgYWRkaXRpb25hbCBDU1Mgc3R5bGVzLlxyXG4gICAqL1xyXG4gIHN4OiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cclxuICAvKipcclxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXHJcbiAgICogQGRlZmF1bHQgJ3JlZ3VsYXInXHJcbiAgICovXHJcbiAgdmFyaWFudDogUHJvcFR5cGVzXHJcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xyXG4gIC5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2RlbnNlJywgJ3JlZ3VsYXInXSksIFByb3BUeXBlcy5zdHJpbmddKVxyXG59IDogdm9pZCAwO1xyXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1Rvb2xiYXInO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvb2xiYXJDbGFzc2VzIH0gZnJvbSAnLi90b29sYmFyQ2xhc3Nlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdG9vbGJhckNsYXNzZXMnOyIsImltcG9ydCB7IGdlbmVyYXRlVXRpbGl0eUNsYXNzLCBnZW5lcmF0ZVV0aWxpdHlDbGFzc2VzIH0gZnJvbSAnQG11aS9jb3JlJztcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvb2xiYXJVdGlsaXR5Q2xhc3Moc2xvdCkge1xyXG4gIHJldHVybiBnZW5lcmF0ZVV0aWxpdHlDbGFzcygnTXVpVG9vbGJhcicsIHNsb3QpO1xyXG59XHJcbmNvbnN0IHRvb2xiYXJDbGFzc2VzID0gZ2VuZXJhdGVVdGlsaXR5Q2xhc3NlcygnTXVpVG9vbGJhcicsIFsncm9vdCcsICdndXR0ZXJzJywgJ3JlZ3VsYXInLCAnZGVuc2UnXSk7XHJcbmV4cG9ydCBkZWZhdWx0IHRvb2xiYXJDbGFzc2VzOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0F2YXRhclwiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gXCJAbXVpL21hdGVyaWFsL0Zvcm1IZWxwZXJUZXh0XCI7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCJAbXVpL21hdGVyaWFsL0lucHV0TGFiZWxcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL01lbnVJdGVtXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU2VsZWN0XCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL1Rvb2xiYXJcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NldHRpbmdzXCI7XHJcbmltcG9ydCBQbGF5QXJyb3dJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlBcnJvd1wiO1xyXG5pbXBvcnQgQXJyb3dCYWNrSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oKSB7XHJcbiAgY29uc3QgW2hhbmRpY2FwLCBzZXRIYW5kaWNhcF0gPSBSZWFjdC51c2VTdGF0ZSgzKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRIYW5kaWNhcChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgY29uc29sZS5sb2coe1xyXG4gICAgICBlbWFpbDogZGF0YS5nZXQoXCJlbWFpbFwiKSxcclxuICAgICAgcGFzc3dvcmQ6IGRhdGEuZ2V0KFwicGFzc3dvcmRcIiksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJzbVwiPlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIj5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICBTZW5zb1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcblxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxBdmF0YXIgc3g9e3sgbXQ6IDEwLCBiZ2NvbG9yOiBcInNlY29uZGFyeS5tYWluXCIgfX0+XHJcbiAgICAgICAgICA8U2V0dGluZ3NJY29uIC8+XHJcbiAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cclxuICAgICAgICAgIEEgZmV3IG1vcmUgdGhpbmdzXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxCb3ggY29tcG9uZW50PVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG5vVmFsaWRhdGUgc3g9e3sgbXQ6IDIgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2huIERvZVwiXHJcbiAgICAgICAgICAgIGhlbHBlclRleHQ9XCJQbGVhc2UgdHlwZSBpbiB5b3VyIG5hbWUuXCJcclxuICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IG10OiAzIH19IGZ1bGxXaWR0aD5cclxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtaGVscGVyLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgWW91ciBoYW5kaWNhcFxyXG4gICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICB2YWx1ZT17aGFuZGljYXB9XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIGhhbmRpY2FwXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXswfT5JIGNhbuKAmXQgc2VlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezF9PkkgY2Fu4oCZdCBoZWFyPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezJ9PkkgY2FuIG5laXRoZXIgc2VlIG5vciBoZWFyPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezN9PkkgaGF2ZSBubyBoYW5kaWNhcDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQ+UGxlYXNlIHNlbGVjdCBhIGhhbmRpY2FwLjwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IG10OiA0IH19IGZ1bGxXaWR0aD5cclxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtaGVscGVyLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgWW91ciBpbnB1dCB0eXBlXHJcbiAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtoYW5kaWNhcH1cclxuICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgaW5wdXQgdHlwZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MH0+U3BlYWs8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MX0+VG91Y2ggb3IgY2xpY2s8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17Mn0+U2Vuc2U8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17M30+QWxsIHR5cGVzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDxGb3JtSGVscGVyVGV4dD5QbGVhc2Ugc2VsZWN0IGFuIGlucHV0IHR5cGUuPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PFBsYXlBcnJvd0ljb24gLz59XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIHN4PXt7IG10OiA0IH19XHJcbiAgICAgICAgICAgIGhyZWY9XCIvbW9kZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBcnJvd0JhY2tJY29uIC8+fVxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgc3g9e3sgbXQ6IDIgfX1cclxuICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBCYWNrXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF2YXRhciIsIkFwcEJhciIsIkJveCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkZvcm1Db250cm9sIiwiRm9ybUhlbHBlclRleHQiLCJJbnB1dExhYmVsIiwiTWVudUl0ZW0iLCJTZWxlY3QiLCJUZXh0RmllbGQiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIlNldHRpbmdzSWNvbiIsIlBsYXlBcnJvd0ljb24iLCJBcnJvd0JhY2tJY29uIiwiRm9ybSIsInVzZVN0YXRlIiwiaGFuZGljYXAiLCJzZXRIYW5kaWNhcCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJjb25zb2xlIiwibG9nIiwiZW1haWwiLCJnZXQiLCJwYXNzd29yZCIsImZsZXhHcm93IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibXQiLCJiZ2NvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==
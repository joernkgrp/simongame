"use strict";
self["webpackHotUpdate_N_E"]("pages/mode",{

/***/ "./node_modules/@mui/material/Button/Button.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mui/material/Button/Button.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/core */ "./node_modules/@mui/core/index.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/index.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@mui/material/ButtonBase/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@mui/material/utils/capitalize.js");
/* harmony import */ var _buttonClasses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buttonClasses */ "./node_modules/@mui/material/Button/buttonClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


const _excluded = ["children", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];













const useUtilityClasses = ownerState => {
  const {
    color,
    disableElevation,
    fullWidth,
    size,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, `${variant}${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(color)}`, `size${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(size)}`, `${variant}Size${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(size)}`, color === 'inherit' && 'colorInherit', disableElevation && 'disableElevation', fullWidth && 'fullWidth'],
    label: ['label'],
    startIcon: ['startIcon', `iconSize${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(size)}`],
    endIcon: ['endIcon', `iconSize${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(size)}`]
  };
  const composedClasses = (0,_mui_core__WEBPACK_IMPORTED_MODULE_7__.unstable_composeClasses)(slots, _buttonClasses__WEBPACK_IMPORTED_MODULE_8__.getButtonUtilityClass, classes);
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, classes, composedClasses);
};

const commonIconStyles = ownerState => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, ownerState.size === 'small' && {
  '& > *:nth-of-type(1)': {
    fontSize: 18
  }
}, ownerState.size === 'medium' && {
  '& > *:nth-of-type(1)': {
    fontSize: 20
  }
}, ownerState.size === 'large' && {
  '& > *:nth-of-type(1)': {
    fontSize: 22
  }
});

const ButtonRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_9__.default)(_ButtonBase__WEBPACK_IMPORTED_MODULE_10__.default, {
  shouldForwardProp: prop => (0,_styles_styled__WEBPACK_IMPORTED_MODULE_9__.rootShouldForwardProp)(prop) || prop === 'classes',
  name: 'MuiButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(ownerState.color)}`], styles[`size${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(ownerState.size)}`], styles[`${ownerState.variant}Size${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(ownerState.size)}`], ownerState.color === 'inherit' && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth];
  }
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, theme.typography.button, {
  minWidth: 64,
  padding: '6px 16px',
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
    duration: theme.transitions.duration.short
  }),
  '&:hover': (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    textDecoration: 'none',
    backgroundColor: (0,_mui_system__WEBPACK_IMPORTED_MODULE_11__.alpha)(theme.palette.text.primary, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
    backgroundColor: (0,_mui_system__WEBPACK_IMPORTED_MODULE_11__.alpha)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
    border: `1px solid ${theme.palette[ownerState.color].main}`,
    backgroundColor: (0,_mui_system__WEBPACK_IMPORTED_MODULE_11__.alpha)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }, ownerState.variant === 'contained' && {
    backgroundColor: theme.palette.grey.A100,
    boxShadow: theme.shadows[4],
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      boxShadow: theme.shadows[2],
      backgroundColor: theme.palette.grey[300]
    }
  }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
    backgroundColor: theme.palette[ownerState.color].dark,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: theme.palette[ownerState.color].main
    }
  }),
  '&:active': (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, ownerState.variant === 'contained' && {
    boxShadow: theme.shadows[8]
  }),
  [`&.${_buttonClasses__WEBPACK_IMPORTED_MODULE_8__.default.focusVisible}`]: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, ownerState.variant === 'contained' && {
    boxShadow: theme.shadows[6]
  }),
  [`&.${_buttonClasses__WEBPACK_IMPORTED_MODULE_8__.default.disabled}`]: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    color: theme.palette.action.disabled
  }, ownerState.variant === 'outlined' && {
    border: `1px solid ${theme.palette.action.disabledBackground}`
  }, ownerState.variant === 'outlined' && ownerState.color === 'secondary' && {
    border: `1px solid ${theme.palette.action.disabled}`
  }, ownerState.variant === 'contained' && {
    color: theme.palette.action.disabled,
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.action.disabledBackground
  })
}, ownerState.variant === 'text' && {
  padding: '6px 8px'
}, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
  color: theme.palette[ownerState.color].main
}, ownerState.variant === 'outlined' && {
  padding: '5px 15px',
  border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`
}, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
  color: theme.palette[ownerState.color].main,
  border: `1px solid ${(0,_mui_system__WEBPACK_IMPORTED_MODULE_11__.alpha)(theme.palette[ownerState.color].main, 0.5)}`
}, ownerState.variant === 'contained' && {
  color: theme.palette.getContrastText(theme.palette.grey[300]),
  backgroundColor: theme.palette.grey[300],
  boxShadow: theme.shadows[2]
}, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
  color: theme.palette[ownerState.color].contrastText,
  backgroundColor: theme.palette[ownerState.color].main
}, ownerState.color === 'inherit' && {
  color: 'inherit',
  borderColor: 'currentColor'
}, ownerState.size === 'small' && ownerState.variant === 'text' && {
  padding: '4px 5px',
  fontSize: theme.typography.pxToRem(13)
}, ownerState.size === 'large' && ownerState.variant === 'text' && {
  padding: '8px 11px',
  fontSize: theme.typography.pxToRem(15)
}, ownerState.size === 'small' && ownerState.variant === 'outlined' && {
  padding: '3px 9px',
  fontSize: theme.typography.pxToRem(13)
}, ownerState.size === 'large' && ownerState.variant === 'outlined' && {
  padding: '7px 21px',
  fontSize: theme.typography.pxToRem(15)
}, ownerState.size === 'small' && ownerState.variant === 'contained' && {
  padding: '4px 10px',
  fontSize: theme.typography.pxToRem(13)
}, ownerState.size === 'large' && ownerState.variant === 'contained' && {
  padding: '8px 22px',
  fontSize: theme.typography.pxToRem(15)
}, ownerState.fullWidth && {
  width: '100%'
}), ({
  ownerState
}) => ownerState.disableElevation && {
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none'
  },
  [`&.${_buttonClasses__WEBPACK_IMPORTED_MODULE_8__.default.focusVisible}`]: {
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none'
  },
  [`&.${_buttonClasses__WEBPACK_IMPORTED_MODULE_8__.default.disabled}`]: {
    boxShadow: 'none'
  }
});
const ButtonStartIcon = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_9__.default)('span', {
  name: 'MuiButton',
  slot: 'StartIcon',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.startIcon, styles[`iconSize${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(ownerState.size)}`]];
  }
})(({
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
  display: 'inherit',
  marginRight: 8,
  marginLeft: -4
}, ownerState.size === 'small' && {
  marginLeft: -2
}, commonIconStyles(ownerState)));
const ButtonEndIcon = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_9__.default)('span', {
  name: 'MuiButton',
  slot: 'EndIcon',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.endIcon, styles[`iconSize${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(ownerState.size)}`]];
  }
})(({
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
  display: 'inherit',
  marginRight: -4,
  marginLeft: 8
}, ownerState.size === 'small' && {
  marginRight: -2
}, commonIconStyles(ownerState)));
const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Button(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_12__.default)({
    props: inProps,
    name: 'MuiButton'
  });

  const {
    children,
    color = 'primary',
    component = 'button',
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    size = 'medium',
    startIcon: startIconProp,
    type,
    variant = 'text'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, props, {
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant
  });

  const classes = useUtilityClasses(ownerState);

  const startIcon = startIconProp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState: ownerState,
    children: startIconProp
  });

  const endIcon = endIconProp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState: ownerState,
    children: endIconProp
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ButtonRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    ownerState: ownerState,
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.focusVisible, focusVisibleClassName),
    ref: ref,
    type: type
  }, other, {
    classes: classes,
    children: [startIcon, children, endIcon]
  }));
});
 true ? Button.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Element placed after the children.
   */
  endIcon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * @ignore
   */
  focusVisibleClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['small', 'medium', 'large']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Element placed before the children.
   */
  startIcon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['button', 'reset', 'submit']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * The variant to use.
   * @default 'text'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['contained', 'outlined', 'text']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./node_modules/@mui/material/Button/buttonClasses.js":
/*!************************************************************!*\
  !*** ./node_modules/@mui/material/Button/buttonClasses.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getButtonUtilityClass": function() { return /* binding */ getButtonUtilityClass; }
/* harmony export */ });
/* harmony import */ var _mui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/core */ "./node_modules/@mui/core/index.js");

function getButtonUtilityClass(slot) {
  return (0,_mui_core__WEBPACK_IMPORTED_MODULE_0__.generateUtilityClass)('MuiButton', slot);
}
const buttonClasses = (0,_mui_core__WEBPACK_IMPORTED_MODULE_0__.generateUtilityClasses)('MuiButton', ['root', 'text', 'textInherit', 'textPrimary', 'textSecondary', 'outlined', 'outlinedInherit', 'outlinedPrimary', 'outlinedSecondary', 'contained', 'containedInherit', 'containedPrimary', 'containedSecondary', 'disableElevation', 'focusVisible', 'disabled', 'colorInherit', 'textSizeSmall', 'textSizeMedium', 'textSizeLarge', 'outlinedSizeSmall', 'outlinedSizeMedium', 'outlinedSizeLarge', 'containedSizeSmall', 'containedSizeMedium', 'containedSizeLarge', 'sizeMedium', 'sizeSmall', 'sizeLarge', 'fullWidth', 'startIcon', 'endIcon', 'iconSizeSmall', 'iconSizeMedium', 'iconSizeLarge']);
/* harmony default export */ __webpack_exports__["default"] = (buttonClasses);

/***/ }),

/***/ "./node_modules/@mui/material/Button/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@mui/material/Button/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "buttonClasses": function() { return /* reexport safe */ _buttonClasses__WEBPACK_IMPORTED_MODULE_1__.default; }
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _buttonClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonClasses */ "./node_modules/@mui/material/Button/buttonClasses.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _buttonClasses__WEBPACK_IMPORTED_MODULE_1__) if(["default","buttonClasses"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _buttonClasses__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);




/***/ }),

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
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
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
          lineNumber: 38,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
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
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {
        component: "h1",
        variant: "h5",
        children: "Please select a mode"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_11__.default, {
        dense: true,
        sx: {
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          mt: 2,
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
              lineNumber: 75,
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
                  lineNumber: 86,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16__.default, {
                id: labelId,
                primary: "".concat(value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 19
            }, _this)
          }, value, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_17__.default, {
        endIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ArrowForwardIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 20
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
        lineNumber: 99,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_17__.default, {
        startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ArrowBackIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 22
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
        lineNumber: 109,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW9kZS4wOWQxN2FlMzMyNTViZWUwY2M4NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9HO0FBQzFDO0FBQzFEO0FBQytCO0FBQ0k7QUFDWDtBQUM4QztBQUNsQztBQUM2QjtBQUNiO0FBQ2I7QUFDTTtBQUMwQjtBQUN2QjtBQUNFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLCtCQUErQixRQUFRLEVBQUUsMERBQVUsUUFBUSxVQUFVLDBEQUFVLE9BQU8sTUFBTSxRQUFRLE1BQU0sMERBQVUsT0FBTztBQUMzSDtBQUNBLHdDQUF3QywwREFBVSxPQUFPO0FBQ3pELG9DQUFvQywwREFBVSxPQUFPO0FBQ3JEO0FBQ0EsMEJBQTBCLGtFQUFjLFFBQVEsaUVBQXFCO0FBQ3JFLFNBQVMsMkVBQVEsR0FBRztBQUNwQjtBQUNBO0FBQ0EsdUNBQXVDLDJFQUFRLEdBQUc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxtQkFBbUIsdURBQU0sQ0FBQyxpREFBVTtBQUNwQyw2QkFBNkIscUVBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sK0RBQStELG1CQUFtQixFQUFFLDBEQUFVLG1CQUFtQixrQkFBa0IsMERBQVUsa0JBQWtCLGNBQWMsbUJBQW1CLE1BQU0sMERBQVUsa0JBQWtCO0FBQ2xPO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDLEtBQUssMkVBQVEsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGFBQWEsMkVBQVE7QUFDckI7QUFDQSxxQkFBcUIsbURBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FB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aUJBQVMsTUFGWDtBQUdFLGVBQU8sRUFBQyxVQUhWO0FBSUUsVUFBRSxFQUFFO0FBQUVBLFVBQUFBLEVBQUUsRUFBRTtBQUFOLFNBSk47QUFLRSxZQUFJLEVBQUMsR0FMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVGRDs7R0F2R3VCZjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvQnV0dG9uL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvQnV0dG9uL2J1dHRvbkNsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL0J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcclxuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XHJcbmNvbnN0IF9leGNsdWRlZCA9IFtcImNoaWxkcmVuXCIsIFwiY29sb3JcIiwgXCJjb21wb25lbnRcIiwgXCJkaXNhYmxlZFwiLCBcImRpc2FibGVFbGV2YXRpb25cIiwgXCJkaXNhYmxlRm9jdXNSaXBwbGVcIiwgXCJlbmRJY29uXCIsIFwiZm9jdXNWaXNpYmxlQ2xhc3NOYW1lXCIsIFwiZnVsbFdpZHRoXCIsIFwic2l6ZVwiLCBcInN0YXJ0SWNvblwiLCBcInR5cGVcIiwgXCJ2YXJpYW50XCJdO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyB1bnN0YWJsZV9jb21wb3NlQ2xhc3NlcyBhcyBjb21wb3NlQ2xhc3NlcyB9IGZyb20gJ0BtdWkvY29yZSc7XHJcbmltcG9ydCB7IGFscGhhIH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xyXG5pbXBvcnQgc3R5bGVkLCB7IHJvb3RTaG91bGRGb3J3YXJkUHJvcCB9IGZyb20gJy4uL3N0eWxlcy9zdHlsZWQnO1xyXG5pbXBvcnQgdXNlVGhlbWVQcm9wcyBmcm9tICcuLi9zdHlsZXMvdXNlVGhlbWVQcm9wcyc7XHJcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJy4uL0J1dHRvbkJhc2UnO1xyXG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcclxuaW1wb3J0IGJ1dHRvbkNsYXNzZXMsIHsgZ2V0QnV0dG9uVXRpbGl0eUNsYXNzIH0gZnJvbSAnLi9idXR0b25DbGFzc2VzJztcclxuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5cclxuY29uc3QgdXNlVXRpbGl0eUNsYXNzZXMgPSBvd25lclN0YXRlID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBjb2xvcixcclxuICAgIGRpc2FibGVFbGV2YXRpb24sXHJcbiAgICBmdWxsV2lkdGgsXHJcbiAgICBzaXplLFxyXG4gICAgdmFyaWFudCxcclxuICAgIGNsYXNzZXNcclxuICB9ID0gb3duZXJTdGF0ZTtcclxuICBjb25zdCBzbG90cyA9IHtcclxuICAgIHJvb3Q6IFsncm9vdCcsIHZhcmlhbnQsIGAke3ZhcmlhbnR9JHtjYXBpdGFsaXplKGNvbG9yKX1gLCBgc2l6ZSR7Y2FwaXRhbGl6ZShzaXplKX1gLCBgJHt2YXJpYW50fVNpemUke2NhcGl0YWxpemUoc2l6ZSl9YCwgY29sb3IgPT09ICdpbmhlcml0JyAmJiAnY29sb3JJbmhlcml0JywgZGlzYWJsZUVsZXZhdGlvbiAmJiAnZGlzYWJsZUVsZXZhdGlvbicsIGZ1bGxXaWR0aCAmJiAnZnVsbFdpZHRoJ10sXHJcbiAgICBsYWJlbDogWydsYWJlbCddLFxyXG4gICAgc3RhcnRJY29uOiBbJ3N0YXJ0SWNvbicsIGBpY29uU2l6ZSR7Y2FwaXRhbGl6ZShzaXplKX1gXSxcclxuICAgIGVuZEljb246IFsnZW5kSWNvbicsIGBpY29uU2l6ZSR7Y2FwaXRhbGl6ZShzaXplKX1gXVxyXG4gIH07XHJcbiAgY29uc3QgY29tcG9zZWRDbGFzc2VzID0gY29tcG9zZUNsYXNzZXMoc2xvdHMsIGdldEJ1dHRvblV0aWxpdHlDbGFzcywgY2xhc3Nlcyk7XHJcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBjbGFzc2VzLCBjb21wb3NlZENsYXNzZXMpO1xyXG59O1xyXG5cclxuY29uc3QgY29tbW9uSWNvblN0eWxlcyA9IG93bmVyU3RhdGUgPT4gX2V4dGVuZHMoe30sIG93bmVyU3RhdGUuc2l6ZSA9PT0gJ3NtYWxsJyAmJiB7XHJcbiAgJyYgPiAqOm50aC1vZi10eXBlKDEpJzoge1xyXG4gICAgZm9udFNpemU6IDE4XHJcbiAgfVxyXG59LCBvd25lclN0YXRlLnNpemUgPT09ICdtZWRpdW0nICYmIHtcclxuICAnJiA+ICo6bnRoLW9mLXR5cGUoMSknOiB7XHJcbiAgICBmb250U2l6ZTogMjBcclxuICB9XHJcbn0sIG93bmVyU3RhdGUuc2l6ZSA9PT0gJ2xhcmdlJyAmJiB7XHJcbiAgJyYgPiAqOm50aC1vZi10eXBlKDEpJzoge1xyXG4gICAgZm9udFNpemU6IDIyXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IEJ1dHRvblJvb3QgPSBzdHlsZWQoQnV0dG9uQmFzZSwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IHJvb3RTaG91bGRGb3J3YXJkUHJvcChwcm9wKSB8fCBwcm9wID09PSAnY2xhc3NlcycsXHJcbiAgbmFtZTogJ011aUJ1dHRvbicsXHJcbiAgc2xvdDogJ1Jvb3QnLFxyXG4gIG92ZXJyaWRlc1Jlc29sdmVyOiAocHJvcHMsIHN0eWxlcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBvd25lclN0YXRlXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gW3N0eWxlcy5yb290LCBzdHlsZXNbb3duZXJTdGF0ZS52YXJpYW50XSwgc3R5bGVzW2Ake293bmVyU3RhdGUudmFyaWFudH0ke2NhcGl0YWxpemUob3duZXJTdGF0ZS5jb2xvcil9YF0sIHN0eWxlc1tgc2l6ZSR7Y2FwaXRhbGl6ZShvd25lclN0YXRlLnNpemUpfWBdLCBzdHlsZXNbYCR7b3duZXJTdGF0ZS52YXJpYW50fVNpemUke2NhcGl0YWxpemUob3duZXJTdGF0ZS5zaXplKX1gXSwgb3duZXJTdGF0ZS5jb2xvciA9PT0gJ2luaGVyaXQnICYmIHN0eWxlcy5jb2xvckluaGVyaXQsIG93bmVyU3RhdGUuZGlzYWJsZUVsZXZhdGlvbiAmJiBzdHlsZXMuZGlzYWJsZUVsZXZhdGlvbiwgb3duZXJTdGF0ZS5mdWxsV2lkdGggJiYgc3R5bGVzLmZ1bGxXaWR0aF07XHJcbiAgfVxyXG59KSgoe1xyXG4gIHRoZW1lLFxyXG4gIG93bmVyU3RhdGVcclxufSkgPT4gX2V4dGVuZHMoe30sIHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLCB7XHJcbiAgbWluV2lkdGg6IDY0LFxyXG4gIHBhZGRpbmc6ICc2cHggMTZweCcsXHJcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnYmFja2dyb3VuZC1jb2xvcicsICdib3gtc2hhZG93JywgJ2JvcmRlci1jb2xvcicsICdjb2xvciddLCB7XHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRcclxuICB9KSxcclxuICAnJjpob3Zlcic6IF9leHRlbmRzKHtcclxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGFscGhhKHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LCB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3Zlck9wYWNpdHkpLFxyXG4gICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcclxuICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXHJcbiAgICB9XHJcbiAgfSwgb3duZXJTdGF0ZS52YXJpYW50ID09PSAndGV4dCcgJiYgb3duZXJTdGF0ZS5jb2xvciAhPT0gJ2luaGVyaXQnICYmIHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogYWxwaGEodGhlbWUucGFsZXR0ZVtvd25lclN0YXRlLmNvbG9yXS5tYWluLCB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3Zlck9wYWNpdHkpLFxyXG4gICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcclxuICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXHJcbiAgICB9XHJcbiAgfSwgb3duZXJTdGF0ZS52YXJpYW50ID09PSAnb3V0bGluZWQnICYmIG93bmVyU3RhdGUuY29sb3IgIT09ICdpbmhlcml0JyAmJiB7XHJcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlW293bmVyU3RhdGUuY29sb3JdLm1haW59YCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogYWxwaGEodGhlbWUucGFsZXR0ZVtvd25lclN0YXRlLmNvbG9yXS5tYWluLCB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3Zlck9wYWNpdHkpLFxyXG4gICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcclxuICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXHJcbiAgICB9XHJcbiAgfSwgb3duZXJTdGF0ZS52YXJpYW50ID09PSAnY29udGFpbmVkJyAmJiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleS5BMTAwLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzRdLFxyXG4gICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcclxuICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcclxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVszMDBdXHJcbiAgICB9XHJcbiAgfSwgb3duZXJTdGF0ZS52YXJpYW50ID09PSAnY29udGFpbmVkJyAmJiBvd25lclN0YXRlLmNvbG9yICE9PSAnaW5oZXJpdCcgJiYge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlW293bmVyU3RhdGUuY29sb3JdLmRhcmssXHJcbiAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxyXG4gICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGVbb3duZXJTdGF0ZS5jb2xvcl0ubWFpblxyXG4gICAgfVxyXG4gIH0pLFxyXG4gICcmOmFjdGl2ZSc6IF9leHRlbmRzKHt9LCBvd25lclN0YXRlLnZhcmlhbnQgPT09ICdjb250YWluZWQnICYmIHtcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s4XVxyXG4gIH0pLFxyXG4gIFtgJi4ke2J1dHRvbkNsYXNzZXMuZm9jdXNWaXNpYmxlfWBdOiBfZXh0ZW5kcyh7fSwgb3duZXJTdGF0ZS52YXJpYW50ID09PSAnY29udGFpbmVkJyAmJiB7XHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNl1cclxuICB9KSxcclxuICBbYCYuJHtidXR0b25DbGFzc2VzLmRpc2FibGVkfWBdOiBfZXh0ZW5kcyh7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWRcclxuICB9LCBvd25lclN0YXRlLnZhcmlhbnQgPT09ICdvdXRsaW5lZCcgJiYge1xyXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWRCYWNrZ3JvdW5kfWBcclxuICB9LCBvd25lclN0YXRlLnZhcmlhbnQgPT09ICdvdXRsaW5lZCcgJiYgb3duZXJTdGF0ZS5jb2xvciA9PT0gJ3NlY29uZGFyeScgJiYge1xyXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWR9YFxyXG4gIH0sIG93bmVyU3RhdGUudmFyaWFudCA9PT0gJ2NvbnRhaW5lZCcgJiYge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzBdLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZEJhY2tncm91bmRcclxuICB9KVxyXG59LCBvd25lclN0YXRlLnZhcmlhbnQgPT09ICd0ZXh0JyAmJiB7XHJcbiAgcGFkZGluZzogJzZweCA4cHgnXHJcbn0sIG93bmVyU3RhdGUudmFyaWFudCA9PT0gJ3RleHQnICYmIG93bmVyU3RhdGUuY29sb3IgIT09ICdpbmhlcml0JyAmJiB7XHJcbiAgY29sb3I6IHRoZW1lLnBhbGV0dGVbb3duZXJTdGF0ZS5jb2xvcl0ubWFpblxyXG59LCBvd25lclN0YXRlLnZhcmlhbnQgPT09ICdvdXRsaW5lZCcgJiYge1xyXG4gIHBhZGRpbmc6ICc1cHggMTVweCcsXHJcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnID8gJ3JnYmEoMCwgMCwgMCwgMC4yMyknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMyknfWBcclxufSwgb3duZXJTdGF0ZS52YXJpYW50ID09PSAnb3V0bGluZWQnICYmIG93bmVyU3RhdGUuY29sb3IgIT09ICdpbmhlcml0JyAmJiB7XHJcbiAgY29sb3I6IHRoZW1lLnBhbGV0dGVbb3duZXJTdGF0ZS5jb2xvcl0ubWFpbixcclxuICBib3JkZXI6IGAxcHggc29saWQgJHthbHBoYSh0aGVtZS5wYWxldHRlW293bmVyU3RhdGUuY29sb3JdLm1haW4sIDAuNSl9YFxyXG59LCBvd25lclN0YXRlLnZhcmlhbnQgPT09ICdjb250YWluZWQnICYmIHtcclxuICBjb2xvcjogdGhlbWUucGFsZXR0ZS5nZXRDb250cmFzdFRleHQodGhlbWUucGFsZXR0ZS5ncmV5WzMwMF0pLFxyXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzMwMF0sXHJcbiAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdXHJcbn0sIG93bmVyU3RhdGUudmFyaWFudCA9PT0gJ2NvbnRhaW5lZCcgJiYgb3duZXJTdGF0ZS5jb2xvciAhPT0gJ2luaGVyaXQnICYmIHtcclxuICBjb2xvcjogdGhlbWUucGFsZXR0ZVtvd25lclN0YXRlLmNvbG9yXS5jb250cmFzdFRleHQsXHJcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlW293bmVyU3RhdGUuY29sb3JdLm1haW5cclxufSwgb3duZXJTdGF0ZS5jb2xvciA9PT0gJ2luaGVyaXQnICYmIHtcclxuICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gIGJvcmRlckNvbG9yOiAnY3VycmVudENvbG9yJ1xyXG59LCBvd25lclN0YXRlLnNpemUgPT09ICdzbWFsbCcgJiYgb3duZXJTdGF0ZS52YXJpYW50ID09PSAndGV4dCcgJiYge1xyXG4gIHBhZGRpbmc6ICc0cHggNXB4JyxcclxuICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDEzKVxyXG59LCBvd25lclN0YXRlLnNpemUgPT09ICdsYXJnZScgJiYgb3duZXJTdGF0ZS52YXJpYW50ID09PSAndGV4dCcgJiYge1xyXG4gIHBhZGRpbmc6ICc4cHggMTFweCcsXHJcbiAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxNSlcclxufSwgb3duZXJTdGF0ZS5zaXplID09PSAnc21hbGwnICYmIG93bmVyU3RhdGUudmFyaWFudCA9PT0gJ291dGxpbmVkJyAmJiB7XHJcbiAgcGFkZGluZzogJzNweCA5cHgnLFxyXG4gIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTMpXHJcbn0sIG93bmVyU3RhdGUuc2l6ZSA9PT0gJ2xhcmdlJyAmJiBvd25lclN0YXRlLnZhcmlhbnQgPT09ICdvdXRsaW5lZCcgJiYge1xyXG4gIHBhZGRpbmc6ICc3cHggMjFweCcsXHJcbiAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxNSlcclxufSwgb3duZXJTdGF0ZS5zaXplID09PSAnc21hbGwnICYmIG93bmVyU3RhdGUudmFyaWFudCA9PT0gJ2NvbnRhaW5lZCcgJiYge1xyXG4gIHBhZGRpbmc6ICc0cHggMTBweCcsXHJcbiAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMylcclxufSwgb3duZXJTdGF0ZS5zaXplID09PSAnbGFyZ2UnICYmIG93bmVyU3RhdGUudmFyaWFudCA9PT0gJ2NvbnRhaW5lZCcgJiYge1xyXG4gIHBhZGRpbmc6ICc4cHggMjJweCcsXHJcbiAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxNSlcclxufSwgb3duZXJTdGF0ZS5mdWxsV2lkdGggJiYge1xyXG4gIHdpZHRoOiAnMTAwJSdcclxufSksICh7XHJcbiAgb3duZXJTdGF0ZVxyXG59KSA9PiBvd25lclN0YXRlLmRpc2FibGVFbGV2YXRpb24gJiYge1xyXG4gIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICcmOmhvdmVyJzoge1xyXG4gICAgYm94U2hhZG93OiAnbm9uZSdcclxuICB9LFxyXG4gIFtgJi4ke2J1dHRvbkNsYXNzZXMuZm9jdXNWaXNpYmxlfWBdOiB7XHJcbiAgICBib3hTaGFkb3c6ICdub25lJ1xyXG4gIH0sXHJcbiAgJyY6YWN0aXZlJzoge1xyXG4gICAgYm94U2hhZG93OiAnbm9uZSdcclxuICB9LFxyXG4gIFtgJi4ke2J1dHRvbkNsYXNzZXMuZGlzYWJsZWR9YF06IHtcclxuICAgIGJveFNoYWRvdzogJ25vbmUnXHJcbiAgfVxyXG59KTtcclxuY29uc3QgQnV0dG9uU3RhcnRJY29uID0gc3R5bGVkKCdzcGFuJywge1xyXG4gIG5hbWU6ICdNdWlCdXR0b24nLFxyXG4gIHNsb3Q6ICdTdGFydEljb24nLFxyXG4gIG92ZXJyaWRlc1Jlc29sdmVyOiAocHJvcHMsIHN0eWxlcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBvd25lclN0YXRlXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gW3N0eWxlcy5zdGFydEljb24sIHN0eWxlc1tgaWNvblNpemUke2NhcGl0YWxpemUob3duZXJTdGF0ZS5zaXplKX1gXV07XHJcbiAgfVxyXG59KSgoe1xyXG4gIG93bmVyU3RhdGVcclxufSkgPT4gX2V4dGVuZHMoe1xyXG4gIGRpc3BsYXk6ICdpbmhlcml0JyxcclxuICBtYXJnaW5SaWdodDogOCxcclxuICBtYXJnaW5MZWZ0OiAtNFxyXG59LCBvd25lclN0YXRlLnNpemUgPT09ICdzbWFsbCcgJiYge1xyXG4gIG1hcmdpbkxlZnQ6IC0yXHJcbn0sIGNvbW1vbkljb25TdHlsZXMob3duZXJTdGF0ZSkpKTtcclxuY29uc3QgQnV0dG9uRW5kSWNvbiA9IHN0eWxlZCgnc3BhbicsIHtcclxuICBuYW1lOiAnTXVpQnV0dG9uJyxcclxuICBzbG90OiAnRW5kSWNvbicsXHJcbiAgb3ZlcnJpZGVzUmVzb2x2ZXI6IChwcm9wcywgc3R5bGVzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG93bmVyU3RhdGVcclxuICAgIH0gPSBwcm9wcztcclxuICAgIHJldHVybiBbc3R5bGVzLmVuZEljb24sIHN0eWxlc1tgaWNvblNpemUke2NhcGl0YWxpemUob3duZXJTdGF0ZS5zaXplKX1gXV07XHJcbiAgfVxyXG59KSgoe1xyXG4gIG93bmVyU3RhdGVcclxufSkgPT4gX2V4dGVuZHMoe1xyXG4gIGRpc3BsYXk6ICdpbmhlcml0JyxcclxuICBtYXJnaW5SaWdodDogLTQsXHJcbiAgbWFyZ2luTGVmdDogOFxyXG59LCBvd25lclN0YXRlLnNpemUgPT09ICdzbWFsbCcgJiYge1xyXG4gIG1hcmdpblJpZ2h0OiAtMlxyXG59LCBjb21tb25JY29uU3R5bGVzKG93bmVyU3RhdGUpKSk7XHJcbmNvbnN0IEJ1dHRvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEJ1dHRvbihpblByb3BzLCByZWYpIHtcclxuICBjb25zdCBwcm9wcyA9IHVzZVRoZW1lUHJvcHMoe1xyXG4gICAgcHJvcHM6IGluUHJvcHMsXHJcbiAgICBuYW1lOiAnTXVpQnV0dG9uJ1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBjaGlsZHJlbixcclxuICAgIGNvbG9yID0gJ3ByaW1hcnknLFxyXG4gICAgY29tcG9uZW50ID0gJ2J1dHRvbicsXHJcbiAgICBkaXNhYmxlZCA9IGZhbHNlLFxyXG4gICAgZGlzYWJsZUVsZXZhdGlvbiA9IGZhbHNlLFxyXG4gICAgZGlzYWJsZUZvY3VzUmlwcGxlID0gZmFsc2UsXHJcbiAgICBlbmRJY29uOiBlbmRJY29uUHJvcCxcclxuICAgIGZvY3VzVmlzaWJsZUNsYXNzTmFtZSxcclxuICAgIGZ1bGxXaWR0aCA9IGZhbHNlLFxyXG4gICAgc2l6ZSA9ICdtZWRpdW0nLFxyXG4gICAgc3RhcnRJY29uOiBzdGFydEljb25Qcm9wLFxyXG4gICAgdHlwZSxcclxuICAgIHZhcmlhbnQgPSAndGV4dCdcclxuICB9ID0gcHJvcHMsXHJcbiAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkKTtcclxuXHJcbiAgY29uc3Qgb3duZXJTdGF0ZSA9IF9leHRlbmRzKHt9LCBwcm9wcywge1xyXG4gICAgY29sb3IsXHJcbiAgICBjb21wb25lbnQsXHJcbiAgICBkaXNhYmxlZCxcclxuICAgIGRpc2FibGVFbGV2YXRpb24sXHJcbiAgICBkaXNhYmxlRm9jdXNSaXBwbGUsXHJcbiAgICBmdWxsV2lkdGgsXHJcbiAgICBzaXplLFxyXG4gICAgdHlwZSxcclxuICAgIHZhcmlhbnRcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVV0aWxpdHlDbGFzc2VzKG93bmVyU3RhdGUpO1xyXG5cclxuICBjb25zdCBzdGFydEljb24gPSBzdGFydEljb25Qcm9wICYmIC8qI19fUFVSRV9fKi9fanN4KEJ1dHRvblN0YXJ0SWNvbiwge1xyXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnN0YXJ0SWNvbixcclxuICAgIG93bmVyU3RhdGU6IG93bmVyU3RhdGUsXHJcbiAgICBjaGlsZHJlbjogc3RhcnRJY29uUHJvcFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBlbmRJY29uID0gZW5kSWNvblByb3AgJiYgLyojX19QVVJFX18qL19qc3goQnV0dG9uRW5kSWNvbiwge1xyXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmVuZEljb24sXHJcbiAgICBvd25lclN0YXRlOiBvd25lclN0YXRlLFxyXG4gICAgY2hpbGRyZW46IGVuZEljb25Qcm9wXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeHMoQnV0dG9uUm9vdCwgX2V4dGVuZHMoe1xyXG4gICAgb3duZXJTdGF0ZTogb3duZXJTdGF0ZSxcclxuICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxyXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxyXG4gICAgZm9jdXNSaXBwbGU6ICFkaXNhYmxlRm9jdXNSaXBwbGUsXHJcbiAgICBmb2N1c1Zpc2libGVDbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5mb2N1c1Zpc2libGUsIGZvY3VzVmlzaWJsZUNsYXNzTmFtZSksXHJcbiAgICByZWY6IHJlZixcclxuICAgIHR5cGU6IHR5cGVcclxuICB9LCBvdGhlciwge1xyXG4gICAgY2xhc3NlczogY2xhc3NlcyxcclxuICAgIGNoaWxkcmVuOiBbc3RhcnRJY29uLCBjaGlsZHJlbiwgZW5kSWNvbl1cclxuICB9KSk7XHJcbn0pO1xyXG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBCdXR0b24ucHJvcFR5cGVzXHJcbi8qIHJlbW92ZS1wcm9wdHlwZXMgKi9cclxuPSB7XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcclxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG5cclxuICAvKipcclxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxyXG4gICAqIEBkZWZhdWx0ICdwcmltYXJ5J1xyXG4gICAqL1xyXG4gIGNvbG9yOiBQcm9wVHlwZXNcclxuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXHJcbiAgLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnaW5oZXJpdCcsICdwcmltYXJ5JywgJ3NlY29uZGFyeScsICdzdWNjZXNzJywgJ2Vycm9yJywgJ2luZm8nLCAnd2FybmluZyddKSwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG5cclxuICAvKipcclxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXHJcbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cclxuICAgKi9cclxuICBjb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgYHRydWVgLCB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLlxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAvKipcclxuICAgKiBJZiBgdHJ1ZWAsIG5vIGVsZXZhdGlvbiBpcyB1c2VkLlxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgZGlzYWJsZUVsZXZhdGlvbjogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gIC8qKlxyXG4gICAqIElmIGB0cnVlYCwgdGhlICBrZXlib2FyZCBmb2N1cyByaXBwbGUgaXMgZGlzYWJsZWQuXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKi9cclxuICBkaXNhYmxlRm9jdXNSaXBwbGU6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAvKipcclxuICAgKiBJZiBgdHJ1ZWAsIHRoZSByaXBwbGUgZWZmZWN0IGlzIGRpc2FibGVkLlxyXG4gICAqXHJcbiAgICog4pqg77iPIFdpdGhvdXQgYSByaXBwbGUgdGhlcmUgaXMgbm8gc3R5bGluZyBmb3IgOmZvY3VzLXZpc2libGUgYnkgZGVmYXVsdC4gQmUgc3VyZVxyXG4gICAqIHRvIGhpZ2hsaWdodCB0aGUgZWxlbWVudCBieSBhcHBseWluZyBzZXBhcmF0ZSBzdHlsZXMgd2l0aCB0aGUgYC5NdWktZm9jdXNWaXNpYmxlYCBjbGFzcy5cclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqL1xyXG4gIGRpc2FibGVSaXBwbGU6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAvKipcclxuICAgKiBFbGVtZW50IHBsYWNlZCBhZnRlciB0aGUgY2hpbGRyZW4uXHJcbiAgICovXHJcbiAgZW5kSWNvbjogUHJvcFR5cGVzLm5vZGUsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBmb2N1c1Zpc2libGVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gIC8qKlxyXG4gICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqL1xyXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgKiBJZiBkZWZpbmVkLCBhbiBgYWAgZWxlbWVudCB3aWxsIGJlIHVzZWQgYXMgdGhlIHJvb3Qgbm9kZS5cclxuICAgKi9cclxuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAvKipcclxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgY29tcG9uZW50LlxyXG4gICAqIGBzbWFsbGAgaXMgZXF1aXZhbGVudCB0byB0aGUgZGVuc2UgYnV0dG9uIHN0eWxpbmcuXHJcbiAgICogQGRlZmF1bHQgJ21lZGl1bSdcclxuICAgKi9cclxuICBzaXplOiBQcm9wVHlwZXNcclxuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXHJcbiAgLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcblxyXG4gIC8qKlxyXG4gICAqIEVsZW1lbnQgcGxhY2VkIGJlZm9yZSB0aGUgY2hpbGRyZW4uXHJcbiAgICovXHJcbiAgc3RhcnRJY29uOiBQcm9wVHlwZXMubm9kZSxcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHN5c3RlbSBwcm9wIHRoYXQgYWxsb3dzIGRlZmluaW5nIHN5c3RlbSBvdmVycmlkZXMgYXMgd2VsbCBhcyBhZGRpdGlvbmFsIENTUyBzdHlsZXMuXHJcbiAgICovXHJcbiAgc3g6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICB0eXBlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydidXR0b24nLCAncmVzZXQnLCAnc3VibWl0J10pLCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cclxuICAgKiBAZGVmYXVsdCAndGV4dCdcclxuICAgKi9cclxuICB2YXJpYW50OiBQcm9wVHlwZXNcclxuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXHJcbiAgLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnY29udGFpbmVkJywgJ291dGxpbmVkJywgJ3RleHQnXSksIFByb3BUeXBlcy5zdHJpbmddKVxyXG59IDogdm9pZCAwO1xyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247IiwiaW1wb3J0IHsgZ2VuZXJhdGVVdGlsaXR5Q2xhc3MsIGdlbmVyYXRlVXRpbGl0eUNsYXNzZXMgfSBmcm9tICdAbXVpL2NvcmUnO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnV0dG9uVXRpbGl0eUNsYXNzKHNsb3QpIHtcclxuICByZXR1cm4gZ2VuZXJhdGVVdGlsaXR5Q2xhc3MoJ011aUJ1dHRvbicsIHNsb3QpO1xyXG59XHJcbmNvbnN0IGJ1dHRvbkNsYXNzZXMgPSBnZW5lcmF0ZVV0aWxpdHlDbGFzc2VzKCdNdWlCdXR0b24nLCBbJ3Jvb3QnLCAndGV4dCcsICd0ZXh0SW5oZXJpdCcsICd0ZXh0UHJpbWFyeScsICd0ZXh0U2Vjb25kYXJ5JywgJ291dGxpbmVkJywgJ291dGxpbmVkSW5oZXJpdCcsICdvdXRsaW5lZFByaW1hcnknLCAnb3V0bGluZWRTZWNvbmRhcnknLCAnY29udGFpbmVkJywgJ2NvbnRhaW5lZEluaGVyaXQnLCAnY29udGFpbmVkUHJpbWFyeScsICdjb250YWluZWRTZWNvbmRhcnknLCAnZGlzYWJsZUVsZXZhdGlvbicsICdmb2N1c1Zpc2libGUnLCAnZGlzYWJsZWQnLCAnY29sb3JJbmhlcml0JywgJ3RleHRTaXplU21hbGwnLCAndGV4dFNpemVNZWRpdW0nLCAndGV4dFNpemVMYXJnZScsICdvdXRsaW5lZFNpemVTbWFsbCcsICdvdXRsaW5lZFNpemVNZWRpdW0nLCAnb3V0bGluZWRTaXplTGFyZ2UnLCAnY29udGFpbmVkU2l6ZVNtYWxsJywgJ2NvbnRhaW5lZFNpemVNZWRpdW0nLCAnY29udGFpbmVkU2l6ZUxhcmdlJywgJ3NpemVNZWRpdW0nLCAnc2l6ZVNtYWxsJywgJ3NpemVMYXJnZScsICdmdWxsV2lkdGgnLCAnc3RhcnRJY29uJywgJ2VuZEljb24nLCAnaWNvblNpemVTbWFsbCcsICdpY29uU2l6ZU1lZGl1bScsICdpY29uU2l6ZUxhcmdlJ10pO1xyXG5leHBvcnQgZGVmYXVsdCBidXR0b25DbGFzc2VzOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0J1dHRvbic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYnV0dG9uQ2xhc3NlcyB9IGZyb20gJy4vYnV0dG9uQ2xhc3Nlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYnV0dG9uQ2xhc3Nlcyc7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DaGVja2JveFwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1CdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1CdXR0b25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtQXZhdGFyXCI7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3NcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBQbGF5QXJyb3dJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlBcnJvd1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tib3hMaXN0U2Vjb25kYXJ5KCkge1xyXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlKFsxXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICh2YWx1ZSkgPT4gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gY2hlY2tlZC5pbmRleE9mKHZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0NoZWNrZWQgPSBbLi4uY2hlY2tlZF07XHJcblxyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgbmV3Q2hlY2tlZC5wdXNoKHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld0NoZWNrZWQuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hlY2tlZChuZXdDaGVja2VkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJzbVwiPlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIj5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICBTZW5zb1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcblxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxBdmF0YXIgc3g9e3sgbXQ6IDEwLCBtYjogMSwgYmdjb2xvcjogXCJzZWNvbmRhcnkubWFpblwiIH19PlxyXG4gICAgICAgICAgPFNldHRpbmdzSWNvbiAvPlxyXG4gICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICBQbGVhc2Ugc2VsZWN0IGEgbW9kZVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIGRlbnNlXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiAzNjAsXHJcbiAgICAgICAgICAgIGJnY29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxyXG4gICAgICAgICAgICBtdDogMixcclxuICAgICAgICAgICAgbWw6IC0yLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7W1wiQ29sb3JzXCIsIFwiQW5pbWFsIHNvdW5kc1wiLCBcIk11c2ljIGluc3RydW1lbnRzXCIsIFwiUmFuZG9tXCJdLm1hcChcclxuICAgICAgICAgICAgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbGFiZWxJZCA9IGBjaGVja2JveC1saXN0LXNlY29uZGFyeS1sYWJlbC0ke3ZhbHVlfWA7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb249e1xyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWQuaW5kZXhPZih2YWx1ZSkgIT09IC0xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbElkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlUGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtcjogMiwgd2lkdGg6IDU2LCBoZWlnaHQ6IDU2IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9zdGF0aWMvaW1hZ2VzLyR7dmFsdWV9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpZD17bGFiZWxJZH0gcHJpbWFyeT17YCR7dmFsdWV9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0xpc3Q+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRJY29uIC8+fVxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgc3g9e3sgbXQ6IDQgfX1cclxuICAgICAgICAgIGhyZWY9XCIvbW9kZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ29udGludWVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBzdGFydEljb249ezxBcnJvd0JhY2tJY29uIC8+fVxyXG4gICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgc3g9e3sgbXQ6IDIgfX1cclxuICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBCYWNrXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBCYXIiLCJBdmF0YXIiLCJCdXR0b24iLCJDaGVja2JveCIsIkJveCIsIkNvbnRhaW5lciIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1UZXh0IiwiTGlzdEl0ZW1BdmF0YXIiLCJTZXR0aW5nc0ljb24iLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIlBsYXlBcnJvd0ljb24iLCJDaGVja2JveExpc3RTZWNvbmRhcnkiLCJ1c2VTdGF0ZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiaGFuZGxlVG9nZ2xlIiwidmFsdWUiLCJjdXJyZW50SW5kZXgiLCJpbmRleE9mIiwibmV3Q2hlY2tlZCIsInB1c2giLCJzcGxpY2UiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwibWIiLCJiZ2NvbG9yIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1sIiwibWFwIiwibGFiZWxJZCIsIm1yIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==
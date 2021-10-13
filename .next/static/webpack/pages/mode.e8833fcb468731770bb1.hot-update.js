"use strict";
self["webpackHotUpdate_N_E"]("pages/mode",{

/***/ "./node_modules/@mui/material/Box/Box.js":
/*!***********************************************!*\
  !*** ./node_modules/@mui/material/Box/Box.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ "./node_modules/@mui/material/styles/index.js");


const defaultTheme = (0,_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)();
/**
 * @ignore - do not document.
 */

const Box = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.createBox)({
  defaultTheme
});
/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./node_modules/@mui/material/Box/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@mui/material/Box/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Box__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ "./node_modules/@mui/material/Box/Box.js");


/***/ }),

/***/ "./node_modules/@mui/material/styles/ThemeProvider.js":
/*!************************************************************!*\
  !*** ./node_modules/@mui/material/styles/ThemeProvider.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider; }
/* harmony export */ });
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/index.js");


/***/ }),

/***/ "./node_modules/@mui/material/styles/adaptV4Theme.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/material/styles/adaptV4Theme.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ adaptV4Theme; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/index.js");


const _excluded = ["defaultProps", "mixins", "overrides", "palette", "props", "styleOverrides"],
      _excluded2 = ["type", "mode"];

function adaptV4Theme(inputTheme) {
  if (true) {
    console.warn(['MUI: adaptV4Theme() is deprecated.', 'Follow the upgrade guide on https://mui.com/r/migration-v4#theme.'].join('\n'));
  }

  const {
    defaultProps = {},
    mixins = {},
    overrides = {},
    palette = {},
    props = {},
    styleOverrides = {}
  } = inputTheme,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(inputTheme, _excluded);

  const theme = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, other, {
    components: {}
  }); // default props


  Object.keys(defaultProps).forEach(component => {
    const componentValue = theme.components[component] || {};
    componentValue.defaultProps = defaultProps[component];
    theme.components[component] = componentValue;
  });
  Object.keys(props).forEach(component => {
    const componentValue = theme.components[component] || {};
    componentValue.defaultProps = props[component];
    theme.components[component] = componentValue;
  }); // css overrides

  Object.keys(styleOverrides).forEach(component => {
    const componentValue = theme.components[component] || {};
    componentValue.styleOverrides = styleOverrides[component];
    theme.components[component] = componentValue;
  });
  Object.keys(overrides).forEach(component => {
    const componentValue = theme.components[component] || {};
    componentValue.styleOverrides = overrides[component];
    theme.components[component] = componentValue;
  }); // theme.spacing

  theme.spacing = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.createSpacing)(inputTheme.spacing); // theme.mixins.gutters

  const breakpoints = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.createBreakpoints)(inputTheme.breakpoints || {});
  const spacing = theme.spacing;
  theme.mixins = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    gutters: (styles = {}) => {
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, {
        [breakpoints.up('sm')]: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
          paddingLeft: spacing(3),
          paddingRight: spacing(3)
        }, styles[breakpoints.up('sm')])
      });
    }
  }, mixins);

  const {
    type: typeInput,
    mode: modeInput
  } = palette,
        paletteRest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(palette, _excluded2);

  const finalMode = modeInput || typeInput || 'light';
  theme.palette = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // theme.palette.text.hint
    text: {
      hint: finalMode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.38)'
    },
    mode: finalMode,
    type: finalMode
  }, paletteRest);
  return theme;
}

/***/ }),

/***/ "./node_modules/@mui/material/styles/createMuiStrictModeTheme.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@mui/material/styles/createMuiStrictModeTheme.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createMuiStrictModeTheme; }
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/index.js");
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@mui/material/styles/createTheme.js");


function createMuiStrictModeTheme(options, ...args) {
  return (0,_createTheme__WEBPACK_IMPORTED_MODULE_0__.default)((0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.deepmerge)({
    unstable_strictMode: true
  }, options), ...args);
}

/***/ }),

/***/ "./node_modules/@mui/material/styles/createStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/material/styles/createStyles.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createStyles; }
/* harmony export */ });
let warnedOnce = false; // To remove in v6

function createStyles(styles) {
  if (!warnedOnce) {
    console.warn(['MUI: createStyles from @mui/material/styles is deprecated.', 'Please use @mui/styles/createStyles'].join('\n'));
    warnedOnce = true;
  }

  return styles;
}

/***/ }),

/***/ "./node_modules/@mui/material/styles/cssUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/material/styles/cssUtils.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUnitless": function() { return /* binding */ isUnitless; },
/* harmony export */   "getUnit": function() { return /* binding */ getUnit; },
/* harmony export */   "toUnitless": function() { return /* binding */ toUnitless; },
/* harmony export */   "convertLength": function() { return /* binding */ convertLength; },
/* harmony export */   "alignProperty": function() { return /* binding */ alignProperty; },
/* harmony export */   "fontGrid": function() { return /* binding */ fontGrid; },
/* harmony export */   "responsiveProperty": function() { return /* binding */ responsiveProperty; }
/* harmony export */ });
function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
} // Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"

function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
} // Emulate the sass function "unitless"

function toUnitless(length) {
  return parseFloat(length);
} // Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length

function convertLength(baseFontSize) {
  return (length, toUnit) => {
    const fromUnit = getUnit(length); // Optimize for cases where `from` and `to` units are accidentally the same.

    if (fromUnit === toUnit) {
      return length;
    } // Convert input length to pixels.


    let pxLength = toUnitless(length);

    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      }
    } // Convert length in pixels to the output unit


    let outputLength = pxLength;

    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }

    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty({
  size,
  grid
}) {
  const sizeBelow = size - size % grid;
  const sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
} // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height

function fontGrid({
  lineHeight,
  pixels,
  htmlFontSize
}) {
  return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */

function responsiveProperty({
  cssProperty,
  min,
  max,
  unit = 'rem',
  breakpoints = [600, 900, 1200],
  transform = null
}) {
  const output = {
    [cssProperty]: `${min}${unit}`
  };
  const factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(breakpoint => {
    let value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output[`@media (min-width:${breakpoint}px)`] = {
      [cssProperty]: `${Math.round(value * 10000) / 10000}${unit}`
    };
  });
  return output;
}

/***/ }),

/***/ "./node_modules/@mui/material/styles/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@mui/material/styles/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adaptV4Theme": function() { return /* reexport safe */ _adaptV4Theme__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "hexToRgb": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.hexToRgb; },
/* harmony export */   "rgbToHex": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.rgbToHex; },
/* harmony export */   "hslToRgb": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.hslToRgb; },
/* harmony export */   "decomposeColor": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.decomposeColor; },
/* harmony export */   "recomposeColor": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.recomposeColor; },
/* harmony export */   "getContrastRatio": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.getContrastRatio; },
/* harmony export */   "getLuminance": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.getLuminance; },
/* harmony export */   "emphasize": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.emphasize; },
/* harmony export */   "alpha": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.alpha; },
/* harmony export */   "darken": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.darken; },
/* harmony export */   "lighten": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.lighten; },
/* harmony export */   "createTheme": function() { return /* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "createMuiTheme": function() { return /* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_2__.createMuiTheme; },
/* harmony export */   "unstable_createMuiStrictModeTheme": function() { return /* reexport safe */ _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "createStyles": function() { return /* reexport safe */ _createStyles__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "unstable_getUnit": function() { return /* reexport safe */ _cssUtils__WEBPACK_IMPORTED_MODULE_5__.getUnit; },
/* harmony export */   "unstable_toUnitless": function() { return /* reexport safe */ _cssUtils__WEBPACK_IMPORTED_MODULE_5__.toUnitless; },
/* harmony export */   "responsiveFontSizes": function() { return /* reexport safe */ _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "duration": function() { return /* reexport safe */ _createTransitions__WEBPACK_IMPORTED_MODULE_7__.duration; },
/* harmony export */   "easing": function() { return /* reexport safe */ _createTransitions__WEBPACK_IMPORTED_MODULE_7__.easing; },
/* harmony export */   "useTheme": function() { return /* reexport safe */ _useTheme__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "useThemeProps": function() { return /* reexport safe */ _useThemeProps__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "styled": function() { return /* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "experimentalStyled": function() { return /* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "ThemeProvider": function() { return /* reexport safe */ _ThemeProvider__WEBPACK_IMPORTED_MODULE_11__.default; },
/* harmony export */   "StyledEngineProvider": function() { return /* reexport safe */ _mui_system__WEBPACK_IMPORTED_MODULE_1__.StyledEngineProvider; },
/* harmony export */   "makeStyles": function() { return /* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_12__.default; },
/* harmony export */   "withStyles": function() { return /* reexport safe */ _withStyles__WEBPACK_IMPORTED_MODULE_13__.default; },
/* harmony export */   "withTheme": function() { return /* reexport safe */ _withTheme__WEBPACK_IMPORTED_MODULE_14__.default; }
/* harmony export */ });
/* harmony import */ var _adaptV4Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adaptV4Theme */ "./node_modules/@mui/material/styles/adaptV4Theme.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/index.js");
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@mui/material/styles/createTheme.js");
/* harmony import */ var _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createMuiStrictModeTheme */ "./node_modules/@mui/material/styles/createMuiStrictModeTheme.js");
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@mui/material/styles/createStyles.js");
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cssUtils */ "./node_modules/@mui/material/styles/cssUtils.js");
/* harmony import */ var _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./responsiveFontSizes */ "./node_modules/@mui/material/styles/responsiveFontSizes.js");
/* harmony import */ var _createTransitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createTransitions */ "./node_modules/@mui/material/styles/createTransitions.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _useThemeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/@mui/material/styles/ThemeProvider.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@mui/material/styles/makeStyles.js");
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@mui/material/styles/withStyles.js");
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@mui/material/styles/withTheme.js");













 // The legacy utilities from @mui/styles
// These are just empty functions that throws when invoked





/***/ }),

/***/ "./node_modules/@mui/material/styles/makeStyles.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/material/styles/makeStyles.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ makeStyles; }
/* harmony export */ });

function makeStyles() {
  throw new Error( true ? `MUI: makeStyles is not longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#material-ui-core-styles for more details.` : 0);
}

/***/ }),

/***/ "./node_modules/@mui/material/styles/responsiveFontSizes.js":
/*!******************************************************************!*\
  !*** ./node_modules/@mui/material/styles/responsiveFontSizes.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ responsiveFontSizes; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssUtils */ "./node_modules/@mui/material/styles/cssUtils.js");



function responsiveFontSizes(themeInput, options = {}) {
  const {
    breakpoints = ['sm', 'md', 'lg'],
    disableAlign = false,
    factor = 2,
    variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline']
  } = options;

  const theme = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, themeInput);

  theme.typography = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, theme.typography);
  const typography = theme.typography; // Convert between css lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).

  const convert = (0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.convertLength)(typography.htmlFontSize);
  const breakpointValues = breakpoints.map(x => theme.breakpoints.values[x]);
  variants.forEach(variant => {
    const style = typography[variant];
    const remFontSize = parseFloat(convert(style.fontSize, 'rem'));

    if (remFontSize <= 1) {
      return;
    }

    const maxFontSize = remFontSize;
    const minFontSize = 1 + (maxFontSize - 1) / factor;
    let {
      lineHeight
    } = style;

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.isUnitless)(lineHeight) && !disableAlign) {
      throw new Error( true ? `MUI: Unsupported non-unitless line height with grid alignment.
Use unitless line heights instead.` : 0);
    }

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.isUnitless)(lineHeight)) {
      // make it unitless
      lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
    }

    let transform = null;

    if (!disableAlign) {
      transform = value => (0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.alignProperty)({
        size: value,
        grid: (0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.fontGrid)({
          pixels: 4,
          lineHeight,
          htmlFontSize: typography.htmlFontSize
        })
      });
    }

    typography[variant] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, style, (0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.responsiveProperty)({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      transform
    }));
  });
  return theme;
}

/***/ }),

/***/ "./node_modules/@mui/material/styles/withStyles.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/material/styles/withStyles.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ withStyles; }
/* harmony export */ });

function withStyles() {
  throw new Error( true ? `MUI: withStyles is not longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#material-ui-core-styles for more details.` : 0);
}

/***/ }),

/***/ "./node_modules/@mui/material/styles/withTheme.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/material/styles/withTheme.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ withTheme; }
/* harmony export */ });

function withTheme() {
  throw new Error( true ? `MUI: withTheme is not longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#material-ui-core-styles for more details.` : 0);
}

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
          lineNumber: 36,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
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
          bgcolor: "secondary.main"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {
        component: "h1",
        variant: "h5",
        children: "A few more things"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_11__.default, {
        dense: true,
        sx: {
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          mt: 10,
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
              lineNumber: 73,
              columnNumber: 19
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
                  lineNumber: 84,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16__.default, {
                id: labelId,
                primary: "".concat(value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, _this)
          }, value, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW9kZS5lODgzM2ZjYjQ2ODczMTc3MGJiMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNBO0FBQ3hDLHFCQUFxQixvREFBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQVM7QUFDckI7QUFDQSxDQUFDO0FBQ0QsK0RBQWUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWd0M7QUFDMEM7QUFDcEc7QUFDQTtBQUMrRDtBQUNoRDtBQUNmLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsY0FBYztBQUNkO0FBQ0EsSUFBSTtBQUNKLGdCQUFnQixnR0FBNkI7QUFDN0M7QUFDQSxnQkFBZ0IsMkVBQVEsR0FBRztBQUMzQjtBQUNBLEdBQUcsR0FBRztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUc7QUFDTjtBQUNBLGtCQUFrQiwwREFBYSxzQkFBc0I7QUFDckQ7QUFDQSxzQkFBc0IsOERBQWlCLDZCQUE2QjtBQUNwRTtBQUNBLGlCQUFpQiwyRUFBUTtBQUN6Qix5QkFBeUI7QUFDekIsYUFBYSwyRUFBUTtBQUNyQjtBQUNBO0FBQ0EsT0FBTztBQUNQLGdDQUFnQywyRUFBUTtBQUN4QztBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixzQkFBc0IsZ0dBQTZCO0FBQ25EO0FBQ0E7QUFDQSxrQkFBa0IsMkVBQVE7QUFDMUI7QUFD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L19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9Cb3gvQm94LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvYWRhcHRWNFRoZW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvY3JlYXRlU3R5bGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvY3NzVXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvc3R5bGVzL21ha2VTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9yZXNwb25zaXZlRm9udFNpemVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvd2l0aFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvc3R5bGVzL3dpdGhUaGVtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVCb3ggfSBmcm9tICdAbXVpL3N5c3RlbSc7XHJcbmltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnLi4vc3R5bGVzJztcclxuY29uc3QgZGVmYXVsdFRoZW1lID0gY3JlYXRlVGhlbWUoKTtcclxuLyoqXHJcbiAqIEBpZ25vcmUgLSBkbyBub3QgZG9jdW1lbnQuXHJcbiAqL1xyXG5cclxuY29uc3QgQm94ID0gY3JlYXRlQm94KHtcclxuICBkZWZhdWx0VGhlbWVcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IEJveDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcclxuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XHJcbmNvbnN0IF9leGNsdWRlZCA9IFtcImRlZmF1bHRQcm9wc1wiLCBcIm1peGluc1wiLCBcIm92ZXJyaWRlc1wiLCBcInBhbGV0dGVcIiwgXCJwcm9wc1wiLCBcInN0eWxlT3ZlcnJpZGVzXCJdLFxyXG4gICAgICBfZXhjbHVkZWQyID0gW1widHlwZVwiLCBcIm1vZGVcIl07XHJcbmltcG9ydCB7IGNyZWF0ZUJyZWFrcG9pbnRzLCBjcmVhdGVTcGFjaW5nIH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGFwdFY0VGhlbWUoaW5wdXRUaGVtZSkge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICBjb25zb2xlLndhcm4oWydNVUk6IGFkYXB0VjRUaGVtZSgpIGlzIGRlcHJlY2F0ZWQuJywgJ0ZvbGxvdyB0aGUgdXBncmFkZSBndWlkZSBvbiBodHRwczovL211aS5jb20vci9taWdyYXRpb24tdjQjdGhlbWUuJ10uam9pbignXFxuJykpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qge1xyXG4gICAgZGVmYXVsdFByb3BzID0ge30sXHJcbiAgICBtaXhpbnMgPSB7fSxcclxuICAgIG92ZXJyaWRlcyA9IHt9LFxyXG4gICAgcGFsZXR0ZSA9IHt9LFxyXG4gICAgcHJvcHMgPSB7fSxcclxuICAgIHN0eWxlT3ZlcnJpZGVzID0ge31cclxuICB9ID0gaW5wdXRUaGVtZSxcclxuICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKGlucHV0VGhlbWUsIF9leGNsdWRlZCk7XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gX2V4dGVuZHMoe30sIG90aGVyLCB7XHJcbiAgICBjb21wb25lbnRzOiB7fVxyXG4gIH0pOyAvLyBkZWZhdWx0IHByb3BzXHJcblxyXG5cclxuICBPYmplY3Qua2V5cyhkZWZhdWx0UHJvcHMpLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgIGNvbnN0IGNvbXBvbmVudFZhbHVlID0gdGhlbWUuY29tcG9uZW50c1tjb21wb25lbnRdIHx8IHt9O1xyXG4gICAgY29tcG9uZW50VmFsdWUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzW2NvbXBvbmVudF07XHJcbiAgICB0aGVtZS5jb21wb25lbnRzW2NvbXBvbmVudF0gPSBjb21wb25lbnRWYWx1ZTtcclxuICB9KTtcclxuICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgY29uc3QgY29tcG9uZW50VmFsdWUgPSB0aGVtZS5jb21wb25lbnRzW2NvbXBvbmVudF0gfHwge307XHJcbiAgICBjb21wb25lbnRWYWx1ZS5kZWZhdWx0UHJvcHMgPSBwcm9wc1tjb21wb25lbnRdO1xyXG4gICAgdGhlbWUuY29tcG9uZW50c1tjb21wb25lbnRdID0gY29tcG9uZW50VmFsdWU7XHJcbiAgfSk7IC8vIGNzcyBvdmVycmlkZXNcclxuXHJcbiAgT2JqZWN0LmtleXMoc3R5bGVPdmVycmlkZXMpLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgIGNvbnN0IGNvbXBvbmVudFZhbHVlID0gdGhlbWUuY29tcG9uZW50c1tjb21wb25lbnRdIHx8IHt9O1xyXG4gICAgY29tcG9uZW50VmFsdWUuc3R5bGVPdmVycmlkZXMgPSBzdHlsZU92ZXJyaWRlc1tjb21wb25lbnRdO1xyXG4gICAgdGhlbWUuY29tcG9uZW50c1tjb21wb25lbnRdID0gY29tcG9uZW50VmFsdWU7XHJcbiAgfSk7XHJcbiAgT2JqZWN0LmtleXMob3ZlcnJpZGVzKS5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRWYWx1ZSA9IHRoZW1lLmNvbXBvbmVudHNbY29tcG9uZW50XSB8fCB7fTtcclxuICAgIGNvbXBvbmVudFZhbHVlLnN0eWxlT3ZlcnJpZGVzID0gb3ZlcnJpZGVzW2NvbXBvbmVudF07XHJcbiAgICB0aGVtZS5jb21wb25lbnRzW2NvbXBvbmVudF0gPSBjb21wb25lbnRWYWx1ZTtcclxuICB9KTsgLy8gdGhlbWUuc3BhY2luZ1xyXG5cclxuICB0aGVtZS5zcGFjaW5nID0gY3JlYXRlU3BhY2luZyhpbnB1dFRoZW1lLnNwYWNpbmcpOyAvLyB0aGVtZS5taXhpbnMuZ3V0dGVyc1xyXG5cclxuICBjb25zdCBicmVha3BvaW50cyA9IGNyZWF0ZUJyZWFrcG9pbnRzKGlucHV0VGhlbWUuYnJlYWtwb2ludHMgfHwge30pO1xyXG4gIGNvbnN0IHNwYWNpbmcgPSB0aGVtZS5zcGFjaW5nO1xyXG4gIHRoZW1lLm1peGlucyA9IF9leHRlbmRzKHtcclxuICAgIGd1dHRlcnM6IChzdHlsZXMgPSB7fSkgPT4ge1xyXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nKDIpLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogc3BhY2luZygyKVxyXG4gICAgICB9LCBzdHlsZXMsIHtcclxuICAgICAgICBbYnJlYWtwb2ludHMudXAoJ3NtJyldOiBfZXh0ZW5kcyh7XHJcbiAgICAgICAgICBwYWRkaW5nTGVmdDogc3BhY2luZygzKSxcclxuICAgICAgICAgIHBhZGRpbmdSaWdodDogc3BhY2luZygzKVxyXG4gICAgICAgIH0sIHN0eWxlc1ticmVha3BvaW50cy51cCgnc20nKV0pXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIG1peGlucyk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHR5cGU6IHR5cGVJbnB1dCxcclxuICAgIG1vZGU6IG1vZGVJbnB1dFxyXG4gIH0gPSBwYWxldHRlLFxyXG4gICAgICAgIHBhbGV0dGVSZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocGFsZXR0ZSwgX2V4Y2x1ZGVkMik7XHJcblxyXG4gIGNvbnN0IGZpbmFsTW9kZSA9IG1vZGVJbnB1dCB8fCB0eXBlSW5wdXQgfHwgJ2xpZ2h0JztcclxuICB0aGVtZS5wYWxldHRlID0gX2V4dGVuZHMoe1xyXG4gICAgLy8gdGhlbWUucGFsZXR0ZS50ZXh0LmhpbnRcclxuICAgIHRleHQ6IHtcclxuICAgICAgaGludDogZmluYWxNb2RlID09PSAnZGFyaycgPyAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyA6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJ1xyXG4gICAgfSxcclxuICAgIG1vZGU6IGZpbmFsTW9kZSxcclxuICAgIHR5cGU6IGZpbmFsTW9kZVxyXG4gIH0sIHBhbGV0dGVSZXN0KTtcclxuICByZXR1cm4gdGhlbWU7XHJcbn0iLCJpbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbXVpL3V0aWxzJztcclxuaW1wb3J0IGNyZWF0ZVRoZW1lIGZyb20gJy4vY3JlYXRlVGhlbWUnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUob3B0aW9ucywgLi4uYXJncykge1xyXG4gIHJldHVybiBjcmVhdGVUaGVtZShkZWVwbWVyZ2Uoe1xyXG4gICAgdW5zdGFibGVfc3RyaWN0TW9kZTogdHJ1ZVxyXG4gIH0sIG9wdGlvbnMpLCAuLi5hcmdzKTtcclxufSIsImxldCB3YXJuZWRPbmNlID0gZmFsc2U7IC8vIFRvIHJlbW92ZSBpbiB2NlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3R5bGVzKHN0eWxlcykge1xyXG4gIGlmICghd2FybmVkT25jZSkge1xyXG4gICAgY29uc29sZS53YXJuKFsnTVVJOiBjcmVhdGVTdHlsZXMgZnJvbSBAbXVpL21hdGVyaWFsL3N0eWxlcyBpcyBkZXByZWNhdGVkLicsICdQbGVhc2UgdXNlIEBtdWkvc3R5bGVzL2NyZWF0ZVN0eWxlcyddLmpvaW4oJ1xcbicpKTtcclxuICAgIHdhcm5lZE9uY2UgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0eWxlcztcclxufSIsImV4cG9ydCBmdW5jdGlvbiBpc1VuaXRsZXNzKHZhbHVlKSB7XHJcbiAgcmV0dXJuIFN0cmluZyhwYXJzZUZsb2F0KHZhbHVlKSkubGVuZ3RoID09PSBTdHJpbmcodmFsdWUpLmxlbmd0aDtcclxufSAvLyBQb3J0ZWQgZnJvbSBDb21wYXNzXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Db21wYXNzL2NvbXBhc3MvYmxvYi9tYXN0ZXIvY29yZS9zdHlsZXNoZWV0cy9jb21wYXNzL3R5cG9ncmFwaHkvX3VuaXRzLnNjc3NcclxuLy8gRW11bGF0ZSB0aGUgc2FzcyBmdW5jdGlvbiBcInVuaXRcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXQoaW5wdXQpIHtcclxuICByZXR1cm4gU3RyaW5nKGlucHV0KS5tYXRjaCgvW1xcZC5cXC0rXSpcXHMqKC4qKS8pWzFdIHx8ICcnO1xyXG59IC8vIEVtdWxhdGUgdGhlIHNhc3MgZnVuY3Rpb24gXCJ1bml0bGVzc1wiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Vbml0bGVzcyhsZW5ndGgpIHtcclxuICByZXR1cm4gcGFyc2VGbG9hdChsZW5ndGgpO1xyXG59IC8vIENvbnZlcnQgYW55IENTUyA8bGVuZ3RoPiBvciA8cGVyY2VudGFnZT4gdmFsdWUgdG8gYW55IGFub3RoZXIuXHJcbi8vIEZyb20gaHR0cHM6Ly9naXRodWIuY29tL0t5bGVBTWF0aGV3cy9jb252ZXJ0LWNzcy1sZW5ndGhcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TGVuZ3RoKGJhc2VGb250U2l6ZSkge1xyXG4gIHJldHVybiAobGVuZ3RoLCB0b1VuaXQpID0+IHtcclxuICAgIGNvbnN0IGZyb21Vbml0ID0gZ2V0VW5pdChsZW5ndGgpOyAvLyBPcHRpbWl6ZSBmb3IgY2FzZXMgd2hlcmUgYGZyb21gIGFuZCBgdG9gIHVuaXRzIGFyZSBhY2NpZGVudGFsbHkgdGhlIHNhbWUuXHJcblxyXG4gICAgaWYgKGZyb21Vbml0ID09PSB0b1VuaXQpIHtcclxuICAgICAgcmV0dXJuIGxlbmd0aDtcclxuICAgIH0gLy8gQ29udmVydCBpbnB1dCBsZW5ndGggdG8gcGl4ZWxzLlxyXG5cclxuXHJcbiAgICBsZXQgcHhMZW5ndGggPSB0b1VuaXRsZXNzKGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKGZyb21Vbml0ICE9PSAncHgnKSB7XHJcbiAgICAgIGlmIChmcm9tVW5pdCA9PT0gJ2VtJykge1xyXG4gICAgICAgIHB4TGVuZ3RoID0gdG9Vbml0bGVzcyhsZW5ndGgpICogdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xyXG4gICAgICB9IGVsc2UgaWYgKGZyb21Vbml0ID09PSAncmVtJykge1xyXG4gICAgICAgIHB4TGVuZ3RoID0gdG9Vbml0bGVzcyhsZW5ndGgpICogdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xyXG4gICAgICB9XHJcbiAgICB9IC8vIENvbnZlcnQgbGVuZ3RoIGluIHBpeGVscyB0byB0aGUgb3V0cHV0IHVuaXRcclxuXHJcblxyXG4gICAgbGV0IG91dHB1dExlbmd0aCA9IHB4TGVuZ3RoO1xyXG5cclxuICAgIGlmICh0b1VuaXQgIT09ICdweCcpIHtcclxuICAgICAgaWYgKHRvVW5pdCA9PT0gJ2VtJykge1xyXG4gICAgICAgIG91dHB1dExlbmd0aCA9IHB4TGVuZ3RoIC8gdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRvVW5pdCA9PT0gJ3JlbScpIHtcclxuICAgICAgICBvdXRwdXRMZW5ndGggPSBweExlbmd0aCAvIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQob3V0cHV0TGVuZ3RoLnRvRml4ZWQoNSkpICsgdG9Vbml0O1xyXG4gIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFsaWduUHJvcGVydHkoe1xyXG4gIHNpemUsXHJcbiAgZ3JpZFxyXG59KSB7XHJcbiAgY29uc3Qgc2l6ZUJlbG93ID0gc2l6ZSAtIHNpemUgJSBncmlkO1xyXG4gIGNvbnN0IHNpemVBYm92ZSA9IHNpemVCZWxvdyArIGdyaWQ7XHJcbiAgcmV0dXJuIHNpemUgLSBzaXplQmVsb3cgPCBzaXplQWJvdmUgLSBzaXplID8gc2l6ZUJlbG93IDogc2l6ZUFib3ZlO1xyXG59IC8vIGZvbnRHcmlkIGZpbmRzIGEgbWluaW1hbCBncmlkIChpbiByZW0pIGZvciB0aGUgZm9udFNpemUgdmFsdWVzIHNvIHRoYXQgdGhlXHJcbi8vIGxpbmVIZWlnaHQgZmFsbHMgdW5kZXIgYSB4IHBpeGVscyBncmlkLCA0cHggaW4gdGhlIGNhc2Ugb2YgTWF0ZXJpYWwgRGVzaWduLFxyXG4vLyB3aXRob3V0IGNoYW5naW5nIHRoZSByZWxhdGl2ZSBsaW5lIGhlaWdodFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvbnRHcmlkKHtcclxuICBsaW5lSGVpZ2h0LFxyXG4gIHBpeGVscyxcclxuICBodG1sRm9udFNpemVcclxufSkge1xyXG4gIHJldHVybiBwaXhlbHMgLyAobGluZUhlaWdodCAqIGh0bWxGb250U2l6ZSk7XHJcbn1cclxuLyoqXHJcbiAqIGdlbmVyYXRlIGEgcmVzcG9uc2l2ZSB2ZXJzaW9uIG9mIGEgZ2l2ZW4gQ1NTIHByb3BlcnR5XHJcbiAqIEBleGFtcGxlXHJcbiAqIHJlc3BvbnNpdmVQcm9wZXJ0eSh7XHJcbiAqICAgY3NzUHJvcGVydHk6ICdmb250U2l6ZScsXHJcbiAqICAgbWluOiAxNSxcclxuICogICBtYXg6IDIwLFxyXG4gKiAgIHVuaXQ6ICdweCcsXHJcbiAqICAgYnJlYWtwb2ludHM6IFszMDAsIDYwMF0sXHJcbiAqIH0pXHJcbiAqXHJcbiAqIC8vIHRoaXMgcmV0dXJuc1xyXG4gKlxyXG4gKiB7XHJcbiAqICAgZm9udFNpemU6ICcxNXB4JyxcclxuICogICAnQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpJzoge1xyXG4gKiAgICAgZm9udFNpemU6ICcxNy41cHgnLFxyXG4gKiAgIH0sXHJcbiAqICAgJ0BtZWRpYSAobWluLXdpZHRoOjYwMHB4KSc6IHtcclxuICogICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAqICAgfSxcclxuICogfVxyXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuY3NzUHJvcGVydHkgLSBUaGUgQ1NTIHByb3BlcnR5IHRvIGJlIG1hZGUgcmVzcG9uc2l2ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLm1pbiAtIFRoZSBzbWFsbGVzdCB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMubWF4IC0gVGhlIGxhcmdlc3QgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy51bml0XSAtIFRoZSB1bml0IHRvIGJlIHVzZWQgZm9yIHRoZSBDU1MgcHJvcGVydHlcclxuICogQHBhcmFtIHtBcnJheS5udW1iZXJ9IFtwYXJhbXMuYnJlYWtwb2ludHNdICAtIEFuIGFycmF5IG9mIGJyZWFrcG9pbnRzXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcGFyYW1zLmFsaWduU3RlcF0gLSBSb3VuZCBzY2FsZWQgdmFsdWUgdG8gZmFsbCB1bmRlciB0aGlzIGdyaWRcclxuICogQHJldHVybnMge09iamVjdH0gcmVzcG9uc2l2ZSBzdHlsZXMgZm9yIHtwYXJhbXMuY3NzUHJvcGVydHl9XHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3BvbnNpdmVQcm9wZXJ0eSh7XHJcbiAgY3NzUHJvcGVydHksXHJcbiAgbWluLFxyXG4gIG1heCxcclxuICB1bml0ID0gJ3JlbScsXHJcbiAgYnJlYWtwb2ludHMgPSBbNjAwLCA5MDAsIDEyMDBdLFxyXG4gIHRyYW5zZm9ybSA9IG51bGxcclxufSkge1xyXG4gIGNvbnN0IG91dHB1dCA9IHtcclxuICAgIFtjc3NQcm9wZXJ0eV06IGAke21pbn0ke3VuaXR9YFxyXG4gIH07XHJcbiAgY29uc3QgZmFjdG9yID0gKG1heCAtIG1pbikgLyBicmVha3BvaW50c1ticmVha3BvaW50cy5sZW5ndGggLSAxXTtcclxuICBicmVha3BvaW50cy5mb3JFYWNoKGJyZWFrcG9pbnQgPT4ge1xyXG4gICAgbGV0IHZhbHVlID0gbWluICsgZmFjdG9yICogYnJlYWtwb2ludDtcclxuXHJcbiAgICBpZiAodHJhbnNmb3JtICE9PSBudWxsKSB7XHJcbiAgICAgIHZhbHVlID0gdHJhbnNmb3JtKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRwdXRbYEBtZWRpYSAobWluLXdpZHRoOiR7YnJlYWtwb2ludH1weClgXSA9IHtcclxuICAgICAgW2Nzc1Byb3BlcnR5XTogYCR7TWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDAwKSAvIDEwMDAwfSR7dW5pdH1gXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHJldHVybiBvdXRwdXQ7XHJcbn0iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGFkYXB0VjRUaGVtZSB9IGZyb20gJy4vYWRhcHRWNFRoZW1lJztcclxuZXhwb3J0IHsgaGV4VG9SZ2IsIHJnYlRvSGV4LCBoc2xUb1JnYiwgZGVjb21wb3NlQ29sb3IsIHJlY29tcG9zZUNvbG9yLCBnZXRDb250cmFzdFJhdGlvLCBnZXRMdW1pbmFuY2UsIGVtcGhhc2l6ZSwgYWxwaGEsIGRhcmtlbiwgbGlnaHRlbiB9IGZyb20gJ0BtdWkvc3lzdGVtJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVUaGVtZSwgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICcuL2NyZWF0ZVRoZW1lJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnN0YWJsZV9jcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUgfSBmcm9tICcuL2NyZWF0ZU11aVN0cmljdE1vZGVUaGVtZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlU3R5bGVzIH0gZnJvbSAnLi9jcmVhdGVTdHlsZXMnO1xyXG5leHBvcnQgeyBnZXRVbml0IGFzIHVuc3RhYmxlX2dldFVuaXQsIHRvVW5pdGxlc3MgYXMgdW5zdGFibGVfdG9Vbml0bGVzcyB9IGZyb20gJy4vY3NzVXRpbHMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlc3BvbnNpdmVGb250U2l6ZXMgfSBmcm9tICcuL3Jlc3BvbnNpdmVGb250U2l6ZXMnO1xyXG5leHBvcnQgeyBkdXJhdGlvbiwgZWFzaW5nIH0gZnJvbSAnLi9jcmVhdGVUcmFuc2l0aW9ucyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVGhlbWUgfSBmcm9tICcuL3VzZVRoZW1lJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VUaGVtZVByb3BzIH0gZnJvbSAnLi91c2VUaGVtZVByb3BzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHlsZWQgfSBmcm9tICcuL3N0eWxlZCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXhwZXJpbWVudGFsU3R5bGVkIH0gZnJvbSAnLi9zdHlsZWQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRoZW1lUHJvdmlkZXIgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xyXG5leHBvcnQgeyBTdHlsZWRFbmdpbmVQcm92aWRlciB9IGZyb20gJ0BtdWkvc3lzdGVtJzsgLy8gVGhlIGxlZ2FjeSB1dGlsaXRpZXMgZnJvbSBAbXVpL3N0eWxlc1xyXG4vLyBUaGVzZSBhcmUganVzdCBlbXB0eSBmdW5jdGlvbnMgdGhhdCB0aHJvd3Mgd2hlbiBpbnZva2VkXHJcblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1ha2VTdHlsZXMgfSBmcm9tICcuL21ha2VTdHlsZXMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhTdHlsZXMgfSBmcm9tICcuL3dpdGhTdHlsZXMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhUaGVtZSB9IGZyb20gJy4vd2l0aFRoZW1lJzsiLCJpbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbXVpL3V0aWxzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VTdHlsZXMoKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGBNVUk6IG1ha2VTdHlsZXMgaXMgbm90IGxvbmdlciBleHBvcnRlZCBmcm9tIEBtdWkvbWF0ZXJpYWwvc3R5bGVzLlxyXG5Zb3UgaGF2ZSB0byBpbXBvcnQgaXQgZnJvbSBAbXVpL3N0eWxlcy5cclxuU2VlIGh0dHBzOi8vbXVpLmNvbS9yL21pZ3JhdGlvbi12NC8jbWF0ZXJpYWwtdWktY29yZS1zdHlsZXMgZm9yIG1vcmUgZGV0YWlscy5gIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSgxNCkpO1xyXG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XHJcbmltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtdWkvdXRpbHNcIjtcclxuaW1wb3J0IHsgaXNVbml0bGVzcywgY29udmVydExlbmd0aCwgcmVzcG9uc2l2ZVByb3BlcnR5LCBhbGlnblByb3BlcnR5LCBmb250R3JpZCB9IGZyb20gJy4vY3NzVXRpbHMnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNwb25zaXZlRm9udFNpemVzKHRoZW1lSW5wdXQsIG9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IHtcclxuICAgIGJyZWFrcG9pbnRzID0gWydzbScsICdtZCcsICdsZyddLFxyXG4gICAgZGlzYWJsZUFsaWduID0gZmFsc2UsXHJcbiAgICBmYWN0b3IgPSAyLFxyXG4gICAgdmFyaWFudHMgPSBbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ3N1YnRpdGxlMScsICdzdWJ0aXRsZTInLCAnYm9keTEnLCAnYm9keTInLCAnY2FwdGlvbicsICdidXR0b24nLCAnb3ZlcmxpbmUnXVxyXG4gIH0gPSBvcHRpb25zO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IF9leHRlbmRzKHt9LCB0aGVtZUlucHV0KTtcclxuXHJcbiAgdGhlbWUudHlwb2dyYXBoeSA9IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5KTtcclxuICBjb25zdCB0eXBvZ3JhcGh5ID0gdGhlbWUudHlwb2dyYXBoeTsgLy8gQ29udmVydCBiZXR3ZWVuIGNzcyBsZW5ndGhzIGUuZy4gZW0tPnB4IG9yIHB4LT5yZW1cclxuICAvLyBTZXQgdGhlIGJhc2VGb250U2l6ZSBmb3IgeW91ciBwcm9qZWN0LiBEZWZhdWx0cyB0byAxNnB4IChhbHNvIHRoZSBicm93c2VyIGRlZmF1bHQpLlxyXG5cclxuICBjb25zdCBjb252ZXJ0ID0gY29udmVydExlbmd0aCh0eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZSk7XHJcbiAgY29uc3QgYnJlYWtwb2ludFZhbHVlcyA9IGJyZWFrcG9pbnRzLm1hcCh4ID0+IHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlc1t4XSk7XHJcbiAgdmFyaWFudHMuZm9yRWFjaCh2YXJpYW50ID0+IHtcclxuICAgIGNvbnN0IHN0eWxlID0gdHlwb2dyYXBoeVt2YXJpYW50XTtcclxuICAgIGNvbnN0IHJlbUZvbnRTaXplID0gcGFyc2VGbG9hdChjb252ZXJ0KHN0eWxlLmZvbnRTaXplLCAncmVtJykpO1xyXG5cclxuICAgIGlmIChyZW1Gb250U2l6ZSA8PSAxKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYXhGb250U2l6ZSA9IHJlbUZvbnRTaXplO1xyXG4gICAgY29uc3QgbWluRm9udFNpemUgPSAxICsgKG1heEZvbnRTaXplIC0gMSkgLyBmYWN0b3I7XHJcbiAgICBsZXQge1xyXG4gICAgICBsaW5lSGVpZ2h0XHJcbiAgICB9ID0gc3R5bGU7XHJcblxyXG4gICAgaWYgKCFpc1VuaXRsZXNzKGxpbmVIZWlnaHQpICYmICFkaXNhYmxlQWxpZ24pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGBNVUk6IFVuc3VwcG9ydGVkIG5vbi11bml0bGVzcyBsaW5lIGhlaWdodCB3aXRoIGdyaWQgYWxpZ25tZW50LlxyXG5Vc2UgdW5pdGxlc3MgbGluZSBoZWlnaHRzIGluc3RlYWQuYCA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNikpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaXNVbml0bGVzcyhsaW5lSGVpZ2h0KSkge1xyXG4gICAgICAvLyBtYWtlIGl0IHVuaXRsZXNzXHJcbiAgICAgIGxpbmVIZWlnaHQgPSBwYXJzZUZsb2F0KGNvbnZlcnQobGluZUhlaWdodCwgJ3JlbScpKSAvIHBhcnNlRmxvYXQocmVtRm9udFNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0cmFuc2Zvcm0gPSBudWxsO1xyXG5cclxuICAgIGlmICghZGlzYWJsZUFsaWduKSB7XHJcbiAgICAgIHRyYW5zZm9ybSA9IHZhbHVlID0+IGFsaWduUHJvcGVydHkoe1xyXG4gICAgICAgIHNpemU6IHZhbHVlLFxyXG4gICAgICAgIGdyaWQ6IGZvbnRHcmlkKHtcclxuICAgICAgICAgIHBpeGVsczogNCxcclxuICAgICAgICAgIGxpbmVIZWlnaHQsXHJcbiAgICAgICAgICBodG1sRm9udFNpemU6IHR5cG9ncmFwaHkuaHRtbEZvbnRTaXplXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHlwb2dyYXBoeVt2YXJpYW50XSA9IF9leHRlbmRzKHt9LCBzdHlsZSwgcmVzcG9uc2l2ZVByb3BlcnR5KHtcclxuICAgICAgY3NzUHJvcGVydHk6ICdmb250U2l6ZScsXHJcbiAgICAgIG1pbjogbWluRm9udFNpemUsXHJcbiAgICAgIG1heDogbWF4Rm9udFNpemUsXHJcbiAgICAgIHVuaXQ6ICdyZW0nLFxyXG4gICAgICBicmVha3BvaW50czogYnJlYWtwb2ludFZhbHVlcyxcclxuICAgICAgdHJhbnNmb3JtXHJcbiAgICB9KSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHRoZW1lO1xyXG59IiwiaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG11aS91dGlsc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoU3R5bGVzKCkge1xyXG4gIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBgTVVJOiB3aXRoU3R5bGVzIGlzIG5vdCBsb25nZXIgZXhwb3J0ZWQgZnJvbSBAbXVpL21hdGVyaWFsL3N0eWxlcy5cclxuWW91IGhhdmUgdG8gaW1wb3J0IGl0IGZyb20gQG11aS9zdHlsZXMuXHJcblNlZSBodHRwczovL211aS5jb20vci9taWdyYXRpb24tdjQvI21hdGVyaWFsLXVpLWNvcmUtc3R5bGVzIGZvciBtb3JlIGRldGFpbHMuYCA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoMTUpKTtcclxufSIsImltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtdWkvdXRpbHNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFRoZW1lKCkge1xyXG4gIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBgTVVJOiB3aXRoVGhlbWUgaXMgbm90IGxvbmdlciBleHBvcnRlZCBmcm9tIEBtdWkvbWF0ZXJpYWwvc3R5bGVzLlxyXG5Zb3UgaGF2ZSB0byBpbXBvcnQgaXQgZnJvbSBAbXVpL3N0eWxlcy5cclxuU2VlIGh0dHBzOi8vbXVpLmNvbS9yL21pZ3JhdGlvbi12NC8jbWF0ZXJpYWwtdWktY29yZS1zdHlsZXMgZm9yIG1vcmUgZGV0YWlscy5gIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSgxNikpO1xyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCI7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DaGVja2JveFwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1CdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1CdXR0b25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtQXZhdGFyXCI7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3NcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja2JveExpc3RTZWNvbmRhcnkoKSB7XHJcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gUmVhY3QudXNlU3RhdGUoWzFdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKHZhbHVlKSA9PiAoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBjaGVja2VkLmluZGV4T2YodmFsdWUpO1xyXG4gICAgY29uc3QgbmV3Q2hlY2tlZCA9IFsuLi5jaGVja2VkXTtcclxuXHJcbiAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xyXG4gICAgICBuZXdDaGVja2VkLnB1c2godmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3Q2hlY2tlZC5zcGxpY2UoY3VycmVudEluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDaGVja2VkKG5ld0NoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgIFNlbnNvXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuXHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEF2YXRhciBzeD17eyBtdDogMTAsIGJnY29sb3I6IFwic2Vjb25kYXJ5Lm1haW5cIiB9fT5cclxuICAgICAgICAgIDxTZXR0aW5nc0ljb24gLz5cclxuICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgQSBmZXcgbW9yZSB0aGluZ3NcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICA8TGlzdFxyXG4gICAgICAgIGRlbnNlXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIG1heFdpZHRoOiAzNjAsXHJcbiAgICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcclxuICAgICAgICAgIG10OiAxMCxcclxuICAgICAgICAgIG1sOiAtMixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge1tcIkNvbG9yc1wiLCBcIkFuaW1hbCBzb3VuZHNcIiwgXCJNdXNpYyBpbnN0cnVtZW50c1wiLCBcIlJhbmRvbVwiXS5tYXAoXHJcbiAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWxJZCA9IGBjaGVja2JveC1saXN0LXNlY29uZGFyeS1sYWJlbC0ke3ZhbHVlfWA7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5QWN0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRvZ2dsZSh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZC5pbmRleE9mKHZhbHVlKSAhPT0gLTF9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbElkIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlUGFkZGluZ1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1yOiAyLCB3aWR0aDogNTYsIGhlaWdodDogNTYgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9zdGF0aWMvaW1hZ2VzLyR7dmFsdWV9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpZD17bGFiZWxJZH0gcHJpbWFyeT17YCR7dmFsdWV9YH0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBCYXIiLCJBdmF0YXIiLCJDaGVja2JveCIsIkJveCIsIkNvbnRhaW5lciIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1UZXh0IiwiTGlzdEl0ZW1BdmF0YXIiLCJTZXR0aW5nc0ljb24iLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkNoZWNrYm94TGlzdFNlY29uZGFyeSIsInVzZVN0YXRlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJoYW5kbGVUb2dnbGUiLCJ2YWx1ZSIsImN1cnJlbnRJbmRleCIsImluZGV4T2YiLCJuZXdDaGVja2VkIiwicHVzaCIsInNwbGljZSIsImZsZXhHcm93IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibXQiLCJiZ2NvbG9yIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1sIiwibWFwIiwibGFiZWxJZCIsIm1yIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==
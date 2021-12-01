"use strict";
self["webpackHotUpdate_N_E"]("pages/slider",{

/***/ "./pages/slider.js":
/*!*************************!*\
  !*** ./pages/slider.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ContinuousSlider; }
/* harmony export */ });
/* harmony import */ var C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/react */ "./node_modules/@iconify/react/dist/iconify.mjs");
/* harmony import */ var react_canvas_confetti__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-canvas-confetti */ "./node_modules/react-canvas-confetti/dist/index.js");
/* harmony import */ var react_canvas_confetti__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_canvas_confetti__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/index.js");
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Slider */ "./node_modules/@mui/material/Slider/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _src_Copyright__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Copyright */ "./src/Copyright.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Jkogerup\\Dev\\simongame\\pages\\slider.js",
    _s = $RefreshSig$();























var defaultLanguage = 0; // English

var startValue = 0;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};
function ContinuousSlider() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(defaultLanguage),
      _React$useState2 = (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      language = _React$useState2[0],
      setLanguage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__.useState(startValue),
      _React$useState4 = (0,C_Users_Jkogerup_Dev_simongame_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__.default, {
    maxwidth: "md",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
      sx: {
        display: "flex",
        alignItems: "center",
        bgcolor: "background.paper",
        height: 1000,
        widht: 1000
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
        sx: {
          flexGrow: 1
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__.default, {
          spacing: 2,
          direction: "row",
          sx: {
            mb: 1
          },
          alignItems: "center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: "noto:frowning-face",
            height: "64"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_9__.default, {
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
            lineNumber: 62,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: "noto:smiling-face",
            height: "64"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), value == "100" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Confetti, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 28
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_canvas_confetti__WEBPACK_IMPORTED_MODULE_3___default()), {
        style: canvasStyles
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_s(ContinuousSlider, "ygnUlEigUZxC49r/mNWJtvFpWlk=");

_c = ContinuousSlider;

var _c;

$RefreshReg$(_c, "ContinuousSlider");

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


/***/ }),

/***/ "./node_modules/react-canvas-confetti/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-canvas-confetti/dist/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var canvas_confetti_1 = __importDefault(__webpack_require__(/*! canvas-confetti */ "./node_modules/canvas-confetti/dist/confetti.module.mjs"));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var ReactCanvasConfetti = (function (_super) {
    __extends(ReactCanvasConfetti, _super);
    function ReactCanvasConfetti(props) {
        var _this = _super.call(this, props) || this;
        _this.refCanvas = react_1.default.createRef();
        _this.confetti = null;
        return _this;
    }
    ReactCanvasConfetti.prototype.componentDidMount = function () {
        if (!this.refCanvas.current) {
            return;
        }
        var _a = this.props, resize = _a.resize, useWorker = _a.useWorker;
        var globalOptions = {
            resize: typeof resize === 'undefined' ? true : resize,
            useWorker: typeof useWorker === 'undefined' ? true : useWorker,
        };
        this.confetti = canvas_confetti_1.default.create(this.refCanvas.current, globalOptions);
        this.setRefConfetti();
    };
    ReactCanvasConfetti.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, fire = _a.fire, reset = _a.reset;
        var isFireTrue = !!fire;
        var isFireChanged = fire !== prevProps.fire;
        if (isFireTrue && isFireChanged) {
            this.fireConfetti();
        }
        var isResetTrue = !!reset;
        var isResetChanged = reset !== prevProps.reset;
        if (isResetTrue && isResetChanged) {
            this.resetConfetti();
        }
    };
    ReactCanvasConfetti.prototype.componentWillUnmount = function () {
        this.unsetRefConfetti();
    };
    ReactCanvasConfetti.prototype.setRefConfetti = function () {
        var refConfetti = this.props.refConfetti;
        refConfetti && refConfetti(this.confetti);
    };
    ReactCanvasConfetti.prototype.unsetRefConfetti = function () {
        var refConfetti = this.props.refConfetti;
        refConfetti && refConfetti(null);
    };
    ReactCanvasConfetti.prototype.fireConfetti = function () {
        if (!this.confetti) {
            return;
        }
        var _a = this.props, onFire = _a.onFire, onDecay = _a.onDecay, onReset = _a.onReset, className = _a.className, style = _a.style, width = _a.width, height = _a.height, refConfetti = _a.refConfetti, fire = _a.fire, reset = _a.reset, confettiProps = __rest(_a, ["onFire", "onDecay", "onReset", "className", "style", "width", "height", "refConfetti", "fire", "reset"]);
        onFire && onFire();
        var promise = this.confetti(confettiProps);
        promise && promise.then(function () {
            onDecay && onDecay();
        });
    };
    ReactCanvasConfetti.prototype.resetConfetti = function () {
        if (!this.confetti) {
            return;
        }
        this.confetti.reset();
        var onReset = this.props.onReset;
        onReset && onReset();
    };
    ReactCanvasConfetti.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className, width = _a.width, height = _a.height;
        return react_1.default.createElement("canvas", { ref: this.refCanvas, style: style, className: className, width: width, height: height });
    };
    return ReactCanvasConfetti;
}(react_1.default.Component));
exports.default = ReactCanvasConfetti;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/canvas-confetti/dist/confetti.module.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/canvas-confetti/dist/confetti.module.mjs ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": function() { return /* binding */ create; }
/* harmony export */ });
// canvas-confetti v1.4.0 built on 2021-03-10T12:32:33.488Z
var module = {};

// source content
(function main(global, module, isWorker, workerSize) {
  var canUseWorker = !!(
    global.Worker &&
    global.Blob &&
    global.Promise &&
    global.OffscreenCanvas &&
    global.OffscreenCanvasRenderingContext2D &&
    global.HTMLCanvasElement &&
    global.HTMLCanvasElement.prototype.transferControlToOffscreen &&
    global.URL &&
    global.URL.createObjectURL);

  function noop() {}

  // create a promise if it exists, otherwise, just
  // call the function directly
  function promise(func) {
    var ModulePromise = module.exports.Promise;
    var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;

    if (typeof Prom === 'function') {
      return new Prom(func);
    }

    func(noop, noop);

    return null;
  }

  var raf = (function () {
    var TIME = Math.floor(1000 / 60);
    var frame, cancel;
    var frames = {};
    var lastFrameTime = 0;

    if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
      frame = function (cb) {
        var id = Math.random();

        frames[id] = requestAnimationFrame(function onFrame(time) {
          if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
            lastFrameTime = time;
            delete frames[id];

            cb();
          } else {
            frames[id] = requestAnimationFrame(onFrame);
          }
        });

        return id;
      };
      cancel = function (id) {
        if (frames[id]) {
          cancelAnimationFrame(frames[id]);
        }
      };
    } else {
      frame = function (cb) {
        return setTimeout(cb, TIME);
      };
      cancel = function (timer) {
        return clearTimeout(timer);
      };
    }

    return { frame: frame, cancel: cancel };
  }());

  var getWorker = (function () {
    var worker;
    var prom;
    var resolves = {};

    function decorate(worker) {
      function execute(options, callback) {
        worker.postMessage({ options: options || {}, callback: callback });
      }
      worker.init = function initWorker(canvas) {
        var offscreen = canvas.transferControlToOffscreen();
        worker.postMessage({ canvas: offscreen }, [offscreen]);
      };

      worker.fire = function fireWorker(options, size, done) {
        if (prom) {
          execute(options, null);
          return prom;
        }

        var id = Math.random().toString(36).slice(2);

        prom = promise(function (resolve) {
          function workerDone(msg) {
            if (msg.data.callback !== id) {
              return;
            }

            delete resolves[id];
            worker.removeEventListener('message', workerDone);

            prom = null;
            done();
            resolve();
          }

          worker.addEventListener('message', workerDone);
          execute(options, id);

          resolves[id] = workerDone.bind(null, { data: { callback: id }});
        });

        return prom;
      };

      worker.reset = function resetWorker() {
        worker.postMessage({ reset: true });

        for (var id in resolves) {
          resolves[id]();
          delete resolves[id];
        }
      };
    }

    return function () {
      if (worker) {
        return worker;
      }

      if (!isWorker && canUseWorker) {
        var code = [
          'var CONFETTI, SIZE = {}, module = {};',
          '(' + main.toString() + ')(this, module, true, SIZE);',
          'onmessage = function(msg) {',
          '  if (msg.data.options) {',
          '    CONFETTI(msg.data.options).then(function () {',
          '      if (msg.data.callback) {',
          '        postMessage({ callback: msg.data.callback });',
          '      }',
          '    });',
          '  } else if (msg.data.reset) {',
          '    CONFETTI.reset();',
          '  } else if (msg.data.resize) {',
          '    SIZE.width = msg.data.resize.width;',
          '    SIZE.height = msg.data.resize.height;',
          '  } else if (msg.data.canvas) {',
          '    SIZE.width = msg.data.canvas.width;',
          '    SIZE.height = msg.data.canvas.height;',
          '    CONFETTI = module.exports.create(msg.data.canvas);',
          '  }',
          '}',
        ].join('\n');
        try {
          worker = new Worker(URL.createObjectURL(new Blob([code])));
        } catch (e) {
          // eslint-disable-next-line no-console
          typeof console !== undefined && typeof console.warn === 'function' ? console.warn('🎊 Could not load worker', e) : null;

          return null;
        }

        decorate(worker);
      }

      return worker;
    };
  })();

  var defaults = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ['square', 'circle'],
    zIndex: 100,
    colors: [
      '#26ccff',
      '#a25afd',
      '#ff5e7e',
      '#88ff5a',
      '#fcff42',
      '#ffa62d',
      '#ff36ff'
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: false,
    scalar: 1
  };

  function convert(val, transform) {
    return transform ? transform(val) : val;
  }

  function isOk(val) {
    return !(val === null || val === undefined);
  }

  function prop(options, name, transform) {
    return convert(
      options && isOk(options[name]) ? options[name] : defaults[name],
      transform
    );
  }

  function onlyPositiveInt(number){
    return number < 0 ? 0 : Math.floor(number);
  }

  function randomInt(min, max) {
    // [min, max)
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function toDecimal(str) {
    return parseInt(str, 16);
  }

  function colorsToRgb(colors) {
    return colors.map(hexToRgb);
  }

  function hexToRgb(str) {
    var val = String(str).replace(/[^0-9a-f]/gi, '');

    if (val.length < 6) {
        val = val[0]+val[0]+val[1]+val[1]+val[2]+val[2];
    }

    return {
      r: toDecimal(val.substring(0,2)),
      g: toDecimal(val.substring(2,4)),
      b: toDecimal(val.substring(4,6))
    };
  }

  function getOrigin(options) {
    var origin = prop(options, 'origin', Object);
    origin.x = prop(origin, 'x', Number);
    origin.y = prop(origin, 'y', Number);

    return origin;
  }

  function setCanvasWindowSize(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  }

  function setCanvasRectSize(canvas) {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  function getCanvas(zIndex) {
    var canvas = document.createElement('canvas');

    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = zIndex;

    return canvas;
  }

  function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.scale(radiusX, radiusY);
    context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
    context.restore();
  }

  function randomPhysics(opts) {
    var radAngle = opts.angle * (Math.PI / 180);
    var radSpread = opts.spread * (Math.PI / 180);

    return {
      x: opts.x,
      y: opts.y,
      wobble: Math.random() * 10,
      velocity: (opts.startVelocity * 0.5) + (Math.random() * opts.startVelocity),
      angle2D: -radAngle + ((0.5 * radSpread) - (Math.random() * radSpread)),
      tiltAngle: Math.random() * Math.PI,
      color: opts.color,
      shape: opts.shape,
      tick: 0,
      totalTicks: opts.ticks,
      decay: opts.decay,
      drift: opts.drift,
      random: Math.random() + 5,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: opts.gravity * 3,
      ovalScalar: 0.6,
      scalar: opts.scalar
    };
  }

  function updateFetti(context, fetti) {
    fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
    fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
    fetti.wobble += 0.1;
    fetti.velocity *= fetti.decay;
    fetti.tiltAngle += 0.1;
    fetti.tiltSin = Math.sin(fetti.tiltAngle);
    fetti.tiltCos = Math.cos(fetti.tiltAngle);
    fetti.random = Math.random() + 5;
    fetti.wobbleX = fetti.x + ((10 * fetti.scalar) * Math.cos(fetti.wobble));
    fetti.wobbleY = fetti.y + ((10 * fetti.scalar) * Math.sin(fetti.wobble));

    var progress = (fetti.tick++) / fetti.totalTicks;

    var x1 = fetti.x + (fetti.random * fetti.tiltCos);
    var y1 = fetti.y + (fetti.random * fetti.tiltSin);
    var x2 = fetti.wobbleX + (fetti.random * fetti.tiltCos);
    var y2 = fetti.wobbleY + (fetti.random * fetti.tiltSin);

    context.fillStyle = 'rgba(' + fetti.color.r + ', ' + fetti.color.g + ', ' + fetti.color.b + ', ' + (1 - progress) + ')';
    context.beginPath();

    if (fetti.shape === 'circle') {
      context.ellipse ?
        context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) :
        ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
    } else {
      context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
      context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
      context.lineTo(Math.floor(x2), Math.floor(y2));
      context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
    }

    context.closePath();
    context.fill();

    return fetti.tick < fetti.totalTicks;
  }

  function animate(canvas, fettis, resizer, size, done) {
    var animatingFettis = fettis.slice();
    var context = canvas.getContext('2d');
    var animationFrame;
    var destroy;

    var prom = promise(function (resolve) {
      function onDone() {
        animationFrame = destroy = null;

        context.clearRect(0, 0, size.width, size.height);

        done();
        resolve();
      }

      function update() {
        if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
          size.width = canvas.width = workerSize.width;
          size.height = canvas.height = workerSize.height;
        }

        if (!size.width && !size.height) {
          resizer(canvas);
          size.width = canvas.width;
          size.height = canvas.height;
        }

        context.clearRect(0, 0, size.width, size.height);

        animatingFettis = animatingFettis.filter(function (fetti) {
          return updateFetti(context, fetti);
        });

        if (animatingFettis.length) {
          animationFrame = raf.frame(update);
        } else {
          onDone();
        }
      }

      animationFrame = raf.frame(update);
      destroy = onDone;
    });

    return {
      addFettis: function (fettis) {
        animatingFettis = animatingFettis.concat(fettis);

        return prom;
      },
      canvas: canvas,
      promise: prom,
      reset: function () {
        if (animationFrame) {
          raf.cancel(animationFrame);
        }

        if (destroy) {
          destroy();
        }
      }
    };
  }

  function confettiCannon(canvas, globalOpts) {
    var isLibCanvas = !canvas;
    var allowResize = !!prop(globalOpts || {}, 'resize');
    var globalDisableForReducedMotion = prop(globalOpts, 'disableForReducedMotion', Boolean);
    var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, 'useWorker');
    var worker = shouldUseWorker ? getWorker() : null;
    var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
    var initialized = (canvas && worker) ? !!canvas.__confetti_initialized : false;
    var preferLessMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion)').matches;
    var animationObj;

    function fireLocal(options, size, done) {
      var particleCount = prop(options, 'particleCount', onlyPositiveInt);
      var angle = prop(options, 'angle', Number);
      var spread = prop(options, 'spread', Number);
      var startVelocity = prop(options, 'startVelocity', Number);
      var decay = prop(options, 'decay', Number);
      var gravity = prop(options, 'gravity', Number);
      var drift = prop(options, 'drift', Number);
      var colors = prop(options, 'colors', colorsToRgb);
      var ticks = prop(options, 'ticks', Number);
      var shapes = prop(options, 'shapes');
      var scalar = prop(options, 'scalar');
      var origin = getOrigin(options);

      var temp = particleCount;
      var fettis = [];

      var startX = canvas.width * origin.x;
      var startY = canvas.height * origin.y;

      while (temp--) {
        fettis.push(
          randomPhysics({
            x: startX,
            y: startY,
            angle: angle,
            spread: spread,
            startVelocity: startVelocity,
            color: colors[temp % colors.length],
            shape: shapes[randomInt(0, shapes.length)],
            ticks: ticks,
            decay: decay,
            gravity: gravity,
            drift: drift,
            scalar: scalar
          })
        );
      }

      // if we have a previous canvas already animating,
      // add to it
      if (animationObj) {
        return animationObj.addFettis(fettis);
      }

      animationObj = animate(canvas, fettis, resizer, size , done);

      return animationObj.promise;
    }

    function fire(options) {
      var disableForReducedMotion = globalDisableForReducedMotion || prop(options, 'disableForReducedMotion', Boolean);
      var zIndex = prop(options, 'zIndex', Number);

      if (disableForReducedMotion && preferLessMotion) {
        return promise(function (resolve) {
          resolve();
        });
      }

      if (isLibCanvas && animationObj) {
        // use existing canvas from in-progress animation
        canvas = animationObj.canvas;
      } else if (isLibCanvas && !canvas) {
        // create and initialize a new canvas
        canvas = getCanvas(zIndex);
        document.body.appendChild(canvas);
      }

      if (allowResize && !initialized) {
        // initialize the size of a user-supplied canvas
        resizer(canvas);
      }

      var size = {
        width: canvas.width,
        height: canvas.height
      };

      if (worker && !initialized) {
        worker.init(canvas);
      }

      initialized = true;

      if (worker) {
        canvas.__confetti_initialized = true;
      }

      function onResize() {
        if (worker) {
          // TODO this really shouldn't be immediate, because it is expensive
          var obj = {
            getBoundingClientRect: function () {
              if (!isLibCanvas) {
                return canvas.getBoundingClientRect();
              }
            }
          };

          resizer(obj);

          worker.postMessage({
            resize: {
              width: obj.width,
              height: obj.height
            }
          });
          return;
        }

        // don't actually query the size here, since this
        // can execute frequently and rapidly
        size.width = size.height = null;
      }

      function done() {
        animationObj = null;

        if (allowResize) {
          global.removeEventListener('resize', onResize);
        }

        if (isLibCanvas && canvas) {
          document.body.removeChild(canvas);
          canvas = null;
          initialized = false;
        }
      }

      if (allowResize) {
        global.addEventListener('resize', onResize, false);
      }

      if (worker) {
        return worker.fire(options, size, done);
      }

      return fireLocal(options, size, done);
    }

    fire.reset = function () {
      if (worker) {
        worker.reset();
      }

      if (animationObj) {
        animationObj.reset();
      }
    };

    return fire;
  }

  module.exports = confettiCannon(null, { useWorker: true, resize: true });
  module.exports.create = confettiCannon;
}((function () {
  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof self !== 'undefined') {
    return self;
  }

  return this || {};
})(), module, false));

// end source content

/* harmony default export */ __webpack_exports__["default"] = (module.exports);
var create = module.exports.create;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLjEwZjk0NDQxYWQ3MTE5ODI2Y2UzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSXFCLGVBQWUsR0FBRyxDQUF0QixFQUF5Qjs7QUFDekIsSUFBSUMsVUFBVSxHQUFHLENBQWpCOztBQUVBLFNBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMvQixTQUFPQyxJQUFJLENBQUNDLE1BQUwsTUFBaUJGLEdBQUcsR0FBR0QsR0FBdkIsSUFBOEJBLEdBQXJDO0FBQ0Q7O0FBRUQsSUFBTUksWUFBWSxHQUFHO0FBQ25CQyxFQUFBQSxRQUFRLEVBQUUsT0FEUztBQUVuQkMsRUFBQUEsYUFBYSxFQUFFLE1BRkk7QUFHbkJDLEVBQUFBLEtBQUssRUFBRSxNQUhZO0FBSW5CQyxFQUFBQSxNQUFNLEVBQUUsTUFKVztBQUtuQkMsRUFBQUEsR0FBRyxFQUFFLENBTGM7QUFNbkJDLEVBQUFBLElBQUksRUFBRTtBQU5hLENBQXJCO0FBU2UsU0FBU0MsZ0JBQVQsR0FBNEI7QUFBQTs7QUFDekMsd0JBQWdDbkMsMkNBQUEsQ0FBZXFCLGVBQWYsQ0FBaEM7QUFBQTtBQUFBLE1BQU9lLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUEseUJBQTBCckMsMkNBQUEsQ0FBZXNCLFVBQWYsQ0FBMUI7QUFBQTtBQUFBLE1BQU9nQixLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDeENILElBQUFBLFFBQVEsQ0FBQ0csUUFBRCxDQUFSO0FBQ0QsR0FG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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBDQUEwQywrQkFBK0I7QUFDekU7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsK0RBQWUsY0FBYyxFQUFDO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhbnZhcy1jb25mZXR0aS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2FudmFzLWNvbmZldHRpL2Rpc3QvY29uZmV0dGkubW9kdWxlLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJAaWNvbmlmeS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RDYW52YXNDb25mZXR0aSBmcm9tIFwicmVhY3QtY2FudmFzLWNvbmZldHRpXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1NsaWRlclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgQ29weXJpZ2h0IGZyb20gXCIuLi9zcmMvQ29weXJpZ2h0XCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbFwiO1xyXG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRm9ybUhlbHBlclRleHRcIjtcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvSW5wdXRMYWJlbFwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTWVudUl0ZW1cIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9TZWxlY3RcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBBY2Nlc3NpYmlsaXR5TmV3SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BY2Nlc3NpYmlsaXR5TmV3XCI7XHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFwiO1xyXG5cclxubGV0IGRlZmF1bHRMYW5ndWFnZSA9IDA7IC8vIEVuZ2xpc2hcclxubGV0IHN0YXJ0VmFsdWUgPSAwO1xyXG5cclxuZnVuY3Rpb24gcmFuZG9tSW5SYW5nZShtaW4sIG1heCkge1xyXG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbn1cclxuXHJcbmNvbnN0IGNhbnZhc1N0eWxlcyA9IHtcclxuICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIHRvcDogMCxcclxuICBsZWZ0OiAwLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGludW91c1NsaWRlcigpIHtcclxuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRMYW5ndWFnZSk7XHJcblxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoc3RhcnRWYWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXh3aWR0aD1cIm1kXCI+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMDAsXHJcbiAgICAgICAgICB3aWRodDogMTAwMCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBkaXJlY3Rpb249XCJyb3dcIiBzeD17eyBtYjogMSB9fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxJY29uIGljb249XCJub3RvOmZyb3duaW5nLWZhY2VcIiBoZWlnaHQ9XCI2NFwiIC8+XHJcbiAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1vb2RcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlTGFiZWxEaXNwbGF5PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgc3RlcD17MTB9XHJcbiAgICAgICAgICAgICAgbWFya3NcclxuICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgbWF4PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJY29uIGljb249XCJub3RvOnNtaWxpbmctZmFjZVwiIGhlaWdodD1cIjY0XCIgLz5cclxuICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAge3ZhbHVlID09IFwiMTAwXCIgJiYgPENvbmZldHRpIC8+fVxyXG4gICAgICAgIDxSZWFjdENhbnZhc0NvbmZldHRpIHN0eWxlPXtjYW52YXNTdHlsZXN9IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY2FudmFzX2NvbmZldHRpXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNhbnZhcy1jb25mZXR0aVwiKSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIFJlYWN0Q2FudmFzQ29uZmV0dGkgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZWFjdENhbnZhc0NvbmZldHRpLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlYWN0Q2FudmFzQ29uZmV0dGkocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJlZkNhbnZhcyA9IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgX3RoaXMuY29uZmV0dGkgPSBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFJlYWN0Q2FudmFzQ29uZmV0dGkucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVmQ2FudmFzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCByZXNpemUgPSBfYS5yZXNpemUsIHVzZVdvcmtlciA9IF9hLnVzZVdvcmtlcjtcbiAgICAgICAgdmFyIGdsb2JhbE9wdGlvbnMgPSB7XG4gICAgICAgICAgICByZXNpemU6IHR5cGVvZiByZXNpemUgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IHJlc2l6ZSxcbiAgICAgICAgICAgIHVzZVdvcmtlcjogdHlwZW9mIHVzZVdvcmtlciA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogdXNlV29ya2VyLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbmZldHRpID0gY2FudmFzX2NvbmZldHRpXzEuZGVmYXVsdC5jcmVhdGUodGhpcy5yZWZDYW52YXMuY3VycmVudCwgZ2xvYmFsT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc2V0UmVmQ29uZmV0dGkoKTtcbiAgICB9O1xuICAgIFJlYWN0Q2FudmFzQ29uZmV0dGkucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIChwcmV2UHJvcHMpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgZmlyZSA9IF9hLmZpcmUsIHJlc2V0ID0gX2EucmVzZXQ7XG4gICAgICAgIHZhciBpc0ZpcmVUcnVlID0gISFmaXJlO1xuICAgICAgICB2YXIgaXNGaXJlQ2hhbmdlZCA9IGZpcmUgIT09IHByZXZQcm9wcy5maXJlO1xuICAgICAgICBpZiAoaXNGaXJlVHJ1ZSAmJiBpc0ZpcmVDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVDb25mZXR0aSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc1Jlc2V0VHJ1ZSA9ICEhcmVzZXQ7XG4gICAgICAgIHZhciBpc1Jlc2V0Q2hhbmdlZCA9IHJlc2V0ICE9PSBwcmV2UHJvcHMucmVzZXQ7XG4gICAgICAgIGlmIChpc1Jlc2V0VHJ1ZSAmJiBpc1Jlc2V0Q2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldENvbmZldHRpKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0Q2FudmFzQ29uZmV0dGkucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVuc2V0UmVmQ29uZmV0dGkoKTtcbiAgICB9O1xuICAgIFJlYWN0Q2FudmFzQ29uZmV0dGkucHJvdG90eXBlLnNldFJlZkNvbmZldHRpID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVmQ29uZmV0dGkgPSB0aGlzLnByb3BzLnJlZkNvbmZldHRpO1xuICAgICAgICByZWZDb25mZXR0aSAmJiByZWZDb25mZXR0aSh0aGlzLmNvbmZldHRpKTtcbiAgICB9O1xuICAgIFJlYWN0Q2FudmFzQ29uZmV0dGkucHJvdG90eXBlLnVuc2V0UmVmQ29uZmV0dGkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZWZDb25mZXR0aSA9IHRoaXMucHJvcHMucmVmQ29uZmV0dGk7XG4gICAgICAgIHJlZkNvbmZldHRpICYmIHJlZkNvbmZldHRpKG51bGwpO1xuICAgIH07XG4gICAgUmVhY3RDYW52YXNDb25mZXR0aS5wcm90b3R5cGUuZmlyZUNvbmZldHRpID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmV0dGkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBvbkZpcmUgPSBfYS5vbkZpcmUsIG9uRGVjYXkgPSBfYS5vbkRlY2F5LCBvblJlc2V0ID0gX2Eub25SZXNldCwgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBzdHlsZSA9IF9hLnN0eWxlLCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQsIHJlZkNvbmZldHRpID0gX2EucmVmQ29uZmV0dGksIGZpcmUgPSBfYS5maXJlLCByZXNldCA9IF9hLnJlc2V0LCBjb25mZXR0aVByb3BzID0gX19yZXN0KF9hLCBbXCJvbkZpcmVcIiwgXCJvbkRlY2F5XCIsIFwib25SZXNldFwiLCBcImNsYXNzTmFtZVwiLCBcInN0eWxlXCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJyZWZDb25mZXR0aVwiLCBcImZpcmVcIiwgXCJyZXNldFwiXSk7XG4gICAgICAgIG9uRmlyZSAmJiBvbkZpcmUoKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbmZldHRpKGNvbmZldHRpUHJvcHMpO1xuICAgICAgICBwcm9taXNlICYmIHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvbkRlY2F5ICYmIG9uRGVjYXkoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBSZWFjdENhbnZhc0NvbmZldHRpLnByb3RvdHlwZS5yZXNldENvbmZldHRpID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmV0dGkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZldHRpLnJlc2V0KCk7XG4gICAgICAgIHZhciBvblJlc2V0ID0gdGhpcy5wcm9wcy5vblJlc2V0O1xuICAgICAgICBvblJlc2V0ICYmIG9uUmVzZXQoKTtcbiAgICB9O1xuICAgIFJlYWN0Q2FudmFzQ29uZmV0dGkucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgc3R5bGUgPSBfYS5zdHlsZSwgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XG4gICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiLCB7IHJlZjogdGhpcy5yZWZDYW52YXMsIHN0eWxlOiBzdHlsZSwgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVhY3RDYW52YXNDb25mZXR0aTtcbn0ocmVhY3RfMS5kZWZhdWx0LkNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUmVhY3RDYW52YXNDb25mZXR0aTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8vIGNhbnZhcy1jb25mZXR0aSB2MS40LjAgYnVpbHQgb24gMjAyMS0wMy0xMFQxMjozMjozMy40ODhaXG52YXIgbW9kdWxlID0ge307XG5cbi8vIHNvdXJjZSBjb250ZW50XG4oZnVuY3Rpb24gbWFpbihnbG9iYWwsIG1vZHVsZSwgaXNXb3JrZXIsIHdvcmtlclNpemUpIHtcbiAgdmFyIGNhblVzZVdvcmtlciA9ICEhKFxuICAgIGdsb2JhbC5Xb3JrZXIgJiZcbiAgICBnbG9iYWwuQmxvYiAmJlxuICAgIGdsb2JhbC5Qcm9taXNlICYmXG4gICAgZ2xvYmFsLk9mZnNjcmVlbkNhbnZhcyAmJlxuICAgIGdsb2JhbC5PZmZzY3JlZW5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgJiZcbiAgICBnbG9iYWwuSFRNTENhbnZhc0VsZW1lbnQgJiZcbiAgICBnbG9iYWwuSFRNTENhbnZhc0VsZW1lbnQucHJvdG90eXBlLnRyYW5zZmVyQ29udHJvbFRvT2Zmc2NyZWVuICYmXG4gICAgZ2xvYmFsLlVSTCAmJlxuICAgIGdsb2JhbC5VUkwuY3JlYXRlT2JqZWN0VVJMKTtcblxuICBmdW5jdGlvbiBub29wKCkge31cblxuICAvLyBjcmVhdGUgYSBwcm9taXNlIGlmIGl0IGV4aXN0cywgb3RoZXJ3aXNlLCBqdXN0XG4gIC8vIGNhbGwgdGhlIGZ1bmN0aW9uIGRpcmVjdGx5XG4gIGZ1bmN0aW9uIHByb21pc2UoZnVuYykge1xuICAgIHZhciBNb2R1bGVQcm9taXNlID0gbW9kdWxlLmV4cG9ydHMuUHJvbWlzZTtcbiAgICB2YXIgUHJvbSA9IE1vZHVsZVByb21pc2UgIT09IHZvaWQgMCA/IE1vZHVsZVByb21pc2UgOiBnbG9iYWwuUHJvbWlzZTtcblxuICAgIGlmICh0eXBlb2YgUHJvbSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG5ldyBQcm9tKGZ1bmMpO1xuICAgIH1cblxuICAgIGZ1bmMobm9vcCwgbm9vcCk7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciByYWYgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBUSU1FID0gTWF0aC5mbG9vcigxMDAwIC8gNjApO1xuICAgIHZhciBmcmFtZSwgY2FuY2VsO1xuICAgIHZhciBmcmFtZXMgPSB7fTtcbiAgICB2YXIgbGFzdEZyYW1lVGltZSA9IDA7XG5cbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZyYW1lID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBpZCA9IE1hdGgucmFuZG9tKCk7XG5cbiAgICAgICAgZnJhbWVzW2lkXSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBvbkZyYW1lKHRpbWUpIHtcbiAgICAgICAgICBpZiAobGFzdEZyYW1lVGltZSA9PT0gdGltZSB8fCBsYXN0RnJhbWVUaW1lICsgVElNRSAtIDEgPCB0aW1lKSB7XG4gICAgICAgICAgICBsYXN0RnJhbWVUaW1lID0gdGltZTtcbiAgICAgICAgICAgIGRlbGV0ZSBmcmFtZXNbaWRdO1xuXG4gICAgICAgICAgICBjYigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcmFtZXNbaWRdID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uRnJhbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfTtcbiAgICAgIGNhbmNlbCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpZiAoZnJhbWVzW2lkXSkge1xuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lc1tpZF0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBmcmFtZSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChjYiwgVElNRSk7XG4gICAgICB9O1xuICAgICAgY2FuY2VsID0gZnVuY3Rpb24gKHRpbWVyKSB7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBmcmFtZTogZnJhbWUsIGNhbmNlbDogY2FuY2VsIH07XG4gIH0oKSk7XG5cbiAgdmFyIGdldFdvcmtlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHdvcmtlcjtcbiAgICB2YXIgcHJvbTtcbiAgICB2YXIgcmVzb2x2ZXMgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGRlY29yYXRlKHdvcmtlcikge1xuICAgICAgZnVuY3Rpb24gZXhlY3V0ZShvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBvcHRpb25zOiBvcHRpb25zIHx8IHt9LCBjYWxsYmFjazogY2FsbGJhY2sgfSk7XG4gICAgICB9XG4gICAgICB3b3JrZXIuaW5pdCA9IGZ1bmN0aW9uIGluaXRXb3JrZXIoY2FudmFzKSB7XG4gICAgICAgIHZhciBvZmZzY3JlZW4gPSBjYW52YXMudHJhbnNmZXJDb250cm9sVG9PZmZzY3JlZW4oKTtcbiAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsgY2FudmFzOiBvZmZzY3JlZW4gfSwgW29mZnNjcmVlbl0pO1xuICAgICAgfTtcblxuICAgICAgd29ya2VyLmZpcmUgPSBmdW5jdGlvbiBmaXJlV29ya2VyKG9wdGlvbnMsIHNpemUsIGRvbmUpIHtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICBleGVjdXRlKG9wdGlvbnMsIG51bGwpO1xuICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7XG5cbiAgICAgICAgcHJvbSA9IHByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBmdW5jdGlvbiB3b3JrZXJEb25lKG1zZykge1xuICAgICAgICAgICAgaWYgKG1zZy5kYXRhLmNhbGxiYWNrICE9PSBpZCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSByZXNvbHZlc1tpZF07XG4gICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHdvcmtlckRvbmUpO1xuXG4gICAgICAgICAgICBwcm9tID0gbnVsbDtcbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHdvcmtlckRvbmUpO1xuICAgICAgICAgIGV4ZWN1dGUob3B0aW9ucywgaWQpO1xuXG4gICAgICAgICAgcmVzb2x2ZXNbaWRdID0gd29ya2VyRG9uZS5iaW5kKG51bGwsIHsgZGF0YTogeyBjYWxsYmFjazogaWQgfX0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgIH07XG5cbiAgICAgIHdvcmtlci5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0V29ya2VyKCkge1xuICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyByZXNldDogdHJ1ZSB9KTtcblxuICAgICAgICBmb3IgKHZhciBpZCBpbiByZXNvbHZlcykge1xuICAgICAgICAgIHJlc29sdmVzW2lkXSgpO1xuICAgICAgICAgIGRlbGV0ZSByZXNvbHZlc1tpZF07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh3b3JrZXIpIHtcbiAgICAgICAgcmV0dXJuIHdvcmtlcjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1dvcmtlciAmJiBjYW5Vc2VXb3JrZXIpIHtcbiAgICAgICAgdmFyIGNvZGUgPSBbXG4gICAgICAgICAgJ3ZhciBDT05GRVRUSSwgU0laRSA9IHt9LCBtb2R1bGUgPSB7fTsnLFxuICAgICAgICAgICcoJyArIG1haW4udG9TdHJpbmcoKSArICcpKHRoaXMsIG1vZHVsZSwgdHJ1ZSwgU0laRSk7JyxcbiAgICAgICAgICAnb25tZXNzYWdlID0gZnVuY3Rpb24obXNnKSB7JyxcbiAgICAgICAgICAnICBpZiAobXNnLmRhdGEub3B0aW9ucykgeycsXG4gICAgICAgICAgJyAgICBDT05GRVRUSShtc2cuZGF0YS5vcHRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHsnLFxuICAgICAgICAgICcgICAgICBpZiAobXNnLmRhdGEuY2FsbGJhY2spIHsnLFxuICAgICAgICAgICcgICAgICAgIHBvc3RNZXNzYWdlKHsgY2FsbGJhY2s6IG1zZy5kYXRhLmNhbGxiYWNrIH0pOycsXG4gICAgICAgICAgJyAgICAgIH0nLFxuICAgICAgICAgICcgICAgfSk7JyxcbiAgICAgICAgICAnICB9IGVsc2UgaWYgKG1zZy5kYXRhLnJlc2V0KSB7JyxcbiAgICAgICAgICAnICAgIENPTkZFVFRJLnJlc2V0KCk7JyxcbiAgICAgICAgICAnICB9IGVsc2UgaWYgKG1zZy5kYXRhLnJlc2l6ZSkgeycsXG4gICAgICAgICAgJyAgICBTSVpFLndpZHRoID0gbXNnLmRhdGEucmVzaXplLndpZHRoOycsXG4gICAgICAgICAgJyAgICBTSVpFLmhlaWdodCA9IG1zZy5kYXRhLnJlc2l6ZS5oZWlnaHQ7JyxcbiAgICAgICAgICAnICB9IGVsc2UgaWYgKG1zZy5kYXRhLmNhbnZhcykgeycsXG4gICAgICAgICAgJyAgICBTSVpFLndpZHRoID0gbXNnLmRhdGEuY2FudmFzLndpZHRoOycsXG4gICAgICAgICAgJyAgICBTSVpFLmhlaWdodCA9IG1zZy5kYXRhLmNhbnZhcy5oZWlnaHQ7JyxcbiAgICAgICAgICAnICAgIENPTkZFVFRJID0gbW9kdWxlLmV4cG9ydHMuY3JlYXRlKG1zZy5kYXRhLmNhbnZhcyk7JyxcbiAgICAgICAgICAnICB9JyxcbiAgICAgICAgICAnfScsXG4gICAgICAgIF0uam9pbignXFxuJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgd29ya2VyID0gbmV3IFdvcmtlcihVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtjb2RlXSkpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgY29uc29sZS53YXJuID09PSAnZnVuY3Rpb24nID8gY29uc29sZS53YXJuKCfwn46KIENvdWxkIG5vdCBsb2FkIHdvcmtlcicsIGUpIDogbnVsbDtcblxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb3JhdGUod29ya2VyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdvcmtlcjtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHZhciBkZWZhdWx0cyA9IHtcbiAgICBwYXJ0aWNsZUNvdW50OiA1MCxcbiAgICBhbmdsZTogOTAsXG4gICAgc3ByZWFkOiA0NSxcbiAgICBzdGFydFZlbG9jaXR5OiA0NSxcbiAgICBkZWNheTogMC45LFxuICAgIGdyYXZpdHk6IDEsXG4gICAgZHJpZnQ6IDAsXG4gICAgdGlja3M6IDIwMCxcbiAgICB4OiAwLjUsXG4gICAgeTogMC41LFxuICAgIHNoYXBlczogWydzcXVhcmUnLCAnY2lyY2xlJ10sXG4gICAgekluZGV4OiAxMDAsXG4gICAgY29sb3JzOiBbXG4gICAgICAnIzI2Y2NmZicsXG4gICAgICAnI2EyNWFmZCcsXG4gICAgICAnI2ZmNWU3ZScsXG4gICAgICAnIzg4ZmY1YScsXG4gICAgICAnI2ZjZmY0MicsXG4gICAgICAnI2ZmYTYyZCcsXG4gICAgICAnI2ZmMzZmZidcbiAgICBdLFxuICAgIC8vIHByb2JhYmx5IHNob3VsZCBiZSB0cnVlLCBidXQgYmFjay1jb21wYXRcbiAgICBkaXNhYmxlRm9yUmVkdWNlZE1vdGlvbjogZmFsc2UsXG4gICAgc2NhbGFyOiAxXG4gIH07XG5cbiAgZnVuY3Rpb24gY29udmVydCh2YWwsIHRyYW5zZm9ybSkge1xuICAgIHJldHVybiB0cmFuc2Zvcm0gPyB0cmFuc2Zvcm0odmFsKSA6IHZhbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzT2sodmFsKSB7XG4gICAgcmV0dXJuICEodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3Aob3B0aW9ucywgbmFtZSwgdHJhbnNmb3JtKSB7XG4gICAgcmV0dXJuIGNvbnZlcnQoXG4gICAgICBvcHRpb25zICYmIGlzT2sob3B0aW9uc1tuYW1lXSkgPyBvcHRpb25zW25hbWVdIDogZGVmYXVsdHNbbmFtZV0sXG4gICAgICB0cmFuc2Zvcm1cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gb25seVBvc2l0aXZlSW50KG51bWJlcil7XG4gICAgcmV0dXJuIG51bWJlciA8IDAgPyAwIDogTWF0aC5mbG9vcihudW1iZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgLy8gW21pbiwgbWF4KVxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gIH1cblxuICBmdW5jdGlvbiB0b0RlY2ltYWwoc3RyKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHN0ciwgMTYpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29sb3JzVG9SZ2IoY29sb3JzKSB7XG4gICAgcmV0dXJuIGNvbG9ycy5tYXAoaGV4VG9SZ2IpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGV4VG9SZ2Ioc3RyKSB7XG4gICAgdmFyIHZhbCA9IFN0cmluZyhzdHIpLnJlcGxhY2UoL1teMC05YS1mXS9naSwgJycpO1xuXG4gICAgaWYgKHZhbC5sZW5ndGggPCA2KSB7XG4gICAgICAgIHZhbCA9IHZhbFswXSt2YWxbMF0rdmFsWzFdK3ZhbFsxXSt2YWxbMl0rdmFsWzJdO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByOiB0b0RlY2ltYWwodmFsLnN1YnN0cmluZygwLDIpKSxcbiAgICAgIGc6IHRvRGVjaW1hbCh2YWwuc3Vic3RyaW5nKDIsNCkpLFxuICAgICAgYjogdG9EZWNpbWFsKHZhbC5zdWJzdHJpbmcoNCw2KSlcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0T3JpZ2luKG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luID0gcHJvcChvcHRpb25zLCAnb3JpZ2luJywgT2JqZWN0KTtcbiAgICBvcmlnaW4ueCA9IHByb3Aob3JpZ2luLCAneCcsIE51bWJlcik7XG4gICAgb3JpZ2luLnkgPSBwcm9wKG9yaWdpbiwgJ3knLCBOdW1iZXIpO1xuXG4gICAgcmV0dXJuIG9yaWdpbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENhbnZhc1dpbmRvd1NpemUoY2FudmFzKSB7XG4gICAgY2FudmFzLndpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q2FudmFzUmVjdFNpemUoY2FudmFzKSB7XG4gICAgdmFyIHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY2FudmFzLndpZHRoID0gcmVjdC53aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDYW52YXMoekluZGV4KSB7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXG4gICAgY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBjYW52YXMuc3R5bGUudG9wID0gJzBweCc7XG4gICAgY2FudmFzLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICBjYW52YXMuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICBjYW52YXMuc3R5bGUuekluZGV4ID0gekluZGV4O1xuXG4gICAgcmV0dXJuIGNhbnZhcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGVsbGlwc2UoY29udGV4dCwgeCwgeSwgcmFkaXVzWCwgcmFkaXVzWSwgcm90YXRpb24sIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpQ2xvY2t3aXNlKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoeCwgeSk7XG4gICAgY29udGV4dC5yb3RhdGUocm90YXRpb24pO1xuICAgIGNvbnRleHQuc2NhbGUocmFkaXVzWCwgcmFkaXVzWSk7XG4gICAgY29udGV4dC5hcmMoMCwgMCwgMSwgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGlDbG9ja3dpc2UpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmFuZG9tUGh5c2ljcyhvcHRzKSB7XG4gICAgdmFyIHJhZEFuZ2xlID0gb3B0cy5hbmdsZSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICB2YXIgcmFkU3ByZWFkID0gb3B0cy5zcHJlYWQgKiAoTWF0aC5QSSAvIDE4MCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogb3B0cy54LFxuICAgICAgeTogb3B0cy55LFxuICAgICAgd29iYmxlOiBNYXRoLnJhbmRvbSgpICogMTAsXG4gICAgICB2ZWxvY2l0eTogKG9wdHMuc3RhcnRWZWxvY2l0eSAqIDAuNSkgKyAoTWF0aC5yYW5kb20oKSAqIG9wdHMuc3RhcnRWZWxvY2l0eSksXG4gICAgICBhbmdsZTJEOiAtcmFkQW5nbGUgKyAoKDAuNSAqIHJhZFNwcmVhZCkgLSAoTWF0aC5yYW5kb20oKSAqIHJhZFNwcmVhZCkpLFxuICAgICAgdGlsdEFuZ2xlOiBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSxcbiAgICAgIGNvbG9yOiBvcHRzLmNvbG9yLFxuICAgICAgc2hhcGU6IG9wdHMuc2hhcGUsXG4gICAgICB0aWNrOiAwLFxuICAgICAgdG90YWxUaWNrczogb3B0cy50aWNrcyxcbiAgICAgIGRlY2F5OiBvcHRzLmRlY2F5LFxuICAgICAgZHJpZnQ6IG9wdHMuZHJpZnQsXG4gICAgICByYW5kb206IE1hdGgucmFuZG9tKCkgKyA1LFxuICAgICAgdGlsdFNpbjogMCxcbiAgICAgIHRpbHRDb3M6IDAsXG4gICAgICB3b2JibGVYOiAwLFxuICAgICAgd29iYmxlWTogMCxcbiAgICAgIGdyYXZpdHk6IG9wdHMuZ3Jhdml0eSAqIDMsXG4gICAgICBvdmFsU2NhbGFyOiAwLjYsXG4gICAgICBzY2FsYXI6IG9wdHMuc2NhbGFyXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUZldHRpKGNvbnRleHQsIGZldHRpKSB7XG4gICAgZmV0dGkueCArPSBNYXRoLmNvcyhmZXR0aS5hbmdsZTJEKSAqIGZldHRpLnZlbG9jaXR5ICsgZmV0dGkuZHJpZnQ7XG4gICAgZmV0dGkueSArPSBNYXRoLnNpbihmZXR0aS5hbmdsZTJEKSAqIGZldHRpLnZlbG9jaXR5ICsgZmV0dGkuZ3Jhdml0eTtcbiAgICBmZXR0aS53b2JibGUgKz0gMC4xO1xuICAgIGZldHRpLnZlbG9jaXR5ICo9IGZldHRpLmRlY2F5O1xuICAgIGZldHRpLnRpbHRBbmdsZSArPSAwLjE7XG4gICAgZmV0dGkudGlsdFNpbiA9IE1hdGguc2luKGZldHRpLnRpbHRBbmdsZSk7XG4gICAgZmV0dGkudGlsdENvcyA9IE1hdGguY29zKGZldHRpLnRpbHRBbmdsZSk7XG4gICAgZmV0dGkucmFuZG9tID0gTWF0aC5yYW5kb20oKSArIDU7XG4gICAgZmV0dGkud29iYmxlWCA9IGZldHRpLnggKyAoKDEwICogZmV0dGkuc2NhbGFyKSAqIE1hdGguY29zKGZldHRpLndvYmJsZSkpO1xuICAgIGZldHRpLndvYmJsZVkgPSBmZXR0aS55ICsgKCgxMCAqIGZldHRpLnNjYWxhcikgKiBNYXRoLnNpbihmZXR0aS53b2JibGUpKTtcblxuICAgIHZhciBwcm9ncmVzcyA9IChmZXR0aS50aWNrKyspIC8gZmV0dGkudG90YWxUaWNrcztcblxuICAgIHZhciB4MSA9IGZldHRpLnggKyAoZmV0dGkucmFuZG9tICogZmV0dGkudGlsdENvcyk7XG4gICAgdmFyIHkxID0gZmV0dGkueSArIChmZXR0aS5yYW5kb20gKiBmZXR0aS50aWx0U2luKTtcbiAgICB2YXIgeDIgPSBmZXR0aS53b2JibGVYICsgKGZldHRpLnJhbmRvbSAqIGZldHRpLnRpbHRDb3MpO1xuICAgIHZhciB5MiA9IGZldHRpLndvYmJsZVkgKyAoZmV0dGkucmFuZG9tICogZmV0dGkudGlsdFNpbik7XG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKCcgKyBmZXR0aS5jb2xvci5yICsgJywgJyArIGZldHRpLmNvbG9yLmcgKyAnLCAnICsgZmV0dGkuY29sb3IuYiArICcsICcgKyAoMSAtIHByb2dyZXNzKSArICcpJztcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuXG4gICAgaWYgKGZldHRpLnNoYXBlID09PSAnY2lyY2xlJykge1xuICAgICAgY29udGV4dC5lbGxpcHNlID9cbiAgICAgICAgY29udGV4dC5lbGxpcHNlKGZldHRpLngsIGZldHRpLnksIE1hdGguYWJzKHgyIC0geDEpICogZmV0dGkub3ZhbFNjYWxhciwgTWF0aC5hYnMoeTIgLSB5MSkgKiBmZXR0aS5vdmFsU2NhbGFyLCBNYXRoLlBJIC8gMTAgKiBmZXR0aS53b2JibGUsIDAsIDIgKiBNYXRoLlBJKSA6XG4gICAgICAgIGVsbGlwc2UoY29udGV4dCwgZmV0dGkueCwgZmV0dGkueSwgTWF0aC5hYnMoeDIgLSB4MSkgKiBmZXR0aS5vdmFsU2NhbGFyLCBNYXRoLmFicyh5MiAtIHkxKSAqIGZldHRpLm92YWxTY2FsYXIsIE1hdGguUEkgLyAxMCAqIGZldHRpLndvYmJsZSwgMCwgMiAqIE1hdGguUEkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0Lm1vdmVUbyhNYXRoLmZsb29yKGZldHRpLngpLCBNYXRoLmZsb29yKGZldHRpLnkpKTtcbiAgICAgIGNvbnRleHQubGluZVRvKE1hdGguZmxvb3IoZmV0dGkud29iYmxlWCksIE1hdGguZmxvb3IoeTEpKTtcbiAgICAgIGNvbnRleHQubGluZVRvKE1hdGguZmxvb3IoeDIpLCBNYXRoLmZsb29yKHkyKSk7XG4gICAgICBjb250ZXh0LmxpbmVUbyhNYXRoLmZsb29yKHgxKSwgTWF0aC5mbG9vcihmZXR0aS53b2JibGVZKSk7XG4gICAgfVxuXG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICBjb250ZXh0LmZpbGwoKTtcblxuICAgIHJldHVybiBmZXR0aS50aWNrIDwgZmV0dGkudG90YWxUaWNrcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGFuaW1hdGUoY2FudmFzLCBmZXR0aXMsIHJlc2l6ZXIsIHNpemUsIGRvbmUpIHtcbiAgICB2YXIgYW5pbWF0aW5nRmV0dGlzID0gZmV0dGlzLnNsaWNlKCk7XG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB2YXIgYW5pbWF0aW9uRnJhbWU7XG4gICAgdmFyIGRlc3Ryb3k7XG5cbiAgICB2YXIgcHJvbSA9IHByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIGZ1bmN0aW9uIG9uRG9uZSgpIHtcbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSBkZXN0cm95ID0gbnVsbDtcblxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG5cbiAgICAgICAgZG9uZSgpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGlzV29ya2VyICYmICEoc2l6ZS53aWR0aCA9PT0gd29ya2VyU2l6ZS53aWR0aCAmJiBzaXplLmhlaWdodCA9PT0gd29ya2VyU2l6ZS5oZWlnaHQpKSB7XG4gICAgICAgICAgc2l6ZS53aWR0aCA9IGNhbnZhcy53aWR0aCA9IHdvcmtlclNpemUud2lkdGg7XG4gICAgICAgICAgc2l6ZS5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0ID0gd29ya2VyU2l6ZS5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNpemUud2lkdGggJiYgIXNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgcmVzaXplcihjYW52YXMpO1xuICAgICAgICAgIHNpemUud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgICAgc2l6ZS5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xuXG4gICAgICAgIGFuaW1hdGluZ0ZldHRpcyA9IGFuaW1hdGluZ0ZldHRpcy5maWx0ZXIoZnVuY3Rpb24gKGZldHRpKSB7XG4gICAgICAgICAgcmV0dXJuIHVwZGF0ZUZldHRpKGNvbnRleHQsIGZldHRpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGFuaW1hdGluZ0ZldHRpcy5sZW5ndGgpIHtcbiAgICAgICAgICBhbmltYXRpb25GcmFtZSA9IHJhZi5mcmFtZSh1cGRhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uRG9uZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGFuaW1hdGlvbkZyYW1lID0gcmFmLmZyYW1lKHVwZGF0ZSk7XG4gICAgICBkZXN0cm95ID0gb25Eb25lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZEZldHRpczogZnVuY3Rpb24gKGZldHRpcykge1xuICAgICAgICBhbmltYXRpbmdGZXR0aXMgPSBhbmltYXRpbmdGZXR0aXMuY29uY2F0KGZldHRpcyk7XG5cbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgICB9LFxuICAgICAgY2FudmFzOiBjYW52YXMsXG4gICAgICBwcm9taXNlOiBwcm9tLFxuICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgICAgcmFmLmNhbmNlbChhbmltYXRpb25GcmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVzdHJveSkge1xuICAgICAgICAgIGRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb25mZXR0aUNhbm5vbihjYW52YXMsIGdsb2JhbE9wdHMpIHtcbiAgICB2YXIgaXNMaWJDYW52YXMgPSAhY2FudmFzO1xuICAgIHZhciBhbGxvd1Jlc2l6ZSA9ICEhcHJvcChnbG9iYWxPcHRzIHx8IHt9LCAncmVzaXplJyk7XG4gICAgdmFyIGdsb2JhbERpc2FibGVGb3JSZWR1Y2VkTW90aW9uID0gcHJvcChnbG9iYWxPcHRzLCAnZGlzYWJsZUZvclJlZHVjZWRNb3Rpb24nLCBCb29sZWFuKTtcbiAgICB2YXIgc2hvdWxkVXNlV29ya2VyID0gY2FuVXNlV29ya2VyICYmICEhcHJvcChnbG9iYWxPcHRzIHx8IHt9LCAndXNlV29ya2VyJyk7XG4gICAgdmFyIHdvcmtlciA9IHNob3VsZFVzZVdvcmtlciA/IGdldFdvcmtlcigpIDogbnVsbDtcbiAgICB2YXIgcmVzaXplciA9IGlzTGliQ2FudmFzID8gc2V0Q2FudmFzV2luZG93U2l6ZSA6IHNldENhbnZhc1JlY3RTaXplO1xuICAgIHZhciBpbml0aWFsaXplZCA9IChjYW52YXMgJiYgd29ya2VyKSA/ICEhY2FudmFzLl9fY29uZmV0dGlfaW5pdGlhbGl6ZWQgOiBmYWxzZTtcbiAgICB2YXIgcHJlZmVyTGVzc01vdGlvbiA9IHR5cGVvZiBtYXRjaE1lZGlhID09PSAnZnVuY3Rpb24nICYmIG1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uKScpLm1hdGNoZXM7XG4gICAgdmFyIGFuaW1hdGlvbk9iajtcblxuICAgIGZ1bmN0aW9uIGZpcmVMb2NhbChvcHRpb25zLCBzaXplLCBkb25lKSB7XG4gICAgICB2YXIgcGFydGljbGVDb3VudCA9IHByb3Aob3B0aW9ucywgJ3BhcnRpY2xlQ291bnQnLCBvbmx5UG9zaXRpdmVJbnQpO1xuICAgICAgdmFyIGFuZ2xlID0gcHJvcChvcHRpb25zLCAnYW5nbGUnLCBOdW1iZXIpO1xuICAgICAgdmFyIHNwcmVhZCA9IHByb3Aob3B0aW9ucywgJ3NwcmVhZCcsIE51bWJlcik7XG4gICAgICB2YXIgc3RhcnRWZWxvY2l0eSA9IHByb3Aob3B0aW9ucywgJ3N0YXJ0VmVsb2NpdHknLCBOdW1iZXIpO1xuICAgICAgdmFyIGRlY2F5ID0gcHJvcChvcHRpb25zLCAnZGVjYXknLCBOdW1iZXIpO1xuICAgICAgdmFyIGdyYXZpdHkgPSBwcm9wKG9wdGlvbnMsICdncmF2aXR5JywgTnVtYmVyKTtcbiAgICAgIHZhciBkcmlmdCA9IHByb3Aob3B0aW9ucywgJ2RyaWZ0JywgTnVtYmVyKTtcbiAgICAgIHZhciBjb2xvcnMgPSBwcm9wKG9wdGlvbnMsICdjb2xvcnMnLCBjb2xvcnNUb1JnYik7XG4gICAgICB2YXIgdGlja3MgPSBwcm9wKG9wdGlvbnMsICd0aWNrcycsIE51bWJlcik7XG4gICAgICB2YXIgc2hhcGVzID0gcHJvcChvcHRpb25zLCAnc2hhcGVzJyk7XG4gICAgICB2YXIgc2NhbGFyID0gcHJvcChvcHRpb25zLCAnc2NhbGFyJyk7XG4gICAgICB2YXIgb3JpZ2luID0gZ2V0T3JpZ2luKG9wdGlvbnMpO1xuXG4gICAgICB2YXIgdGVtcCA9IHBhcnRpY2xlQ291bnQ7XG4gICAgICB2YXIgZmV0dGlzID0gW107XG5cbiAgICAgIHZhciBzdGFydFggPSBjYW52YXMud2lkdGggKiBvcmlnaW4ueDtcbiAgICAgIHZhciBzdGFydFkgPSBjYW52YXMuaGVpZ2h0ICogb3JpZ2luLnk7XG5cbiAgICAgIHdoaWxlICh0ZW1wLS0pIHtcbiAgICAgICAgZmV0dGlzLnB1c2goXG4gICAgICAgICAgcmFuZG9tUGh5c2ljcyh7XG4gICAgICAgICAgICB4OiBzdGFydFgsXG4gICAgICAgICAgICB5OiBzdGFydFksXG4gICAgICAgICAgICBhbmdsZTogYW5nbGUsXG4gICAgICAgICAgICBzcHJlYWQ6IHNwcmVhZCxcbiAgICAgICAgICAgIHN0YXJ0VmVsb2NpdHk6IHN0YXJ0VmVsb2NpdHksXG4gICAgICAgICAgICBjb2xvcjogY29sb3JzW3RlbXAgJSBjb2xvcnMubGVuZ3RoXSxcbiAgICAgICAgICAgIHNoYXBlOiBzaGFwZXNbcmFuZG9tSW50KDAsIHNoYXBlcy5sZW5ndGgpXSxcbiAgICAgICAgICAgIHRpY2tzOiB0aWNrcyxcbiAgICAgICAgICAgIGRlY2F5OiBkZWNheSxcbiAgICAgICAgICAgIGdyYXZpdHk6IGdyYXZpdHksXG4gICAgICAgICAgICBkcmlmdDogZHJpZnQsXG4gICAgICAgICAgICBzY2FsYXI6IHNjYWxhclxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHdlIGhhdmUgYSBwcmV2aW91cyBjYW52YXMgYWxyZWFkeSBhbmltYXRpbmcsXG4gICAgICAvLyBhZGQgdG8gaXRcbiAgICAgIGlmIChhbmltYXRpb25PYmopIHtcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbk9iai5hZGRGZXR0aXMoZmV0dGlzKTtcbiAgICAgIH1cblxuICAgICAgYW5pbWF0aW9uT2JqID0gYW5pbWF0ZShjYW52YXMsIGZldHRpcywgcmVzaXplciwgc2l6ZSAsIGRvbmUpO1xuXG4gICAgICByZXR1cm4gYW5pbWF0aW9uT2JqLnByb21pc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlyZShvcHRpb25zKSB7XG4gICAgICB2YXIgZGlzYWJsZUZvclJlZHVjZWRNb3Rpb24gPSBnbG9iYWxEaXNhYmxlRm9yUmVkdWNlZE1vdGlvbiB8fCBwcm9wKG9wdGlvbnMsICdkaXNhYmxlRm9yUmVkdWNlZE1vdGlvbicsIEJvb2xlYW4pO1xuICAgICAgdmFyIHpJbmRleCA9IHByb3Aob3B0aW9ucywgJ3pJbmRleCcsIE51bWJlcik7XG5cbiAgICAgIGlmIChkaXNhYmxlRm9yUmVkdWNlZE1vdGlvbiAmJiBwcmVmZXJMZXNzTW90aW9uKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTGliQ2FudmFzICYmIGFuaW1hdGlvbk9iaikge1xuICAgICAgICAvLyB1c2UgZXhpc3RpbmcgY2FudmFzIGZyb20gaW4tcHJvZ3Jlc3MgYW5pbWF0aW9uXG4gICAgICAgIGNhbnZhcyA9IGFuaW1hdGlvbk9iai5jYW52YXM7XG4gICAgICB9IGVsc2UgaWYgKGlzTGliQ2FudmFzICYmICFjYW52YXMpIHtcbiAgICAgICAgLy8gY3JlYXRlIGFuZCBpbml0aWFsaXplIGEgbmV3IGNhbnZhc1xuICAgICAgICBjYW52YXMgPSBnZXRDYW52YXMoekluZGV4KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWxsb3dSZXNpemUgJiYgIWluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vIGluaXRpYWxpemUgdGhlIHNpemUgb2YgYSB1c2VyLXN1cHBsaWVkIGNhbnZhc1xuICAgICAgICByZXNpemVyKGNhbnZhcyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaXplID0ge1xuICAgICAgICB3aWR0aDogY2FudmFzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNhbnZhcy5oZWlnaHRcbiAgICAgIH07XG5cbiAgICAgIGlmICh3b3JrZXIgJiYgIWluaXRpYWxpemVkKSB7XG4gICAgICAgIHdvcmtlci5pbml0KGNhbnZhcyk7XG4gICAgICB9XG5cbiAgICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHdvcmtlcikge1xuICAgICAgICBjYW52YXMuX19jb25mZXR0aV9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuICAgICAgICBpZiAod29ya2VyKSB7XG4gICAgICAgICAgLy8gVE9ETyB0aGlzIHJlYWxseSBzaG91bGRuJ3QgYmUgaW1tZWRpYXRlLCBiZWNhdXNlIGl0IGlzIGV4cGVuc2l2ZVxuICAgICAgICAgIHZhciBvYmogPSB7XG4gICAgICAgICAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc0xpYkNhbnZhcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmVzaXplcihvYmopO1xuXG4gICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHJlc2l6ZToge1xuICAgICAgICAgICAgICB3aWR0aDogb2JqLndpZHRoLFxuICAgICAgICAgICAgICBoZWlnaHQ6IG9iai5oZWlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkb24ndCBhY3R1YWxseSBxdWVyeSB0aGUgc2l6ZSBoZXJlLCBzaW5jZSB0aGlzXG4gICAgICAgIC8vIGNhbiBleGVjdXRlIGZyZXF1ZW50bHkgYW5kIHJhcGlkbHlcbiAgICAgICAgc2l6ZS53aWR0aCA9IHNpemUuaGVpZ2h0ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgICAgYW5pbWF0aW9uT2JqID0gbnVsbDtcblxuICAgICAgICBpZiAoYWxsb3dSZXNpemUpIHtcbiAgICAgICAgICBnbG9iYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTGliQ2FudmFzICYmIGNhbnZhcykge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgICBjYW52YXMgPSBudWxsO1xuICAgICAgICAgIGluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFsbG93UmVzaXplKSB7XG4gICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAod29ya2VyKSB7XG4gICAgICAgIHJldHVybiB3b3JrZXIuZmlyZShvcHRpb25zLCBzaXplLCBkb25lKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpcmVMb2NhbChvcHRpb25zLCBzaXplLCBkb25lKTtcbiAgICB9XG5cbiAgICBmaXJlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHdvcmtlcikge1xuICAgICAgICB3b3JrZXIucmVzZXQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGlvbk9iaikge1xuICAgICAgICBhbmltYXRpb25PYmoucmVzZXQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGZpcmU7XG4gIH1cblxuICBtb2R1bGUuZXhwb3J0cyA9IGNvbmZldHRpQ2Fubm9uKG51bGwsIHsgdXNlV29ya2VyOiB0cnVlLCByZXNpemU6IHRydWUgfSk7XG4gIG1vZHVsZS5leHBvcnRzLmNyZWF0ZSA9IGNvbmZldHRpQ2Fubm9uO1xufSgoZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMgfHwge307XG59KSgpLCBtb2R1bGUsIGZhbHNlKSk7XG5cbi8vIGVuZCBzb3VyY2UgY29udGVudFxuXG5leHBvcnQgZGVmYXVsdCBtb2R1bGUuZXhwb3J0cztcbmV4cG9ydCB2YXIgY3JlYXRlID0gbW9kdWxlLmV4cG9ydHMuY3JlYXRlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJY29uIiwiUmVhY3RDYW52YXNDb25mZXR0aSIsIkF2YXRhciIsIkFwcEJhciIsIkJveCIsIlN0YWNrIiwiU2xpZGVyIiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiQ29weXJpZ2h0IiwiRm9ybUNvbnRyb2wiLCJGb3JtSGVscGVyVGV4dCIsIklucHV0TGFiZWwiLCJNZW51SXRlbSIsIlNlbGVjdCIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiQWNjZXNzaWJpbGl0eU5ld0ljb24iLCJBcnJvd0ZvcndhcmRJY29uIiwiZGVmYXVsdExhbmd1YWdlIiwic3RhcnRWYWx1ZSIsInJhbmRvbUluUmFuZ2UiLCJtaW4iLCJtYXgiLCJNYXRoIiwicmFuZG9tIiwiY2FudmFzU3R5bGVzIiwicG9zaXRpb24iLCJwb2ludGVyRXZlbnRzIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiQ29udGludW91c1NsaWRlciIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiYmdjb2xvciIsIndpZGh0IiwiZmxleEdyb3ciLCJtYiJdLCJzb3VyY2VSb290IjoiIn0=
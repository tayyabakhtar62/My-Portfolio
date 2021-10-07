webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@primer/octicons-react/dist/index.esm.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var _src_Landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Landing */ "./src/Landing.js");
/* harmony import */ var _src_Skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Skills */ "./src/Skills.js");
/* harmony import */ var _src_Experience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Experience */ "./src/Experience.js");
/* harmony import */ var _src_About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/About */ "./src/About.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./data.json", 1);
var _jsxFileName = "C:\\Users\\HP\\Desktop\\next\\Portfolio\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    appBar: {
      boxShadow: "none"
    }
  };
});
var __N_SSG = true;
function Index(_ref) {
  _s();

  var projects = _ref.projects;
  var classes = useStyles();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_theme__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"]),
      theme = _useContext.theme,
      toggleTheme = _useContext.toggleTheme;

  var trigger = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useScrollTrigger"])({
    disableHysteresis: true
  });
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    color: !trigger ? "transparent" : "inherit",
    className: classes.appBar,
    position: "fixed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, _data_json__WEBPACK_IMPORTED_MODULE_7__["name"]), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    edge: "end",
    color: "inherit",
    onClick: toggleTheme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, theme.palette.type === "dark" ? "☀️" : "🌑"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    className: classes.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(_src_Landing__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx(_src_Skills__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx(_src_Experience__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), __jsx(_src_About__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  })));
}

_s(Index, "U8kaHMIBheHNlS/s58WhhMo3PvU=", false, function () {
  return [useStyles, _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useScrollTrigger"]];
});

_c = Index;

var _c;

$RefreshReg$(_c, "Index");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/Experience.js":
/*!***************************!*\
  !*** ./src/Experience.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Experience; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./data.json", 1);
var _jsxFileName = "C:\\Users\\HP\\Desktop\\next\\Portfolio\\src\\Experience.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    cont: {
      minHeight: "calc(100vh - ".concat(theme.spacing(4), "px)")
    },
    card: {
      height: '100%'
    },
    cardHeader: {
      paddingTop: 0
    },
    cardActionArea: {
      height: '100%'
    },
    expObj: {
      marginBottom: theme.spacing(4)
    }
  };
});

var getHumanDiff = function getHumanDiff(startDate, endDate) {
  var str = "";
  var start = new Date(startDate);
  var end = !!endDate ? new Date(endDate) : new Date();
  var years = end.getFullYear() - start.getFullYear();
  var months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years > 0) {
    str += years + " year";
    if (years > 1) str += "s";
  }

  if (str.length > 0) str += ", ";

  if (months > 0) {
    str += months + " month";
    if (months > 1) str += "s";
  }

  return str;
};

function Experience() {
  _s();

  var classes = useStyles();
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var mdDown = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])(theme.breakpoints.down('md'));
  var align = mdDown ? "center" : "flex-end";
  var textAlign = mdDown ? "center" : "right";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      animate = _useState[0],
      setAnimate = _useState[1];

  var animRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var observer = new IntersectionObserver(function (entries) {
      if (entries.some(function (entry) {
        return entry.isIntersecting;
      })) setAnimate(true);
    });
    observer.observe(animRef.current);
    return function () {
      return observer.unobserve(animRef.current);
    };
  }, []);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    direction: "row",
    container: true,
    justify: "center",
    alignItems: "center",
    spacing: 10,
    className: classes.cont,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    lg: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2",
    gutterBottom: true,
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "Experience"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
    mdDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Fade"], {
    "in": animate,
    style: {
      transitionDelay: '250ms'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    alt: "Experience",
    src: "/experience.svg",
    width: "996.46",
    height: "828.18",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }))))), __jsx("div", {
    ref: animRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }));
}

_s(Experience, "VNsw8viLenBPpb15/aIVe476X+4=", false, function () {
  return [useStyles, _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"], _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"]];
});

_c = Experience;

var _c;

$RefreshReg$(_c, "Experience");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/Projects.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9FeHBlcmllbmNlLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImFwcEJhciIsImJveFNoYWRvdyIsIkluZGV4IiwicHJvamVjdHMiLCJjbGFzc2VzIiwidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsInRvZ2dsZVRoZW1lIiwidHJpZ2dlciIsInVzZVNjcm9sbFRyaWdnZXIiLCJkaXNhYmxlSHlzdGVyZXNpcyIsIm5hbWUiLCJwYWxldHRlIiwidHlwZSIsInRvb2xiYXIiLCJjb250IiwibWluSGVpZ2h0Iiwic3BhY2luZyIsImNhcmQiLCJoZWlnaHQiLCJjYXJkSGVhZGVyIiwicGFkZGluZ1RvcCIsImNhcmRBY3Rpb25BcmVhIiwiZXhwT2JqIiwibWFyZ2luQm90dG9tIiwiZ2V0SHVtYW5EaWZmIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInN0ciIsInN0YXJ0IiwiRGF0ZSIsImVuZCIsInllYXJzIiwiZ2V0RnVsbFllYXIiLCJtb250aHMiLCJnZXRNb250aCIsImxlbmd0aCIsIkV4cGVyaWVuY2UiLCJ1c2VUaGVtZSIsIm1kRG93biIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsImRvd24iLCJhbGlnbiIsInRleHRBbGlnbiIsInVzZVN0YXRlIiwiYW5pbWF0ZSIsInNldEFuaW1hdGUiLCJhbmltUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJzb21lIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIm9ic2VydmUiLCJjdXJyZW50IiwidW5vYnNlcnZlIiwidHJhbnNpdGlvbkRlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFD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RXRELE9BQU8sQ0FBQ1csSUFBckc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsZ0JBQVksTUFBckM7QUFBc0MsU0FBSyxFQUFDLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFJSSxNQUFDLHdEQUFEO0FBQVEsVUFBTSxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQU0sVUFBSStCLE9BQVY7QUFBbUIsU0FBSyxFQUFFO0FBQUVjLHFCQUFlLEVBQUU7QUFBbkIsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGlEQUFEO0FBQ0ksT0FBRyxFQUFDLFlBRFI7QUFFSSxPQUFHLEVBQUMsaUJBRlI7QUFHSSxTQUFLLEVBQUMsUUFIVjtBQUlJLFVBQU0sRUFBQyxRQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREosQ0FKSixDQURKLEVBbUZJO0FBQUssT0FBRyxFQUFFWixPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuRkosQ0FESjtBQXVGSDs7R0EzR3VCWCxVO1VBRUoxQyxTLEVBQ0YyQywwRCxFQUNDRSwrRDs7O0tBSktILFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGYwN2I3ZjkxZTgwZDc4Y2U5NDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBCYXIsIENvbnRhaW5lciwgSWNvbkJ1dHRvbiwgbWFrZVN0eWxlcywgVG9vbGJhciwgVHlwb2dyYXBoeSwgdXNlU2Nyb2xsVHJpZ2dlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnLi4vc3JjL3RoZW1lJztcclxuaW1wb3J0IExhbmRpbmcgZnJvbSAnLi4vc3JjL0xhbmRpbmcnO1xyXG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL3NyYy9Ta2lsbHMnO1xyXG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tICcuLi9zcmMvRXhwZXJpZW5jZSc7XHJcbmltcG9ydCBBYm91dCBmcm9tICcuLi9zcmMvQWJvdXQnO1xyXG5pbXBvcnQgeyBuYW1lLCBwcm9qZWN0cyB9IGZyb20gJy4uL2RhdGEuanNvbic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDFcclxuICB9LFxyXG4gIGFwcEJhcjoge1xyXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICB9XHJcbn0pKVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IGJhc2VVUkkgPSBwcm9qZWN0cy5iYXNlVVJJXHJcbiAgY29uc3QgcmVwb3MgPSBwcm9qZWN0cy5yZXBvc2l0b3JpZXNcclxuICBjb25zdCByZXFJbml0ID0ge1xyXG4gICAgaGVhZGVyczogeyBcclxuICAgICAgJ0F1dGhvcml6YXRpb24nOiBgdG9rZW4gJHtwcm9jZXNzLmVudi5QQVR9YFxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBmdWxsUmVwb0RhdGEgPSBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoXHJcbiAgICByZXBvcy5tYXAoXHJcbiAgICAgIGFzeW5jIG5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcG8gPSBhd2FpdCBmZXRjaChiYXNlVVJJICsgbmFtZSwgcmVxSW5pdCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICAgICAgY29uc3QgbGFuZ3MgPSBhd2FpdCBmZXRjaChiYXNlVVJJICsgbmFtZSArIFwiL2xhbmd1YWdlc1wiLCByZXFJbml0KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5yZXBvLFxyXG4gICAgICAgICAgbGFuZ3VhZ2VzOiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhsYW5ncylcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2plY3RzOiBmdWxsUmVwb0RhdGFcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiA2MFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoeyBwcm9qZWN0cyB9KSB7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICBjb25zdCB7IHRoZW1lLCB0b2dnbGVUaGVtZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXHJcblxyXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKHsgZGlzYWJsZUh5c3RlcmVzaXM6IHRydWUgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXBwQmFyIGNvbG9yPXshdHJpZ2dlciA/IFwidHJhbnNwYXJlbnRcIiA6IFwiaW5oZXJpdFwifSBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfSBwb3NpdGlvbj1cImZpeGVkXCI+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIHsgbmFtZSB9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17dG9nZ2xlVGhlbWV9PlxyXG4gICAgICAgICAgICB7dGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwi4piA77iPXCIgOiBcIvCfjJFcIn1cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0gLz5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8TGFuZGluZyAvPlxyXG4gICAgICAgIDxTa2lsbHMgLz5cclxuICAgICAgICBcclxuICAgICAgICA8RXhwZXJpZW5jZS8+XHJcbiAgICAgICAgPEFib3V0Lz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IEF2YXRhciwgQ2FyZCwgQ2FyZEFjdGlvbkFyZWEsIENhcmRIZWFkZXIsIEZhZGUsIEdyaWQsIEhpZGRlbiwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IERhdGVSYW5nZSwgTG9jYXRpb25DaXR5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuaW1wb3J0IHsgZXhwZXJpZW5jZSB9IGZyb20gJy4uL2RhdGEuanNvbidcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBjb250OiB7XHJcbiAgICAgICAgbWluSGVpZ2h0OiBgY2FsYygxMDB2aCAtICR7dGhlbWUuc3BhY2luZyg0KX1weClgLFxyXG4gICAgfSxcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgICBjYXJkSGVhZGVyOiB7XHJcbiAgICAgICAgcGFkZGluZ1RvcDogMFxyXG4gICAgfSxcclxuICAgIGNhcmRBY3Rpb25BcmVhOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgZXhwT2JqOiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpXHJcbiAgICB9XHJcbn0pKVxyXG5cclxuY29uc3QgZ2V0SHVtYW5EaWZmID0gKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkgPT4ge1xyXG4gICAgbGV0IHN0ciA9IFwiXCJcclxuICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc3RhcnREYXRlKVxyXG4gICAgY29uc3QgZW5kID0gISFlbmREYXRlID8gbmV3IERhdGUoZW5kRGF0ZSkgOiBuZXcgRGF0ZSgpXHJcbiAgICBsZXQgeWVhcnMgPSBlbmQuZ2V0RnVsbFllYXIoKSAtIHN0YXJ0LmdldEZ1bGxZZWFyKClcclxuICAgIGxldCBtb250aHMgPSBlbmQuZ2V0TW9udGgoKSAtIHN0YXJ0LmdldE1vbnRoKClcclxuXHJcbiAgICBpZiAobW9udGhzIDwgMCkge1xyXG4gICAgICAgIHllYXJzIC09IDE7XHJcbiAgICAgICAgbW9udGhzICs9IDEyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh5ZWFycyA+IDApIHtcclxuICAgICAgICBzdHIgKz0geWVhcnMgKyBcIiB5ZWFyXCJcclxuICAgICAgICBpZiAoeWVhcnMgPiAxKVxyXG4gICAgICAgICAgICBzdHIgKz0gXCJzXCJcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RyLmxlbmd0aCA+IDApXHJcbiAgICAgICAgc3RyICs9IFwiLCBcIlxyXG5cclxuICAgIGlmIChtb250aHMgPiAwKSB7XHJcbiAgICAgICAgc3RyICs9IG1vbnRocyArIFwiIG1vbnRoXCJcclxuICAgICAgICBpZiAobW9udGhzID4gMSlcclxuICAgICAgICAgICAgc3RyICs9IFwic1wiXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhwZXJpZW5jZSgpIHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG4gICAgY29uc3QgbWREb3duID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpKVxyXG4gICAgY29uc3QgYWxpZ24gPSBtZERvd24gPyBcImNlbnRlclwiIDogXCJmbGV4LWVuZFwiXHJcbiAgICBjb25zdCB0ZXh0QWxpZ24gPSBtZERvd24gPyBcImNlbnRlclwiIDogXCJyaWdodFwiXHJcblxyXG4gICAgY29uc3QgW2FuaW1hdGUsIHNldEFuaW1hdGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBhbmltUmVmID0gdXNlUmVmKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW50cmllcy5zb21lKGVudHJ5ID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSlcclxuICAgICAgICAgICAgICAgIHNldEFuaW1hdGUodHJ1ZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoYW5pbVJlZi5jdXJyZW50KVxyXG4gICAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoYW5pbVJlZi5jdXJyZW50KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZCBkaXJlY3Rpb249XCJyb3dcIiBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzcGFjaW5nPXsxMH0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnR9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCIgZ3V0dGVyQm90dG9tIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgaW49e2FuaW1hdGV9IHN0eWxlPXt7IHRyYW5zaXRpb25EZWxheTogJzI1MG1zJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkV4cGVyaWVuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9leHBlcmllbmNlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI5OTYuNDZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjgyOC4xOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICB7LyogPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBsZz17Nn0gZGlyZWN0aW9uPVwiY29sdW1uXCIgc3BhY2luZz17MX0gYWxpZ25JdGVtcz17YWxpZ259PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGV4cGVyaWVuY2UpLm1hcCgodGl0bGUsIGlkKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGtleT17aWR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5leHBPYmp9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgYWxpZ249e3RleHRBbGlnbn0gZ3V0dGVyQm90dG9tIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0ganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZVt0aXRsZV0ubWFwKCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmdhbml6YXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZERhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc20ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBpbj17YW5pbWF0ZX0gc3R5bGU9e3sgdHJhbnNpdGlvbkRlbGF5OiBgJHsyMDAgKiBpfW1zYCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRBY3Rpb25BcmVhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHZhcmlhbnQ9XCJyb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YCR7b3JnYW5pemF0aW9ufSBsb2dvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aHVtYm5haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17b3JnYW5pemF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJoZWFkZXI9e3JvbGUgKyBcIiAtIFwiICsgdHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PERhdGVSYW5nZSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2dldEh1bWFuRGlmZihzdGFydERhdGUsIGVuZERhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJoZWFkZXI9e2Ake3N0YXJ0RGF0ZX0gLSAke2VuZERhdGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRIZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxMb2NhdGlvbkNpdHkgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmhlYWRlcj17YCR7Y2l0eX0sICR7c3RhdGV9LCAke2NvdW50cnl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRIZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvR3JpZD4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXthbmltUmVmfT48L2Rpdj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _src_Projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Projects */ "./src/Projects.js");
/* harmony import */ var _src_Experience__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Experience */ "./src/Experience.js");
/* harmony import */ var _src_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/About */ "./src/About.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./data.json", 1);
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
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    color: !trigger ? "transparent" : "inherit",
    className: classes.appBar,
    position: "fixed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, _data_json__WEBPACK_IMPORTED_MODULE_8__["name"]), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    edge: "end",
    color: "inherit",
    onClick: toggleTheme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, theme.palette.type === "dark" ? "☀️" : "🌑"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    className: classes.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_src_Landing__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx(_src_Skills__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), __jsx(_src_Experience__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx(_src_About__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwiYXBwQmFyIiwiYm94U2hhZG93IiwiSW5kZXgiLCJwcm9qZWN0cyIsImNsYXNzZXMiLCJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0IiwidG9nZ2xlVGhlbWUiLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsImRpc2FibGVIeXN0ZXJlc2lzIiwibmFtZSIsInBhbGV0dGUiLCJ0eXBlIiwidG9vbGJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNyQ0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEtBRCtCO0FBSXJDQyxVQUFNLEVBQUU7QUFDTkMsZUFBUyxFQUFFO0FBREw7QUFKNkIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7O0FBc0NlLFNBQVNDLEtBQVQsT0FBNkI7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFFMUMsTUFBTUMsT0FBTyxHQUFHVCxTQUFTLEVBQXpCOztBQUYwQyxvQkFJWFUsd0RBQVUsQ0FBQ0MsdURBQUQsQ0FKQztBQUFBLE1BSWxDVCxLQUprQyxlQUlsQ0EsS0FKa0M7QUFBQSxNQUkzQlUsV0FKMkIsZUFJM0JBLFdBSjJCOztBQU0xQyxNQUFNQyxPQUFPLEdBQUdDLDBFQUFnQixDQUFDO0FBQUVDLHFCQUFpQixFQUFFO0FBQXJCLEdBQUQsQ0FBaEM7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFTixPQUFPLENBQUNOLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVEsU0FBSyxFQUFFLENBQUNVLE9BQUQsR0FBVyxhQUFYLEdBQTJCLFNBQTFDO0FBQXFELGFBQVMsRUFBRUosT0FBTyxDQUFDSixNQUF4RTtBQUFnRixZQUFRLEVBQUMsT0FBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFFSSxPQUFPLENBQUNOLElBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSWEsK0NBREosQ0FERixFQUlFLE1BQUMsNERBQUQ7QUFBWSxRQUFJLEVBQUMsS0FBakI7QUFBdUIsU0FBSyxFQUFDLFNBQTdCO0FBQXVDLFdBQU8sRUFBRUosV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVixLQUFLLENBQUNlLE9BQU4sQ0FBY0MsSUFBZCxLQUF1QixNQUF2QixHQUFnQyxJQUFoQyxHQUF1QyxJQUQxQyxDQUpGLENBREYsQ0FERixFQVdFLE1BQUMseURBQUQ7QUFBUyxhQUFTLEVBQUVULE9BQU8sQ0FBQ1UsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUlFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FaRixDQURGO0FBc0JEOztHQTlCdUJaLEs7VUFFTlAsUyxFQUlBYyxrRTs7O0tBTk1QLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjgxYjNhZjM1NzBmZWFiYzQ2MzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBCYXIsIENvbnRhaW5lciwgSWNvbkJ1dHRvbiwgbWFrZVN0eWxlcywgVG9vbGJhciwgVHlwb2dyYXBoeSwgdXNlU2Nyb2xsVHJpZ2dlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnLi4vc3JjL3RoZW1lJztcclxuaW1wb3J0IExhbmRpbmcgZnJvbSAnLi4vc3JjL0xhbmRpbmcnO1xyXG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL3NyYy9Ta2lsbHMnO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vc3JjL1Byb2plY3RzJztcclxuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSAnLi4vc3JjL0V4cGVyaWVuY2UnO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vc3JjL0Fib3V0JztcclxuaW1wb3J0IHsgbmFtZSwgcHJvamVjdHMgfSBmcm9tICcuLi9kYXRhLmpzb24nO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxXHJcbiAgfSxcclxuICBhcHBCYXI6IHtcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgfVxyXG59KSlcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBiYXNlVVJJID0gcHJvamVjdHMuYmFzZVVSSVxyXG4gIGNvbnN0IHJlcG9zID0gcHJvamVjdHMucmVwb3NpdG9yaWVzXHJcbiAgY29uc3QgcmVxSW5pdCA9IHtcclxuICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICdBdXRob3JpemF0aW9uJzogYHRva2VuICR7cHJvY2Vzcy5lbnYuUEFUfWBcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgZnVsbFJlcG9EYXRhID0gYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFxyXG4gICAgcmVwb3MubWFwKFxyXG4gICAgICBhc3luYyBuYW1lID0+IHtcclxuICAgICAgICBjb25zdCByZXBvID0gYXdhaXQgZmV0Y2goYmFzZVVSSSArIG5hbWUsIHJlcUluaXQpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgICAgIGNvbnN0IGxhbmdzID0gYXdhaXQgZmV0Y2goYmFzZVVSSSArIG5hbWUgKyBcIi9sYW5ndWFnZXNcIiwgcmVxSW5pdCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4ucmVwbyxcclxuICAgICAgICAgIGxhbmd1YWdlczogT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobGFuZ3MpXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9qZWN0czogZnVsbFJlcG9EYXRhXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogNjBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHsgcHJvamVjdHMgfSkge1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgY29uc3QgeyB0aGVtZSwgdG9nZ2xlVGhlbWUgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxyXG5cclxuICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcih7IGRpc2FibGVIeXN0ZXJlc2lzOiB0cnVlIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEFwcEJhciBjb2xvcj17IXRyaWdnZXIgPyBcInRyYW5zcGFyZW50XCIgOiBcImluaGVyaXRcIn0gY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0gcG9zaXRpb249XCJmaXhlZFwiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICB7IG5hbWUgfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cImVuZFwiIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfT5cclxuICAgICAgICAgICAge3RoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcIuKYgO+4j1wiIDogXCLwn4yRXCJ9XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9IC8+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPExhbmRpbmcgLz5cclxuICAgICAgICA8U2tpbGxzIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEV4cGVyaWVuY2UvPlxyXG4gICAgICAgIDxBYm91dC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
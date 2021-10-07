webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

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
/* harmony import */ var C_Users_HP_Desktop_next_Portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var _src_Landing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Landing */ "./src/Landing.js");
/* harmony import */ var _src_Skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Skills */ "./src/Skills.js");
/* harmony import */ var _src_Experience__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Experience */ "./src/Experience.js");
/* harmony import */ var _src_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/About */ "./src/About.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./data.json", 1);


var _jsxFileName = "C:\\Users\\HP\\Desktop\\next\\Portfolio\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
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

  Object(C_Users_HP_Desktop_next_Portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var classes = useStyles();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_src_theme__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]),
      theme = _useContext.theme,
      toggleTheme = _useContext.toggleTheme;

  var trigger = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useScrollTrigger"])({
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
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    color: !trigger ? "transparent" : "inherit",
    className: classes.appBar,
    position: "fixed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, _data_json__WEBPACK_IMPORTED_MODULE_8__["name"]), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    edge: "end",
    color: "inherit",
    onClick: toggleTheme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, theme.palette.type === "dark" ? "☀️" : "🌑"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    className: classes.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(_src_Landing__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx(_src_Skills__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx(_src_Experience__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), __jsx(_src_About__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  })));
}

_s(Index, "U8kaHMIBheHNlS/s58WhhMo3PvU=", false, function () {
  return [useStyles, _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useScrollTrigger"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdERlc3RydWN0dXJpbmdFbXB0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwiYXBwQmFyIiwiYm94U2hhZG93IiwiSW5kZXgiLCJjbGFzc2VzIiwidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsInRvZ2dsZVRoZW1lIiwidHJpZ2dlciIsInVzZVNjcm9sbFRyaWdnZXIiLCJkaXNhYmxlSHlzdGVyZXNpcyIsIm5hbWUiLCJwYWxldHRlIiwidHlwZSIsInRvb2xiYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNyQ0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEtBRCtCO0FBSXJDQyxVQUFNLEVBQUU7QUFDTkMsZUFBUyxFQUFFO0FBREw7QUFKNkIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7O0FBc0NlLFNBQVNDLEtBQVQsT0FBb0I7QUFBQTs7QUFBQTs7QUFFakMsTUFBTUMsT0FBTyxHQUFHUixTQUFTLEVBQXpCOztBQUZpQyxvQkFJRlMsd0RBQVUsQ0FBQ0MsdURBQUQsQ0FKUjtBQUFBLE1BSXpCUixLQUp5QixlQUl6QkEsS0FKeUI7QUFBQSxNQUlsQlMsV0FKa0IsZUFJbEJBLFdBSmtCOztBQU1qQyxNQUFNQyxPQUFPLEdBQUdDLDBFQUFnQixDQUFDO0FBQUVDLHFCQUFpQixFQUFFO0FBQXJCLEdBQUQsQ0FBaEM7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFTixPQUFPLENBQUNMLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVEsU0FBSyxFQUFFLENBQUNTLE9BQUQsR0FBVyxhQUFYLEdBQTJCLFNBQTFDO0FBQXFELGFBQVMsRUFBRUosT0FBTyxDQUFDSCxNQUF4RTtBQUFnRixZQUFRLEVBQUMsT0FBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFFRyxPQUFPLENBQUNMLElBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSVksK0NBREosQ0FERixFQUlFLE1BQUMsNERBQUQ7QUFBWSxRQUFJLEVBQUMsS0FBakI7QUFBdUIsU0FBSyxFQUFDLFNBQTdCO0FBQXVDLFdBQU8sRUFBRUosV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVCxLQUFLLENBQUNjLE9BQU4sQ0FBY0MsSUFBZCxLQUF1QixNQUF2QixHQUFnQyxJQUFoQyxHQUF1QyxJQUQxQyxDQUpGLENBREYsQ0FERixFQVdFLE1BQUMseURBQUQ7QUFBUyxhQUFTLEVBQUVULE9BQU8sQ0FBQ1UsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUlFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FaRixDQURGO0FBc0JEOztHQTlCdUJYLEs7VUFFTlAsUyxFQUlBYSxrRTs7O0tBTk1OLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWNhZWNjODY0NTdlNDk2N2ZkMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3REZXN0cnVjdHVyaW5nRW1wdHkob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBkZXN0cnVjdHVyZSB1bmRlZmluZWRcIik7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwcEJhciwgQ29udGFpbmVyLCBJY29uQnV0dG9uLCBtYWtlU3R5bGVzLCBUb29sYmFyLCBUeXBvZ3JhcGh5LCB1c2VTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tICcuLi9zcmMvdGhlbWUnO1xyXG5pbXBvcnQgTGFuZGluZyBmcm9tICcuLi9zcmMvTGFuZGluZyc7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vc3JjL1NraWxscyc7XHJcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gJy4uL3NyYy9FeHBlcmllbmNlJztcclxuaW1wb3J0IEFib3V0IGZyb20gJy4uL3NyYy9BYm91dCc7XHJcbmltcG9ydCB7IG5hbWUsIHByb2plY3RzIH0gZnJvbSAnLi4vZGF0YS5qc29uJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMVxyXG4gIH0sXHJcbiAgYXBwQmFyOiB7XHJcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gIH1cclxufSkpXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgYmFzZVVSSSA9IHByb2plY3RzLmJhc2VVUklcclxuICBjb25zdCByZXBvcyA9IHByb2plY3RzLnJlcG9zaXRvcmllc1xyXG4gIGNvbnN0IHJlcUluaXQgPSB7XHJcbiAgICBoZWFkZXJzOiB7IFxyXG4gICAgICAnQXV0aG9yaXphdGlvbic6IGB0b2tlbiAke3Byb2Nlc3MuZW52LlBBVH1gXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGZ1bGxSZXBvRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChcclxuICAgIHJlcG9zLm1hcChcclxuICAgICAgYXN5bmMgbmFtZSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVwbyA9IGF3YWl0IGZldGNoKGJhc2VVUkkgKyBuYW1lLCByZXFJbml0KS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgICAgICBjb25zdCBsYW5ncyA9IGF3YWl0IGZldGNoKGJhc2VVUkkgKyBuYW1lICsgXCIvbGFuZ3VhZ2VzXCIsIHJlcUluaXQpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnJlcG8sXHJcbiAgICAgICAgICBsYW5ndWFnZXM6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGxhbmdzKVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIClcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvamVjdHM6IGZ1bGxSZXBvRGF0YVxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDYwXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7IH0pIHtcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIGNvbnN0IHsgdGhlbWUsIHRvZ2dsZVRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dClcclxuXHJcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoeyBkaXNhYmxlSHlzdGVyZXNpczogdHJ1ZSB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxBcHBCYXIgY29sb3I9eyF0cmlnZ2VyID8gXCJ0cmFuc3BhcmVudFwiIDogXCJpbmhlcml0XCJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9IHBvc2l0aW9uPVwiZml4ZWRcIj5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgeyBuYW1lIH1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJlbmRcIiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXt0b2dnbGVUaGVtZX0+XHJcbiAgICAgICAgICAgIHt0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwiZGFya1wiID8gXCLimIDvuI9cIiA6IFwi8J+MkVwifVxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfSAvPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxMYW5kaW5nIC8+XHJcbiAgICAgICAgPFNraWxscyAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxFeHBlcmllbmNlLz5cclxuICAgICAgICA8QWJvdXQvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
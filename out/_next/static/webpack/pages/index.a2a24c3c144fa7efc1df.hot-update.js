webpackHotUpdate_N_E("pages/index",{

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

  var _this = this;

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
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    lg: 6,
    direction: "column",
    spacing: 1,
    alignItems: align,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, Object.getOwnPropertyNames(_data_json__WEBPACK_IMPORTED_MODULE_4__["experience"]).map(function (title, id) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      key: id,
      className: classes.expObj,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h4",
      align: textAlign,
      gutterBottom: true,
      component: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 29
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      item: true,
      direction: "row",
      spacing: 1,
      justify: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 29
      }
    }, _data_json__WEBPACK_IMPORTED_MODULE_4__["experience"][title].map(function (_ref, i) {
      var organization = _ref.organization,
          role = _ref.role,
          type = _ref.type,
          startDate = _ref.startDate,
          endDate = _ref.endDate,
          city = _ref.city,
          state = _ref.state,
          country = _ref.country,
          url = _ref.url,
          thumbnail = _ref.thumbnail;
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 12,
        sm: true,
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 41
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Fade"], {
        "in": animate,
        style: {
          transitionDelay: "".concat(200 * i, "ms")
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 45
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: classes.card,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 49
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], {
        className: classes.cardActionArea,
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 53
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], {
        avatar: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          variant: "rounded",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 65
          }
        }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
          alt: "".concat(organization, " logo"),
          src: thumbnail,
          layout: "fill",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 69
          }
        })),
        title: organization,
        subheader: role + " - " + type,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 57
        }
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], {
        avatar: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["DateRange"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 69
          }
        }),
        title: getHumanDiff(startDate, endDate),
        subheader: "".concat(startDate, " - ").concat(endDate),
        className: classes.cardHeader,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 57
        }
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], {
        avatar: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["LocationCity"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 69
          }
        }),
        subheader: "".concat(city, ", ").concat(state, ", ").concat(country),
        className: classes.cardHeader,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 57
        }
      })))));
    })));
  })), __jsx("div", {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0V4cGVyaWVuY2UuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udCIsIm1pbkhlaWdodCIsInNwYWNpbmciLCJjYXJkIiwiaGVpZ2h0IiwiY2FyZEhlYWRlciIsInBhZGRpbmdUb3AiLCJjYXJkQWN0aW9uQXJlYSIsImV4cE9iaiIsIm1hcmdpbkJvdHRvbSIsImdldEh1bWFuRGlmZiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzdHIiLCJzdGFydCIsIkRhdGUiLCJlbmQiLCJ5ZWFycyIsImdldEZ1bGxZZWFyIiwibW9udGhzIiwiZ2V0TW9udGgiLCJsZW5ndGgiLCJFeHBlcmllbmNlIiwiY2xhc3NlcyIsInVzZVRoZW1lIiwibWREb3duIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwiZG93biIsImFsaWduIiwidGV4dEFsaWduIiwidXNlU3RhdGUiLCJhbmltYXRlIiwic2V0QW5pbWF0ZSIsImFuaW1SZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsInNvbWUiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsImN1cnJlbnQiLCJ1bm9ic2VydmUiLCJ0cmFuc2l0aW9uRGVsYXkiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZXhwZXJpZW5jZSIsIm1hcCIsInRpdGxlIiwiaWQiLCJpIiwib3JnYW5pemF0aW9uIiwicm9sZSIsInR5cGUiLCJjaXR5Iiwic3RhdGUiLCJjb3VudHJ5IiwidXJsIiwidGh1bWJuYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNuQ0MsUUFBSSxFQUFFO0FBQ0ZD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QUMsNERBQUQ7QUFDSSxjQUFNLEVBQUUsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFo7QUFFSSxhQUFLLEVBQUU5QyxZQUFZLENBQUNDLFNBQUQsRUFBWUMsT0FBWixDQUZ2QjtBQUdJLGlCQUFTLFlBQUtELFNBQUwsZ0JBQW9CQyxPQUFwQixDQUhiO0FBSUksaUJBQVMsRUFBRVcsT0FBTyxDQUFDbEIsVUFKdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQW5CSixFQXlCSSxNQUFDLDREQUFEO0FBQ0ksY0FBTSxFQUFFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURaO0FBRUksaUJBQVMsWUFBS29ELElBQUwsZUFBY0MsS0FBZCxlQUF3QkMsT0FBeEIsQ0FGYjtBQUdJLGlCQUFTLEVBQUVwQyxPQUFPLENBQUNsQixVQUh2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBekJKLENBREosQ0FESixDQURKLENBWmtCO0FBQUEsS0FBdEIsQ0FGUixDQUpKLENBRHVDO0FBQUEsR0FBM0MsQ0FGUixDQWxCSixFQW1GSTtBQUFLLE9BQUcsRUFBRTZCLE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5GSixDQURKO0FBdUZIOztHQTNHdUJaLFU7VUFFSnpCLFMsRUFDRjJCLDBELEVBQ0NFLCtEOzs7S0FKS0osVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMmEyNGMzYzE0NGZhN2VmYzFkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBDYXJkLCBDYXJkQWN0aW9uQXJlYSwgQ2FyZEhlYWRlciwgRmFkZSwgR3JpZCwgSGlkZGVuLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5LCB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgRGF0ZVJhbmdlLCBMb2NhdGlvbkNpdHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgeyBleHBlcmllbmNlIH0gZnJvbSAnLi4vZGF0YS5qc29uJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGNvbnQ6IHtcclxuICAgICAgICBtaW5IZWlnaHQ6IGBjYWxjKDEwMHZoIC0gJHt0aGVtZS5zcGFjaW5nKDQpfXB4KWAsXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGNhcmRIZWFkZXI6IHtcclxuICAgICAgICBwYWRkaW5nVG9wOiAwXHJcbiAgICB9LFxyXG4gICAgY2FyZEFjdGlvbkFyZWE6IHtcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgICBleHBPYmo6IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNClcclxuICAgIH1cclxufSkpXHJcblxyXG5jb25zdCBnZXRIdW1hbkRpZmYgPSAoc3RhcnREYXRlLCBlbmREYXRlKSA9PiB7XHJcbiAgICBsZXQgc3RyID0gXCJcIlxyXG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShzdGFydERhdGUpXHJcbiAgICBjb25zdCBlbmQgPSAhIWVuZERhdGUgPyBuZXcgRGF0ZShlbmREYXRlKSA6IG5ldyBEYXRlKClcclxuICAgIGxldCB5ZWFycyA9IGVuZC5nZXRGdWxsWWVhcigpIC0gc3RhcnQuZ2V0RnVsbFllYXIoKVxyXG4gICAgbGV0IG1vbnRocyA9IGVuZC5nZXRNb250aCgpIC0gc3RhcnQuZ2V0TW9udGgoKVxyXG5cclxuICAgIGlmIChtb250aHMgPCAwKSB7XHJcbiAgICAgICAgeWVhcnMgLT0gMTtcclxuICAgICAgICBtb250aHMgKz0gMTI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHllYXJzID4gMCkge1xyXG4gICAgICAgIHN0ciArPSB5ZWFycyArIFwiIHllYXJcIlxyXG4gICAgICAgIGlmICh5ZWFycyA+IDEpXHJcbiAgICAgICAgICAgIHN0ciArPSBcInNcIlxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdHIubGVuZ3RoID4gMClcclxuICAgICAgICBzdHIgKz0gXCIsIFwiXHJcblxyXG4gICAgaWYgKG1vbnRocyA+IDApIHtcclxuICAgICAgICBzdHIgKz0gbW9udGhzICsgXCIgbW9udGhcIlxyXG4gICAgICAgIGlmIChtb250aHMgPiAxKVxyXG4gICAgICAgICAgICBzdHIgKz0gXCJzXCJcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeHBlcmllbmNlKCkge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgICBjb25zdCBtZERvd24gPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJykpXHJcbiAgICBjb25zdCBhbGlnbiA9IG1kRG93biA/IFwiY2VudGVyXCIgOiBcImZsZXgtZW5kXCJcclxuICAgIGNvbnN0IHRleHRBbGlnbiA9IG1kRG93biA/IFwiY2VudGVyXCIgOiBcInJpZ2h0XCJcclxuXHJcbiAgICBjb25zdCBbYW5pbWF0ZSwgc2V0QW5pbWF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGFuaW1SZWYgPSB1c2VSZWYoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyaWVzLnNvbWUoZW50cnkgPT4gZW50cnkuaXNJbnRlcnNlY3RpbmcpKVxyXG4gICAgICAgICAgICAgICAgc2V0QW5pbWF0ZSh0cnVlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShhbmltUmVmLmN1cnJlbnQpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShhbmltUmVmLmN1cnJlbnQpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkIGRpcmVjdGlvbj1cInJvd1wiIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHNwYWNpbmc9ezEwfSBjbGFzc05hbWU9e2NsYXNzZXMuY29udH0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17Nn0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBndXR0ZXJCb3R0b20gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBFeHBlcmllbmNlXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBpbj17YW5pbWF0ZX0gc3R5bGU9e3sgdHJhbnNpdGlvbkRlbGF5OiAnMjUwbXMnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiRXhwZXJpZW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2V4cGVyaWVuY2Uuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjk5Ni40NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiODI4LjE4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gbGc9ezZ9IGRpcmVjdGlvbj1cImNvbHVtblwiIHNwYWNpbmc9ezF9IGFsaWduSXRlbXM9e2FsaWdufT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhleHBlcmllbmNlKS5tYXAoKHRpdGxlLCBpZCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e2lkfSBjbGFzc05hbWU9e2NsYXNzZXMuZXhwT2JqfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPXt0ZXh0QWxpZ259IGd1dHRlckJvdHRvbSBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VbdGl0bGVdLm1hcCgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgaW49e2FuaW1hdGV9IHN0eWxlPXt7IHRyYW5zaXRpb25EZWxheTogYCR7MjAwICogaX1tc2AgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkQWN0aW9uQXJlYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt1cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciB2YXJpYW50PVwicm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake29yZ2FuaXphdGlvbn0gbG9nb2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e29yZ2FuaXphdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViaGVhZGVyPXtyb2xlICsgXCIgLSBcIiArIHR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxEYXRlUmFuZ2UgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtnZXRIdW1hbkRpZmYoc3RhcnREYXRlLCBlbmREYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViaGVhZGVyPXtgJHtzdGFydERhdGV9IC0gJHtlbmREYXRlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkSGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8TG9jYXRpb25DaXR5IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJoZWFkZXI9e2Ake2NpdHl9LCAke3N0YXRlfSwgJHtjb3VudHJ5fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkSGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXthbmltUmVmfT48L2Rpdj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
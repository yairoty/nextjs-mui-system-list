self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SystemItem.js":
/*!**********************************!*\
  !*** ./components/SystemItem.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _DetailBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailBox */ "./components/DetailBox.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\projects\\nextJs-system-list\\components\\SystemItem.js",
    _this = undefined,
    _s = $RefreshSig$();











var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {
  return {
    root: {
      flex: 'auto'
    },
    header: {
      transition: '.2s',
      '&:hover': {
        transform: 'scale(1.02)'
      }
    },
    headerButton: {
      width: '100%',
      flex: 'auto 1 0'
    }
  };
});

var SystemItem = function SystemItem(_ref) {
  _s();

  var systemItem = _ref.systemItem;
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__.default, {
    raised: true,
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__.default, {
      className: classes.headerButton,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/system/".concat(systemItem.id),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_7__.default, {
          className: classes.header,
          title: systemItem.name,
          subheader: systemItem.status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
        container: true,
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DetailBox__WEBPACK_IMPORTED_MODULE_3__.default, {
            title: 'TYPE',
            value: systemItem.type && systemItem.type.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DetailBox__WEBPACK_IMPORTED_MODULE_3__.default, {
            title: 'SITE',
            value: systemItem.site && systemItem.site.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(SystemItem, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = SystemItem;
/* harmony default export */ __webpack_exports__["default"] = (SystemItem);

var _c;

$RefreshReg$(_c, "SystemItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW1JdGVtLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4IiwiaGVhZGVyIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsImhlYWRlckJ1dHRvbiIsIndpZHRoIiwiU3lzdGVtSXRlbSIsInN5c3RlbUl0ZW0iLCJjbGFzc2VzIiwiaWQiLCJuYW1lIiwic3RhdHVzIiwidHlwZSIsInNpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsVUFBSSxFQUFFO0FBREYsS0FEaUM7QUFJdkNDLFVBQU0sRUFBRTtBQUNOQyxnQkFBVSxFQUFFLEtBRE47QUFFTixpQkFBVztBQUNUQyxpQkFBUyxFQUFFO0FBREY7QUFGTCxLQUorQjtBQVV2Q0MsZ0JBQVksRUFBRTtBQUNaQyxXQUFLLEVBQUUsTUFESztBQUVaTCxVQUFJLEVBQUU7QUFGTTtBQVZ5QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFnQkEsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQ3JDLE1BQU1DLE9BQU8sR0FBR1osU0FBUyxFQUF6QjtBQUVBLHNCQUNFLDhEQUFDLDJEQUFEO0FBQU0sVUFBTSxNQUFaO0FBQWEsYUFBUyxFQUFFWSxPQUFPLENBQUNULElBQWhDO0FBQUEsNEJBQ0UsOERBQUMsaUVBQUQ7QUFBWSxlQUFTLEVBQUVTLE9BQU8sQ0FBQ0osWUFBL0I7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksb0JBQWFHLFVBQVUsQ0FBQ0UsRUFBeEIsQ0FBVjtBQUFBLCtCQUNFLDhEQUFDLGlFQUFEO0FBQ0UsbUJBQVMsRUFBRUQsT0FBTyxDQUFDUCxNQURyQjtBQUVFLGVBQUssRUFBRU0sVUFBVSxDQUFDRyxJQUZwQjtBQUdFLG1CQUFTLEVBQUVILFVBQVUsQ0FBQ0k7QUFIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFVRSw4REFBQyxrRUFBRDtBQUFBLDZCQUNFLDhEQUFDLG1EQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixrQkFBVSxFQUFDLFFBQTNCO0FBQUEsZ0NBQ0UsOERBQUMsbURBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBQSxpQ0FDRSw4REFBQywrQ0FBRDtBQUFXLGlCQUFLLEVBQUUsTUFBbEI7QUFBMEIsaUJBQUssRUFBRUosVUFBVSxDQUFDSyxJQUFYLElBQW1CTCxVQUFVLENBQUNLLElBQVgsQ0FBZ0JGO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUsOERBQUMsbURBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBQSxpQ0FDRSw4REFBQywrQ0FBRDtBQUFXLGlCQUFLLEVBQUUsTUFBbEI7QUFBMEIsaUJBQUssRUFBRUgsVUFBVSxDQUFDTSxJQUFYLElBQW1CTixVQUFVLENBQUNNLElBQVgsQ0FBZ0JIO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQTdCRDs7R0FBTUosVTtVQUNZVixTOzs7S0FEWlUsVTtBQStCTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYTFkMjljM2QwNTliYWQ0ZTJjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2UnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXInO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgRGV0YWlsQm94IGZyb20gJy4vRGV0YWlsQm94JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXg6ICdhdXRvJ1xyXG4gIH0sXHJcbiAgaGVhZGVyOiB7XHJcbiAgICB0cmFuc2l0aW9uOiAnLjJzJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjAyKScsXHJcbiAgICB9XHJcbiAgfSxcclxuICBoZWFkZXJCdXR0b246IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBmbGV4OiAnYXV0byAxIDAnXHJcbiAgfVxyXG59KSk7XHJcblxyXG5jb25zdCBTeXN0ZW1JdGVtID0gKHsgc3lzdGVtSXRlbSB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgcmFpc2VkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEJ1dHRvbkJhc2UgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlckJ1dHRvbn0+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9zeXN0ZW0vJHtzeXN0ZW1JdGVtLmlkfWB9PlxyXG4gICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn1cclxuICAgICAgICAgICAgdGl0bGU9e3N5c3RlbUl0ZW0ubmFtZX1cclxuICAgICAgICAgICAgc3ViaGVhZGVyPXtzeXN0ZW1JdGVtLnN0YXR1c31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPERldGFpbEJveCB0aXRsZT17J1RZUEUnfSB2YWx1ZT17c3lzdGVtSXRlbS50eXBlICYmIHN5c3RlbUl0ZW0udHlwZS5uYW1lfSAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPERldGFpbEJveCB0aXRsZT17J1NJVEUnfSB2YWx1ZT17c3lzdGVtSXRlbS5zaXRlICYmIHN5c3RlbUl0ZW0uc2l0ZS5uYW1lfSAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuXHJcblxyXG5cclxuICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgIDwvQ2FyZD5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTeXN0ZW1JdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
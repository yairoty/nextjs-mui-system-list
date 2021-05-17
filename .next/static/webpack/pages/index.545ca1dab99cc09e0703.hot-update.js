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
    },
    detailsBox: {
      padding: '4px 8px',
      marginRight: '8px',
      borderRadius: '4px'
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
          lineNumber: 40,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
            lineNumber: 50,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DetailBox__WEBPACK_IMPORTED_MODULE_3__.default, {
            title: 'SITE',
            value: systemItem.site && systemItem.site.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW1JdGVtLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4IiwiaGVhZGVyIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsImhlYWRlckJ1dHRvbiIsIndpZHRoIiwiZGV0YWlsc0JveCIsInBhZGRpbmciLCJtYXJnaW5SaWdodCIsImJvcmRlclJhZGl1cyIsIlN5c3RlbUl0ZW0iLCJzeXN0ZW1JdGVtIiwiY2xhc3NlcyIsImlkIiwibmFtZSIsInN0YXR1cyIsInR5cGUiLCJzaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLFVBQUksRUFBRTtBQURGLEtBRGlDO0FBSXZDQyxVQUFNLEVBQUU7QUFDTkMsZ0JBQVUsRUFBRSxLQUROO0FBRU4saUJBQVc7QUFDVEMsaUJBQVMsRUFBRTtBQURGO0FBRkwsS0FKK0I7QUFVdkNDLGdCQUFZLEVBQUU7QUFDWkMsV0FBSyxFQUFFLE1BREs7QUFFWkwsVUFBSSxFQUFFO0FBRk0sS0FWeUI7QUFjdkNNLGNBQVUsRUFBRTtBQUNWQyxhQUFPLEVBQUUsU0FEQztBQUVWQyxpQkFBVyxFQUFFLEtBRkg7QUFHVkMsa0JBQVksRUFBRTtBQUhKO0FBZDJCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQXFCQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDckMsTUFBTUMsT0FBTyxHQUFHaEIsU0FBUyxFQUF6QjtBQUVBLHNCQUNFLDhEQUFDLDJEQUFEO0FBQU0sVUFBTSxNQUFaO0FBQWEsYUFBUyxFQUFFZ0IsT0FBTyxDQUFDYixJQUFoQztBQUFBLDRCQUNFLDhEQUFDLGlFQUFEO0FBQVksZUFBUyxFQUFFYSxPQUFPLENBQUNSLFlBQS9CO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLG9CQUFhTyxVQUFVLENBQUNFLEVBQXhCLENBQVY7QUFBQSwrQkFDRSw4REFBQyxpRUFBRDtBQUNFLG1CQUFTLEVBQUVELE9BQU8sQ0FBQ1gsTUFEckI7QUFFRSxlQUFLLEVBQUVVLFVBQVUsQ0FBQ0csSUFGcEI7QUFHRSxtQkFBUyxFQUFFSCxVQUFVLENBQUNJO0FBSHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBVUUsOERBQUMsa0VBQUQ7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0Isa0JBQVUsRUFBQyxRQUEzQjtBQUFBLGdDQUNFLDhEQUFDLG1EQUFEO0FBQU0sY0FBSSxNQUFWO0FBQUEsaUNBQ0UsOERBQUMsK0NBQUQ7QUFBVyxpQkFBSyxFQUFFLE1BQWxCO0FBQTBCLGlCQUFLLEVBQUVKLFVBQVUsQ0FBQ0ssSUFBWCxJQUFtQkwsVUFBVSxDQUFDSyxJQUFYLENBQWdCRjtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVlFLDhEQUFDLG1EQUFEO0FBQU0sY0FBSSxNQUFWO0FBQUEsaUNBQ0UsOERBQUMsK0NBQUQ7QUFBVyxpQkFBSyxFQUFFLE1BQWxCO0FBQTBCLGlCQUFLLEVBQUVILFVBQVUsQ0FBQ00sSUFBWCxJQUFtQk4sVUFBVSxDQUFDTSxJQUFYLENBQWdCSDtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQ0QsQ0E3Q0Q7O0dBQU1KLFU7VUFDWWQsUzs7O0tBRFpjLFU7QUErQ04sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTQ1Y2ExZGFiOTljYzA5ZTA3MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IERldGFpbEJveCBmcm9tICcuL0RldGFpbEJveCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4OiAnYXV0bydcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgdHJhbnNpdGlvbjogJy4ycycsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4wMiknLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGVhZGVyQnV0dG9uOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZmxleDogJ2F1dG8gMSAwJ1xyXG4gIH0sXHJcbiAgZGV0YWlsc0JveDoge1xyXG4gICAgcGFkZGluZzogJzRweCA4cHgnLFxyXG4gICAgbWFyZ2luUmlnaHQ6ICc4cHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4J1xyXG4gIH1cclxufSkpO1xyXG5cclxuY29uc3QgU3lzdGVtSXRlbSA9ICh7IHN5c3RlbUl0ZW0gfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIHJhaXNlZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxCdXR0b25CYXNlIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJCdXR0b259PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2Avc3lzdGVtLyR7c3lzdGVtSXRlbS5pZH1gfT5cclxuICAgICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9XHJcbiAgICAgICAgICAgIHRpdGxlPXtzeXN0ZW1JdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIHN1YmhlYWRlcj17c3lzdGVtSXRlbS5zdGF0dXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9CdXR0b25CYXNlPlxyXG4gICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxEZXRhaWxCb3ggdGl0bGU9eydUWVBFJ30gdmFsdWU9e3N5c3RlbUl0ZW0udHlwZSAmJiBzeXN0ZW1JdGVtLnR5cGUubmFtZX0gLz5cclxuICAgICAgICAgICAgey8qIDxCb3ggYmdjb2xvcj1cImluZm8ubWFpblwiIGNvbG9yPVwiaW5mby5jb250cmFzdFRleHRcIiBwPXsyfSBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsc0JveH0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgICAgVFlQRVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAgICB7c3lzdGVtSXRlbS50eXBlICYmIHN5c3RlbUl0ZW0udHlwZS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+ICovfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPERldGFpbEJveCB0aXRsZT17J1NJVEUnfSB2YWx1ZT17c3lzdGVtSXRlbS5zaXRlICYmIHN5c3RlbUl0ZW0uc2l0ZS5uYW1lfSAvPlxyXG4gICAgICAgICAgICB7LyogPEJveCBiZ2NvbG9yPVwiaW5mby5tYWluXCIgY29sb3I9XCJpbmZvLmNvbnRyYXN0VGV4dFwiIHA9ezJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxzQm94fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAgICBTSVRFXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICAgIHtzeXN0ZW1JdGVtLnNpdGUgJiYgc3lzdGVtSXRlbS5zaXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD4gKi99XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG5cclxuXHJcblxyXG4gICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgPC9DYXJkPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN5c3RlbUl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
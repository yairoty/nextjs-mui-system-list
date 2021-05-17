self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SystemList.js":
/*!**********************************!*\
  !*** ./components/SystemList.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SystemItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemItem */ "./components/SystemItem.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/TreeView */ "./node_modules/@material-ui/lab/esm/TreeView/index.js");
/* harmony import */ var _material_ui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/TreeItem */ "./node_modules/@material-ui/lab/esm/TreeItem/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowLeft */ "./node_modules/@material-ui/icons/KeyboardArrowLeft.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\projects\\nextJs-system-list\\components\\SystemList.js",
    _this = undefined,
    _s = $RefreshSig$();








var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function (theme) {
  return {
    treeNode: {
      // marginTop: '8px',
      position: 'relative'
    },
    expandIcon: {
      position: 'absolute',
      top: '152px',
      right: '8px',
      zIndex: 1
    }
  };
});

var SystemList = function SystemList(_ref) {
  _s();

  var systems = _ref.systems;
  var classes = useStyles();

  var renderTree = function renderTree(nodes) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_3__.default, {
      nodeId: nodes.id,
      className: classes.treeNode,
      label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SystemItem__WEBPACK_IMPORTED_MODULE_1__.default, {
        systemItem: nodes
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this),
      children: Array.isArray(nodes.children) ? nodes.children.map(function (node) {
        return renderTree(node);
      }) : null
    }, nodes.id, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, _this);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
    container: true,
    spacing: 8,
    justify: "center",
    children: systems.map(function (systemItem) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
        item: true,
        xs: 12,
        sm: 12,
        md: 6,
        xl: 4,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_5__.default, {
          defaultCollapseIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__.default, {
            className: classes.expandIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, _this),
          defaultExpanded: ['root'],
          defaultExpandIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_7__.default, {
            className: classes.expandIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, _this),
          children: renderTree(systemItem)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this)
      }, systemItem.id, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, _this);
};

_s(SystemList, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = SystemList;
/* harmony default export */ __webpack_exports__["default"] = (SystemList);

var _c;

$RefreshReg$(_c, "SystemList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW1MaXN0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInRyZWVOb2RlIiwicG9zaXRpb24iLCJleHBhbmRJY29uIiwidG9wIiwicmlnaHQiLCJ6SW5kZXgiLCJTeXN0ZW1MaXN0Iiwic3lzdGVtcyIsImNsYXNzZXMiLCJyZW5kZXJUcmVlIiwibm9kZXMiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsImNoaWxkcmVuIiwibWFwIiwibm9kZSIsInN5c3RlbUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFlBQVEsRUFBRTtBQUNSO0FBQ0FDLGNBQVEsRUFBRTtBQUZGLEtBRDZCO0FBS3ZDQyxjQUFVLEVBQUU7QUFDVkQsY0FBUSxFQUFFLFVBREE7QUFFVkUsU0FBRyxFQUFFLE9BRks7QUFHVkMsV0FBSyxFQUFFLEtBSEc7QUFJVkMsWUFBTSxFQUFFO0FBSkU7QUFMMkIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBY0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDbEMsTUFBTUMsT0FBTyxHQUFHWCxTQUFTLEVBQXpCOztBQUVBLE1BQU1ZLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQ7QUFBQSx3QkFDakIsOERBQUMsOERBQUQ7QUFBeUIsWUFBTSxFQUFFQSxLQUFLLENBQUNDLEVBQXZDO0FBQTJDLGVBQVMsRUFBRUgsT0FBTyxDQUFDUixRQUE5RDtBQUNFLFdBQUssZUFDSCw4REFBQyxnREFBRDtBQUFZLGtCQUFVLEVBQUVVO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBLGdCQUlHRSxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsS0FBSyxDQUFDSSxRQUFwQixJQUFnQ0osS0FBSyxDQUFDSSxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRDtBQUFBLGVBQVVQLFVBQVUsQ0FBQ08sSUFBRCxDQUFwQjtBQUFBLE9BQW5CLENBQWhDLEdBQWlGO0FBSnBGLE9BQWVOLEtBQUssQ0FBQ0MsRUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURpQjtBQUFBLEdBQW5COztBQVNBLHNCQUNFLDhEQUFDLDJEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxDQUF6QjtBQUE0QixXQUFPLEVBQUMsUUFBcEM7QUFBQSxjQUNHSixPQUFPLENBQUNRLEdBQVIsQ0FBWSxVQUFDRSxVQUFEO0FBQUEsMEJBQ1gsOERBQUMsMkRBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixVQUFFLEVBQUUsRUFBdkI7QUFBMkIsVUFBRSxFQUFFLENBQS9CO0FBQWtDLFVBQUUsRUFBRSxDQUF0QztBQUFBLCtCQUNFLDhEQUFDLDhEQUFEO0FBQ0UsNkJBQW1CLGVBQ2pCLDhEQUFDLGtFQUFEO0FBQWdCLHFCQUFTLEVBQUVULE9BQU8sQ0FBQ047QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUlFLHlCQUFlLEVBQUUsQ0FBQyxNQUFELENBSm5CO0FBS0UsMkJBQWlCLGVBQ2YsOERBQUMseUVBQUQ7QUFBdUIscUJBQVMsRUFBRU0sT0FBTyxDQUFDTjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KO0FBQUEsb0JBUUdPLFVBQVUsQ0FBQ1EsVUFBRDtBQVJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUE4Q0EsVUFBVSxDQUFDTixFQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBOUJEOztHQUFNTCxVO1VBQ1lULFM7OztLQURaUyxVO0FBZ0NOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZiYzY1NTk5N2IzNTEzODkzZWVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3lzdGVtSXRlbSBmcm9tICcuL1N5c3RlbUl0ZW0nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBUcmVlVmlldyBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RyZWVWaWV3JztcclxuaW1wb3J0IFRyZWVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVHJlZUl0ZW0nO1xyXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0xlZnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93TGVmdCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICB0cmVlTm9kZToge1xyXG4gICAgLy8gbWFyZ2luVG9wOiAnOHB4JyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXHJcbiAgfSxcclxuICBleHBhbmRJY29uOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogJzE1MnB4JyxcclxuICAgIHJpZ2h0OiAnOHB4JyxcclxuICAgIHpJbmRleDogMSxcclxuICB9XHJcbn0pKTtcclxuXHJcblxyXG5jb25zdCBTeXN0ZW1MaXN0ID0gKHsgc3lzdGVtcyB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCByZW5kZXJUcmVlID0gKG5vZGVzKSA9PiAoXHJcbiAgICA8VHJlZUl0ZW0ga2V5PXtub2Rlcy5pZH0gbm9kZUlkPXtub2Rlcy5pZH0gY2xhc3NOYW1lPXtjbGFzc2VzLnRyZWVOb2RlfVxyXG4gICAgICBsYWJlbD17XHJcbiAgICAgICAgPFN5c3RlbUl0ZW0gc3lzdGVtSXRlbT17bm9kZXN9IC8+XHJcbiAgICAgIH0+XHJcbiAgICAgIHtBcnJheS5pc0FycmF5KG5vZGVzLmNoaWxkcmVuKSA/IG5vZGVzLmNoaWxkcmVuLm1hcCgobm9kZSkgPT4gcmVuZGVyVHJlZShub2RlKSkgOiBudWxsfVxyXG4gICAgPC9UcmVlSXRlbT5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezh9IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAge3N5c3RlbXMubWFwKChzeXN0ZW1JdGVtKSA9PiAoXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IHhsPXs0fSBrZXk9e3N5c3RlbUl0ZW0uaWR9PlxyXG4gICAgICAgICAgPFRyZWVWaWV3XHJcbiAgICAgICAgICAgIGRlZmF1bHRDb2xsYXBzZUljb249e1xyXG4gICAgICAgICAgICAgIDxFeHBhbmRNb3JlSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuZXhwYW5kSWNvbn0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0RXhwYW5kZWQ9e1sncm9vdCddfVxyXG4gICAgICAgICAgICBkZWZhdWx0RXhwYW5kSWNvbj17XHJcbiAgICAgICAgICAgICAgPEtleWJvYXJkQXJyb3dMZWZ0SWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuZXhwYW5kSWNvbn0gLz5cclxuICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAge3JlbmRlclRyZWUoc3lzdGVtSXRlbSl9XHJcbiAgICAgICAgICA8L1RyZWVWaWV3PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKSl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3lzdGVtTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
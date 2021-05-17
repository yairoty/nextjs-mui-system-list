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
      marginTop: '8px',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW1MaXN0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInRyZWVOb2RlIiwibWFyZ2luVG9wIiwicG9zaXRpb24iLCJleHBhbmRJY29uIiwidG9wIiwicmlnaHQiLCJ6SW5kZXgiLCJTeXN0ZW1MaXN0Iiwic3lzdGVtcyIsImNsYXNzZXMiLCJyZW5kZXJUcmVlIiwibm9kZXMiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsImNoaWxkcmVuIiwibWFwIiwibm9kZSIsInN5c3RlbUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFlBQVEsRUFBRTtBQUNSQyxlQUFTLEVBQUUsS0FESDtBQUVSQyxjQUFRLEVBQUU7QUFGRixLQUQ2QjtBQUt2Q0MsY0FBVSxFQUFFO0FBQ1ZELGNBQVEsRUFBRSxVQURBO0FBRVZFLFNBQUcsRUFBRSxPQUZLO0FBR1ZDLFdBQUssRUFBRSxLQUhHO0FBSVZDLFlBQU0sRUFBRTtBQUpFO0FBTDJCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQWNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ2xDLE1BQU1DLE9BQU8sR0FBR1osU0FBUyxFQUF6Qjs7QUFFQSxNQUFNYSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFEO0FBQUEsd0JBQ2pCLDhEQUFDLDhEQUFEO0FBQXlCLFlBQU0sRUFBRUEsS0FBSyxDQUFDQyxFQUF2QztBQUEyQyxlQUFTLEVBQUVILE9BQU8sQ0FBQ1QsUUFBOUQ7QUFDRSxXQUFLLGVBQ0gsOERBQUMsZ0RBQUQ7QUFBWSxrQkFBVSxFQUFFVztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQSxnQkFJR0UsS0FBSyxDQUFDQyxPQUFOLENBQWNILEtBQUssQ0FBQ0ksUUFBcEIsSUFBZ0NKLEtBQUssQ0FBQ0ksUUFBTixDQUFlQyxHQUFmLENBQW1CLFVBQUNDLElBQUQ7QUFBQSxlQUFVUCxVQUFVLENBQUNPLElBQUQsQ0FBcEI7QUFBQSxPQUFuQixDQUFoQyxHQUFpRjtBQUpwRixPQUFlTixLQUFLLENBQUNDLEVBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEaUI7QUFBQSxHQUFuQjs7QUFTQSxzQkFDRSw4REFBQywyREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBNEIsV0FBTyxFQUFDLFFBQXBDO0FBQUEsY0FDR0osT0FBTyxDQUFDUSxHQUFSLENBQVksVUFBQ0UsVUFBRDtBQUFBLDBCQUNYLDhEQUFDLDJEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBbUIsVUFBRSxFQUFFLEVBQXZCO0FBQTJCLFVBQUUsRUFBRSxDQUEvQjtBQUFrQyxVQUFFLEVBQUUsQ0FBdEM7QUFBQSwrQkFDRSw4REFBQyw4REFBRDtBQUNFLDZCQUFtQixlQUNqQiw4REFBQyxrRUFBRDtBQUFnQixxQkFBUyxFQUFFVCxPQUFPLENBQUNOO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFJRSx5QkFBZSxFQUFFLENBQUMsTUFBRCxDQUpuQjtBQUtFLDJCQUFpQixlQUNmLDhEQUFDLHlFQUFEO0FBQXVCLHFCQUFTLEVBQUVNLE9BQU8sQ0FBQ047QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBLG9CQVFHTyxVQUFVLENBQUNRLFVBQUQ7QUFSYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBOENBLFVBQVUsQ0FBQ04sRUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURXO0FBQUEsS0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQTlCRDs7R0FBTUwsVTtVQUNZVixTOzs7S0FEWlUsVTtBQWdDTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYmFlYWJjZDlmMGZjYWRlNzkwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN5c3RlbUl0ZW0gZnJvbSAnLi9TeXN0ZW1JdGVtJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHJlZVZpZXcgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UcmVlVmlldyc7XHJcbmltcG9ydCBUcmVlSXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RyZWVJdGVtJztcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dMZWZ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd0xlZnQnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgdHJlZU5vZGU6IHtcclxuICAgIG1hcmdpblRvcDogJzhweCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gIH0sXHJcbiAgZXhwYW5kSWNvbjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcxNTJweCcsXHJcbiAgICByaWdodDogJzhweCcsXHJcbiAgICB6SW5kZXg6IDEsXHJcbiAgfVxyXG59KSk7XHJcblxyXG5cclxuY29uc3QgU3lzdGVtTGlzdCA9ICh7IHN5c3RlbXMgfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVHJlZSA9IChub2RlcykgPT4gKFxyXG4gICAgPFRyZWVJdGVtIGtleT17bm9kZXMuaWR9IG5vZGVJZD17bm9kZXMuaWR9IGNsYXNzTmFtZT17Y2xhc3Nlcy50cmVlTm9kZX1cclxuICAgICAgbGFiZWw9e1xyXG4gICAgICAgIDxTeXN0ZW1JdGVtIHN5c3RlbUl0ZW09e25vZGVzfSAvPlxyXG4gICAgICB9PlxyXG4gICAgICB7QXJyYXkuaXNBcnJheShub2Rlcy5jaGlsZHJlbikgPyBub2Rlcy5jaGlsZHJlbi5tYXAoKG5vZGUpID0+IHJlbmRlclRyZWUobm9kZSkpIDogbnVsbH1cclxuICAgIDwvVHJlZUl0ZW0+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs4fSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgIHtzeXN0ZW1zLm1hcCgoc3lzdGVtSXRlbSkgPT4gKFxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fSB4bD17NH0ga2V5PXtzeXN0ZW1JdGVtLmlkfT5cclxuICAgICAgICAgIDxUcmVlVmlld1xyXG4gICAgICAgICAgICBkZWZhdWx0Q29sbGFwc2VJY29uPXtcclxuICAgICAgICAgICAgICA8RXhwYW5kTW9yZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmV4cGFuZEljb259IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdEV4cGFuZGVkPXtbJ3Jvb3QnXX1cclxuICAgICAgICAgICAgZGVmYXVsdEV4cGFuZEljb249e1xyXG4gICAgICAgICAgICAgIDxLZXlib2FyZEFycm93TGVmdEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmV4cGFuZEljb259IC8+XHJcbiAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJUcmVlKHN5c3RlbUl0ZW0pfVxyXG4gICAgICAgICAgPC9UcmVlVmlldz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICkpfVxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN5c3RlbUxpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
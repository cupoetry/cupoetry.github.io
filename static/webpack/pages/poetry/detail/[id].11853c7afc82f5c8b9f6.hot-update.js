webpackHotUpdate_N_E("pages/poetry/detail/[id]",{

/***/ "./src/component/Tis/index.tsx":
/*!*************************************!*\
  !*** ./src/component/Tis/index.tsx ***!
  \*************************************/
/*! exports provided: Tis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tis\", function() { return Tis; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsxstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsxstyle */ \"./node_modules/jsxstyle/lib/jsxstyle.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Theme */ \"./src/shared/Theme.ts\");\n\nvar _jsxFileName = \"/Users/xuwei/xtestw/poetry/fe-poetry/src/component/Tis/index.tsx\";\n\n\n\nconst Tis = ({\n  tis\n}) => {\n  const {\n    title,\n    shortDesc,\n    description\n  } = tis;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(jsxstyle__WEBPACK_IMPORTED_MODULE_1__[\"Block\"], {\n    style: {\n      marginTop: 20,\n      padding: 25,\n      borderRadius: 6,\n      background: _shared_Theme__WEBPACK_IMPORTED_MODULE_3__[\"defaultTheme\"].boxColor\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(jsxstyle__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      style: {\n        fontSize: 18,\n        fontWeight: \"bold\"\n      },\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(jsxstyle__WEBPACK_IMPORTED_MODULE_1__[\"Block\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(jsxstyle__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n        children: shortDesc\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 13\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(jsxstyle__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"content\",\n        dangerouslySetInnerHTML: {\n          __html: description\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 13\n  }, undefined);\n};\n_c = Tis;\n\nvar _c;\n\n$RefreshReg$(_c, \"Tis\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9UaXMvaW5kZXgudHN4P2Q0YTAiXSwibmFtZXMiOlsiVGlzIiwidGlzIiwidGl0bGUiLCJzaG9ydERlc2MiLCJkZXNjcmlwdGlvbiIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdFRoZW1lIiwiYm94Q29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFPTyxNQUFNQSxHQUFrQixHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQVM7QUFDdkMsUUFBTTtBQUFDQyxTQUFEO0FBQVFDLGFBQVI7QUFBbUJDO0FBQW5CLE1BQWtDSCxHQUF4QztBQUNBLHNCQUFRLHFFQUFDLDhDQUFEO0FBQU8sU0FBSyxFQUFFO0FBQUNJLGVBQVMsRUFBQyxFQUFYO0FBQWVDLGFBQU8sRUFBQyxFQUF2QjtBQUEyQkMsa0JBQVksRUFBQyxDQUF4QztBQUEyQ0MsZ0JBQVUsRUFBRUMsMERBQVksQ0FBQ0M7QUFBcEUsS0FBZDtBQUFBLDRCQUNKLHFFQUFDLDRDQUFEO0FBQU0sV0FBSyxFQUFFO0FBQUNDLGdCQUFRLEVBQUMsRUFBVjtBQUFhQyxrQkFBVSxFQUFDO0FBQXhCLE9BQWI7QUFBQSxnQkFBK0NWO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREksZUFFSixxRUFBQyw4Q0FBRDtBQUFBLDZCQUNJLHFFQUFDLDRDQUFEO0FBQUEsa0JBQU1DO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkksZUFLSixxRUFBQyw0Q0FBRDtBQUFBLDZCQUNBO0FBQ0osaUJBQVMsRUFBQyxTQUROO0FBRUosK0JBQXVCLEVBQUU7QUFBRVUsZ0JBQU0sRUFBQ1Q7QUFBVDtBQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjtBQVlILENBZE07S0FBTUosRyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnQvVGlzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsb2NrLCBSb3cgfSBmcm9tIFwianN4c3R5bGVcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL1RoZW1lXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRpc3tcbiAgICB0aXRsZTpzdHJpbmcsXG4gICAgc2hvcnREZXNjOnN0cmluZyxcbiAgICBkZXNjcmlwdGlvbjpzdHJpbmdcbn1cbmV4cG9ydCBjb25zdCBUaXM6RkM8e3RpczpJVGlzfT4gPSAoe3Rpc30pPT57XG4gICAgY29uc3Qge3RpdGxlLCBzaG9ydERlc2MsIGRlc2NyaXB0aW9ufSA9IHRpcztcbiAgICByZXR1cm4gKDxCbG9jayBzdHlsZT17e21hcmdpblRvcDoyMCwgcGFkZGluZzoyNSwgYm9yZGVyUmFkaXVzOjYsIGJhY2tncm91bmQ6IGRlZmF1bHRUaGVtZS5ib3hDb2xvcn19PlxuICAgICAgICA8Um93ICBzdHlsZT17e2ZvbnRTaXplOjE4LGZvbnRXZWlnaHQ6XCJib2xkXCJ9fT57dGl0bGV9PC9Sb3c+XG4gICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgIDxSb3c+e3Nob3J0RGVzY308L1Jvdz5cbiAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgPGRpdlxuICAgIGNsYXNzTmFtZT1cImNvbnRlbnRcIlxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDpkZXNjcmlwdGlvbn19XG4vPlxuICAgICAgICAgIDwvUm93PlxuICAgIDwvQmxvY2s+KVxufSAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/component/Tis/index.tsx\n");

/***/ })

})
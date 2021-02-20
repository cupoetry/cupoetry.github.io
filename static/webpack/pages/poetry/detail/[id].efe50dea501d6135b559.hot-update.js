webpackHotUpdate_N_E("pages/poetry/detail/[id]",{

/***/ "./src/pages/poetry/detail/[id].tsx":
/*!******************************************!*\
  !*** ./src/pages/poetry/detail/[id].tsx ***!
  \******************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsxstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsxstyle */ \"./node_modules/jsxstyle/lib/jsxstyle.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_Author__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../component/Author */ \"./src/component/Author/index.tsx\");\n/* harmony import */ var _component_Poetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../component/Poetry */ \"./src/component/Poetry/index.tsx\");\n/* harmony import */ var _component_TagContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../component/TagContainer */ \"./src/component/TagContainer/index.tsx\");\n/* harmony import */ var _component_Tis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../component/Tis */ \"./src/component/Tis/index.tsx\");\n\nvar _jsxFileName = \"/Users/xuwei/xtestw/poetry/fe-poetry/src/pages/poetry/detail/[id].tsx\";\n\n\n\n\n\n\n\nfunction PoetryDetail({\n  state\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(jsxstyle__WEBPACK_IMPORTED_MODULE_1__[\"Block\"], {\n    className: \"row\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(jsxstyle__WEBPACK_IMPORTED_MODULE_1__[\"Block\"], {\n      className: \"eight columns\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_component_Poetry__WEBPACK_IMPORTED_MODULE_4__[\"Poetry\"], {\n        poetry: state.poetry\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_component_Author__WEBPACK_IMPORTED_MODULE_3__[\"Author\"], {\n        author: state.author\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 13\n      }, this), state.fanyi && JSON.parse(state.fanyi).map(fanyi => {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_component_Tis__WEBPACK_IMPORTED_MODULE_6__[\"Tis\"], {\n          tis: {\n            title: fanyi.name,\n            shortDesc: '',\n            description: fanyi.name\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 29\n        }, this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_component_Tis__WEBPACK_IMPORTED_MODULE_6__[\"Tis\"], {\n        tis: {\n          title: \"翻译\",\n          shortDesc: \"\",\n          description: state.fanyi\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_component_Tis__WEBPACK_IMPORTED_MODULE_6__[\"Tis\"], {\n        tis: {\n          title: \"赏析\",\n          shortDesc: \"\",\n          description: state.shangxi\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(jsxstyle__WEBPACK_IMPORTED_MODULE_1__[\"Block\"], {\n      className: \"four columns\",\n      children: state.rightTagMap.map(tag => {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_component_TagContainer__WEBPACK_IMPORTED_MODULE_5__[\"TagContainer\"], {\n          tag: tag\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 29\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 13\n  }, this);\n}\n\n_c = PoetryDetail;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PoetryDetail);\n\nvar _c;\n\n$RefreshReg$(_c, \"PoetryDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvZXRyeS9kZXRhaWwvLnRzeD80YWZkIl0sIm5hbWVzIjpbIlBvZXRyeURldGFpbCIsInN0YXRlIiwicG9ldHJ5IiwiYXV0aG9yIiwiZmFueWkiLCJKU09OIiwicGFyc2UiLCJtYXAiLCJ0aXRsZSIsIm5hbWUiLCJzaG9ydERlc2MiLCJkZXNjcmlwdGlvbiIsInNoYW5neGkiLCJyaWdodFRhZ01hcCIsInRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTs7QUFLQSxTQUFTQSxZQUFULENBQXNCO0FBQUVDO0FBQUYsQ0FBdEIsRUFBc0M7QUFFbEMsc0JBQVEscUVBQUMsOENBQUQ7QUFBTyxhQUFTLEVBQUMsS0FBakI7QUFBQSw0QkFDSixxRUFBQyw4Q0FBRDtBQUFPLGVBQVMsRUFBQyxlQUFqQjtBQUFBLDhCQUNJLHFFQUFDLHdEQUFEO0FBQVEsY0FBTSxFQUFFQSxLQUFLLENBQUNDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLHdEQUFEO0FBQVEsY0FBTSxFQUFFRCxLQUFLLENBQUNFO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixFQUlRRixLQUFLLENBQUNHLEtBQU4sSUFDQUMsSUFBSSxDQUFDQyxLQUFMLENBQVdMLEtBQUssQ0FBQ0csS0FBakIsRUFBd0JHLEdBQXhCLENBQTZCSCxLQUFELElBQWE7QUFDckMsNEJBQVEscUVBQUMsa0RBQUQ7QUFBSyxhQUFHLEVBQUU7QUFBQ0ksaUJBQUssRUFBQ0osS0FBSyxDQUFDSyxJQUFiO0FBQW1CQyxxQkFBUyxFQUFFLEVBQTlCO0FBQWtDQyx1QkFBVyxFQUFDUCxLQUFLLENBQUNLO0FBQXBEO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUjtBQUVILE9BSEQsQ0FMUixlQVVJLHFFQUFDLGtEQUFEO0FBQUssV0FBRyxFQUFFO0FBQUNELGVBQUssRUFBQyxJQUFQO0FBQWFFLG1CQUFTLEVBQUMsRUFBdkI7QUFBMkJDLHFCQUFXLEVBQUVWLEtBQUssQ0FBQ0c7QUFBOUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkosZUFXSSxxRUFBQyxrREFBRDtBQUFLLFdBQUcsRUFBRTtBQUFDSSxlQUFLLEVBQUMsSUFBUDtBQUFhRSxtQkFBUyxFQUFDLEVBQXZCO0FBQTJCQyxxQkFBVyxFQUFFVixLQUFLLENBQUNXO0FBQTlDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURJLGVBY0oscUVBQUMsOENBQUQ7QUFBTyxlQUFTLEVBQUMsY0FBakI7QUFBQSxnQkFFUVgsS0FBSyxDQUFDWSxXQUFOLENBQWtCTixHQUFsQixDQUF1Qk8sR0FBRCxJQUFlO0FBQ2pDLDRCQUFRLHFFQUFDLG9FQUFEO0FBQWMsYUFBRyxFQUFFQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFSO0FBQ0gsT0FGRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQXNCSDs7S0F4QlFkLFk7O0FBbURNQSwyRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb2V0cnkvZGV0YWlsL1tpZF0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmxvY2sgfSBmcm9tIFwianN4c3R5bGVcIjtcbmltcG9ydCBSZWFjdCwgeyBQcm9wcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGVQcm9wcywgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IE1hcCB9IGZyb20gXCJ0eXBlc2NyaXB0XCI7XG5pbXBvcnQgeyBBdXRob3IgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50L0F1dGhvclwiO1xuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudC9GaWx0ZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudC9Gb290ZXJcIjtcbmltcG9ydCB7IElQb2V0cnksIFBvZXRyeSB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnQvUG9ldHJ5XCI7XG5pbXBvcnQgeyBJVGFnLCBUYWdDb250YWluZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50L1RhZ0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgVGlzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudC9UaXNcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvQ29uZmlnXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9UeXBlc1wiO1xuXG5cbmZ1bmN0aW9uIFBvZXRyeURldGFpbCh7IHN0YXRlIH06IGFueSkge1xuXG4gICAgcmV0dXJuICg8QmxvY2sgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxCbG9jayBjbGFzc05hbWU9XCJlaWdodCBjb2x1bW5zXCI+XG4gICAgICAgICAgICA8UG9ldHJ5IHBvZXRyeT17c3RhdGUucG9ldHJ5fT48L1BvZXRyeT5cbiAgICAgICAgICAgIDxBdXRob3IgYXV0aG9yPXtzdGF0ZS5hdXRob3J9PjwvQXV0aG9yPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRlLmZhbnlpICYmIFxuICAgICAgICAgICAgICAgIEpTT04ucGFyc2Uoc3RhdGUuZmFueWkpLm1hcCgoZmFueWk6YW55KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxUaXMgdGlzPXt7dGl0bGU6ZmFueWkubmFtZSwgc2hvcnREZXNjOiAnJywgZGVzY3JpcHRpb246ZmFueWkubmFtZX19PjwvVGlzPilcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8VGlzIHRpcz17e3RpdGxlOlwi57+76K+RXCIsIHNob3J0RGVzYzpcIlwiLCBkZXNjcmlwdGlvbjogc3RhdGUuZmFueWl9fSA+PC9UaXM+XG4gICAgICAgICAgICA8VGlzIHRpcz17e3RpdGxlOlwi6LWP5p6QXCIsIHNob3J0RGVzYzpcIlwiLCBkZXNjcmlwdGlvbjogc3RhdGUuc2hhbmd4aX19ID48L1Rpcz5cbiAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgPEJsb2NrIGNsYXNzTmFtZT1cImZvdXIgY29sdW1uc1wiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRlLnJpZ2h0VGFnTWFwLm1hcCgodGFnOiBJVGFnKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPFRhZ0NvbnRhaW5lciB0YWc9e3RhZ30gLz4pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9CbG9jaz5cbiAgICA8L0Jsb2NrPilcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBhbnkpIHtcbiAgICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnBhcmFtcztcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGVuY29kZVVSSShDb25maWcuQXBpSG9zdCArIFwiL3BvZXRyeS9kZXRhaWwvXCIgKyBpZC5yZXBsYWNlKFwiLmh0bWxcIixcIlwiKSlcbiAgICApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgY29uc3QgcG9ldHJ5ID0ge1xuICAgICAgICBpZDogZGF0YS5wb2V0cnkuaWQsXG4gICAgICAgIHRpdGxlOiBkYXRhLnBvZXRyeS50aXRsZSxcbiAgICAgICAgYXV0aG9yOiBkYXRhLnBvZXRyeS5hdXRob3JOYW1lLFxuICAgICAgICBkeW5hc3R5OiBkYXRhLnBvZXRyeS5keW5hc3R5LFxuICAgICAgICBjb250ZW50OiBkYXRhLnBvZXRyeS5jb250ZW50XG4gICAgfVxuICAgIGNvbnN0IGF1dGhvciA9IHtcbiAgICAgICAgaWQ6IGRhdGEucG9ldHJ5LmF1dGhvci5pZCxcbiAgICAgICAgbmFtZTogZGF0YS5wb2V0cnkuYXV0aG9yLm5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLnBvZXRyeS5hdXRob3IuZGVzY3JpcHRpb24sXG4gICAgICAgIGF2YXRhcjogZGF0YS5wb2V0cnkuYXV0aG9yLmF2YXRhcixcbiAgICAgICAgY291bnQ6IGRhdGEucG9ldHJ5LmF1dGhvci5jb3VudFxuICAgIH1cbiAgICBjb25zdCByaWdodFRhZ01hcCA9IGRhdGEucmlnaHRUYWdNYXBcbiAgICBjb25zdCBzdGF0ZSA9ICh7IHBvZXRyeTogcG9ldHJ5LCBhdXRob3I6IGF1dGhvciwgcmlnaHRUYWdNYXA6IHJpZ2h0VGFnTWFwLCBmYW55aTogZGF0YS5wb2V0cnkuZmFueWksIHNoYW5neGk6IGRhdGEucG9ldHJ5LnNoYW5neGkgfSlcbiAgICByZXR1cm4geyBwcm9wczogeyBzdGF0ZSB9IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ldHJ5RGV0YWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/poetry/detail/[id].tsx\n");

/***/ })

})
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/designer",{

/***/ "./src/components/DesignerMain/CheckText.js":
/*!**************************************************!*\
  !*** ./src/components/DesignerMain/CheckText.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction Checktext(param) {\n    var name = param.name, array = param.array, data = param.data, setData = param.setData;\n    var _this = this;\n    _s();\n    // const [context, setContext] = useState(\"\");         //어느 번호 선택됐는지 내용\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), other = ref[0], setOther = ref[1]; //기타의내용\n    var List = function() {\n        var result = [];\n        for(var i = 0; i < array.length - 1; i++){\n            result.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"   \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        style: {\n                            margin: \"0px 8px\",\n                            fontFamily: \"Noto Sans KR, sans-serif\",\n                            fontWeight: \"bold\",\n                            fontSize: \"14px\"\n                        },\n                        type: \"radio\",\n                        id: cur,\n                        name: name,\n                        // 있음, 없음 -> 이걸로 아이디가 동일하게 설정되서 안돼 name={data} 이렇게 갈경우는\n                        // 그러니까 name을 고유의 값으로 주도록 하자!\n                        onChange: onChange\n                    }, void 0, false, {\n                        fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: cur,\n                        children: cur\n                    }, void 0, false, {\n                        fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, idx, true, {\n                fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, _this));\n        }\n        return result;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {}, void 0, false, {\n                fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            \"   \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"radio\",\n                name: name,\n                id: array[2],\n                onChange: function(event) {\n                    setData(event.target.id);\n                    setOther(\"\");\n                }\n            }, void 0, false, {\n                fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: array[2],\n                children: array[2]\n            }, void 0, false, {\n                fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"other\",\n                value: other,\n                type: \"text\",\n                onChange: function(event) {\n                    setOther(event.target.value);\n                    setData(other);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this));\n}\n_s(Checktext, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = Checktext;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checktext);\nvar _c;\n$RefreshReg$(_c, \"Checktext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXNpZ25lck1haW4vQ2hlY2tUZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7O1NBRy9CRSxTQUFTLENBQUMsS0FBMEIsRUFBQyxDQUFDO1FBQTNCQyxJQUFJLEdBQUwsS0FBMEIsQ0FBekJBLElBQUksRUFBRUMsS0FBSyxHQUFaLEtBQTBCLENBQW5CQSxLQUFLLEVBQUNDLElBQUksR0FBakIsS0FBMEIsQ0FBYkEsSUFBSSxFQUFDQyxPQUFPLEdBQXpCLEtBQTBCLENBQVJBLE9BQU87OztJQUMxQyxFQUF1RTtJQUNqRCxHQUFqQixDQUFxQk4sR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBOUJPLEtBQUssR0FBY1AsR0FBWSxLQUF4QlEsUUFBUSxHQUFJUixHQUFZLElBQWEsQ0FBTyxFQUFVO0lBRzFELEdBQUwsQ0FBQ1MsSUFBSSxHQUFHLFFBQ2YsR0FEcUIsQ0FBQztRQUNsQixHQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFDLENBQUMsRUFBRUEsQ0FBQyxHQUFDUCxLQUFLLENBQUNRLE1BQU0sR0FBRSxDQUFDLEVBQUVELENBQUMsR0FBRyxDQUFDO1lBQ25DRCxNQUFNLENBQUNHLElBQUksNkVBQ1JDLENBQUc7O29CQUFZLENBQUc7Z0dBQ2hCQyxDQUFLO3dCQUNKQyxLQUFLLEVBQUUsQ0FBQ0M7NEJBQUFBLE1BQU0sRUFBRSxDQUFTOzRCQUFFQyxVQUFVLEVBQUUsQ0FBMEI7NEJBQUVDLFVBQVUsRUFBRSxDQUFNOzRCQUFFQyxRQUFRLEVBQUUsQ0FBTTt3QkFBQSxDQUFDO3dCQUN4R0MsSUFBSSxFQUFDLENBQU87d0JBQ1pDLEVBQUUsRUFBRUMsR0FBRzt3QkFDUHBCLElBQUksRUFBRUEsSUFBSTt3QkFDVixFQUF1RDt3QkFDQyxFQUEzQjt3QkFDR3FCLFFBQXhCLEVBQUVBLFFBQVE7Ozs7OztnR0FFbkJDLENBQUs7d0JBQUNDLE9BQU8sRUFBRUgsR0FBRztrQ0FBR0EsR0FBRzs7Ozs7OztlQVZqQkksR0FBRzs7Ozs7UUFhakIsQ0FBQztRQUNELE1BQU0sQ0FBQ2pCLE1BQU07SUFDZixDQUFDO0lBRUQsTUFBTSw2RUFDSEksQ0FBRzs7d0ZBQ0RMLElBQUk7Ozs7O1lBQUcsQ0FBRzt3RkFDVk0sQ0FBSztnQkFDSk0sSUFBSSxFQUFDLENBQU87Z0JBQ1psQixJQUFJLEVBQUVBLElBQUk7Z0JBQ1ZtQixFQUFFLEVBQUVsQixLQUFLLENBQUMsQ0FBQztnQkFDWG9CLFFBQVEsRUFBRSxRQUFRLENBQVBJLEtBQUssRUFBSyxDQUFDO29CQUNwQnRCLE9BQU8sQ0FBQ3NCLEtBQUssQ0FBQ0MsTUFBTSxDQUFDUCxFQUFFO29CQUN2QmQsUUFBUSxDQUFDLENBQUU7Z0JBRWIsQ0FBQzs7Ozs7O3dGQUVGaUIsQ0FBSztnQkFBQ0MsT0FBTyxFQUFFdEIsS0FBSyxDQUFDLENBQUM7MEJBQUlBLEtBQUssQ0FBQyxDQUFDOzs7Ozs7d0ZBR2pDVyxDQUFLO2dCQUNKTyxFQUFFLEVBQUMsQ0FBTztnQkFDVlEsS0FBSyxFQUFFdkIsS0FBSztnQkFDWmMsSUFBSSxFQUFDLENBQU07Z0JBQ1hHLFFBQVEsRUFBRSxRQUFRLENBQVBJLEtBQUssRUFBSyxDQUFDO29CQUNwQnBCLFFBQVEsQ0FBQ29CLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO29CQUMzQnhCLE9BQU8sQ0FBQ0MsS0FBSztnQkFDZixDQUFDOzs7Ozs7Ozs7Ozs7QUFNVCxDQUFDO0dBdkRRTCxTQUFTO0tBQVRBLFNBQVM7QUF5RGxCLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGVzaWduZXJNYWluL0NoZWNrVGV4dC5qcz8wMTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5cblxuZnVuY3Rpb24gQ2hlY2t0ZXh0KHtuYW1lLCBhcnJheSxkYXRhLHNldERhdGF9KXtcbiAgLy8gY29uc3QgW2NvbnRleHQsIHNldENvbnRleHRdID0gdXNlU3RhdGUoXCJcIik7ICAgICAgICAgLy/slrTripAg67KI7Zi4IOyEoO2DneuQkOuKlOyngCDrgrTsmqlcbiAgY29uc3QgW290aGVyLCBzZXRPdGhlcl0gPSB1c2VTdGF0ZShcIlwiKTsgICAgICAgICAgICAvL+q4sO2DgOydmOuCtOyaqVxuXG5cbiAgY29uc3QgTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IobGV0IGk9MDsgaTxhcnJheS5sZW5ndGggLTE7IGkrKyl7XG4gICAgICByZXN1bHQucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e2lkeH0gPiAgIHsvKiBjaGVja3RleHTsl5AgZm9yIOusuOydtOuekSDqsJnsnYDripDrgowgICovfVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IFwiMHB4IDhweFwiLCBmb250RmFtaWx5OiBcIk5vdG8gU2FucyBLUiwgc2Fucy1zZXJpZlwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgZm9udFNpemU6IFwiMTRweFwifX1cbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBpZD17Y3VyfVxuICAgICAgICAgICAgbmFtZT17bmFtZX0gICAgLy9uYW1l7J2EIOuPmeydvO2VmOqyjCDshKTsoJXtlbTslbwg7KSR67O17LK07YGsIOuwqeyngCwg6re8642wIOyVhOq5jOuKlCDri6Qg65iR6rCZ7J20IG5hbWUg7ISk7KCV7ZW07KSs7Jy864uI6rmMIOyViOuQmOyngCxcbiAgICAgICAgICAgIC8vIOyeiOydjCwg7JeG7J2MIC0+IOydtOqxuOuhnCDslYTsnbTrlJTqsIAg64+Z7J287ZWY6rKMIOyEpOygleuQmOyEnCDslYjrj7wgbmFtZT17ZGF0YX0g7J2066CH6rKMIOqwiOqyveyasOuKlFxuICAgICAgICAgICAgLy8g6re465+s64uI6rmMIG5hbWXsnYQg6rOg7Jyg7J2YIOqwkuycvOuhnCDso7zrj4TroZ0g7ZWY7J6QIVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2N1cn0+e2N1cn08L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMaXN0IC8+ICAgey8q67aI7ZWE7JqU7ZWcIOumrOugjOuNlOulvCDslYjtlbTso7zquLDsnITtlbQgKi99XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgaWQ9e2FycmF5WzJdfVxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgc2V0RGF0YShldmVudC50YXJnZXQuaWQpO1xuICAgICAgICAgIHNldE90aGVyKFwiXCIpO1xuXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2FycmF5WzJdfT57YXJyYXlbMl19PC9sYWJlbD5cblxuXG4gICAgICA8aW5wdXRcbiAgICAgICAgaWQ9XCJvdGhlclwiXG4gICAgICAgIHZhbHVlPXtvdGhlcn1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgc2V0T3RoZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICBzZXREYXRhKG90aGVyKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cblxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja3RleHQ7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2hlY2t0ZXh0IiwibmFtZSIsImFycmF5IiwiZGF0YSIsInNldERhdGEiLCJvdGhlciIsInNldE90aGVyIiwiTGlzdCIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJwdXNoIiwiZGl2IiwiaW5wdXQiLCJzdHlsZSIsIm1hcmdpbiIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ0eXBlIiwiaWQiLCJjdXIiLCJvbkNoYW5nZSIsImxhYmVsIiwiaHRtbEZvciIsImlkeCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/DesignerMain/CheckText.js\n");

/***/ })

});
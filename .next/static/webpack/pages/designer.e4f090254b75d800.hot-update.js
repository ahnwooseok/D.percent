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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction Checktext(param) {\n    var name = param.name, array = param.array, setData = param.setData;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), other = ref[0], setOther = ref[1]; //기타의내용\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOther = ref1[0], setIsOther = ref1[1]; //기타가 선택됐는지 플래그\n    var List = function() {\n        var result = [];\n        for(var i = 0; i < array.length - 1; i++){\n            result.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"   \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        style: {\n                            margin: \"0px 8px\",\n                            fontFamily: \"Noto Sans KR, sans-serif\",\n                            fontWeight: \"bold\",\n                            fontSize: \"14px\"\n                        },\n                        type: \"radio\",\n                        name: name,\n                        id: array[i],\n                        onChange: function(event) {\n                            setData(event.target.id);\n                            setOther(\"\");\n                            setIsOther(false);\n                            console.log(event.target.id);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: array[i],\n                        children: array[i]\n                    }, void 0, false, {\n                        fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, i, true, {\n                fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this));\n        }\n        return result;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    paddingTop: \"16px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {}, void 0, false, {\n                    fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                style: {\n                    margin: \"0px 8px\",\n                    fontFamily: \"Noto Sans KR, sans-serif\",\n                    fontWeight: \"bold\",\n                    fontSize: \"14px\",\n                    marginTop: \"16px\"\n                },\n                type: \"radio\",\n                name: name,\n                id: array[2],\n                onChange: function(event) {\n                    setData(event.target.id);\n                    setIsOther(true);\n                    console.log(event.target.id);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: array[2],\n                children: array[2]\n            }, void 0, false, {\n                fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                style: {\n                    height: \"48px\",\n                    width: \"73%\",\n                    fontSize: \"32px\",\n                    marginTop: \"9px\",\n                    marginLeft: \"12px\",\n                    border: \"1px solid #cccccc\",\n                    boxSizing: \"border-box\",\n                    borderRadius: \"12px\"\n                },\n                id: \"other\",\n                value: other,\n                type: \"text\",\n                disabled: !isOther,\n                onChange: function(event) {\n                    setOther(event.target.value);\n                    setData(other);\n                    console.log(other);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ahnwooseok/Downloads/github/D.percent/D.percent/src/components/DesignerMain/CheckText.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this));\n}\n_s(Checktext, \"f5LoSRYywpILZcc2HHoNnlp/9Ec=\");\n_c = Checktext;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checktext);\nvar _c;\n$RefreshReg$(_c, \"Checktext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXNpZ25lck1haW4vQ2hlY2tUZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEI7O1NBR3JCQyxTQUFTLENBQUMsS0FBcUIsRUFBQyxDQUFDO1FBQXRCQyxJQUFJLEdBQUwsS0FBcUIsQ0FBcEJBLElBQUksRUFBRUMsS0FBSyxHQUFaLEtBQXFCLENBQWRBLEtBQUssRUFBQ0MsT0FBTyxHQUFwQixLQUFxQixDQUFSQSxPQUFPOzs7SUFDckMsR0FBSyxDQUFxQkosR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBOUJLLEtBQUssR0FBY0wsR0FBWSxLQUF4Qk0sUUFBUSxHQUFJTixHQUFZLElBQWEsQ0FBTyxFQUFVO0lBQzFELEdBQUwsQ0FBeUJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJDTyxPQUFPLEdBQWdCUCxJQUFlLEtBQTdCUSxVQUFVLEdBQUlSLElBQWUsSUFBSyxDQUFlLEVBQXNCO0lBRWpFLEdBQWpCLENBQUNTLElBQUksR0FBRyxRQUNmLEdBRHFCLENBQUM7UUFDbEIsR0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLEdBQUcsQ0FBQyxHQUFHLENBQUNDLENBQUMsR0FBQyxDQUFDLEVBQUVBLENBQUMsR0FBQ1IsS0FBSyxDQUFDUyxNQUFNLEdBQUUsQ0FBQyxFQUFFRCxDQUFDLEdBQUcsQ0FBQztZQUNuQ0QsTUFBTSxDQUFDRyxJQUFJLDZFQUNSQyxDQUFHOztvQkFBVSxDQUFHO2dHQUNkQyxDQUFLO3dCQUNKQyxLQUFLLEVBQUUsQ0FBQ0M7NEJBQUFBLE1BQU0sRUFBRSxDQUFTOzRCQUFFQyxVQUFVLEVBQUUsQ0FBMEI7NEJBQUVDLFVBQVUsRUFBRSxDQUFNOzRCQUFFQyxRQUFRLEVBQUUsQ0FBTTt3QkFBQSxDQUFDO3dCQUN4R0MsSUFBSSxFQUFDLENBQU87d0JBQ1puQixJQUFJLEVBQUVBLElBQUk7d0JBQ1ZvQixFQUFFLEVBQUVuQixLQUFLLENBQUNRLENBQUM7d0JBQ1hZLFFBQVEsRUFBRSxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOzRCQUNwQnBCLE9BQU8sQ0FBQ29CLEtBQUssQ0FBQ0MsTUFBTSxDQUFDSCxFQUFFOzRCQUN2QmhCLFFBQVEsQ0FBQyxDQUFFOzRCQUNYRSxVQUFVLENBQUMsS0FBSzs0QkFDaEJrQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDQyxNQUFNLENBQUNILEVBQUU7d0JBQzdCLENBQUM7Ozs7OztnR0FFRk0sQ0FBSzt3QkFBQ0MsT0FBTyxFQUFFMUIsS0FBSyxDQUFDUSxDQUFDO2tDQUFJUixLQUFLLENBQUNRLENBQUM7Ozs7Ozs7ZUFiMUJBLENBQUM7Ozs7O1FBZ0JmLENBQUM7UUFDRCxNQUFNLENBQUNELE1BQU07SUFDZixDQUFDO0lBRUQsTUFBTSw2RUFDSEksQ0FBRzs7d0ZBRURBLENBQUc7Z0JBQUNFLEtBQUssRUFBRSxDQUFDYztvQkFBQUEsT0FBTyxFQUFHLENBQU07b0JBQUVDLFVBQVUsRUFBQyxDQUFNO2dCQUFBLENBQUM7c0dBQzlDdEIsSUFBSTs7Ozs7Ozs7Ozt3RkFHTk0sQ0FBSztnQkFDSkMsS0FBSyxFQUFFLENBQUNDO29CQUFBQSxNQUFNLEVBQUUsQ0FBUztvQkFBRUMsVUFBVSxFQUFFLENBQTBCO29CQUFFQyxVQUFVLEVBQUUsQ0FBTTtvQkFBRUMsUUFBUSxFQUFFLENBQU07b0JBQUVZLFNBQVMsRUFBQyxDQUFNO2dCQUFBLENBQUM7Z0JBQzFIWCxJQUFJLEVBQUMsQ0FBTztnQkFDWm5CLElBQUksRUFBRUEsSUFBSTtnQkFDVm9CLEVBQUUsRUFBRW5CLEtBQUssQ0FBQyxDQUFDO2dCQUNYb0IsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7b0JBQ3BCcEIsT0FBTyxDQUFDb0IsS0FBSyxDQUFDQyxNQUFNLENBQUNILEVBQUU7b0JBQ3ZCZCxVQUFVLENBQUMsSUFBSTtvQkFDZmtCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFLLENBQUNDLE1BQU0sQ0FBQ0gsRUFBRTtnQkFDN0IsQ0FBQzs7Ozs7O3dGQUVGTSxDQUFLO2dCQUFDQyxPQUFPLEVBQUUxQixLQUFLLENBQUMsQ0FBQzswQkFBSUEsS0FBSyxDQUFDLENBQUM7Ozs7Ozt3RkFHakNZLENBQUs7Z0JBQ0pDLEtBQUssRUFBRSxDQUFDO29CQUNOaUIsTUFBTSxFQUFDLENBQU07b0JBQUVDLEtBQUssRUFBRSxDQUFLO29CQUFFZCxRQUFRLEVBQUUsQ0FBTTtvQkFBRVksU0FBUyxFQUFFLENBQUs7b0JBQUNHLFVBQVUsRUFBQyxDQUFNO29CQUFFQyxNQUFNLEVBQUUsQ0FBbUI7b0JBQUVDLFNBQVMsRUFBQyxDQUFZO29CQUFFQyxZQUFZLEVBQUUsQ0FBTTtnQkFDOUosQ0FBQztnQkFDRGhCLEVBQUUsRUFBQyxDQUFPO2dCQUNWaUIsS0FBSyxFQUFFbEMsS0FBSztnQkFDWmdCLElBQUksRUFBQyxDQUFNO2dCQUNYbUIsUUFBUSxHQUFHakMsT0FBTztnQkFDbEJnQixRQUFRLEVBQUUsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztvQkFDcEJsQixRQUFRLENBQUNrQixLQUFLLENBQUNDLE1BQU0sQ0FBQ2MsS0FBSztvQkFDM0JuQyxPQUFPLENBQUNDLEtBQUs7b0JBQ2JxQixPQUFPLENBQUNDLEdBQUcsQ0FBQ3RCLEtBQUs7Z0JBQ25CLENBQUM7Ozs7Ozs7Ozs7OztBQU1ULENBQUM7R0FuRVFKLFNBQVM7S0FBVEEsU0FBUztBQXFFbEIsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EZXNpZ25lck1haW4vQ2hlY2tUZXh0LmpzPzAxOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5cbmZ1bmN0aW9uIENoZWNrdGV4dCh7bmFtZSwgYXJyYXksc2V0RGF0YX0pe1xuICBjb25zdCBbb3RoZXIsIHNldE90aGVyXSA9IHVzZVN0YXRlKFwiXCIpOyAgICAgICAgICAgIC8v6riw7YOA7J2Y64K07JqpXG4gIGNvbnN0IFtpc090aGVyLCBzZXRJc090aGVyXSA9IHVzZVN0YXRlKGZhbHNlKTsgICAgLy/quLDtg4DqsIAg7ISg7YOd65CQ64qU7KeAIO2UjOuemOq3uFxuXG4gIGNvbnN0IExpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yKGxldCBpPTA7IGk8YXJyYXkubGVuZ3RoIC0xOyBpKyspe1xuICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSA+ICAgey8qIEpTWOuCtOu2gOyXkOyEnCBhcnJheeuKlCDrgrTrtoAg7J247Iqk7YS07Iqk66W8IO2VmOuCmOyUqSDri6Qg67+M66Ck7KSMISEhICAg7J24642x7Iux6rCZ7J2AIOuKkOuCjCDjhYfjhYcg6re464OlIOustOyLnO2VmOyekCovfVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IFwiMHB4IDhweFwiLCBmb250RmFtaWx5OiBcIk5vdG8gU2FucyBLUiwgc2Fucy1zZXJpZlwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgZm9udFNpemU6IFwiMTRweFwifX1cbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgaWQ9e2FycmF5W2ldfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBzZXREYXRhKGV2ZW50LnRhcmdldC5pZCk7XG4gICAgICAgICAgICAgIHNldE90aGVyKFwiXCIpO1xuICAgICAgICAgICAgICBzZXRJc090aGVyKGZhbHNlKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlkKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YXJyYXlbaV19PnthcnJheVtpXX08L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cblxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXkgOiBcImZsZXhcIiwgcGFkZGluZ1RvcDpcIjE2cHhcIn19PlxuICAgICAgICA8TGlzdCAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxpbnB1dFxuICAgICAgICBzdHlsZT17e21hcmdpbjogXCIwcHggOHB4XCIsIGZvbnRGYW1pbHk6IFwiTm90byBTYW5zIEtSLCBzYW5zLXNlcmlmXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBmb250U2l6ZTogXCIxNHB4XCIsIG1hcmdpblRvcDpcIjE2cHhcIn19XG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIGlkPXthcnJheVsyXX1cbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgIHNldERhdGEoZXZlbnQudGFyZ2V0LmlkKTtcbiAgICAgICAgICBzZXRJc090aGVyKHRydWUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5pZCk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2FycmF5WzJdfT57YXJyYXlbMl19PC9sYWJlbD5cblxuXG4gICAgICA8aW5wdXRcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBoZWlnaHQ6XCI0OHB4XCIsIHdpZHRoOiBcIjczJVwiLCBmb250U2l6ZTogXCIzMnB4XCIsIG1hcmdpblRvcDogXCI5cHhcIixtYXJnaW5MZWZ0OlwiMTJweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NjY2NcIiwgYm94U2l6aW5nOlwiYm9yZGVyLWJveFwiLCBib3JkZXJSYWRpdXM6IFwiMTJweFwiXG4gICAgICAgIH19XG4gICAgICAgIGlkPVwib3RoZXJcIlxuICAgICAgICB2YWx1ZT17b3RoZXJ9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgZGlzYWJsZWQ9eyFpc090aGVyfVxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgc2V0T3RoZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICBzZXREYXRhKG90aGVyKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhvdGhlcik7XG4gICAgICAgIH19XG4gICAgICAvPlxuXG5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2t0ZXh0OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNoZWNrdGV4dCIsIm5hbWUiLCJhcnJheSIsInNldERhdGEiLCJvdGhlciIsInNldE90aGVyIiwiaXNPdGhlciIsInNldElzT3RoZXIiLCJMaXN0IiwicmVzdWx0IiwiaSIsImxlbmd0aCIsInB1c2giLCJkaXYiLCJpbnB1dCIsInN0eWxlIiwibWFyZ2luIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJodG1sRm9yIiwiZGlzcGxheSIsInBhZGRpbmdUb3AiLCJtYXJnaW5Ub3AiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJib3JkZXIiLCJib3hTaXppbmciLCJib3JkZXJSYWRpdXMiLCJ2YWx1ZSIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DesignerMain/CheckText.js\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./src/components/ContactMain/styles.js":
/*!**********************************************!*\
  !*** ./src/components/ContactMain/styles.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wrapper\": function() { return /* binding */ Wrapper; },\n/* harmony export */   \"Contact\": function() { return /* binding */ Contact; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; },\n/* harmony export */   \"TitleBox\": function() { return /* binding */ TitleBox; },\n/* harmony export */   \"SubTitle\": function() { return /* binding */ SubTitle; },\n/* harmony export */   \"MimoBox\": function() { return /* binding */ MimoBox; },\n/* harmony export */   \"ContactBox\": function() { return /* binding */ ContactBox; },\n/* harmony export */   \"Contents1\": function() { return /* binding */ Contents1; },\n/* harmony export */   \"Contents2\": function() { return /* binding */ Contents2; },\n/* harmony export */   \"Contents3\": function() { return /* binding */ Contents3; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: absolute;\\n  top: 0;\\n  height: 100%;\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  z-index: -1;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  width:100%;\\n\\n  padding-top: 400px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: #ffffff;\\n  font-weight: 900;\\n  font-family: Noto Sans KR, sans-serif;\\n  font-size: 48px;\\n  line-height: 110%;\\n\\n  padding-bottom: 48px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  //align-items: center;   //이걸로 배치\\n  justify-content: center;\\n  width:100%;\\n  \\n  padding-left:268px;\\n  \\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: #DBDBDB;\\n  font-weight: normal;\\n  font-family: Noto Sans KR, sans-serif;\\n  font-size: 20px;\\n  line-height: 150%;\\n  \\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center; \\n  justify-content: center;\\n  flex-direction: column;\\n  \\n  width: 184px;\\n  height: 240px;\\n  \\n  margin:30px;\\n  \\n  background: #ffffff;\\n  border-radius: 12px;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: #111111;\\n  font-family: Noto Sans KR, sans-serif;\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 18px;\\n  line-height: 150%;\\n  /* identical to box height, or 27px */\\n  text-align: center;\\n  padding-top:2px;\\n  padding-bottom:2px;\\n  \\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: #111111;\\n  font-family: Noto Sans KR, sans-serif;\\n  font-style: normal;\\n  font-weight: 350;\\n  font-size: 11px;\\n  line-height: 150%;\\n  /* or 16px */\\n\\n  padding-bottom:5px;\\n  text-align: center;\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: #111111;\\n  font-family: Noto Sans KR, sans-serif;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 12px;\\n  line-height: 150%;\\n  /* or 18px */\\n\\n  text-align: center;\\n\"\n    ]);\n    _templateObject9 = function _templateObject9() {\n        return data;\n    };\n    return data;\n}\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].main.withConfig({\n    displayName: \"styles__Wrapper\",\n    componentId: \"sc-1d1dd06c-0\"\n})(_templateObject());\nvar Contact = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styles__Contact\",\n    componentId: \"sc-1d1dd06c-1\"\n})(_templateObject1());\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n    displayName: \"styles__Title\",\n    componentId: \"sc-1d1dd06c-2\"\n})(_templateObject2());\nvar TitleBox = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n    displayName: \"styles__TitleBox\",\n    componentId: \"sc-1d1dd06c-3\"\n})(_templateObject3());\nvar SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2.withConfig({\n    displayName: \"styles__SubTitle\",\n    componentId: \"sc-1d1dd06c-4\"\n})(_templateObject4());\nvar MimoBox = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styles__MimoBox\",\n    componentId: \"sc-1d1dd06c-5\"\n})(_templateObject5());\nvar ContactBox = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styles__ContactBox\",\n    componentId: \"sc-1d1dd06c-6\"\n})(_templateObject6());\nvar Contents1 = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n    displayName: \"styles__Contents1\",\n    componentId: \"sc-1d1dd06c-7\"\n})(_templateObject7());\nvar Contents2 = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n    displayName: \"styles__Contents2\",\n    componentId: \"sc-1d1dd06c-8\"\n})(_templateObject8());\nvar Contents3 = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n    displayName: \"styles__Contents3\",\n    componentId: \"sc-1d1dd06c-9\"\n})(_templateObject9());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db250YWN0TWFpbi9zdHlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDOzs7Ozs7Ozs7Ozs7O1FBRUgsQ0FTbkM7Ozs7Ozs7OztRQUVrQyxDQVFsQzs7Ozs7Ozs7O1FBSStCLENBUS9COzs7Ozs7Ozs7UUFFa0MsQ0FTbEM7Ozs7Ozs7OztRQUNrQyxDQU9sQzs7Ozs7Ozs7O1FBRWtDLENBYWxDOzs7Ozs7Ozs7UUFHcUMsQ0FJckM7Ozs7Ozs7OztRQUltQyxDQVluQzs7Ozs7Ozs7O1FBQ21DLENBV25DOzs7Ozs7Ozs7UUFDbUMsQ0FVbkM7Ozs7Ozs7QUEvR08sR0FBSyxDQUFDQyxPQUFPLEdBQUdELHlFQUFXOzs7O0FBVzNCLEdBQUssQ0FBQ0csT0FBTyxHQUFHSCx3RUFBVTs7OztBQVkxQixHQUFLLENBQUNLLEtBQUssR0FBR0wsdUVBQVM7Ozs7QUFVdkIsR0FBSyxDQUFDTyxRQUFRLEdBQUdQLHVFQUFTOzs7O0FBVTFCLEdBQUssQ0FBQ1EsUUFBUSxHQUFHUix1RUFBUzs7OztBQVMxQixHQUFLLENBQUNVLE9BQU8sR0FBR1Ysd0VBQVU7Ozs7QUFnQjFCLEdBQUssQ0FBQ1csVUFBVSxHQUFHWCx3RUFBVTs7OztBQVE3QixHQUFLLENBQUNZLFNBQVMsR0FBR1osdUVBQVM7Ozs7QUFhM0IsR0FBSyxDQUFDYSxTQUFTLEdBQUdiLHVFQUFTOzs7O0FBWTNCLEdBQUssQ0FBQ2MsU0FBUyxHQUFHZCx1RUFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250YWN0TWFpbi9zdHlsZXMuanM/YTA3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQubWFpbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAtMTtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWN0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOjEwMCU7XG5cbiAgcGFkZGluZy10b3A6IDQwMHB4O1xuYDtcblxuXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMgS1IsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDExMCU7XG5cbiAgcGFkZGluZy1ib3R0b206IDQ4cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgVGl0bGVCb3ggPSBzdHlsZWQuaDFgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8vYWxpZ24taXRlbXM6IGNlbnRlcjsgICAvL+ydtOqxuOuhnCDrsLDsuZhcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOjEwMCU7XG4gIFxuICBwYWRkaW5nLWxlZnQ6MjY4cHg7XG4gIFxuYDtcbmV4cG9ydCBjb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5oMmBcbiAgY29sb3I6ICNEQkRCREI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMgS1IsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIFxuYDtcblxuZXhwb3J0IGNvbnN0IE1pbW9Cb3ggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxuICB3aWR0aDogMTg0cHg7XG4gIGhlaWdodDogMjQwcHg7XG4gIFxuICBtYXJnaW46MzBweDtcbiAgXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBDb250YWN0Qm94ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5cblxuZXhwb3J0IGNvbnN0IENvbnRlbnRzMSA9IHN0eWxlZC5oMWBcbiAgY29sb3I6ICMxMTExMTE7XG4gIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMgS1IsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDI3cHggKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDoycHg7XG4gIHBhZGRpbmctYm90dG9tOjJweDtcbiAgXG5gO1xuZXhwb3J0IGNvbnN0IENvbnRlbnRzMiA9IHN0eWxlZC5oMWBcbiAgY29sb3I6ICMxMTExMTE7XG4gIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMgS1IsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgLyogb3IgMTZweCAqL1xuXG4gIHBhZGRpbmctYm90dG9tOjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcbmV4cG9ydCBjb25zdCBDb250ZW50czMgPSBzdHlsZWQuaDFgXG4gIGNvbG9yOiAjMTExMTExO1xuICBmb250LWZhbWlseTogTm90byBTYW5zIEtSLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIC8qIG9yIDE4cHggKi9cblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIldyYXBwZXIiLCJtYWluIiwiQ29udGFjdCIsImRpdiIsIlRpdGxlIiwiaDEiLCJUaXRsZUJveCIsIlN1YlRpdGxlIiwiaDIiLCJNaW1vQm94IiwiQ29udGFjdEJveCIsIkNvbnRlbnRzMSIsIkNvbnRlbnRzMiIsIkNvbnRlbnRzMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ContactMain/styles.js\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wrapper\": function() { return /* binding */ Wrapper; },\n/* harmony export */   \"Contact\": function() { return /* binding */ Contact; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; },\n/* harmony export */   \"TitleBox\": function() { return /* binding */ TitleBox; },\n/* harmony export */   \"TitleBox2\": function() { return /* binding */ TitleBox2; },\n/* harmony export */   \"SubTitle\": function() { return /* binding */ SubTitle; },\n/* harmony export */   \"MimoBox\": function() { return /* binding */ MimoBox; },\n/* harmony export */   \"ContactBox\": function() { return /* binding */ ContactBox; },\n/* harmony export */   \"Contents1\": function() { return /* binding */ Contents1; },\n/* harmony export */   \"Contents2\": function() { return /* binding */ Contents2; },\n/* harmony export */   \"Contents3\": function() { return /* binding */ Contents3; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: absolute;\\n  top: 0;\\n  height: 100%;\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  z-index: -1;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  width:100%;\\n\\n  padding-top: 300px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: #ffffff;\\n  font-weight: 900;\\n  font-family: Noto Sans KR, sans-serif;\\n  font-size: 48px;\\n  line-height: 110%;\\n\\n  padding-bottom: 48px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  //align-items: center;   //이걸로 배치\\n  justify-content: center;\\n  width:100%;\\n  \\n  padding-left:268px;\\n  \\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  //align-items: center;   //이걸로 배치\\n  justify-content: center;\\n  \\n  \\n  //padding-left:268px;\\n  \\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: #DBDBDB;\\n  font-weight: normal;\\n  font-family: Noto Sans KR, sans-serif;\\n  font-size: 20px;\\n  line-height: 150%;\\n  \\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center; \\n  justify-content: center;\\n  flex-direction: column;\\n  \\n  width: 184px;\\n  height: 240px;\\n  \\n  margin:30px;\\n  \\n  background: #ffffff;\\n  border-radius: 12px;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: #111111;\\n  font-family: Noto Sans KR, sans-serif;\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 18px;\\n  line-height: 150%;\\n  /* identical to box height, or 27px */\\n  text-align: center;\\n  padding-top:2px;\\n  padding-bottom:2px;\\n  \\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: #111111;\\n  font-family: Noto Sans KR, sans-serif;\\n  font-style: normal;\\n  font-weight: 350;\\n  font-size: 11px;\\n  line-height: 150%;\\n  /* or 16px */\\n\\n  padding-bottom:5px;\\n  text-align: center;\\n\"\n    ]);\n    _templateObject9 = function _templateObject9() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: #111111;\\n  font-family: Noto Sans KR, sans-serif;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 12px;\\n  line-height: 150%;\\n  /* or 18px */\\n\\n  text-align: center;\\n\"\n    ]);\n    _templateObject10 = function _templateObject10() {\n        return data;\n    };\n    return data;\n}\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].main.withConfig({\n    displayName: \"styles__Wrapper\",\n    componentId: \"sc-3700e4c2-0\"\n})(_templateObject());\nvar Contact = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styles__Contact\",\n    componentId: \"sc-3700e4c2-1\"\n})(_templateObject1());\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n    displayName: \"styles__Title\",\n    componentId: \"sc-3700e4c2-2\"\n})(_templateObject2());\nvar TitleBox = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n    displayName: \"styles__TitleBox\",\n    componentId: \"sc-3700e4c2-3\"\n})(_templateObject3());\nvar TitleBox2 = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n    displayName: \"styles__TitleBox2\",\n    componentId: \"sc-3700e4c2-4\"\n})(_templateObject4());\nvar SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2.withConfig({\n    displayName: \"styles__SubTitle\",\n    componentId: \"sc-3700e4c2-5\"\n})(_templateObject5());\nvar MimoBox = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styles__MimoBox\",\n    componentId: \"sc-3700e4c2-6\"\n})(_templateObject6());\nvar ContactBox = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styles__ContactBox\",\n    componentId: \"sc-3700e4c2-7\"\n})(_templateObject7());\nvar Contents1 = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n    displayName: \"styles__Contents1\",\n    componentId: \"sc-3700e4c2-8\"\n})(_templateObject8());\nvar Contents2 = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n    displayName: \"styles__Contents2\",\n    componentId: \"sc-3700e4c2-9\"\n})(_templateObject9());\nvar Contents3 = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n    displayName: \"styles__Contents3\",\n    componentId: \"sc-3700e4c2-10\"\n})(_templateObject10());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db250YWN0TWFpbi9zdHlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQzs7Ozs7Ozs7Ozs7OztRQUFzQyxDQUFrSjs7Ozs7Ozs7O1FBQXNDLENBQW1JOzs7Ozs7Ozs7UUFBcUMsQ0FBaUo7Ozs7Ozs7OztRQUFzQyxDQUFxSjs7Ozs7Ozs7O1FBQWdELENBQTRJOzs7Ozs7Ozs7UUFBcUMsQ0FBOEg7Ozs7Ozs7OztRQUFzQyxDQUFzTTs7Ozs7Ozs7O1FBQTBDLENBQW9FOzs7Ozs7Ozs7UUFBeUMsQ0FBeVA7Ozs7Ozs7OztRQUFzQyxDQUEyTTs7Ozs7Ozs7O1FBQXNDLENBQXdMOzs7Ozs7O0FBQWxuRSxHQUFLLENBQUNDLE9BQU8sR0FBR0QseUVBQVc7Ozs7QUFBOEosR0FBSyxDQUFDRyxPQUFPLEdBQUdILHdFQUFVOzs7O0FBQWlKLEdBQUssQ0FBQ0ssS0FBSyxHQUFHTCx1RUFBUzs7OztBQUE2SixHQUFLLENBQUNPLFFBQVEsR0FBR1AsdUVBQVM7Ozs7QUFBMEssR0FBSyxDQUFDUSxTQUFTLEdBQUdSLHVFQUFTOzs7O0FBQXVKLEdBQUssQ0FBQ1MsUUFBUSxHQUFHVCx1RUFBUzs7OztBQUEwSSxHQUFLLENBQUNXLE9BQU8sR0FBR1gsd0VBQVU7Ozs7QUFBbU4sR0FBSyxDQUFDWSxVQUFVLEdBQUdaLHdFQUFVOzs7O0FBQWtGLEdBQUssQ0FBQ2EsU0FBUyxHQUFHYix1RUFBUzs7OztBQUFvUSxHQUFLLENBQUNjLFNBQVMsR0FBR2QsdUVBQVM7Ozs7QUFBc04sR0FBSyxDQUFDZSxTQUFTLEdBQUdmLHVFQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RNYWluL3N0eWxlcy5qcz9hMDczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXHJleHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5tYWluYFxyICBwb3NpdGlvbjogYWJzb2x1dGU7XHIgIHRvcDogMDtcciAgaGVpZ2h0OiAxMDAlO1xyICB3aWR0aDogMTAwJTtcciAgZGlzcGxheTogZmxleDtcciAgYWxpZ24taXRlbXM6IGNlbnRlcjtcciAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHIgIHotaW5kZXg6IC0xO1xyYDtcclxyZXhwb3J0IGNvbnN0IENvbnRhY3QgPSBzdHlsZWQuZGl2YFxyICBkaXNwbGF5OiBmbGV4O1xyICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyICBhbGlnbi1pdGVtczogY2VudGVyO1xyICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcciAgd2lkdGg6MTAwJTtcclxyICBwYWRkaW5nLXRvcDogMzAwcHg7XHJgO1xyXHJcclxyZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxyICBjb2xvcjogI2ZmZmZmZjtcciAgZm9udC13ZWlnaHQ6IDkwMDtcciAgZm9udC1mYW1pbHk6IE5vdG8gU2FucyBLUiwgc2Fucy1zZXJpZjtcciAgZm9udC1zaXplOiA0OHB4O1xyICBsaW5lLWhlaWdodDogMTEwJTtcclxyICBwYWRkaW5nLWJvdHRvbTogNDhweDtccmA7XHJccmV4cG9ydCBjb25zdCBUaXRsZUJveCA9IHN0eWxlZC5oMWBcciAgZGlzcGxheTogZmxleDtcciAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcciAgLy9hbGlnbi1pdGVtczogY2VudGVyOyAgIC8v7J206rG466GcIOuwsOy5mFxyICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcciAgd2lkdGg6MTAwJTtcciAgXHIgIHBhZGRpbmctbGVmdDoyNjhweDtcciAgXHJgO1xyZXhwb3J0IGNvbnN0IFRpdGxlQm94MiA9IHN0eWxlZC5oMWBcciAgZGlzcGxheTogZmxleDtcciAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcciAgLy9hbGlnbi1pdGVtczogY2VudGVyOyAgIC8v7J206rG466GcIOuwsOy5mFxyICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcciAgXHIgIFxyICAvL3BhZGRpbmctbGVmdDoyNjhweDtcciAgXHJgO1xyZXhwb3J0IGNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLmgyYFxyICBjb2xvcjogI0RCREJEQjtcciAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcciAgZm9udC1mYW1pbHk6IE5vdG8gU2FucyBLUiwgc2Fucy1zZXJpZjtcciAgZm9udC1zaXplOiAyMHB4O1xyICBsaW5lLWhlaWdodDogMTUwJTtcciAgXHJgO1xyXHJleHBvcnQgY29uc3QgTWltb0JveCA9IHN0eWxlZC5kaXZgXHIgIGRpc3BsYXk6IGZsZXg7XHIgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcciAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcciAgXHIgIHdpZHRoOiAxODRweDtcciAgaGVpZ2h0OiAyNDBweDtcciAgXHIgIG1hcmdpbjozMHB4O1xyICBcciAgYmFja2dyb3VuZDogI2ZmZmZmZjtcciAgYm9yZGVyLXJhZGl1czogMTJweDtccmA7XHJcclxyZXhwb3J0IGNvbnN0IENvbnRhY3RCb3ggPSBzdHlsZWQuZGl2YFxyICBkaXNwbGF5OiBmbGV4O1xyICBhbGlnbi1pdGVtczogY2VudGVyO1xyICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtccmA7XHJcclxyXHJleHBvcnQgY29uc3QgQ29udGVudHMxID0gc3R5bGVkLmgxYFxyICBjb2xvcjogIzExMTExMTtcciAgZm9udC1mYW1pbHk6IE5vdG8gU2FucyBLUiwgc2Fucy1zZXJpZjtcciAgZm9udC1zdHlsZTogbm9ybWFsO1xyICBmb250LXdlaWdodDogNTAwO1xyICBmb250LXNpemU6IDE4cHg7XHIgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMjdweCAqL1xyICB0ZXh0LWFsaWduOiBjZW50ZXI7XHIgIHBhZGRpbmctdG9wOjJweDtcciAgcGFkZGluZy1ib3R0b206MnB4O1xyICBccmA7XHJleHBvcnQgY29uc3QgQ29udGVudHMyID0gc3R5bGVkLmgxYFxyICBjb2xvcjogIzExMTExMTtcciAgZm9udC1mYW1pbHk6IE5vdG8gU2FucyBLUiwgc2Fucy1zZXJpZjtcciAgZm9udC1zdHlsZTogbm9ybWFsO1xyICBmb250LXdlaWdodDogMzUwO1xyICBmb250LXNpemU6IDExcHg7XHIgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyICAvKiBvciAxNnB4ICovXHJcciAgcGFkZGluZy1ib3R0b206NXB4O1xyICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJgO1xyZXhwb3J0IGNvbnN0IENvbnRlbnRzMyA9IHN0eWxlZC5oMWBcciAgY29sb3I6ICMxMTExMTE7XHIgIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMgS1IsIHNhbnMtc2VyaWY7XHIgIGZvbnQtc3R5bGU6IG5vcm1hbDtcciAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcciAgZm9udC1zaXplOiAxMnB4O1xyICBsaW5lLWhlaWdodDogMTUwJTtcciAgLyogb3IgMThweCAqL1xyXHIgIHRleHQtYWxpZ246IGNlbnRlcjtccmA7XHIiXSwibmFtZXMiOlsic3R5bGVkIiwiV3JhcHBlciIsIm1haW4iLCJDb250YWN0IiwiZGl2IiwiVGl0bGUiLCJoMSIsIlRpdGxlQm94IiwiVGl0bGVCb3gyIiwiU3ViVGl0bGUiLCJoMiIsIk1pbW9Cb3giLCJDb250YWN0Qm94IiwiQ29udGVudHMxIiwiQ29udGVudHMyIiwiQ29udGVudHMzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ContactMain/styles.js\n");

/***/ })

});
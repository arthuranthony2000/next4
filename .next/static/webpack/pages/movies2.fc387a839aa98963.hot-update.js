"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies2",{

/***/ "./pages/movies2.js":
/*!**************************!*\
  !*** ./pages/movies2.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies2; }\n/* harmony export */ });\n/* harmony import */ var _home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Movies2() {\n    var _this = this;\n    _s();\n    console.log(\"Hello World\");\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://www.omdbapi.com/?apikey=6d17a1f&s=bagdad\", fetcher), data = ref.data, error = ref.error;\n    if (error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movies2.js\",\n        lineNumber: 9,\n        columnNumber: 23\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movies2.js\",\n        lineNumber: 11,\n        columnNumber: 23\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: data.Search.map(function(m, i) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    window.location.href = \"/movie?i=\" + m.imdbID;\n                },\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, i, true, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movies2.js\",\n                lineNumber: 17,\n                columnNumber: 40\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movies2.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this));\n};\n_s(Movies2, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Movies2;\nfunction fetcher(url) {\n    return _fetcher.apply(this, arguments);\n}\nfunction _fetcher() {\n    _fetcher = _asyncToGenerator(_home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {\n        var res, json;\n        return _home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(url);\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    json = _ctx.sent;\n                    return _ctx.abrupt(\"return\", json);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _fetcher.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"Movies2\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVULFFBQVEsQ0FBQ0MsT0FBTyxHQUFHLENBQUM7OztJQUUvQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBYTtJQUV6QixHQUFLLENBQW1CSCxHQUFrRSxHQUFsRUEsK0NBQU0sQ0FBRSxDQUErQyxrREFBR0ksT0FBTyxHQUFqRkMsSUFBSSxHQUFZTCxHQUFrRSxDQUFsRkssSUFBSSxFQUFFQyxLQUFLLEdBQUtOLEdBQWtFLENBQTVFTSxLQUFLO0lBRW5CLEVBQUUsRUFBRUEsS0FBSyxFQUFFLE1BQU0sNkVBQUVDLENBQUc7a0JBQUMsQ0FBc0I7Ozs7OztJQUU3QyxFQUFFLEdBQUdGLElBQUksRUFBRSxNQUFNLDZFQUFFRSxDQUFHO2tCQUFDLENBQWE7Ozs7OztJQUVwQyxNQUFNLDZFQUVEQSxDQUFHO2tCQUVDRixJQUFJLENBQUNHLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsQ0FBQyxFQUFFQyxDQUFDOzBCQUFLLE1BQU0sK0RBQUxKLENBQUc7Z0JBQVNLLE9BQU8sRUFBRSxRQUFRLEdBQUYsQ0FBQ0M7b0JBQUFBLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsQ0FBVyxhQUFDTCxDQUFDLENBQUNNLE1BQU07Z0JBQUEsQ0FBQzs7b0JBQUdOLENBQUMsQ0FBQ08sS0FBSztvQkFBQyxDQUFLO29CQUFDUCxDQUFDLENBQUNRLElBQUk7O2VBQXRGUCxDQUFDOzs7Ozs7Ozs7OztBQU1sRCxDQUFDO0dBcEJ1QlYsT0FBTzs7UUFJSEQsMkNBQU07OztLQUpWQyxPQUFPO1NBd0JoQkcsT0FBTyxDQUFDZSxHQUFHO1dBQVhmLFFBQU87O1NBQVBBLFFBQU87SUFBUEEsUUFBTyw2TEFBdEIsUUFBUSxTQUFlZSxHQUFHLEVBQUUsQ0FBQztZQUVuQkMsR0FBRyxFQUVIQyxJQUFJOzs7OzsyQkFGUUMsS0FBSyxDQUFDSCxHQUFHOztvQkFBckJDLEdBQUc7OzJCQUVVQSxHQUFHLENBQUNDLElBQUk7O29CQUFyQkEsSUFBSTtpREFFSEEsSUFBSTs7Ozs7O0lBRWYsQ0FBQztXQVJjakIsUUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZXMyLmpzPzgzYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllczIoKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkXCIpXG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT02ZDE3YTFmJnM9YmFnZGFkYCwgZmV0Y2hlcilcblxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+XG5cbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj5cblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAge2RhdGEuU2VhcmNoLm1hcCgobSwgaSkgPT4gPGRpdiBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IHt3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL21vdmllP2k9XCIrbS5pbWRiSUR9fT57bS5UaXRsZX0gLS0tIHttLlllYXJ9PC9kaXY+KX1cblxuICAgICAgICA8L2Rpdj5cblxuICAgIClcblxufVxuXG5cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiBqc29uO1xuXG59Il0sIm5hbWVzIjpbInVzZVNXUiIsIk1vdmllczIiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hlciIsImRhdGEiLCJlcnJvciIsImRpdiIsIlNlYXJjaCIsIm1hcCIsIm0iLCJpIiwib25DbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImltZGJJRCIsIlRpdGxlIiwiWWVhciIsInVybCIsInJlcyIsImpzb24iLCJmZXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies2.js\n");

/***/ })

});
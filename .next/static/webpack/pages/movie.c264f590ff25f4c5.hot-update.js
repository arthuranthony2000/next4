"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movie",{

/***/ "./pages/movie.js":
/*!************************!*\
  !*** ./pages/movie.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var _home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Movies() {\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    console.log(query.id);\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"http://www.omdbapi.com/?apikey=6d17a1f&i=tt0095801\", fetcher), data = ref.data, error = ref.error;\n    if (error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n        lineNumber: 12,\n        columnNumber: 23\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n        lineNumber: 14,\n        columnNumber: 23\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                data.Title,\n                \" --- \",\n                data.Year,\n                \" --- \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    style: {\n                        height: 200,\n                        marginLeft: 10\n                    },\n                    src: data.Poster\n                }, void 0, false, {\n                    fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n                    lineNumber: 20,\n                    columnNumber: 51\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this));\n};\n_s(Movies, \"th3WLb/Zwfwxb1mBR352amKHaBQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Movies;\nfunction fetcher(url) {\n    return _fetcher.apply(this, arguments);\n}\nfunction _fetcher() {\n    _fetcher = _asyncToGenerator(_home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {\n        var res, json;\n        return _home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(url);\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    json = _ctx.sent;\n                    return _ctx.abrupt(\"return\", json);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _fetcher.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVQsUUFBUSxDQUFDRSxNQUFNLEdBQUcsQ0FBQzs7SUFFOUIsR0FBSyxDQUFHQyxLQUFLLEdBQUtILHNEQUFTLEdBQW5CRyxLQUFLO0lBRWJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUNHLEVBQUU7SUFFcEIsR0FBSyxDQUFtQkwsR0FBcUUsR0FBckVBLCtDQUFNLENBQUUsQ0FBa0QscURBQUdNLE9BQU8sR0FBcEZDLElBQUksR0FBWVAsR0FBcUUsQ0FBckZPLElBQUksRUFBRUMsS0FBSyxHQUFLUixHQUFxRSxDQUEvRVEsS0FBSztJQUVuQixFQUFFLEVBQUVBLEtBQUssRUFBRSxNQUFNLDZFQUFFQyxDQUFHO2tCQUFDLENBQXNCOzs7Ozs7SUFFN0MsRUFBRSxHQUFHRixJQUFJLEVBQUUsTUFBTSw2RUFBRUUsQ0FBRztrQkFBQyxDQUFhOzs7Ozs7SUFFcEMsTUFBTSw2RUFFREEsQ0FBRzs4RkFFQ0EsQ0FBRzs7Z0JBQUVGLElBQUksQ0FBQ0csS0FBSztnQkFBQyxDQUFLO2dCQUFDSCxJQUFJLENBQUNJLElBQUk7Z0JBQUMsQ0FBSzs0RkFBQ0MsQ0FBRztvQkFBQ0MsS0FBSyxFQUFFLENBQUNDO3dCQUFBQSxNQUFNLEVBQUUsR0FBRzt3QkFBRUMsVUFBVSxFQUFFLEVBQUU7b0JBQUEsQ0FBQztvQkFBRUMsR0FBRyxFQUFFVCxJQUFJLENBQUNVLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdHLENBQUM7R0FyQnVCaEIsTUFBTTs7UUFFUkYsa0RBQVM7UUFJSEMsMkNBQU07OztLQU5WQyxNQUFNO1NBeUJmSyxPQUFPLENBQUNZLEdBQUc7V0FBWFosUUFBTzs7U0FBUEEsUUFBTztJQUFQQSxRQUFPLDZMQUF0QixRQUFRLFNBQWVZLEdBQUcsRUFBRSxDQUFDO1lBRW5CQyxHQUFHLEVBRUhDLElBQUk7Ozs7OzJCQUZRQyxLQUFLLENBQUNILEdBQUc7O29CQUFyQkMsR0FBRzs7MkJBRVVBLEdBQUcsQ0FBQ0MsSUFBSTs7b0JBQXJCQSxJQUFJO2lEQUVIQSxJQUFJOzs7Ozs7SUFFZixDQUFDO1dBUmNkLFFBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWUuanM/OTYzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMoKSB7XG5cbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc29sZS5sb2cocXVlcnkuaWQpXG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT02ZDE3YTFmJmk9dHQwMDk1ODAxYCwgZmV0Y2hlcilcblxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+XG5cbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj5cblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPGRpdj57ZGF0YS5UaXRsZX0gLS0tIHtkYXRhLlllYXJ9IC0tLSA8aW1nIHN0eWxlPXt7aGVpZ2h0OiAyMDAsIG1hcmdpbkxlZnQ6IDEwfX0gc3JjPXtkYXRhLlBvc3Rlcn0gLz48L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cblxuXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm4ganNvbjtcblxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJNb3ZpZXMiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImZldGNoZXIiLCJkYXRhIiwiZXJyb3IiLCJkaXYiLCJUaXRsZSIsIlllYXIiLCJpbWciLCJzdHlsZSIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJzcmMiLCJQb3N0ZXIiLCJ1cmwiLCJyZXMiLCJqc29uIiwiZmV0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movie.js\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var _home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Movies() {\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://www.omdbapi.com/?apikey=6d17a1f&i=tt0095801\", fetcher), data = ref.data, error = ref.error;\n    if (error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n        lineNumber: 7,\n        columnNumber: 23\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n        lineNumber: 9,\n        columnNumber: 23\n    }, this));\n    var id = __webpack_require__.g.window.location.href.split(\"?i=\")[1];\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://www.omdbapi.com/?apikey=6d17a1f&i=\".concat(id), fetcher), data2 = ref1.data2, error2 = ref1.error2;\n    if (error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n        lineNumber: 15,\n        columnNumber: 23\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n        lineNumber: 17,\n        columnNumber: 23\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                data.Title,\n                \" --- \",\n                data.Year,\n                \" --- \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    style: {\n                        height: 200,\n                        marginLeft: 10\n                    },\n                    src: data.Poster\n                }, void 0, false, {\n                    fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n                    lineNumber: 23,\n                    columnNumber: 51\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this));\n};\n_s(Movies, \"6Dj5u3C4o5yyDIY+WK7CVcZeS6E=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Movies;\nfunction fetcher(url) {\n    return _fetcher.apply(this, arguments);\n}\nfunction _fetcher() {\n    _fetcher = _asyncToGenerator(_home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {\n        var res, json;\n        return _home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(url);\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    json = _ctx.sent;\n                    return _ctx.abrupt(\"return\", json);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _fetcher.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFVCxRQUFRLENBQUNDLE1BQU0sR0FBRyxDQUFDOztJQUU5QixHQUFLLENBQW1CRCxHQUFxRSxHQUFyRUEsK0NBQU0sQ0FBRSxDQUFrRCxxREFBR0UsT0FBTyxHQUFwRkMsSUFBSSxHQUFZSCxHQUFxRSxDQUFyRkcsSUFBSSxFQUFFQyxLQUFLLEdBQUtKLEdBQXFFLENBQS9FSSxLQUFLO0lBRW5CLEVBQUUsRUFBRUEsS0FBSyxFQUFFLE1BQU0sNkVBQUVDLENBQUc7a0JBQUMsQ0FBc0I7Ozs7OztJQUUzQyxLQUFHRixJQUFJLEVBQUUsTUFBTSw2RUFBRUUsQ0FBRztrQkFBQyxDQUFhOzs7Ozs7SUFFcEMsR0FBRyxDQUFDQyxFQUFFLEdBQUdDLHFCQUFNLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFLLE1BQUUsQ0FBQztJQUVuRCxHQUFLLENBQXFCWCxJQUFpRSxHQUFqRUEsK0NBQU0sQ0FBRSxDQUF5QywyQ0FBSyxPQUFITSxFQUFFLEdBQUlKLE9BQU8sR0FBbEZVLEtBQUssR0FBYVosSUFBaUUsQ0FBbkZZLEtBQUssRUFBRUMsTUFBTSxHQUFLYixJQUFpRSxDQUE1RWEsTUFBTTtJQUVyQixFQUFFLEVBQUVULEtBQUssRUFBRSxNQUFNLDZFQUFFQyxDQUFHO2tCQUFDLENBQXNCOzs7Ozs7SUFFN0MsRUFBRSxHQUFHRixJQUFJLEVBQUUsTUFBTSw2RUFBRUUsQ0FBRztrQkFBQyxDQUFhOzs7Ozs7SUFFcEMsTUFBTSw2RUFFREEsQ0FBRzs4RkFFQ0EsQ0FBRzs7Z0JBQUVGLElBQUksQ0FBQ1csS0FBSztnQkFBQyxDQUFLO2dCQUFDWCxJQUFJLENBQUNZLElBQUk7Z0JBQUMsQ0FBSzs0RkFBQ0MsQ0FBRztvQkFBQ0MsS0FBSyxFQUFFLENBQUNDO3dCQUFBQSxNQUFNLEVBQUUsR0FBRzt3QkFBRUMsVUFBVSxFQUFFLEVBQUU7b0JBQUEsQ0FBQztvQkFBRUMsR0FBRyxFQUFFakIsSUFBSSxDQUFDa0IsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0csQ0FBQztHQXpCdUJwQixNQUFNOztRQUVGRCwyQ0FBTTtRQVFKQSwyQ0FBTTs7O0tBVlpDLE1BQU07U0E2QmZDLE9BQU8sQ0FBQ29CLEdBQUc7V0FBWHBCLFFBQU87O1NBQVBBLFFBQU87SUFBUEEsUUFBTyw2TEFBdEIsUUFBUSxTQUFlb0IsR0FBRyxFQUFFLENBQUM7WUFFbkJDLEdBQUcsRUFFSEMsSUFBSTs7Ozs7MkJBRlFDLEtBQUssQ0FBQ0gsR0FBRzs7b0JBQXJCQyxHQUFHOzsyQkFFVUEsR0FBRyxDQUFDQyxJQUFJOztvQkFBckJBLElBQUk7aURBRUhBLElBQUk7Ozs7OztJQUVmLENBQUM7V0FSY3RCLFFBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWUuanM/OTYzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzKCkge1xuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NmQxN2ExZiZpPXR0MDA5NTgwMWAsIGZldGNoZXIpXG5cbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8Ojby4uLjwvZGl2PlxuXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+XG5cbiAgICBsZXQgaWQgPSBnbG9iYWwud2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/aT1cIilbMV07XG5cbiAgICBjb25zdCB7IGRhdGEyLCBlcnJvcjIgfSA9IHVzZVNXUihgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTZkMTdhMWYmaT0ke2lkfWAsIGZldGNoZXIpXG5cbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8Ojby4uLjwvZGl2PlxuXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDxkaXY+e2RhdGEuVGl0bGV9IC0tLSB7ZGF0YS5ZZWFyfSAtLS0gPGltZyBzdHlsZT17e2hlaWdodDogMjAwLCBtYXJnaW5MZWZ0OiAxMH19IHNyYz17ZGF0YS5Qb3N0ZXJ9IC8+PC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59XG5cblxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaGVyKHVybCkge1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcblxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIGpzb247XG5cbn0iXSwibmFtZXMiOlsidXNlU1dSIiwiTW92aWVzIiwiZmV0Y2hlciIsImRhdGEiLCJlcnJvciIsImRpdiIsImlkIiwiZ2xvYmFsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3BsaXQiLCJkYXRhMiIsImVycm9yMiIsIlRpdGxlIiwiWWVhciIsImltZyIsInN0eWxlIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsInNyYyIsIlBvc3RlciIsInVybCIsInJlcyIsImpzb24iLCJmZXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movie.js\n");

/***/ })

});
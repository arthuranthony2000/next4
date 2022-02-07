"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/movie";
exports.ids = ["pages/movie"];
exports.modules = {

/***/ "./pages/movie.js":
/*!************************!*\
  !*** ./pages/movie.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nfunction Movies() {\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`http://www.omdbapi.com/?apikey=6d17a1f&i=${query.id}`, fetcher);\n    if (error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n        lineNumber: 10,\n        columnNumber: 23\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n        lineNumber: 12,\n        columnNumber: 23\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                data.Title,\n                \" --- \",\n                data.Year,\n                \" --- \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    style: {\n                        height: 200,\n                        marginLeft: 10\n                    },\n                    src: data.Poster\n                }, void 0, false, {\n                    fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n                    lineNumber: 18,\n                    columnNumber: 51\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movie.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this));\n};\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ2Y7QUFFVCxRQUFRLENBQUNFLE1BQU0sR0FBRyxDQUFDO0lBRTlCLEtBQUssQ0FBQyxDQUFDLENBQUNDLEtBQUssRUFBQyxDQUFDLEdBQUdILHNEQUFTO0lBRTNCLEtBQUssQ0FBQyxDQUFDLENBQUNJLElBQUksR0FBRUMsS0FBSyxFQUFDLENBQUMsR0FBR0osK0NBQU0sRUFBRSx5Q0FBeUMsRUFBRUUsS0FBSyxDQUFDRyxFQUFFLElBQUlDLE9BQU87SUFFOUYsRUFBRSxFQUFFRixLQUFLLEVBQUUsTUFBTSw2RUFBRUcsQ0FBRztrQkFBQyxDQUFzQjs7Ozs7O0lBRTdDLEVBQUUsR0FBR0osSUFBSSxFQUFFLE1BQU0sNkVBQUVJLENBQUc7a0JBQUMsQ0FBYTs7Ozs7O0lBRXBDLE1BQU0sNkVBRURBLENBQUc7OEZBRUNBLENBQUc7O2dCQUFFSixJQUFJLENBQUNLLEtBQUs7Z0JBQUMsQ0FBSztnQkFBQ0wsSUFBSSxDQUFDTSxJQUFJO2dCQUFDLENBQUs7NEZBQUNDLENBQUc7b0JBQUNDLEtBQUssRUFBRSxDQUFDQzt3QkFBQUEsTUFBTSxFQUFFLEdBQUc7d0JBQUVDLFVBQVUsRUFBRSxFQUFFO29CQUFBLENBQUM7b0JBQUVDLEdBQUcsRUFBRVgsSUFBSSxDQUFDWSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUs3RyxDQUFDO2VBSWNULE9BQU8sQ0FBQ1UsR0FBRyxFQUFFLENBQUM7SUFFekIsS0FBSyxDQUFDQyxHQUFHLEdBQUcsS0FBSyxDQUFDQyxLQUFLLENBQUNGLEdBQUc7SUFFM0IsS0FBSyxDQUFDRyxJQUFJLEdBQUcsS0FBSyxDQUFDRixHQUFHLENBQUNFLElBQUk7SUFFM0IsTUFBTSxDQUFDQSxJQUFJO0FBRWYsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQwLy4vcGFnZXMvbW92aWUuanM/OTYzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMoKSB7XG5cbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NmQxN2ExZiZpPSR7cXVlcnkuaWR9YCwgZmV0Y2hlcilcblxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+XG5cbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj5cblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPGRpdj57ZGF0YS5UaXRsZX0gLS0tIHtkYXRhLlllYXJ9IC0tLSA8aW1nIHN0eWxlPXt7aGVpZ2h0OiAyMDAsIG1hcmdpbkxlZnQ6IDEwfX0gc3JjPXtkYXRhLlBvc3Rlcn0gLz48L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cblxuXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm4ganNvbjtcblxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJNb3ZpZXMiLCJxdWVyeSIsImRhdGEiLCJlcnJvciIsImlkIiwiZmV0Y2hlciIsImRpdiIsIlRpdGxlIiwiWWVhciIsImltZyIsInN0eWxlIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsInNyYyIsIlBvc3RlciIsInVybCIsInJlcyIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movie.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movie.js"));
module.exports = __webpack_exports__;

})();
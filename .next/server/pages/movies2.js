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
exports.id = "pages/movies2";
exports.ids = ["pages/movies2"];
exports.modules = {

/***/ "./pages/movies2.js":
/*!**************************!*\
  !*** ./pages/movies2.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies2)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\nfunction Movies2() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`http://www.omdbapi.com/?apikey=6d17a1f&s=bagdad`, fetcher);\n    if (error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movies2.js\",\n        lineNumber: 7,\n        columnNumber: 23\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movies2.js\",\n        lineNumber: 9,\n        columnNumber: 23\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Search.map((m, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>{\n                    window.location.href = \"/movieclient?id=\" + m.imdbID;\n                },\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, i, true, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movies2.js\",\n                lineNumber: 15,\n                columnNumber: 40\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movies2.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this));\n};\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdCO0FBRVQsUUFBUSxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUUvQixLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEdBQUVDLEtBQUssRUFBQyxDQUFDLEdBQUdILCtDQUFNLEVBQUUsK0NBQStDLEdBQUdJLE9BQU87SUFFekYsRUFBRSxFQUFFRCxLQUFLLEVBQUUsTUFBTSw2RUFBRUUsQ0FBRztrQkFBQyxDQUFzQjs7Ozs7O0lBRTNDLEtBQUdILElBQUksRUFBRSxNQUFNLDZFQUFFRyxDQUFHO2tCQUFDLENBQWE7Ozs7OztJQUVwQyxNQUFNLDZFQUNEQSxDQUFHO2tCQUdDSCxJQUFJLENBQUNJLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsK0VBQU1KLENBQUc7Z0JBQVNLLE9BQU8sTUFBUSxDQUFDQztvQkFBQUEsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBRyxDQUFrQixvQkFBQ0wsQ0FBQyxDQUFDTSxNQUFNO2dCQUFBLENBQUM7O29CQUFHTixDQUFDLENBQUNPLEtBQUs7b0JBQUMsQ0FBSztvQkFBQ1AsQ0FBQyxDQUFDUSxJQUFJOztlQUE3RlAsQ0FBQzs7Ozs7Ozs7Ozs7QUFTbEQsQ0FBQztlQUljTCxPQUFPLENBQUNhLEdBQUcsRUFBRSxDQUFDO0lBRXpCLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxDQUFDRixHQUFHO0lBRTNCLEtBQUssQ0FBQ0csSUFBSSxHQUFHLEtBQUssQ0FBQ0YsR0FBRyxDQUFDRSxJQUFJO0lBRTNCLE1BQU0sQ0FBQ0EsSUFBSTtBQUVmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0MC8uL3BhZ2VzL21vdmllczIuanM/ODNiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzMigpIHtcblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTZkMTdhMWYmcz1iYWdkYWRgLCBmZXRjaGVyKVxuXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo28uLi48L2Rpdj5cblxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PlxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgey8qIEVYRVJDw41DSU8gMSAtLSBDTElFTlQgU0lERSBSRU5ERVJJTkcqL31cbiAgICAgICAgICAgIHtkYXRhLlNlYXJjaC5tYXAoKG0sIGkpID0+IDxkaXYga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiB7d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9tb3ZpZWNsaWVudD9pZD1cIittLmltZGJJRH19PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj4pfVxuXG4gICAgICAgICAgICB7LyogRVhFUkPDjUNJTyAyIC0tIFNFUlZFUiBTSURFIFJFTkRFUklORyAqL31cbiAgICAgICAgICAgIHsvKiB7ZGF0YS5TZWFyY2gubWFwKChtLCBpKSA9PiA8ZGl2IGtleT17aX0gb25DbGljaz17KCkgPT4ge3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbW92aWVzZXJ2ZXI/aWQ9XCIrbS5pbWRiSUR9fT57bS5UaXRsZX0gLS0tIHttLlllYXJ9PC9kaXY+KX0gKi99XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG5cbn1cblxuXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm4ganNvbjtcblxufSJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJNb3ZpZXMyIiwiZGF0YSIsImVycm9yIiwiZmV0Y2hlciIsImRpdiIsIlNlYXJjaCIsIm1hcCIsIm0iLCJpIiwib25DbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImltZGJJRCIsIlRpdGxlIiwiWWVhciIsInVybCIsInJlcyIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies2.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/movies2.js"));
module.exports = __webpack_exports__;

})();
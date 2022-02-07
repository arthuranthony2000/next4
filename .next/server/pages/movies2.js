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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies2)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\nfunction Movies2() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`http://www.omdbapi.com/?apikey=6d17a1f&s=bagdad`, fetcher);\n    if (error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movies2.js\",\n        lineNumber: 7,\n        columnNumber: 23\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movies2.js\",\n        lineNumber: 9,\n        columnNumber: 23\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Search.map((m, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>{\n                    window.location.href = \"/movieserver?id=\" + m.imdbID;\n                },\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, i, true, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movies2.js\",\n                lineNumber: 14,\n                columnNumber: 40\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movies2.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this));\n};\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdCO0FBRVQsUUFBUSxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUUvQixLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEdBQUVDLEtBQUssRUFBQyxDQUFDLEdBQUdILCtDQUFNLEVBQUUsK0NBQStDLEdBQUdJLE9BQU87SUFFekYsRUFBRSxFQUFFRCxLQUFLLEVBQUUsTUFBTSw2RUFBRUUsQ0FBRztrQkFBQyxDQUFzQjs7Ozs7O0lBRTdDLEVBQUUsR0FBR0gsSUFBSSxFQUFFLE1BQU0sNkVBQUVHLENBQUc7a0JBQUMsQ0FBYTs7Ozs7O0lBRXBDLE1BQU0sNkVBQ0RBLENBQUc7a0JBRUNILElBQUksQ0FBQ0ksTUFBTSxDQUFDQyxHQUFHLEVBQUVDLENBQUMsRUFBRUMsQ0FBQywrRUFBTUosQ0FBRztnQkFBU0ssT0FBTyxNQUFRLENBQUNDO29CQUFBQSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLENBQWtCLG9CQUFDTCxDQUFDLENBQUNNLE1BQU07Z0JBQUEsQ0FBQzs7b0JBQUdOLENBQUMsQ0FBQ08sS0FBSztvQkFBQyxDQUFLO29CQUFDUCxDQUFDLENBQUNRLElBQUk7O2VBQTdGUCxDQUFDOzs7Ozs7Ozs7OztBQU1sRCxDQUFDO2VBSWNMLE9BQU8sQ0FBQ2EsR0FBRyxFQUFFLENBQUM7SUFFekIsS0FBSyxDQUFDQyxHQUFHLEdBQUcsS0FBSyxDQUFDQyxLQUFLLENBQUNGLEdBQUc7SUFFM0IsS0FBSyxDQUFDRyxJQUFJLEdBQUcsS0FBSyxDQUFDRixHQUFHLENBQUNFLElBQUk7SUFFM0IsTUFBTSxDQUFDQSxJQUFJO0FBRWYsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQwLy4vcGFnZXMvbW92aWVzMi5qcz84M2I5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMyKCkge1xuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NmQxN2ExZiZzPWJhZ2RhZGAsIGZldGNoZXIpXG5cbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8Ojby4uLjwvZGl2PlxuXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICB7ZGF0YS5TZWFyY2gubWFwKChtLCBpKSA9PiA8ZGl2IGtleT17aX0gb25DbGljaz17KCkgPT4ge3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbW92aWVzZXJ2ZXI/aWQ9XCIrbS5pbWRiSUR9fT57bS5UaXRsZX0gLS0tIHttLlllYXJ9PC9kaXY+KX1cblxuICAgICAgICA8L2Rpdj5cblxuICAgIClcblxufVxuXG5cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiBqc29uO1xuXG59Il0sIm5hbWVzIjpbInVzZVNXUiIsIk1vdmllczIiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaGVyIiwiZGl2IiwiU2VhcmNoIiwibWFwIiwibSIsImkiLCJvbkNsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaW1kYklEIiwiVGl0bGUiLCJZZWFyIiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies2.js\n");

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
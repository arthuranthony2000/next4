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
exports.id = "pages/movieserver";
exports.ids = ["pages/movieserver"];
exports.modules = {

/***/ "./pages/movieserver.js":
/*!******************************!*\
  !*** ./pages/movieserver.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Movies({ data  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                data.Title,\n                \" --- \",\n                data.Year,\n                \" --- \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    style: {\n                        height: 200,\n                        marginLeft: 10\n                    },\n                    src: data.Poster\n                }, void 0, false, {\n                    fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movieserver.js\",\n                    lineNumber: 7,\n                    columnNumber: 51\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movieserver.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next4/pages/movieserver.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this));\n};\nasync function getServerSideProps(context) {\n    const res = await fetch(`http://www.omdbapi.com/?apikey=6d17a1f&i=${context.query.id != null ? context.query.id : \"tt0095801\"}`);\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXNlcnZlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFlLFFBQVEsQ0FBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBRXRDLE1BQU0sNkVBRURDLENBQUc7OEZBRUNBLENBQUc7O2dCQUFFRCxJQUFJLENBQUNFLEtBQUs7Z0JBQUMsQ0FBSztnQkFBQ0YsSUFBSSxDQUFDRyxJQUFJO2dCQUFDLENBQUs7NEZBQUNDLENBQUc7b0JBQUNDLEtBQUssRUFBRSxDQUFDQzt3QkFBQUEsTUFBTSxFQUFFLEdBQUc7d0JBQUVDLFVBQVUsRUFBRSxFQUFFO29CQUFBLENBQUM7b0JBQUVDLEdBQUcsRUFBRVIsSUFBSSxDQUFDUyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUs3RyxDQUFDO0FBRU0sZUFBZUMsa0JBQWtCLENBQUNDLE9BQU8sRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLHlDQUF5QyxFQUFFRixPQUFPLENBQUNHLEtBQUssQ0FBQ0MsRUFBRSxJQUFJLElBQUksR0FBR0osT0FBTyxDQUFDRyxLQUFLLENBQUNDLEVBQUUsR0FBRyxDQUFXO0lBRTdILEtBQUssQ0FBQ2YsSUFBSSxHQUFHLEtBQUssQ0FBQ1ksR0FBRyxDQUFDSSxJQUFJO0lBRTNCLE1BQU0sQ0FBQyxDQUFDO1FBQ0pDLEtBQUssRUFBRSxDQUFDO1lBQ0pqQixJQUFJO1FBQ1IsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dDAvLi9wYWdlcy9tb3ZpZXNlcnZlci5qcz9kMDdiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcyh7IGRhdGEgfSkge1xuIFxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPGRpdj57ZGF0YS5UaXRsZX0gLS0tIHtkYXRhLlllYXJ9IC0tLSA8aW1nIHN0eWxlPXt7aGVpZ2h0OiAyMDAsIG1hcmdpbkxlZnQ6IDEwfX0gc3JjPXtkYXRhLlBvc3Rlcn0gLz48L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT02ZDE3YTFmJmk9JHtjb250ZXh0LnF1ZXJ5LmlkICE9IG51bGwgPyBjb250ZXh0LnF1ZXJ5LmlkIDogXCJ0dDAwOTU4MDFcIn1gKVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYXRhXG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6WyJNb3ZpZXMiLCJkYXRhIiwiZGl2IiwiVGl0bGUiLCJZZWFyIiwiaW1nIiwic3R5bGUiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0Iiwic3JjIiwiUG9zdGVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlcyIsImZldGNoIiwicXVlcnkiLCJpZCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movieserver.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movieserver.js"));
module.exports = __webpack_exports__;

})();
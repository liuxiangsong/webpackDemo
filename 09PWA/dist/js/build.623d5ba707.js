/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/_jquery@3.5.0@jquery/dist/jquery.js":
/*!*********************************************************************************************************************!*\
  !*** delegated ../node_modules/_jquery@3.5.0@jquery/dist/jquery.js from dll-reference vendors_edb9ab73584105331b9c ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendors_edb9ab73584105331b9c */ \"dll-reference vendors_edb9ab73584105331b9c\"))(1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4uL25vZGVfbW9kdWxlcy9fanF1ZXJ5QDMuNS4wQGpxdWVyeS9kaXN0L2pxdWVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yc19lZGI5YWI3MzU4NDEwNTMzMWI5Yz9iNzEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4uL25vZGVfbW9kdWxlcy9fanF1ZXJ5QDMuNS4wQGpxdWVyeS9kaXN0L2pxdWVyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgdmVuZG9yc19lZGI5YWI3MzU4NDEwNTMzMWI5YyAqLyBcImRsbC1yZWZlcmVuY2UgdmVuZG9yc19lZGI5YWI3MzU4NDEwNTMzMWI5Y1wiKSkoMSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../node_modules/_jquery@3.5.0@jquery/dist/jquery.js\n");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n  <head>\\r\\n    <meta charset=\\\"UTF-8\\\" />\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\r\\n    <title>Document</title>\\r\\n  </head>\\r\\n  <body>\\r\\n    abc\\r\\n    <div id=\\\"div1\\\"></div>\\r\\n  </body>\\r\\n</html>\\r\\n\";\n// Exports\nmodule.exports = code;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguaHRtbD85Y2ExIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2luZGV4Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXHJcXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxyXFxuICA8aGVhZD5cXHJcXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxyXFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIiAvPlxcclxcbiAgICA8dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPlxcclxcbiAgPC9oZWFkPlxcclxcbiAgPGJvZHk+XFxyXFxuICAgIGFiY1xcclxcbiAgICA8ZGl2IGlkPVxcXCJkaXYxXFxcIj48L2Rpdj5cXHJcXG4gIDwvYm9keT5cXHJcXG48L2h0bWw+XFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.html\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/_jquery@3.5.0@jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.log(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\nconsole.log('index.js已加载');\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function () {\n    navigator.serviceWorker.register('/service-worker.js').then(function (register) {\n      console.log('注册成功', register);\n    }).catch(function (error) {\n      console.log('注册失败', error);\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiJCIsIm5hdmlnYXRvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJ0aGVuIiwiY2F0Y2giLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLDZDQUFaO0FBQ0FGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7O0FBRUEsSUFBSSxtQkFBbUJFLFNBQXZCLEVBQWtDO0FBQ2hDQyxRQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQU07QUFDcENGLGFBQVMsQ0FBQ0csYUFBVixDQUF3QkMsUUFBeEIsQ0FBaUMsb0JBQWpDLEVBQ0dDLElBREgsQ0FDUSxVQUFDRCxRQUFELEVBQWM7QUFDbEJQLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JNLFFBQXBCO0FBQ0QsS0FISCxFQUdLRSxLQUhMLENBR1csVUFBQ0MsS0FBRCxFQUFXO0FBQ2xCVixhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CUyxLQUFwQjtBQUNELEtBTEg7QUFNRCxHQVBEO0FBUUQiLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zb2xlLmxvZygkKTtcbmNvbnNvbGUubG9nKCdpbmRleC5qc+W3suWKoOi9vScpO1xuXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3NlcnZpY2Utd29ya2VyLmpzJylcbiAgICAgIC50aGVuKChyZWdpc3RlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn5rOo5YaM5oiQ5YqfJywgcmVnaXN0ZXIpO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfms6jlhozlpLHotKUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./src/js/index.js ./src/index.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/index.html */"./src/index.html");


/***/ }),

/***/ "dll-reference vendors_edb9ab73584105331b9c":
/*!***********************************************!*\
  !*** external "vendors_edb9ab73584105331b9c" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendors_edb9ab73584105331b9c;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2ZW5kb3JzX2VkYjlhYjczNTg0MTA1MzMxYjljXCI/YTY1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJkbGwtcmVmZXJlbmNlIHZlbmRvcnNfZWRiOWFiNzM1ODQxMDUzMzFiOWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHZlbmRvcnNfZWRiOWFiNzM1ODQxMDUzMzFiOWM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///dll-reference vendors_edb9ab73584105331b9c\n");

/***/ })

/******/ });
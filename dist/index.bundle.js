/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dayFilter-load.js":
/*!*******************************!*\
  !*** ./src/dayFilter-load.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let dayFilterLoad = function (ico, txt) {
  let dayFilter = document.createElement("div");
  dayFilter.classList = "dayFilter";

  let icon = document.createElement("span");
  icon.classList = "material-symbols-outlined";
  icon.textContent = ico;
  dayFilter.appendChild(icon);

  let text = document.createElement("p");
  text.classList = "sideBarP";
  text.textContent = txt;
  dayFilter.appendChild(text);

  return dayFilter;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dayFilterLoad());


/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dayFilter_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dayFilter-load */ "./src/dayFilter-load.js");


function pageLoad() {
  let mainContain = document.createElement("div");
  mainContain.id = "mainContain";

  let header = document.createElement("div");
  header.classList = "header";
  let mainContent = document.createElement("div");
  mainContent.className = "mainContent";
  let footer = document.createElement("div");
  footer.classList = "footer";

  // Header
  let title = document.createElement("h1");
  title.classList = "title";
  title.textContent = "ToDo";
  header.appendChild(title);
  mainContain.appendChild(header);

  // MainContent

  //sideBar
  let sideBar = document.createElement("div");
  sideBar.classList = "sideBar";

  let dayFilters = [
    {
      icon: "clear_day",
      text: "My day",
    },
    {
      icon: "date_range",
      text: "This week",
    },
    {
      icon: "task",
      text: "All tasks",
    },
  ];

  let timeFrame = document.createElement("div");
  timeFrame.classList = "timeFrame";

  for (let i = 0; i < dayFilters.length; i++) {
    timeFrame.appendChild(
      (0,_dayFilter_load__WEBPACK_IMPORTED_MODULE_0__["default"])(dayFilters[i].icon, dayFilters[i].text)
    );
  }
  sideBar.appendChild(timeFrame);
  mainContain.appendChild(sideBar);

  //display
  let display = document.createElement("div");
  display.classList = "display";

  return mainContain;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");



document.body.appendChild(_page_load__WEBPACK_IMPORTED_MODULE_0__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJjOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQSxNQUFNLDJEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQzNEMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ055QjtBQUNVOztBQUVuQywwQkFBMEIsa0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kYXlGaWx0ZXItbG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZGF5RmlsdGVyTG9hZCA9IGZ1bmN0aW9uIChpY28sIHR4dCkge1xuICBsZXQgZGF5RmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGF5RmlsdGVyLmNsYXNzTGlzdCA9IFwiZGF5RmlsdGVyXCI7XG5cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaWNvbi5jbGFzc0xpc3QgPSBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIjtcbiAgaWNvbi50ZXh0Q29udGVudCA9IGljbztcbiAgZGF5RmlsdGVyLmFwcGVuZENoaWxkKGljb24pO1xuXG4gIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRleHQuY2xhc3NMaXN0ID0gXCJzaWRlQmFyUFwiO1xuICB0ZXh0LnRleHRDb250ZW50ID0gdHh0O1xuICBkYXlGaWx0ZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgcmV0dXJuIGRheUZpbHRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRheUZpbHRlckxvYWQoKTtcbiIsImltcG9ydCBkYXlGaWx0ZXJMb2FkIGZyb20gXCIuL2RheUZpbHRlci1sb2FkXCI7XG5cbmZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICBsZXQgbWFpbkNvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGFpbi5pZCA9IFwibWFpbkNvbnRhaW5cIjtcblxuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdCA9IFwiaGVhZGVyXCI7XG4gIGxldCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250ZW50LmNsYXNzTmFtZSA9IFwibWFpbkNvbnRlbnRcIjtcbiAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QgPSBcImZvb3RlclwiO1xuXG4gIC8vIEhlYWRlclxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLmNsYXNzTGlzdCA9IFwidGl0bGVcIjtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvRG9cIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbWFpbkNvbnRhaW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAvLyBNYWluQ29udGVudFxuXG4gIC8vc2lkZUJhclxuICBsZXQgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGVCYXIuY2xhc3NMaXN0ID0gXCJzaWRlQmFyXCI7XG5cbiAgbGV0IGRheUZpbHRlcnMgPSBbXG4gICAge1xuICAgICAgaWNvbjogXCJjbGVhcl9kYXlcIixcbiAgICAgIHRleHQ6IFwiTXkgZGF5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBcImRhdGVfcmFuZ2VcIixcbiAgICAgIHRleHQ6IFwiVGhpcyB3ZWVrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBcInRhc2tcIixcbiAgICAgIHRleHQ6IFwiQWxsIHRhc2tzXCIsXG4gICAgfSxcbiAgXTtcblxuICBsZXQgdGltZUZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGltZUZyYW1lLmNsYXNzTGlzdCA9IFwidGltZUZyYW1lXCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlGaWx0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGltZUZyYW1lLmFwcGVuZENoaWxkKFxuICAgICAgZGF5RmlsdGVyTG9hZChkYXlGaWx0ZXJzW2ldLmljb24sIGRheUZpbHRlcnNbaV0udGV4dClcbiAgICApO1xuICB9XG4gIHNpZGVCYXIuYXBwZW5kQ2hpbGQodGltZUZyYW1lKTtcbiAgbWFpbkNvbnRhaW4uYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG5cbiAgLy9kaXNwbGF5XG4gIGxldCBkaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGlzcGxheS5jbGFzc0xpc3QgPSBcImRpc3BsYXlcIjtcblxuICByZXR1cm4gbWFpbkNvbnRhaW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBfIGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHBhZ2VMb2FkIGZyb20gXCIuL3BhZ2UtbG9hZFwiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VMb2FkKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
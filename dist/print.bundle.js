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

let dayFilterLoad = function () {
  let dayFilter = document.createElement("div");
  dayFilter.classList = "dayFilter";

  for (let i = 0; i < dayFilters.length; i++) {
    let timeFrame = document.createElement("div");
    timeFrame.classList = "timeFrame";

    let icon = document.createElement("span");
    icon.classList = "material-symbols-outlined";
    icon.textContent = dayFilters[i].icon;
    timeFrame.appendChild(icon);

    let text = document.createElement("p");
    text.classList = "sideBarP";
    text.textContent = dayFilters[i].text;
    timeFrame.appendChild(text);

    dayFilter.appendChild(timeFrame);
  }

  return dayFilter;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dayFilterLoad());


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
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
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

  sideBar.appendChild(_dayFilter_load__WEBPACK_IMPORTED_MODULE_0__["default"]);

  mainContain.appendChild(sideBar);

  //display
  let display = document.createElement("div");
  display.classList = "display";

  return mainContain;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7VUN2Qy9CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNONkM7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsdURBQWE7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RheUZpbHRlci1sb2FkLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcGFnZS1sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBkYXlGaWx0ZXJzID0gW1xuICB7XG4gICAgaWNvbjogXCJjbGVhcl9kYXlcIixcbiAgICB0ZXh0OiBcIk15IGRheVwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogXCJkYXRlX3JhbmdlXCIsXG4gICAgdGV4dDogXCJUaGlzIHdlZWtcIixcbiAgfSxcbiAge1xuICAgIGljb246IFwidGFza1wiLFxuICAgIHRleHQ6IFwiQWxsIHRhc2tzXCIsXG4gIH0sXG5dO1xuXG5sZXQgZGF5RmlsdGVyTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGRheUZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRheUZpbHRlci5jbGFzc0xpc3QgPSBcImRheUZpbHRlclwiO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5RmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0aW1lRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpbWVGcmFtZS5jbGFzc0xpc3QgPSBcInRpbWVGcmFtZVwiO1xuXG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpY29uLmNsYXNzTGlzdCA9IFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiO1xuICAgIGljb24udGV4dENvbnRlbnQgPSBkYXlGaWx0ZXJzW2ldLmljb247XG4gICAgdGltZUZyYW1lLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0LmNsYXNzTGlzdCA9IFwic2lkZUJhclBcIjtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gZGF5RmlsdGVyc1tpXS50ZXh0O1xuICAgIHRpbWVGcmFtZS5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgIGRheUZpbHRlci5hcHBlbmRDaGlsZCh0aW1lRnJhbWUpO1xuICB9XG5cbiAgcmV0dXJuIGRheUZpbHRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRheUZpbHRlckxvYWQoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRheUZpbHRlckxvYWQgZnJvbSBcIi4vZGF5RmlsdGVyLWxvYWRcIjtcblxuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gIGxldCBtYWluQ29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250YWluLmlkID0gXCJtYWluQ29udGFpblwiO1xuXG4gIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0ID0gXCJoZWFkZXJcIjtcbiAgbGV0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuY2xhc3NOYW1lID0gXCJtYWluQ29udGVudFwiO1xuICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdCA9IFwiZm9vdGVyXCI7XG5cbiAgLy8gSGVhZGVyXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0ID0gXCJ0aXRsZVwiO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVG9Eb1wiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBtYWluQ29udGFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIC8vIE1haW5Db250ZW50XG5cbiAgLy9zaWRlQmFyXG4gIGxldCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZUJhci5jbGFzc0xpc3QgPSBcInNpZGVCYXJcIjtcblxuICBzaWRlQmFyLmFwcGVuZENoaWxkKGRheUZpbHRlckxvYWQpO1xuXG4gIG1haW5Db250YWluLmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuXG4gIC8vZGlzcGxheVxuICBsZXQgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpc3BsYXkuY2xhc3NMaXN0ID0gXCJkaXNwbGF5XCI7XG5cbiAgcmV0dXJuIG1haW5Db250YWluO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
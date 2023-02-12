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
  //Header link for google icons
  let link = document.createElement("link");
  link.href =
    "http://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link); // for IE6

  // Main

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

  let newProject = document.createElement("button");
  newProject.id = "newProject";
  newProject.classList = "newButton";
  newProject.textContent = "Create project";
  sideBar.appendChild(newProject);

  sideBar.appendChild(_dayFilter_load__WEBPACK_IMPORTED_MODULE_0__["default"]);

  mainContain.appendChild(sideBar);

  //display
  let projectContainer = document.createElement("div");
  projectContainer.classList = "projectContainer";
  mainContain.appendChild(projectContainer);

  return mainContain;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7VUN2Qy9CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNONkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDs7QUFFOUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQix1REFBYTs7QUFFbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kYXlGaWx0ZXItbG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3BhZ2UtbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZGF5RmlsdGVycyA9IFtcbiAge1xuICAgIGljb246IFwiY2xlYXJfZGF5XCIsXG4gICAgdGV4dDogXCJNeSBkYXlcIixcbiAgfSxcbiAge1xuICAgIGljb246IFwiZGF0ZV9yYW5nZVwiLFxuICAgIHRleHQ6IFwiVGhpcyB3ZWVrXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBcInRhc2tcIixcbiAgICB0ZXh0OiBcIkFsbCB0YXNrc1wiLFxuICB9LFxuXTtcblxubGV0IGRheUZpbHRlckxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBkYXlGaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYXlGaWx0ZXIuY2xhc3NMaXN0ID0gXCJkYXlGaWx0ZXJcIjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRheUZpbHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdGltZUZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aW1lRnJhbWUuY2xhc3NMaXN0ID0gXCJ0aW1lRnJhbWVcIjtcblxuICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaWNvbi5jbGFzc0xpc3QgPSBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIjtcbiAgICBpY29uLnRleHRDb250ZW50ID0gZGF5RmlsdGVyc1tpXS5pY29uO1xuICAgIHRpbWVGcmFtZS5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGV4dC5jbGFzc0xpc3QgPSBcInNpZGVCYXJQXCI7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGRheUZpbHRlcnNbaV0udGV4dDtcbiAgICB0aW1lRnJhbWUuYXBwZW5kQ2hpbGQodGV4dCk7ICAgIFxuXG4gICAgZGF5RmlsdGVyLmFwcGVuZENoaWxkKHRpbWVGcmFtZSk7XG4gIH1cblxuICByZXR1cm4gZGF5RmlsdGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF5RmlsdGVyTG9hZCgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGF5RmlsdGVyTG9hZCBmcm9tIFwiLi9kYXlGaWx0ZXItbG9hZFwiO1xuXG5mdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgLy9IZWFkZXIgbGluayBmb3IgZ29vZ2xlIGljb25zXG4gIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIGxpbmsuaHJlZiA9XG4gICAgXCJodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwXCI7XG4gIGxpbmsucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChsaW5rKTsgLy8gZm9yIElFNlxuXG4gIC8vIE1haW5cblxuICBsZXQgbWFpbkNvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGFpbi5pZCA9IFwibWFpbkNvbnRhaW5cIjtcblxuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdCA9IFwiaGVhZGVyXCI7XG4gIGxldCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250ZW50LmNsYXNzTmFtZSA9IFwibWFpbkNvbnRlbnRcIjtcbiAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QgPSBcImZvb3RlclwiO1xuXG4gIC8vIEhlYWRlclxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLmNsYXNzTGlzdCA9IFwidGl0bGVcIjtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvRG9cIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbWFpbkNvbnRhaW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAvLyBNYWluQ29udGVudFxuXG4gIC8vc2lkZUJhclxuICBsZXQgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGVCYXIuY2xhc3NMaXN0ID0gXCJzaWRlQmFyXCI7XG5cbiAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdQcm9qZWN0LmlkID0gXCJuZXdQcm9qZWN0XCI7XG4gIG5ld1Byb2plY3QuY2xhc3NMaXN0ID0gXCJuZXdCdXR0b25cIjtcbiAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIHByb2plY3RcIjtcbiAgc2lkZUJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcblxuICBzaWRlQmFyLmFwcGVuZENoaWxkKGRheUZpbHRlckxvYWQpO1xuXG4gIG1haW5Db250YWluLmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuXG4gIC8vZGlzcGxheVxuICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0ID0gXCJwcm9qZWN0Q29udGFpbmVyXCI7XG4gIG1haW5Db250YWluLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG4gIHJldHVybiBtYWluQ29udGFpbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
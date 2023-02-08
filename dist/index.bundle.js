/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dayFilter-load.js":
/*!*******************************!*\
  !*** ./src/dayFilter-load.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectFactory": () => (/* binding */ ProjectFactory),
/* harmony export */   "TaskFactory": () => (/* binding */ TaskFactory)
/* harmony export */ });
const ProjectFactory = (name, dueDate) => {
  let tasks = [];
  let projectState = false;
  const getName = () => name;
  const getDate = () => dueDate;

  const addTask = (task) => {
    tasks.push(task);
  };

  const getState = () => projectState;
  const changeProjectState = () => {
    if (projectState === false) {
      projectState = true;
    } else if (projectState === true) {
      projectState = false;
    }
  };

  const getTasks = () => tasks;

  return { getName, getDate, addTask, getTasks, getState, changeProjectState };
};

const TaskFactory = (name) => {
  let taskState = false;

  const getName = () => name;
  const getState = () => taskState;
  const changeTaskState = () => {
    if (taskState === false) {
      taskState = true;
    } else if (taskState === true) {
      taskState = false;
    }
  };

  return { getName, getState, changeTaskState };
};

//export { ProjectFactory, TaskFactory };


/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

  let newProject = document.createElement("button");
  newProject.id = "newProject";
  newProject.classList = "newButton";
  newProject.textContent = "Create project";
  sideBar.appendChild(newProject);

  sideBar.appendChild(_dayFilter_load__WEBPACK_IMPORTED_MODULE_0__["default"]);

  mainContain.appendChild(sideBar);

  //display
  let display = document.createElement("div");
  display.classList = "display";

  return mainContain;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad());


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (2:5)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| body,\n> html {\n|   padding: 0;\n|   margin: 0;");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'file.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






document.body.appendChild(_page_load__WEBPACK_IMPORTED_MODULE_0__["default"]);

const task1 = (0,_factory__WEBPACK_IMPORTED_MODULE_1__.TaskFactory)("Clean Room");
let project1 = (0,_factory__WEBPACK_IMPORTED_MODULE_1__.ProjectFactory)("MyDay", "tommorw");
project1.addTask(task1);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkN4QjtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsV0FBVztBQUNYOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENrQzs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLHVEQUFhOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0MxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUI7QUFDVTtBQUNxQjtBQUNuQztBQUNNOztBQUUzQiwwQkFBMEIsa0RBQVE7O0FBRWxDLGNBQWMscURBQVc7QUFDekIsZUFBZSx3REFBYztBQUM3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RheUZpbHRlci1sb2FkLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGRheUZpbHRlcnMgPSBbXG4gIHtcbiAgICBpY29uOiBcImNsZWFyX2RheVwiLFxuICAgIHRleHQ6IFwiTXkgZGF5XCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBcImRhdGVfcmFuZ2VcIixcbiAgICB0ZXh0OiBcIlRoaXMgd2Vla1wiLFxuICB9LFxuICB7XG4gICAgaWNvbjogXCJ0YXNrXCIsXG4gICAgdGV4dDogXCJBbGwgdGFza3NcIixcbiAgfSxcbl07XG5cbmxldCBkYXlGaWx0ZXJMb2FkID0gZnVuY3Rpb24gKCkge1xuICBsZXQgZGF5RmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGF5RmlsdGVyLmNsYXNzTGlzdCA9IFwiZGF5RmlsdGVyXCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlGaWx0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRpbWVGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGltZUZyYW1lLmNsYXNzTGlzdCA9IFwidGltZUZyYW1lXCI7XG5cbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGljb24uY2xhc3NMaXN0ID0gXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI7XG4gICAgaWNvbi50ZXh0Q29udGVudCA9IGRheUZpbHRlcnNbaV0uaWNvbjtcbiAgICB0aW1lRnJhbWUuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRleHQuY2xhc3NMaXN0ID0gXCJzaWRlQmFyUFwiO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBkYXlGaWx0ZXJzW2ldLnRleHQ7XG4gICAgdGltZUZyYW1lLmFwcGVuZENoaWxkKHRleHQpOyAgICBcblxuICAgIGRheUZpbHRlci5hcHBlbmRDaGlsZCh0aW1lRnJhbWUpO1xuICB9XG5cbiAgcmV0dXJuIGRheUZpbHRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRheUZpbHRlckxvYWQoKTtcbiIsImV4cG9ydCBjb25zdCBQcm9qZWN0RmFjdG9yeSA9IChuYW1lLCBkdWVEYXRlKSA9PiB7XG4gIGxldCB0YXNrcyA9IFtdO1xuICBsZXQgcHJvamVjdFN0YXRlID0gZmFsc2U7XG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICBjb25zdCBnZXREYXRlID0gKCkgPT4gZHVlRGF0ZTtcblxuICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICB9O1xuXG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4gcHJvamVjdFN0YXRlO1xuICBjb25zdCBjaGFuZ2VQcm9qZWN0U3RhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RTdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHByb2plY3RTdGF0ZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChwcm9qZWN0U3RhdGUgPT09IHRydWUpIHtcbiAgICAgIHByb2plY3RTdGF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHRhc2tzO1xuXG4gIHJldHVybiB7IGdldE5hbWUsIGdldERhdGUsIGFkZFRhc2ssIGdldFRhc2tzLCBnZXRTdGF0ZSwgY2hhbmdlUHJvamVjdFN0YXRlIH07XG59O1xuXG5leHBvcnQgY29uc3QgVGFza0ZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICBsZXQgdGFza1N0YXRlID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4gdGFza1N0YXRlO1xuICBjb25zdCBjaGFuZ2VUYXNrU3RhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHRhc2tTdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRhc2tTdGF0ZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0YXNrU3RhdGUgPT09IHRydWUpIHtcbiAgICAgIHRhc2tTdGF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBnZXROYW1lLCBnZXRTdGF0ZSwgY2hhbmdlVGFza1N0YXRlIH07XG59O1xuXG4vL2V4cG9ydCB7IFByb2plY3RGYWN0b3J5LCBUYXNrRmFjdG9yeSB9O1xuIiwiaW1wb3J0IGRheUZpbHRlckxvYWQgZnJvbSBcIi4vZGF5RmlsdGVyLWxvYWRcIjtcblxuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gIGxldCBtYWluQ29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250YWluLmlkID0gXCJtYWluQ29udGFpblwiO1xuXG4gIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0ID0gXCJoZWFkZXJcIjtcbiAgbGV0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuY2xhc3NOYW1lID0gXCJtYWluQ29udGVudFwiO1xuICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdCA9IFwiZm9vdGVyXCI7XG5cbiAgLy8gSGVhZGVyXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0ID0gXCJ0aXRsZVwiO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVG9Eb1wiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBtYWluQ29udGFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIC8vIE1haW5Db250ZW50XG5cbiAgLy9zaWRlQmFyXG4gIGxldCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZUJhci5jbGFzc0xpc3QgPSBcInNpZGVCYXJcIjtcblxuICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5ld1Byb2plY3QuaWQgPSBcIm5ld1Byb2plY3RcIjtcbiAgbmV3UHJvamVjdC5jbGFzc0xpc3QgPSBcIm5ld0J1dHRvblwiO1xuICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gXCJDcmVhdGUgcHJvamVjdFwiO1xuICBzaWRlQmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuXG4gIHNpZGVCYXIuYXBwZW5kQ2hpbGQoZGF5RmlsdGVyTG9hZCk7XG5cbiAgbWFpbkNvbnRhaW4uYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG5cbiAgLy9kaXNwbGF5XG4gIGxldCBkaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGlzcGxheS5jbGFzc0xpc3QgPSBcImRpc3BsYXlcIjtcblxuICByZXR1cm4gbWFpbkNvbnRhaW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IF8gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgcGFnZUxvYWQgZnJvbSBcIi4vcGFnZS1sb2FkXCI7XG5pbXBvcnQgeyBQcm9qZWN0RmFjdG9yeSwgVGFza0ZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNzcyBmcm9tIFwiZmlsZS5jc3NcIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlTG9hZCk7XG5cbmNvbnN0IHRhc2sxID0gVGFza0ZhY3RvcnkoXCJDbGVhbiBSb29tXCIpO1xubGV0IHByb2plY3QxID0gUHJvamVjdEZhY3RvcnkoXCJNeURheVwiLCBcInRvbW1vcndcIik7XG5wcm9qZWN0MS5hZGRUYXNrKHRhc2sxKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
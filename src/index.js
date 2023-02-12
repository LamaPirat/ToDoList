//imports
import _ from "date-fns";
import pageLoad from "./page-load";
import { ProjectFactory, TaskFactory } from "./factory";
import projectCreator from "./projectCreator";
import css from "./style.css";

// main pageLoad
document.body.appendChild(pageLoad);
//dom pointers
let projectContainer = document.querySelector(".projectContainer");
let newProjectButton = document.querySelector("#newProject");

projectContainer.appendChild(projectCreator);
const task1 = TaskFactory("Clean Room");
let project1 = ProjectFactory("MyDay", "tommorw");
project1.addTask(task1);

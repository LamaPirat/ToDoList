import _ from "date-fns";
import pageLoad from "./page-load";
import { ProjectFactory, TaskFactory } from "./factory";
import "./style.css";
import css from "file.css";

document.body.appendChild(pageLoad);

const task1 = TaskFactory("Clean Room");
let project1 = ProjectFactory("MyDay", "tommorw");
project1.addTask(task1);

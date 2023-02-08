import _ from "date-fns";
import pageLoad from "./page-load";
import { ProjectFactory, TaskFactory } from "./factory";

import css from "./style.css";

document.body.appendChild(pageLoad);

const task1 = TaskFactory("Clean Room");
let project1 = ProjectFactory("MyDay", "tommorw");
project1.addTask(task1);

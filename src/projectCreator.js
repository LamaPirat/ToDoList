import { ProjectFactory, TaskFactory } from "./factory";
import _, { endOfDay } from "date-fns";
import { ProjectLibrary } from "./project-library";

function projectCreator(projectLibrary) {
  let creationContainer = document.createElement("form");
  creationContainer.classList = "creationContainer";

  projectLibrary = this.projectLibrary;

  let nameInput = document.createElement("input");
  nameInput.classList = "nameInput";
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.name = "name";
  nameInput.required = true;
  nameInput.placeholder = "Name your project";
  nameInput.required = true;
  nameInput.minLength = 1;
  creationContainer.appendChild(nameInput);

  let dateInput = document.createElement("input");
  dateInput.classList = "nameInput dateInput";
  dateInput.id = "dateInput";
  dateInput.type = "date";
  dateInput.required = true;
  dateInput.placeholder = "Enter due date for project";
  dateInput.min = endOfDay(new Date());
  creationContainer.appendChild(dateInput);

  let taskReciever = document.createElement("div");
  taskReciever.classList = "taskReciever";

  let taskInput = document.createElement("input");
  taskInput.classList = "nameInput";
  taskInput.type = "text";
  taskInput.id = "taskName";
  taskInput.name = "taskName";
  taskInput.placeholder = "Name a task";
  taskReciever.appendChild(taskInput);

  let taskSubmitter = document.createElement("button");
  taskSubmitter.classList = "button";
  taskSubmitter.id = "taskSubmitButton";
  taskSubmitter.type = "button";
  taskSubmitter.name = "taskSubmitButton";
  taskSubmitter.textContent = "add task";
  taskReciever.appendChild(taskSubmitter);

  //Create a lister for tasks during project creation
  let taskLister = document.createElement("ul");
  taskLister.classList = taskLister;
  taskReciever.appendChild(taskLister);

  creationContainer.appendChild(taskReciever);

  let tasks = [];

  taskSubmitter.onclick = () => {
    let task = document.createElement("li");
    task.classList = "task";
    task.textContent = taskInput.value;
    taskLister.appendChild(task);
    let taskObject = TaskFactory(taskInput.value);
    console.log(taskObject);
    tasks.push(taskObject);
  };

  // projectSubmitter

  let projectSubmitter = document.createElement("button");
  projectSubmitter.classList = "button";
  projectSubmitter.id = "projectSubmitButton";
  projectSubmitter.type = "button";
  projectSubmitter.name = "projectSubmitButton";
  projectSubmitter.textContent = "Save project";
  creationContainer.appendChild(projectSubmitter);

  projectSubmitter.onclick = () => {
    let newProject = ProjectFactory(nameInput.value, dateInput.value, tasks);
    //console.log(ProjectLibrary);
    projectLibrary.addProject(newProject);
  };

  return creationContainer;
}

export default projectCreator(ProjectLibrary());

import { ProjectFactory, TaskFactory } from "./factory";

function projectCreator() {
  let creationContainer = document.createElement("form");
  creationContainer.classList = "creationContainer";

  let nameInput = document.createElement("input");
  nameInput.classList = "nameInput";
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.name = "name";
  nameInput.placeholder = "Name your project";
  nameInput.required = true;
  nameInput.minLength = 1;
  creationContainer.appendChild(nameInput);

  //let dateInput = document.createElement()

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
    tasks.push(TaskFactory(taskInput.value));
    console.log(tasks);
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
    let project = ProjectFactory(nameInput.value, "10.02.2023", tasks);
  };

  return creationContainer;
}

export default projectCreator();

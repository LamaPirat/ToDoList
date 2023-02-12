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

  creationContainer.appendChild(taskReciever);

  //Create a lister for tasks during project creation
  let taskLister = document.createElement("ul");

  return creationContainer;
}

export default projectCreator();

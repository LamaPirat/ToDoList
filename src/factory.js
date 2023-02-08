export const ProjectFactory = (name, dueDate) => {
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

export const TaskFactory = (name) => {
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

export const ProjectLibrary = () => {
  let myProjects = [];

  const getProjects = () => myProjects;
  const addProject = (project) => myProjects.push(project);

  return { getProjects, addProject };
};

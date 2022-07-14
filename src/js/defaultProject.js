class Project {
  constructor(title, desc, dueDate) {
    this.title = title,
    this.desc = desc,
    this.dueDate = dueDate
  }
}

function createObject(title, desc, dueDate) {
  const newProject = new Project(title, desc, dueDate);
  const newTodo = document.createElement('h3');
  newTodo.classList.add('.todo');
  newTodo.innerText = title;
  const projects = document.querySelector('.projects');
  projects.appendChild(newTodo);
}

export {Project, createObject};
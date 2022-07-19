class Todo {
  constructor(title, desc, dueDate) {
    this.title = title,
    this.desc = desc,
    this.dueDate = dueDate
  }
}

function createObject(title, desc, dueDate) {
  // Creating new todo
  const newTodo = new Todo(title, desc, dueDate);
  const newTodo = document.createElement('div');
  newTodo.classList.add('todo');
  newTodo.innerHTML = `
    <h3>${title}</h3>
  `;
  const projects = document.querySelector('.projects');
  projects.appendChild(newTodo);

  // Creating description
  const newDesc = document.createElement('div');
  newDesc.innerHTML = `
  <h3>Todo name: ${desc}</h3>
  <h4>Todo date: ${dueDate.value}</h4>
  `;
  const description = document.querySelector('.project-info');
  description.appendChild(newDesc);
}

export {createObject};
function appendProject(obj) {
  const projectDiv = document.createElement('div');
  projectDiv.innerHTML = `
    <h2>${obj.title}</h2>
    <p>${obj.desc}</p>
    <h3>${obj.dueDate}</h3>
    <h4>${obj.priority}</h4>
  `
}

export {appendProject};
import {createObject} from './js/createObject';

const title = document.querySelector('#title');
const desc = document.querySelector('#desc');
const date = document.querySelector('#date');

// const projects = document.querySelector('.projects');
const btn = document.querySelector('.btn');
btn.addEventListener('click', function(e) {
  createObject(title.value, desc.value, date);
})

const todos = document.querySelectorAll('.todo');
const descs = document.querySelectorAll('.desc');
todos.forEach(todo => todo.addEventListener('click', function(e) {
  // const desc = descs.find(desc => desc.innerText.contains(e.target.innerText));
  // desc.classList.remove('hidden');
  console.log(todo.innerText);
}))

console.log(todos);
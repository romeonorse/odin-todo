import {Project, createObject} from './js/defaultProject';

const title = document.querySelector('#title');
const desc = document.querySelector('#desc');
const date = document.querySelector('#date');

// const projects = document.querySelector('.projects');
const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
  createObject(title.value, desc.value, date);
})



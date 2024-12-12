'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const targetElement = document.getElementById("target");

for (let student of students) {
  const option = document.createElement("option");

  option.value = student.id;
  option.textContent = student.name;

  targetElement.appendChild(option);
}
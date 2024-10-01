'use strict';

const colG = document.querySelector('.colg');
const colR = document.querySelector('.colr');
const colB = document.querySelector('.colb');
const col = document.querySelector('.col');
let click = true;
const body = document.getElementsByTagName('body')[0];

const flipper = function (name) {
  name.addEventListener('click', function (e) {
    e.preventDefault();
    if (colG === name) {
      body.style.backgroundColor = 'green';
    } else if (colR === name) {
      body.style.backgroundColor = 'red';
    } else if (colB === name) {
      body.style.backgroundColor = 'blue';
    }
  });
};
flipper(colG);
flipper(colR);
flipper(colB);

col.addEventListener('click', function () {
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
  if (click) body.style.backgroundColor = randomColor();
});

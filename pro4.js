'use strict';

const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnReset = document.querySelector('.btn-reset');
const setTimer = document.querySelector('.set-timer');

let timer = 0;
let interval = null;
let isRunning = false;
let time = 120;
//console.log(time);

btnStart.addEventListener('click', e => {
  if (!isRunning) {
    interval = setInterval(incrementTimer, 1000);
    isRunning = true;
  }
});

btnStop.addEventListener('click', e => {
  clearInterval(interval);
  isRunning = false;
  updateTimerDisply();
});

btnReset.addEventListener('click', e => {
  timer = 0;
  updateTimerDisply();
});
function incrementTimer() {
  timer++;
  updateTimerDisply();
}
const updateTimerDisply = function () {
  const min = String(Math.floor(timer / 60)).padStart(2, 0);
  const sec = String(timer % 60).padStart(2, 0);
  setTimer.textContent = `${min}:${sec}`;
};
updateTimerDisply();

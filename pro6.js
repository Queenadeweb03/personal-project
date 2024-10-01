const subBtn = document.querySelector('.sub-btn');

function subElement() {
  subBtn.addEventListener('click', e => {
    if (subBtn.innerHTML === 'Subscribe') {
      subBtn.innerHTML = 'Subcribed';
    } else {
      subBtn.innerHTML = 'Subscribe';
    }
  });
}
subElement();

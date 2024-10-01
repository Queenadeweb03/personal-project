'use strict';

const btnItems = document.querySelector('.btn');
const itemDiv = document.querySelector('.items');
const input = document.querySelector('.input');
const storageKey = 'items';

let items = [];

function renderItems() {
  itemDiv.innerHTML = null;

  for (const [idx, item] of Object.entries(items)) {
    const container = document.createElement('div');
    container.style.margin = '10px';

    const text = document.createElement('p');
    text.textContent = item;
    text.style.display = 'inline';
    text.style.marginRight = '10px';
    itemDiv.appendChild(text);

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = () => removeItems(idx);

    const edtBtn = document.createElement('button');
    edtBtn.textContent = 'Edit';

    container.appendChild(text);
    container.appendChild(delBtn);
    container.appendChild(edtBtn);

    itemDiv.appendChild(container);

    edtBtn.addEventListener('click', e => {
      if (edtBtn.textContent === 'Edit') {
        input.removeAttribute();
      } else {
        input.setAttribute();
      }
    });
  }
}

function loadItems() {
  const oldItems = localStorage.getItem(storageKey);
  if (oldItems) items = JSON.parse(oldItems);
  renderItems();
}

function addItems() {
  btnItems.addEventListener('click', e => {
    e.preventDefault;
    const value = input.value;
    if (!value) {
      alert('You can not add empty item');
      return;
    }

    items.push(value);
    renderItems();
    input.value = '';
    saveItems();
  });
}
addItems();

function saveItems() {
  const stringItems = JSON.stringify(items);
  localStorage.setItem(storageKey, stringItems);
}

function removeItems(idx) {
  items.splice(idx, 1);
  renderItems();
  saveItems();
}
document.addEventListener('DOMContentLoaded', loadItems);

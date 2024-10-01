const showBtn = document.querySelector('.show-btn');
const addBtn = document.querySelector('.add-btn');
const plusBtn = document.querySelector('.plus-btn');
const plussBtn = document.querySelector('.pluss-btn');
const resetBtn = document.querySelector('.reset-btn');

let cart = 0;

function cartQuantity() {
  showBtn.addEventListener('click', e => {
    console.log('cart quantity: 0');
  });

  addBtn.addEventListener('click', e => {
    cart = cart++;
    console.log(`cart quantity: ${cart}`);
  });

  plusBtn.addEventListener('click', e => {
    cart = cart += 2;
    console.log(`cart quantity: ${cart}`);
  });

  plussBtn.addEventListener('click', e => {
    cart = cart += 3;
    console.log(`cart quantity:${cart}`);
  });

  resetBtn.addEventListener('click', e => {
    cart = 0;
    console.log('Cart was reset');
  });
}
cartQuantity();

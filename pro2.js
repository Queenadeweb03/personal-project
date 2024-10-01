'use strict';

const input = document.querySelector('.input');
const check = document.querySelector('.check');

function reverseString(str) {
  return str.split('').reverse().join('');
}
check.addEventListener('click', e => {
  e.preventDefault();
  const value = input.value;
  const reverse = reverseString(value);
  if (value === reverse) {
    alert('This is Palindrome');
  } else {
    alert('Not Palindrome');
  }
  input.value = '';
});

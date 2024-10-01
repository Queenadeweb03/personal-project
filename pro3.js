'use strict';

const quotes = [
  'Believe you can and youre halfway there. - Theodore Roosevelt',
  'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
  'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
  'Don"t watch the clock; do what it does. Keep going. - Sam Levenson',
  'You miss 100% of the shots you don"t take. - Wayne Gretzky',
  'Keep your eyes on the stars, and your feet on the ground. - Theodore Roosevelt',
  'You are never too old to set another goal or to dream a new dream. - C.S. Lewis',
  'The best way to predict your future is to create it. - Abraham Lincoln',
  'Do something today that your future self will thank you for. - Unknown',
  'Happiness can be found even in the darkest of times if one only remembers to turn on the light. - Albus Dumbledore (J.K. Rowling)',
];
const btn = document.querySelector('.btn');
const quoteListContainer = document.querySelector('.quote-list');

btn.addEventListener('click', e => {
  let num = Math.floor(Math.random() * 10);
  console.log(num);
  quoteListContainer.textContent = quotes[num];
});

// let click = true;
// let availableQuote = [];
// for (let i = 0; i < quotes.length; i++) {
//   availableQuote.push(quotes[i]);
// }
// function setQuote() {
//   const randomIndx = [Math.floor(Math.random() * availableQuote)];
//   const quote = availableQuote[randomIndx];
//   btn.addEventListener('click', function (e) {
//     e.preventDefault();

//     if (click) {
//       quoteListContainer.innerHTML = quote;
//     }
//   });
// }
// setQuote();

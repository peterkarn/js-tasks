'use strict';

// Написать функцию, которая принимает число, а возвращает строку 
function funcName(number) {
  console.log(typeof(number.toString()));
}

Например: 
funcName(123); // returns '123';`   
funcName(999); // returns '999';`



// Solutions: 
// function funcName(number) {
//   return String(number);
// }

// function funcName(number) {
//   return String(number + "");
// }

// function funcName(number) {
//   return String(number.toString());
// }

// function funcName(number) {
//   return String(number.toFixed(0));
// }




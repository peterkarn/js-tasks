'use strict';

// Написать функцию, которая принимает число повторений(n) и строку, а возвращает строку N раз

// Например: 
// funcName(6, "I") // "IIIIII"
// funcName(5, "Hello") // "HelloHelloHelloHelloHello"



// Solutions: 
function funcName(n, str) {
  let resultString = '';
  for (let i = 0; i < n; i++) {
    resultString += str;
  }
  console.log(resultString);
}

funcName(5, 'Hi');

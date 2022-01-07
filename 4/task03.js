'use strict';

// Написать функцию, которая принимает строку, а возвращает измененный строку с инвертированными символами
function funcName(str) {
 
  const lettersArr = str.split('').map(char => {
    if (/^[A-Z]*$/.test(char)) return char.toLowerCase()
    return char.toUpperCase()
  });
  
  console.log(lettersArr.join(''));
}

funcName("hello WORLD")

// Например:   
// funcName("hello world")      "HELLO WORLD"
// funcName("HELLO WORLD")      "hello world"
// funcName("hello WORLD")      "HELLO world"
// funcName("HeLLo WoRLD")      "hEllO wOrld"



// Solutions: 

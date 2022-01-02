'use strict';

// Написать функцию, которая принимает строку, а возвращает изменненную строку без гласных

// Например:   
const str = "This website is for losers LOL!";
// funcName(str), "Ths wbst s fr lsrs LL!"

function funcName(str) {
  const reg = /[quioaey]/gi;
  console.log(str.replace(reg, ""))
}

funcName(str);


// Solutions: 

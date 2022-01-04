'use strict';

// Написать функцию, которая принимает строку, а возвращает изменненную строку с заглавными буквами


// Например:   
const str = "How can mirrors be real if our eyes aren't real";
// funcName(str), "How Can Mirrors Be Real If Our Eyes Aren't Real");

function funcName(str) {
  console.log(

    str.split(' ').map(str => {
      return str.charAt(0).toUpperCase() + str.slice(1)
      //вернули 1 символ каждой строки, капитализировали, приклеили остаток строки без первого символа
    }).join(' ')

  );
}

funcName(str);



// Solutions: 

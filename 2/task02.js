'use strict';

// Написать функцию, которая принимает строку, а возвращает строку без первого и последнего символа

Например: 
funcName('eloquent'), 'loquen'
funcName('country'), 'ountr'
funcName('person'), 'erso'
funcName('place'), 'lac'



// Solutions: 

function funcName(str) {
  console.log(
    str.slice(1, str.length - 1), //destination
    str.substring((str.length - 1), 1), //destination could be reversed
    str.substr(1, str.length - 2) // second param is  substing LENGTH not a final position
  );
}


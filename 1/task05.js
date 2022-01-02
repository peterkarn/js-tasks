'use strict';

// Написать функцию, которая принимает строку, а возвращает строку в обратном порядке


// Например: 
// funcName('world') == 'dlrow'



// Solutions: 

function funcName(str) {
  return str.split('').reverse().join('');
}

funcName('world');
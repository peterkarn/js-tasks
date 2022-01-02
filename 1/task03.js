'use strict';

// Написать функцию, которая принимает число, а возвращает строку(четное, нечетное) либо 'Even' либо 'Odd'


// Например: 
// funcName(5)  ->   'Odd'
// funcName(3)  ->   'Odd'
// funcName(2)  ->   'Even'



// Solutions: 
function funcName(number) {
  if (number % 2 === 0) return 'even';
  return 'odd';
}

funcName(10)
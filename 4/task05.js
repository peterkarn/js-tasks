'use strict';

// Написать функцию, которая принимает число, а возвращает сумму чисел от 1 до заданного в функции числа


// Например:   
// funcName(2),     1 + 2  ->  3
// funcName(8),     1 + 2 + 3 + 4 + 5 + 6 + 7 + 8    ->     36 



// Solutions: 

function funcName(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i
  }
  return sum
}

funcName(8)

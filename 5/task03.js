'use strict';

// Написать функцию, которая принимает число, а возвращает новое число которое состоит и квадратов отдельных чисел

// Например:  
// funcName(234),      4916 
// funcName(9119),     811181



// Solutions: 
const funcName = (number) => {
  return [...String(number)].map(num => num * 2).join('')
}

funcName(123)


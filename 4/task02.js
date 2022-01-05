'use strict';

// Написать функцию, которая принимает массив, а возвращает измененный массив с инвертированными значениями


// Например:   
// funcName([1,2,3,4,5]),     [-1,-2,-3,-4,-5]
// funcName([1,-2,3,-4,5]),   [-1,2,-3,4,-5]


function funcName(arr) {
  const reverted = arr.map(num => num *= -1);
  console.log(reverted);
}

funcName([1, -2, 3, -4, 5]);

// Solutions: 

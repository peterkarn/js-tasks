'use strict';

// Написать функцию, которые принимает массив, а возвращает сумму его значений


// Например: 
// funcName([1, 3]),                 4
// funcName([1, 5.2, 4, 0, -1]),     9.2                              

// Solutions: 
// 1
// function funcName(arr) {
//   const sum = arr.reduce((total, current) => {
//     return total + current
//   }, 0);
//   console.log(sum);
// }

// funcName([1, 5.2, 4, 0, -1]);
//2

// function funcName(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum +=arr[i]
//   }
//   console.log(sum);
// }

'use strict';

// Написать функцию, которая принимает массив, а возвращает новый массив без дупликатов

// Например:
// let arr = [1, 3, 5, 3, 6, 7, 2]      ->    [1, 2, 3, 5, 6, 7]



// Solutions:

let arr = [1, 3, 5, 3, 6, 7, 2, 44];

// function funcName(a) {
//   const newArr = new Set(a);
//   return Array.from(newArr)
//   return ...newArr
// }

// function funcName(a) {
//   let arr2 = a.filter((item, i) => arr.indexOf(item) === i);
//   return arr2.sort((a, b) => a - b)
// }

// function funcName(a) {
//   let arr2 = a.reduce((sum, item) => {
//     return sum.includes(item) ? sum : [... result, item]
//   }, [])
//   return arr2
// }

funcName(arr);
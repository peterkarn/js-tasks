'use strict';

// Написать функцию, которая принимает массив, а возвращает количество булевых true

Например: 
var array1 = [
    true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true 
];
    
// funcName(array1) == 17, "There are 17 in total")

// Solutions: 
function funcName(arr) {
  let res = 0;
  arr.forEach(el => {
    if (el) res++
  });
  console.log(`There are ${res} in total`);
  return res
}

funcName(array1)
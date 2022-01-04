'use strict';

// Написать функцию, которая принимает число, а возвращает массив с разбитыми на части числами


// Например:   
// funcName(35231),     [1,3,2,5,3]

function funcName(number) {
  console.log(
    ('' + number).split('').map(i => {
      return +i
    })
  );
}

funcName(35231);

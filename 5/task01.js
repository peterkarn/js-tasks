'use strict';

// Написать функцию, которая принимает в параметры Операцию(строка) и 2 числа, а возвращает результат указанной операции с 2 чисел

// Например:   
// funcName('+', 4, 7),       11 
// funcName('-', 15, 18),     -3 
// funcName('*', 5, 5),       25 
// funcName('/', 49, 7),      7 



// Solutions: 

// function funcName(operation, value1, value2) {
//   const regex = /[\+\-\*\/]/
//   console.log(operation.match(regex) ? eval( value1 + operation + value2) : 'Enter correct math operator like + - * /')
// }

function funcName(operation, value1, value2) {
  function log(res) {
    console.log(res);
  }
  switch (operation) {
    case '+': log(value1 + value2);
      break;
    case '-': log(value1 - value2);
      break;
    case '*': log(value1 * value2);
      break;
    case '/': log(value1 / value2);
      break;
    default: log('Enter correct math operator like + - * /');
  }
}


funcName('+', 49, 7);
funcName('*', 5, 5)
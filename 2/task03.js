'use strict';

// Написать функцию, которая принимает строку, а возвращает число 

// Например: 
// funcName("1234"),   1234
// funcName("605"),    605
// funcName("1405"),   1405
funcName("-7"),     -7



// Solutions: 
function funcName(str) {
  console.log(
    Number(str),
    +str,
  );
}
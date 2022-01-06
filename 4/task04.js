'use strict';

// Написать функцию, которая принимает строку, а возвращает средину строки при таких условиях:
// если длина строки нечетная то возвращать 1 символ
// если четная то 2 символа


// Например:   
// funcName("test"),    "es"
// funcName("testing"), "t"
// funcName("middle"),  "dd"
// funcName("A"),       "A"



// Solutions:


function funcName(str) {
  const length = str.length;
  const middlePosition = length / 2;

  function extract(symbols) {
    return str.substr(middlePosition, symbols);
  }
  
  return length % 2 === 0 ? extract(2) : extract(1)

}

funcName("A")

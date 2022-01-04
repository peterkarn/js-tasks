'use strict';

// Написать функцию, которая принимает 1 параметр, а возвращает функцию при вызове которой вернется заданный параметр

// Например:   
// funcName("abcd")()       "abcd"
// funcName(true)()         true

function funcName(param) {
  const parameter = param;
  const innerFunction = function() {
    return parameter
  }
  return innerFunction
}
funcName(true)()


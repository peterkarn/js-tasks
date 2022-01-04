'use strict';

// Написать функцию, которая принимает 1 параметр, а возвращает функцию при вызове которой вернется заданный параметр

// Например:   
// funcName("abcd")()       "abcd"
// funcName(true)()         true

function funcName(arg) {
  function newFunc(argument) {
    return argument
  }
  return newFunc(arg);
}
funcName(true)



// Solutions: 

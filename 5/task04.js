'use strict';

// Написать функцию, которая принимает строку, а возвращает длину самого короткого слова


// Например:  
// funcName("bitcoin take over the world maybe who knows perhaps"),                3
// funcName("turns out random test cases are easier than writing out basic ones"), 3

const funcName = (str) => {
  const sortedArrByLength = str.split(' ').sort((a, b) => {
    return a.length - b.length
  });
  return sortedArrByLength[0].length
}

funcName("bitcoin take over the world maybe who knows perhaps")


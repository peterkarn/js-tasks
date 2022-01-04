'use strict';

// Написать функцию, которая принимает строку, а возвращает измененную строку с дублирующими символами

// Например:   
// funcName("abcd"),       "aabbccdd"
// funcName("Adidas"),     "AAddiiddaass"
// funcName("1337"),       "11333377";
// funcName("illuminati"), "iilllluummiinnaattii"
// funcName("123456"),     "112233445566"
// funcName("%^&*("),      "%%^^&&**(("



// Solutions: 

function funcName(str) {
    const newStr = str.split('').map(element => {
      return element + element;
    }).join('');
  console.log(newStr);
}

funcName("123456")

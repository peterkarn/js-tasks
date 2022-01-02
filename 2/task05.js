'use strict';

// Написать функцию, которые принимает строку и удаляет из нее все восклицательные знаки
// через regExp



// Например: 
// funcName("Hello World!"),        "Hello World"                            
// funcName("RrlVnvrynI!IkQplnQIFA rJHSRrPWGq!fzvfRNObQy"),        "RrlVnvrynIIkQplnQIFA rJHSRrPWGqfzvfRNObQy"  


// Solutions: 
function funcName(str) {
  const regEx = /!/g;
  let newStr = str.replaceAll(regEx, "");
  console.log(newStr);
}
funcName("Hello World!")
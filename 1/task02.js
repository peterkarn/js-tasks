'use strict';

// Написать функцию, которая принимает набор чисел, а возвращает минимальное из них
function funcName(args) {
    
}

// Например: 
// funcName([78,56,232,12,8]),8,'Should return the smallest int 8');
// funcName([78,56,232,12,18]),12,'Should return the smallest int 12');
// funcName([78,56,232,412,228]),56,'Should return the smallest int 56');
// funcName([78,56,232,12,0]),0,'Should return the smallest int 0');
// funcName([1,56,232,12,8]),1,'Should return the smallest int 1');



// Solutions: 

// 1)
// function funcName(args) {
//   const min = args.reduce(function(total, item) {
//     return (total < item ? total : item)
//   })
//   return min;
// }

// 2)
// function funcName(args) {
//   return Math.min(...args)
// }

// 3)
// function funcName(args) {
//   function numericSort(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1
//   }

//   return args.sort(numericSort).splice(0, 1);
// }

// 4)
// function funcName(args) {
//   return Math.min.apply(null, args)
// }





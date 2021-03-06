'use strict';

// Нужно отсортировать юзеров(массив) по наличию в них установленного скилла

let users = [
    {name: 'Alex', experience: ['React', 'Babel']},
    {name: 'Boba', experience: ['Ember', 'jQuery']},
    {name: 'Lola', experience: ['Angular', 'TS']},
];
// Нужны только люди с такими скилами
let skills = ['Angular', 'React'];

let someArr = users.filter(user => user.experience.some(xp => skills.includes(xp)));

console.log(someArr);
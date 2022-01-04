'use strict';

// Нужно отсортировать юзеров(массив) по наличию в них установленного скилла

let users = [
    {name: 'Alex', experience: ['React', 'Babel']},
    {name: 'Boba', experience: ['Ember', 'jQuery']},
    {name: 'Lola', experience: ['Angular', 'TS']},
];
// Нужны только люди с такими скилами
let skills = ['Angular', 'React'];

let newArray = users.filter(item => item.experience.some(subj => skills.includes(subj)))
console.log(newArray)
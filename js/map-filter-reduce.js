"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//*************************
let moreThan3Languages = users.filter(function (user) {
    return user.languages.length >= 3;
});

console.log(moreThan3Languages);
//************************
let emails = users.map(function (user) {
    return user.email;
});

console.log(emails);

//***************************
let sumOfExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);

console.log(sumOfExperience);

let averageYears = sumOfExperience / users.length;

console.log(averageYears);

//****************************
let longestEmail = users.reduce((longestemail, user) => {
    // return longest < user.email.length;
    if (longestemail.length < user.email.length) {
        longestemail = user.email;
    }
    return longestemail;
}, "");

console.log(longestEmail);

//****************************
var instructorsString = users.reduce((string, user) => {
    return `${string}, ${user.name}`;
}, "Your instructors are") + ".";

console.log(instructorsString);

//Bonus ******************************
let userLanguages = users.map(user => user.languages);

console.log(userLanguages);

let combinedLanguageArray = userLanguages.reduce((langArray, Array) => {
    for (let lang of Array) {
        langArray.push(lang);
    }
    return langArray;
}, []);

console.log(combinedLanguageArray);
//
// let uniqueLang = combinedLanguageArray.reduce((unique,lang)=>{
//     if ()
// },[]);


//answer 1
let listOfLanguages = Array.from(users.reduce((accumulator, user) => {
    user.languages.forEach(language => accumulator.add(language));
    return accumulator;
}, new Set()));

console.log(listOfLanguages);





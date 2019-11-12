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

var moreThan3Languages = users.filter(function (user) {
    return user.languages.length >= 3;
});

console.log(moreThan3Languages);

var emails = users.map(function (user) {
    return user.email;
});

console.log(emails);

var sumOfExperience = users.reduce((total,user) =>{
    return total + user.yearsOfExperience;
}, 0);

console.log(sumOfExperience);

var averageYears = sumOfExperience/users.length;

console.log(averageYears);

var longestEmail = users.reduce((longest,user) =>{
    // return longest < user.email.length;

});

console.log(longestEmail);
    




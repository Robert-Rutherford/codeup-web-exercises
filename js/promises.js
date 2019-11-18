"use strict";

function wait(time) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
    return promise;
}

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const lastCommit = (username) => {
    fetch(`https://api.github.com/users/${username}/events`,
        {headers: {'Authorization': 'token ' + githubToken}})
        .then(resp => resp.json()).then(data => {
        console.log(data);
        let latestcommit = data.find(event => event.type === "PushEvent");
        // console.log(latestcommit);
        return latestcommit;
    }).then(event => event.created_at).then(date => console.log(date));
};

console.log(lastCommit('Robert-Rutherford'));


// function getGithubUsernames() {
//     return fetch('https://api.github.com/users',{headers: {'Authorization': 'token '+ githubToken}})
//         .then(response => response.json())
//         .then(users => users.map(user => user.login));
// }
//
//
// getGithubUsernames().then((usernames) => {
//     usernames.forEach((username) => {
//         // do something with each username
//         console.log(username);
//         // let events = fetch('https://api.github.com/users/'+username+'/events/public', { method: 'get'})
//         //     .then(publicevents =>{
//         //         return publicevents.json();
//         //         // console.log(publicevents);
//         //     }).then(events => events.map(event => event.));
//         // console.log(events);
//
//
//     });
// }).catch(error => console.error(error));


// GET /users/:username/events
// let githubAPI = fetch(url, {headers: {'Authorization': 'token '+ githubToken}});



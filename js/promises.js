"use strict";

function wait(time) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (Math.random() > 0.1) {
                resolve();
            }else {
                reject();
            }
        },time);
    });
    return promise;
}

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


function getGithubUsernames() {
    return fetch('https://api.github.com/users',{headers: {'Authorization': 'token '+ githubToken}})
        .then(response => response.json())
        .then(users => users.map(user => user.login));
}


getGithubUsernames().then((usernames) => {
    usernames.forEach((username) => {
        // do something with each username
        console.log(username);
        // let events = fetch('https://api.github.com/users/'+username+'/events/public', { method: 'get'})
        //     .then(publicevents =>{
        //         return publicevents.json();
        //         // console.log(publicevents);
        //     }).then(events => events.map(event => event.));
        // console.log(events);


    });
}).catch(error => console.error(error));


// GET /users/:username/events
// let githubAPI = fetch(url, {headers: {'Authorization': 'token '+ githubToken}});



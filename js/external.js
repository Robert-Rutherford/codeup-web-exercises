"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var colorPrompt = prompt("what is you favorite color?");

if(colorPrompt !== null){
    // alert("Users color is: " + colorPrompt);
    if (colorPrompt.toLowerCase() === 'red'){
        alert("Great, red is my favorite color too!")
    }else {
        alert("User's color is: " + colorPrompt.toLowerCase());
    }
}

// exercise 3.1
var merDay = parseInt(prompt("how many days did you rent the little mermaid?"));
var bearDay = parseInt(prompt("how many days did you rent the Brother Bear?"));
var hercDay = parseInt(prompt("how many days did you rent the Hercules?"));
var priceDay = parseFloat(prompt("what is the cost per day?"));

 var movieTotal = (merDay + bearDay + hercDay) * priceDay;

 alert("the total price is: $" + movieTotal);

 // 3.2
var googleSal = parseFloat(prompt("Google pays you how much per hour?"));
var googleHour = parseInt(prompt("You worked for Google for how many hours?"));
var googleTotal = googleSal*googleHour;

var amazonSal = parseFloat(prompt("Amazon pays you how much per hour?"));
var amazonHour = parseInt(prompt("You worked for Amazon for how many hours?"));
var amazonTotal = amazonSal*amazonHour;

var faceSal = parseFloat(prompt("Facebook pays you how much per hour?"));
var faceHour = parseInt(prompt("You worked for Facebook for how many hours?"));
var faceTotal = faceSal*faceHour;

var hourTotal = googleHour+amazonHour+faceHour;
var workTotal = googleTotal+amazonTotal+faceTotal;

alert("You worked for a total of " + hourTotal+ " hour(s) for a salary of: $" + workTotal);

// 3.3
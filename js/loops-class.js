"use strict";
/*
* WHILE LOOPS
*/

// 1. Create a while loop that counts to 100 in increments of ten:
// (10...20...30...)
// var numInc = 0;
// while (numInc < 100){
//     numInc += 10;
//     console.log(numInc);
// }


// 2. Create a while loop that counts backwards from 50 - 1
// var fifty = 50;
// while (fifty >0){
//     console.log(fifty);
//     fifty--;
// }
var myQuestion;

// 3. Create a while loop that asks the user for a confirmation when asked: "Would you like to exit?"
// Store the confirm in the myQuestion variable.
// Try running this. What happens?
// while (myQuestion === false){
//     myQuestion = confirm("Would you Like to exit?");
// }

/*
* DO-WHILE LOOPS
*/


// 4. Refactor question 3 using a do-while loop.
// What is the behavior this time?
// do {
//     myQuestion = confirm("Would you Like to exit?");
// } while (myQuestion === false);

// 5. Create a do-while loop that prompts the user for a color and continues
// to prompt until the string passed is "blue"
// var rightColor;
// do {
//     rightColor = prompt("enter the color blue.");
// } while (rightColor !== "blue");

// 6. Refactor question 1 using a do-while loop.
// var z = 0;
// do {
//     console.log(z += 10);
// } while (z < 100);

/*
* FOR LOOPS
*/

var myArray = ["apples", "oranges", "bananas", "grapes", "pineapples"];

// 7. Create a for loop that iterates over this array and logs out each
// element to the console
// for (var k = 0; k < myArray.length; k++) {
//     console.log(myArray[k]);
// }

// 8. You are going to use a for loop to complete the FizzBuzz exercise.
// Your program should count up to 100.
// For numbers divisible by 3, log "Fizz"
// For numbers divisible by 5, log "Buzz"
// If divisible by 3 and 5, log "FizzBuzz"
// All other cases, just log the number.
// for (var l = 1; l <= 100; l++) {
//
//     // var outPut = l;
//     // if (l % 3 === 0 || l % 5 === 0) { outPut = "";
//     // if (l % 3 === 0) {outPut += "Fizz";}
//     // if (l % 5 === 0) {outPut += "Buzz";}}
//     // console.log(outPut);
//
//     // if (l % 3 === 0 && l % 5 === 0 ){
//     //     console.log("FizzBuzz");
//     // }else if (l % 3 === 0){
//     //     console.log("Fizz");
//     // }else if (l % 5 === 0) {
//     //     console.log("Buzz");
//     // }else{
//     //     console.log(l);
//     // }
//
//     console.log((++l%3?'':'Fizz')+(l%5?'':'Buzz')||l);
//
// }


// 9. Refactor question 1 using a for-loop
var numInc = 10;
// for (;numInc <= 100; numInc += 10) {
//     console.log(numInc);
// }

// 10. Write a for-loop


/*
* BREAK AND CONTINUE
*/

// 11. Refactor question 1: using a 'break', stop the counting once it hits 70.
for (numInc = 10; numInc <= 100; numInc = numInc + 10) {
    console.log(numInc);
    if (numInc === 70) {
        break;
    }
}
// 12. Refactor question 2: using a 'continue', skip numbers 50-26 and only
// log 25 - 1.
var fifty = 50;
while (fifty > 1) {
    fifty--;
    if (fifty > 25) {
        continue;
    }
    console.log(fifty);
}

"use strict";

function breakSkip() {
    var promptNumber = parseInt(prompt("Enter an odd number between 1 and 50."));

    console.log("Number to skip: " + promptNumber);
    var oddNum = 0;
    while (oddNum < 50) {
        oddNum++;
        if (oddNum % 2 !== 0) {
            if (oddNum === promptNumber) {
                console.log("Yikes! Skipping number: " + oddNum);
                continue;
            }
            console.log("Here is an odd number: " + oddNum);
        }
    }
}

breakSkip();







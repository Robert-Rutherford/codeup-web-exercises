"use strict";

function breakSkip() {
    var promptNumber = parseInt(prompt("Enter an odd number between 1 and 50."));
    console.log("Number to skip: " + promptNumber);
    var oddNum = 0;
    while (true){
        oddNum++;
        if (oddNum % 2 === 0){
            continue;
        }
        if (oddNum === promptNumber){
            console.log("Yikes! Skipping number: "+ oddNum);
            continue;
        }
        if (oddNum >= 50){
            break;
        }
        console.log("Here is an odd number: " + oddNum);
    }

}







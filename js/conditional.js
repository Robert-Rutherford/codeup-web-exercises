"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
var confirmNum = confirm("Would you like to enter a number?");

function numbCheck(confirmNum) {
    if (confirmNum === true) {
        var promptNum = parseInt(prompt("Enter a number:"));
        if (!isNaN(promptNum)) {
            if (promptNum % 2 === 0) {
                alert(promptNum + " is a Even Number");
            } else {
                alert(promptNum + " is an odd number");
            }
            var plus100 = promptNum + 100;
            alert(plus100 + " is the user's number plus 100");
            if (promptNum >= 0) {
                alert(promptNum + " is positive.");
            } else {
                alert(promptNum + " is negative");
            }
        } else {
            alert("Error: " + promptNum);
        }
    } else {
        alert("game over");
    }
}

numbCheck(confirmNum);

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(colorName) {
    if (colorName === "red") {
        return ("Strawberries are " + colorName);
    } else if (colorName === "blue") {
        return (colorName + " is the color of the sky");
    } else if (colorName === "orange") {
        return ("Oranges are" + colorName);
    } else if (colorName === "yellow") {
        return ("Honey is" + colorName);
    } else if (colorName === "green") {
        return ("The grass is " + colorName);
    } else if (colorName === "indigo") {
        return ("who knows " + colorName);
    } else if (colorName === "violet") {
        return ("what can you say about " + colorName);
    } else {
        return ("I don't know anything about " + colorName);
    }
}


/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor2(colorName) {
    switch (colorName) {
        case "red":
            return ("Strawberries are " + colorName);
        case "blue":
            return (colorName + " is the color of the sky");
        case "orange":
            return ("Oranges are" + colorName);
        case "yellow":
            return ("Honey is" + colorName);
        case "green":
            return ("The grass is " + colorName);
        case "indigo":
            return ("who knows " + colorName);
        case "violet":
            return ("what can you say about " + colorName);
        default:
            return ("I don't know anything about " + colorName);
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var colorPrompt = prompt("Enter a color:");
alert(analyzeColor2(colorPrompt));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalPrice) {
    var discount;
    switch (luckyNumber) {
        case 1:
            discount = totalPrice - (totalPrice * .1);
            alert("Congratulations, Your Lucky Number is: " + luckyNumber + "\n" +
                "The price before your discount is: $" + totalPrice + "\n" +
                "The price after the discount is: $" + discount);
            break;
        case 2:
            discount = totalPrice - (totalPrice * .25);
            alert("Congratulations, Your Lucky Number is: " + luckyNumber + "\n" +
                "The price before your discount is: $" + totalPrice + "\n" +
                "The price after the discount is: $" + discount);
            break;
        case 3:
            discount = totalPrice - (totalPrice * .35);
            alert("Congratulations, Your Lucky Number is: " + luckyNumber + "\n" +
                "The price before your discount is: $" + totalPrice + "\n" +
                "The price after the discount is: $" + discount);
            break;
        case 4:
            discount = totalPrice - (totalPrice * .50);
            alert("Congratulations, Your Lucky Number is: " + luckyNumber + "\n" +
                "The price before your discount is: $" + totalPrice + "\n" +
                "The price after the discount is: $" + discount);
            break;
        case 5:
            discount = 0;
            alert("Congratulations, Your Lucky Number is: " + luckyNumber + "\n" +
                "The price before your discount is: $" + totalPrice + "\n" +
                "The the item is now FREE!");
            break;
        default:
            alert("We're sorry, " + luckyNumber + "is not a lucky Number. No discount here.\n" +
                "The Price is: $" + totalPrice);
            break;
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBillPrompt = parseFloat(prompt("Input your total Bill."));

calculateTotal(luckyNumber, totalBillPrompt);
"use strict";

function showMultiplicationTable(number) {
    for (var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

function randEvenOdd() {
    for (var i = 0; i < 10; i++) {
        var randnum = Math.floor(Math.random() * 180) + 20;
        if (randnum % 2 === 0) {
            console.log(randnum + " is Even");
        } else {
            console.log(randnum + " is odd");
        }
    }
}

function towerLoop() {
    for (var i = 1; i < 10; i++) {
        var x = i.toString();
        for (var y = 1; y < i; y++) {
            x = x.toString() + i.toString();
        }
        console.log(x);
    }
}

function hundredToFive() {
//     var hundred = 100;
//     console.log(hundred);
//     for (var i = 1; i < 20; i++) {
//         console.log(hundred -= 5);
//     }
    for (var h = 100; h >= 5; h -= 5) {
        console.log(h);
    }
}


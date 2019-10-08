"use strict";

var num = 2;
while (num <= 65536){
    console.log(num);
    num = num*2;
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("Number of Cones to sell: "+ allCones);
do {
    // This expression will generate a random number between 1 and 5
    var soldCones = Math.floor(Math.random() * 5) + 1;
    if (allCones < soldCones){
        console.log("Cannot sell you " + soldCones+" cones. I only have " + allCones);
    }else if (allCones === 0){
        console.log("Yay! I sold all of them!");
        allCones = -1;
    }else{
        console.log(soldCones + " cones sold...");
        allCones = allCones - soldCones;
    }

}while (allCones >= 0);







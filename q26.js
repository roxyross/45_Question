"use strict";
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points. */
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-Sync");
var alien_color = ['Red', 'Yellow', 'Green', 'Blue'];
var display = readlineSync.keyInSelect(alien_color, 'please select your select');
if (display !== -1 || display == alien_color.length) {
    console.log("".concat(alien_color[display], "You Earned 5 points."));
}
else {
    console.log('You have Earned 10 points');
}

/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */

import * as readlineSync from 'readline-Sync';
let alien_color = ['Red', 'Yellow' , 'Green', 'Blue'];
let display = readlineSync.keyInSelect(alien_color, 'please select your select');
if(display ==='green'|| display ===2){
console.log(`${alien_color[display]}You Earned 5 points.`)
}else if(display == 'Yellow'|| display ===1){
    console.log(`${alien_color[display]}You Earned 10 points.`)
}else if(display == 'Red'|| display ===0){
    console.log(`${alien_color[display]}You Earned 15 points.`)
}else{
    console.log(`${alien_color[display]}You Earned 0 points.`)
}
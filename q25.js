/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.) */
// let alienColors: string[] = ['green', 'yellow', 'red'];
// // Passing version (where the alien's color is 'green')
// let alien_color_passing: string = 'green';
// if (alienColors.includes(alien_color_passing)) {
//     if (alien_color_passing === 'green') {
//         console.log("Congratulations! You just earned 5 points.");
//     }
// }
// // Failing version (where the alien's color is not 'green')
// let alien_color_failing: string = 'red'; // or 'yellow'
// if (alienColors.includes(alien_color_failing)) {
//     if (alien_color_failing === 'green') {
//         console.log("Congratulations! You just earned 5 points.");
//     }
// }
var alienColors = ['green', 'yellow', 'red'];
// Passing version (where the alien's color is 'green')
var alien_color_passing = 'green';
if (alienColors.indexOf(alien_color_passing) !== -1) {
    if (alien_color_passing === 'green') {
        console.log("Congratulations! You just earned 5 points.");
    }
}
// Failing version (where the alien's color is not 'green')
var alien_color_failing = 'red'; // or 'yellow'
if (alienColors.indexOf(alien_color_failing) !== -1) {
    if (alien_color_failing === 'green') {
        console.log("Congratulations! You just earned 5 points.");
    }
}

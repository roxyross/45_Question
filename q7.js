"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Get user input
var userInput = parseFloat(readlineSync.question("Enter a number: "));
// Addition
var additionResult = userInput + 3;
if (additionResult === 8) {
    console.log("Addition:", additionResult);
}
else {
    console.log("Addition did not result in 8");
}
// Subtraction
var subtractionResult = userInput - 2;
if (subtractionResult === 8) {
    console.log("Subtraction:", subtractionResult);
}
else {
    console.log("Subtraction did not result in 8");
}
// Multiplication
var multiplicationResult = userInput * 2;
if (multiplicationResult === 8) {
    console.log("Multiplication:", multiplicationResult);
}
else {
    console.log("Multiplication did not result in 8");
}
// Division
var divisionResult = userInput / 2;
if (divisionResult === 8) {
    console.log("Division:", divisionResult);
}
else {
    console.log("Division did not result in 8");
}
var addition = 5 + 3;
// Addition
if (addition == 8) {
    console.log("Addition: ".concat(addition));
}
else {
    console.log('you cannot calculate the number 8.');
}
//  subtraction
var subtraction = 10 - 2;
if (subtraction === 8) {
    console.log("Subtraction: ".concat(subtraction));
}
else {
    console.log('you cannot calculate the number 8.');
}
//  multiplication
var multiplication = 4 * 2;
if (multiplication === 8) {
    console.log("Multiplication: ".concat(multiplication));
}
else {
    console.log('you cannot calculate the number 8.');
}
// division
var division = 16 / 2;
if (division === 8) {
    console.log("Division:  ".concat(division));
}
else {
    console.log('you cannot calculate the number 8 by any of means.');
}

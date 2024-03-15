"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var favouriteNumber = parseInt(readlineSync.question('enter your favourite number:'));
var favouriteMessage = 'My favourite Number is: ' + favouriteNumber;
console.log(favouriteMessage);

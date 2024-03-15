// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.




import * as readlineSync from 'readline-sync';

const favouriteNumber = parseInt(readlineSync.question('enter your favourite number:'));
const favouriteMessage = 'My favourite Number is: ' + favouriteNumber;
console.log(favouriteMessage); 



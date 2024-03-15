/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

let string1: string = 'apple';
let string2: string = 'orange';
let numericValue: number = 42;
let arrayItems: string[] = ['apple', 'banana', 'cherry'];

// Equality and inequality with strings

console.log(string1 == string2);


console.log(string1 != string2);

// Tests using the lowercase function

console.log(string1.toLowerCase() == 'apple');

// Numerical tests

console.log(numericValue > 30);


console.log(numericValue <= 40);

// Tests using "and" and "or" operators

console.log(numericValue > 30 && numericValue < 50);


console.log(numericValue > 40 || numericValue < 30);

// Test whether an item is in an array

console.log(arrayItems.indexOf('banana'));

// Test whether an item is not in an array

console.log(!arrayItems.indexOf('grape'));
/* Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */


let car: string = 'subaru';
let temperature: number = 25;
let isSunny: boolean = true;
let fruit: string[] = ['apple', 'banana', 'orange'];
let city: string = 'New York';
let snowy : boolean = false;

// Test 1: Is car == 'subaru'? I predict True.
console.log(car == 'subaru');

// Test 2: Is temperature > 20? I predict True.
console.log(temperature > 20);

// Test 3: Is isSunny == true? I predict True.
console.log(isSunny == true);

// Test 4: Is fruits.length == 3? I predict True.
console.log(fruit.length == 3);

// Test 5: Is 'banana' in fruits? I predict True.
console.log(fruit.indexOf('banana'));

// Test 6: Is city != 'London'? I predict True.
console.log(city != 'London');

// Test 7: Is temperature < 15? I predict False.
console.log(temperature < 15);

// Test 8: Is isSunny == false? I predict False.
console.log(snowy == false);

// Test 9: Is fruits.length > 5? I predict False.
console.log(fruit.length > 5);

// Test 10: Is 'grape' in fruits? I predict False.
console.log(fruit.indexOf('grape'));
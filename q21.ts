// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let fruits = ["Apple", "Banana", "Orange"];

let error = fruits[3];

console.log("there is an error in the index.");

if(fruits.length >= 4){
    let correct = fruits[3];
    console.log("corrected value:", correct);

}else{
    console.log("Index error corrected. Array size is less than 4.");
}
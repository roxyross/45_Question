/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet! */
var animal = ['Dog', 'Cat', 'Fish', 'Parrot', 'Rabbit'];
for (var _i = 0, animal_1 = animal; _i < animal_1.length; _i++) {
    var Animals = animal_1[_i];
    console.log(Animals);
}
console.log("\n");
for (var _a = 0, animal_2 = animal; _a < animal_2.length; _a++) {
    var Animals = animal_2[_a];
    console.log("".concat(Animals, " makes a great pet"));
}
console.log("\n");
console.log('These are could be your best friend');

// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favouriteCar = ["Tesla Model S", "Porsche 911", "Toyota Supra", "Ford Mustang", "Audi R8"];

favouriteCar.forEach(cars => {
    console.log(`I have own these cars ${cars}`);
});
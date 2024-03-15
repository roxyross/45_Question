// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

var names: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Print personalized messages
names.forEach(name => {
    console.log(`Hello, ${name}! Have a great day.` );
});


// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var items = ["To Kill a Mockingbird",
    "1984",
    "The Great Gatsby",
    "The Lord of the Rings",
    "Pride and Prejudice"];
items.forEach(function (item) {
    console.log(" ".concat(item));
});

// var names: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
// // Print personalized messages
// names.forEach(name => {
//     console.log(`Hello, ${name}! Have a great day.` );
// });
var names = ["Alice", "Bob", "Sandy", "Roxy"];
for (var noun in names) {
    console.log("Hello, ".concat(noun, "! Have a great day."));
}

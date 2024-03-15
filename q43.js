/**Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */
var magicians = ['Ricky Jay', 'David Blaine', 'Harry Houdini', 'David Copperfield', 'Criss Angel', 'Derren Brown', 'Shin Lim'];
function show_magicians(magicians) {
    magicians.forEach(function (magicianName) { console.log(magicianName); });
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("THE GREAT ".concat(magicians[i]));
    }
    return greatMagicians;
}
// Display original magicians
console.log("Original magicians:");
show_magicians(magicians);
// Create a new array with the great magicians
var greatMagicians = make_great(magicians.slice()); // Use .slice() to create a copy of the array
// Display modified magicians
console.log("\nModified magicians:");
show_magicians(greatMagicians);

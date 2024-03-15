/**Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified */

let magicians = ['Ricky Jay','David Blaine','Harry Houdini','David Copperfield','Criss Angel','Derren Brown','Shin Lim'];

function show_magicians(magician:string[]){
    magician.forEach(magicianName=>{console.log(magicianName)})
}
show_magicians(magicians);

function make_great(magicians){
    for (let i = 0; i < magicians.length; i++) {
         magicians[i] = `THE GREAT ${magicians[i]}`;
    }
}
// show_magicians(magicians);
// make_great(magicians);
console.log("Original magicians:");
show_magicians(magicians);


// Modify magicians to make them great
make_great(magicians);

// Display modified magicians
console.log("\nModified magicians:");
show_magicians(magicians);
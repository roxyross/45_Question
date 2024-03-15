/**Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
var magician = ['Ricky Jay', 'David Blaine', 'Harry Houdini', 'David Copperfield', 'Criss Angel', 'Derren Brown', 'Shin Lim'];
function show_magician(magician) {
    magician.forEach(function (magicianName) { console.log(magicianName); });
}
show_magician(magician);
console.log("\n");
function showMagician(magician) {
    magician.map(function (magicianName) { console.log(magicianName); });
}
showMagician(magician);
console.log("\n");
function ShowMagician(magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var Magicians = magician_1[_i];
        console.log(Magicians);
    }
}
ShowMagician(magician);

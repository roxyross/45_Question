/**Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

let magician = ['Ricky Jay','David Blaine','Harry Houdini','David Copperfield','Criss Angel','Derren Brown','Shin Lim'];

// ForEach Loop
function show_magician(magician:string[]){
    magician.forEach(magicianName=>{console.log(magicianName)})
}
show_magician(magician);

console.log("\n")


// map method
function showMagician(magician:string[]){
    magician.map(magicianName=>{console.log(magicianName)})
}
showMagician(magician);


console.log("\n")

//for of loop
function ShowMagician(magician:string[]){
   for(let Magicians of magician)
   console.log(Magicians)
}
ShowMagician(magician);

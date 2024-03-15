/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

 */
// Array of places to visit
var placetovisit = ["Tokyo", "Paris", "New York", "Machu Picchu", "Sydney"];
// Print the array in its original order
console.log("Original order:", placetovisit);
//  Print the array in alphabetical order without modifying the original list
console.log("Alphabetic Order:", placetovisit.sort());
//  Print the array in alphabetical order without modifying the original list
console.log("original order (unchanged):", placetovisit);
//  Print the array in reverse alphabetical order without changing the order of the original list
console.log('reverse order:', placetovisit.sort().reverse());
// Show that the array is still in its original order
console.log("original order (Unchanged):", placetovisit);
// Reverse the order of the list again
placetovisit = placetovisit.reverse();
console.log("Back to Original Order:", placetovisit);
// Sort the array in alphabetical order
placetovisit.sort();
console.log("Sorted in Alphabetical Order:", placetovisit);
//  Sort the array in reverse alphabetical order
placetovisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Revive in Alphabetic order:", placetovisit);

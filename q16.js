/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
var invites = ["Albert Einstein", "Leonardo da Vinci", "Ada Lovelace", "Isaac Newton", "Marie Antoinette", "Nikola Tesla"];
invites.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nYou are cordially invited to dinner. We would be honored to have your presence.\nSincerely,\n[Your Name]"));
});
console.log('\n');
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.\n");
while (invites.length > 2) {
    var removedinvites = invites.pop();
    console.log("Sorry, ".concat(removedinvites, ", we can't invite you to dinner."));
}
console.log('\n');
console.log("\nInvitations for the remaining guests:");
invites.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nYou are still invited to dinner. We look forward to seeing you!\nSincerely,\n[Your Name]"));
});
invites.pop();
invites.pop();
console.log('\nFinal guest list:', invites);

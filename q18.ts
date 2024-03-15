// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let invitess  = ["Albert Einstein", "Leonardo da Vinci", "Ada Lovelace", "Isaac Newton", "Marie Antoinette", "Nikola Tesla"];

console.log(`Number of people who are invited: ${invitess.length}\n.`);

invitess.forEach(person => {
    console.log(`Dear ${person},\nYou are cordially invited to dinner. We would be honored to have your presence.\nSincerely,\n[Your Name]`);
});


console.log('\n');


console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.\n");

while(invitess.length > 2){
    let removedinvites = invitess.pop();
    console.log(`Sorry, ${removedinvites}, we can't invite you to dinner.`);


}

console.log('\n');

console.log("\nInvitations for the remaining guests:");

invitess.forEach(person => {
    console.log(`Dear ${person},\nYou are still invited to dinner. We look forward to seeing you!\nSincerely,\n[Your Name]`);
});

invitess.pop();
invitess.pop();

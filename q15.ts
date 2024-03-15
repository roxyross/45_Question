/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

// Method 1


let guests: string[] = ["Albert Einstein", "Leonardo da Vinci", "Ada Lovelace"];

// Print invitation messages for the original guests
guests.forEach(person => {
  console.log(`Dear ${person},\nYou are cordially invited to dinner. We would be honored to have your presence.\nSincerely,\n[Your Name]`);
});

// Inform that a bigger dinner table is found
console.log("Good news! We found a bigger dinner table!\n");

// Add new guests
guests.unshift("Isaac Newton");  // Add to the beginning
guests.splice(Math.floor(guests.length / 2), 0, "Marie Antoinette");  // Add to the middle
guests.push("Nikola Tesla");  // Add to the end

// Print invitation messages for all guests
console.log("Updated Invitation Messages:");
guests.forEach(person => {
  console.log(`Dear ${person},\nYou are cordially invited to dinner. We would be honored to have your presence.\nSincerely,\n[Your Name]`);
});
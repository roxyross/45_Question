/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/


// Method 1

let originalGuest = ["Albert Einstein", "Leonardo da Vinci", "Ada Lovelace"];

originalGuest.forEach(person => {
    console.log(`Dear ${person}, /n You are cordially invited to dinner. We would be honored to have your presence.\n Sincerely`);
});

let guestNotAvailable = originalGuest[1];
console.log(`Unfortunately ${guestNotAvailable} can't make it to the dinner.\n`);

let newGuest = 'Maria';
originalGuest[1] = newGuest;

originalGuest.forEach(person => {
    console.log(`Dear ${person}, /n You are cordially invited to dinner. We would be honored to have your presence.\n Sincerely`);
});

console.log('\n');

// Method 2

let originalGuests = ["Albert Einstein", "Leonardo da Vinci", "Ada Lovelace"];

originalGuests.forEach(persons => {
    console.log(`Dear ${persons}, /n You are cordially invited to dinner. We would be honored to have your presence.\n Sincerely`);
});

let guestsNotJoined = originalGuests[0];

if(originalGuests.indexOf(guestsNotJoined)){
    console.log(`Unfortunately ${guestsNotJoined} can't make it to the dinner.\n`)

    let newGuests = 'Maria' 
    let indexOfGuest = originalGuests.indexOf(guestsNotJoined);

    if(indexOfGuest != -1){
        originalGuests[indexOfGuest] = newGuests;

        originalGuests.forEach(persons =>{
            console.log(`Dear ${persons}, /n You are cordially invited to dinner. We would be honored to have your presence.\n Sincerely`);
        });
    }else{
        console.log(`${guestsNotJoined} is not include in the invitation list.`);
    }
}
/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */
var userName = ['Alice', 'Bob ', 'Emma', 'Admin', 'Eric'];
for (var _i = 0, userName_1 = userName; _i < userName_1.length; _i++) {
    var names = userName_1[_i];
    if (names === 'Admin') {
        console.log('hello Admin would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(names, " Thank You For Logging In Again"));
    }
}

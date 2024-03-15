// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let nameCase = 'hassan';
console.log("uppercase:", nameCase.toUpperCase());
console.log("lowercase:", nameCase.toLowerCase());
console.log("titlecase:", nameCase.replace(/(?:^|\s)\w/g, match => match.toUpperCase()));

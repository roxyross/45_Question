// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const personName = "\t  Hssan Ali\n";
console.log( personName);

const stripedName = personName.trim();
console.log(stripedName);

// const personNameWithWhitespace: string = "\t   John Doe\n";
// console.log(`Original Name: "${personNameWithWhitespace}"`);

// const personNameStripped: string = personNameWithWhitespace.trim();
// console.log(`Stripped Name: "${personNameStripped}"`);
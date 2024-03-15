var nameCase = 'hassan';
console.log("uppercase:", nameCase.toUpperCase());
console.log("lowercase:", nameCase.toLowerCase());
console.log("titlecase:", nameCase.replace(/(?:^|\s)\w/g, function (match) { return match.toUpperCase(); }));

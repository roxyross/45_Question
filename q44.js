/**Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time. */
function order() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log('PLEASE SELECT ITEM FOR SANDWICH');
    }
    else {
        // items.forEach(items => {console.log(items);
        // });
        var stuff = items.join(',');
        console.log(stuff);
    }
}
order("Turkey", "Lettuce", "Tomato", "Mayonnaise");
order("Tikka", "Swiss Cheese", "Mustard");
order('chicken', 'Beef');

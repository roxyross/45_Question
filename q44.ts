/**Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time. */


function order(...items){
    if (items.length === 0) {
    console.log('PLEASE SELECT ITEM FOR SANDWICH')        
    } else {
        // items.forEach(items => {console.log(items);
        // });
        let stuff = items.join(',');
        console.log(stuff);
    }
}

order("Turkey", "Lettuce", "Tomato", "Mayonnaise");
order("Tikka", "Swiss Cheese", "Mustard");
order('chicken','Beef')
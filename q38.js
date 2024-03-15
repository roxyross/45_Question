/**Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country. */
//Method 1
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, "is in ").concat(country));
}
describe_city("bejing", "China");
describe_city("Barcelona");
describe_city("New York", "USA");
console.log("\n");
//Method 2
function describe_city1(_a) {
    var city = _a.city, _b = _a.country, country = _b === void 0 ? "Unknown" : _b;
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city1({ city: "Karachi", country: "Pakistan" });
describe_city1({ city: "New York", country: "USA" });
describe_city1({ city: "Paris" });
//Method 3
function describe_city2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var city = args[0], _a = args[1], country = _a === void 0 ? "Unknown" : _a;
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city2("Karachi", "Pakistan");
describe_city2("New York", "USA");
describe_city2("Paris");
function describe_city3(cityInfo) {
    var city = cityInfo.city, _a = cityInfo.country, country = _a === void 0 ? "Unknown" : _a;
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city3({ city: "Karachi", country: "Pakistan" });
describe_city3({ city: "New York", country: "USA" });
describe_city3({ city: "Paris" });
//Method Using Class
var CityDescription = /** @class */ (function () {
    function CityDescription(city, country) {
        if (country === void 0) { country = "Unknown"; }
        this.city = city;
        this.country = country;
    }
    CityDescription.prototype.describe_cityInsta = function () {
        console.log("".concat(this.city, " is in ").concat(this.country, "."));
    };
    return CityDescription;
}());
// Create instances of CityDescription for three different cities
var karachi = new CityDescription("Karachi", "Pakistan");
karachi.describe_cityInsta();
var newYork = new CityDescription("New York", "USA");
newYork.describe_cityInsta();
var paris = new CityDescription("Paris");
paris.describe_cityInsta();

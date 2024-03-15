/**City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */
var city_country = /** @class */ (function () {
    function city_country(city, country) {
        this.city = city;
        this.country = country;
    }
    city_country.prototype.result = function () {
        return "".concat(this.city, ", ").concat(this.country);
    };
    return city_country;
}());
var city_1 = new city_country('Lahore', 'Pakistan');
var city_2 = new city_country('New York', 'USA');
var city_3 = new city_country('London', 'UK');
var city_4 = new city_country('Tokyo', 'Japan');
console.log(city_1.result());
console.log(city_2.result());
console.log(city_3.result());
console.log(city_4.result());
// method 2
function citycountry(_a) {
    var city = _a.city, country = _a.country;
    return "".concat(city, ", ").concat(country);
}
// Call the function with three city-country pairs
console.log(citycountry({ city: "Lahore", country: "Pakistan" }));
console.log(citycountry({ city: "New York", country: "USA" }));
console.log(citycountry({ city: "Paris", country: "France" }));
console.log(citycountry({ city: "Tokyo", country: "Japan" }));
//method 2
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with three city-country pairs
console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("New York", "USA"));
console.log(cityCountry("Paris", "France"));
console.log(cityCountry("Tokyo", "Japan"));

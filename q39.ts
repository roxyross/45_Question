/**City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */

class city_country{
    city: string;
    country: string;
    constructor(city:string,country:string){
        this.city = city;
        this.country = country;
    }
    result(){
        return `${this.city}, ${this.country}`;
    }
}
let city_1 = new city_country('Lahore','Pakistan');
let city_2 = new city_country('New York','USA');
let city_3 = new city_country('London','UK');
let city_4 = new city_country('Tokyo','Japan');

console.log(city_1.result());
console.log(city_2.result());
console.log(city_3.result());
console.log(city_4.result());

// method 2
function citycountry({ city, country }: { city: string; country: string }): string {
    return `${city}, ${country}`;
}

// Call the function with three city-country pairs
console.log(citycountry({ city: "Lahore", country: "Pakistan" }));
console.log(citycountry({ city: "New York", country: "USA" }));
console.log(citycountry({ city: "Paris", country: "France" }));
console.log(citycountry({ city: "Tokyo", country: "Japan" }));


//method 2

function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with three city-country pairs
console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("New York", "USA"));
console.log(cityCountry("Paris", "France"));
console.log(cityCountry("Tokyo", "Japan"));


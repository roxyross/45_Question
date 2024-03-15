/**Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country. */

//Method 1
function describe_city(city: string, country: string = "Unknown"){
    console.log(`${city}is in ${country}`);
}
describe_city("bejing","China")
describe_city("Barcelona")
describe_city("New York","USA")

console.log("\n");

//Method 2
function describe_city1({ city, country = "Unknown" }: { city: string; country?: string }) {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city1({ city: "Karachi", country: "Pakistan" });
describe_city1({ city: "New York", country: "USA" });
describe_city1({ city: "Paris" });

console.log("\n");

//Method 3
function describe_city2(...args: (string | undefined)[]) {
    const [city, country = "Unknown"] = args;
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city2("Karachi", "Pakistan");
describe_city2("New York", "USA");
describe_city2("Paris");

console.log("\n");

//Method 4
type CityInfo = {
    city: string;
    country?: string;
};

function describe_city3(cityInfo: CityInfo) {
    const { city, country = "Unknown" } = cityInfo;
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city3({ city: "Karachi", country: "Pakistan" });
describe_city3({ city: "New York", country: "USA" });
describe_city3({ city: "Paris" });

console.log("\n");


//Method Using Class
class CityDescription {
    city: string;
    country: string;

    constructor(city: string, country: string = "Unknown") {
        this.city = city;
        this.country = country;
    }

    describe_cityInsta() {
        console.log(`${this.city} is in ${this.country}.`);
    }
}

// Create instances of CityDescription for three different cities
const karachi = new CityDescription("Karachi", "Pakistan");
karachi.describe_cityInsta();

const newYork = new CityDescription("New York", "USA");
newYork.describe_cityInsta();

const paris = new CityDescription("Paris");
paris.describe_cityInsta();



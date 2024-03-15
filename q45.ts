/**Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly. */

class CarDetail{
    name : string;
    model : any;
    other? :{[key:string]:any};

    constructor(name : string, model:any,other?:{[key:string]:any}){
        this.name = name;
        this.model = model;
        this.other = other; 
    }
}
function carInfo(name,model,other?){
    return new CarDetail(name,model,other);
}
let myCar = carInfo('toyota', 2022);
let myCar2 = carInfo('Civic', 2024,{color : 'white'})

console.log(myCar);
console.log(myCar2)


/**Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

 */

class Shirt {
    size: string;
    message: string;

    constructor(size: string, message: string = "Size Availabe") {
        this.size = size;
        this.message = message;
    }

    Details() {
        console.log(`Size: ${this.size}, Message: ${this.message}`);
    }
}

let largeShirt = new Shirt('large');
largeShirt.Details();

let mediumShirt = new Shirt('medium');
mediumShirt.Details();

let customShirt = new Shirt('small', 'size not availabe');
customShirt.Details();

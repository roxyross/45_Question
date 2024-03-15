/**Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

 */
var Shirt = /** @class */ (function () {
    function Shirt(size, message) {
        if (message === void 0) { message = "Size Availabe"; }
        this.size = size;
        this.message = message;
    }
    Shirt.prototype.Details = function () {
        console.log("Size: ".concat(this.size, ", Message: ").concat(this.message));
    };
    return Shirt;
}());
var largeShirt = new Shirt('large');
largeShirt.Details();
var mediumShirt = new Shirt('medium');
mediumShirt.Details();
var customShirt = new Shirt('small', 'size not availabe');
customShirt.Details();

exports.sayHello = "Hello World";

function sayThanks() {
    console.log("Thank you!");
}
module.exports = sayThanks; // export sayThanks function using module.exports

console.log(module); // log the module object to see the exported values
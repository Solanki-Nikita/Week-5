// exports is an object that is used to export functions, objects, or values from a module so that they can be imported and used in other files. In this code snippet, we are exporting a function called sayHello that logs "Hello, World!" to the console. This function can be imported and used in other files by requiring the module that contains this code.

exports.sayHello = function() {
    console.log("Hello !"); 
} 
exports.sayThanks = function() {
    console.log("Dhanaywad!");  
}


// more ways to export functions, objects, or values from a module using module.exports
// exports.sayHello2 = function() {
//     console.log("Hello !"); 
// }
// module.exports.sayThanks2 = function() {
//     console.log("Thank you!");  
// } 

// module.exports.sayBye = function() {
//     console.log("Goodbye!");
// }


// console.log(module);

// Its not work because exports take the only one object to export the one object value.  
// exports  = {
//     sayHello = function() {
//     console.log("Hello !"); 
// },
// exports.sayThanks = function() {
//     console.log("Dhanaywad!");  
// }
// }







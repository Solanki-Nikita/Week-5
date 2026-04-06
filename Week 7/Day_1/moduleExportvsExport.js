//module Import in index.js file


// In Node.js, both `module.exports` and `exports` are used to export functions, objects, or values from a module so that they can be imported and used in other files. However, there are some differences between the two:

// 1. `module.exports` is the actual object that will be exported from the module. When you assign a value to `module.exports`, you are replacing the entire exports object with that value.            
// 2. `exports` is a shorthand for `module.exports`. It is initially set to the same object as `module.exports`, but if you assign a new value to `exports`, it will not affect `module.exports`. This means that if you want to export multiple values, you should use `exports` to add properties to the exports object, rather than reassigning it.

// Example of using `module.exports`:   
//using functions inside module.exports

module.exports = {
    sayHello: function() {
        console.log("Hello, World!"); // import sayHello function from moduleExportvsExport.js file
    },
    sayThanks: function() {
        console.log("Thank you!"); // import sayThanks function from moduleExportvsExport.js file  
    }
} 
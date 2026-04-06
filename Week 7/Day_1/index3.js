const imp = require("./add2");

//importing single export from example.js file
const data = require("./example");


//importing multiple exports from add2.js file with using key value pair in module.exports
// console.log(imp.a) // import a from add2.js file
// console.log(imp.b) // import b from add2.js file
// console.log(imp.c) // import c from add2.js file




//console.log(data.arr) // import arr from example.js file  
//console.log (data)   // only data is used to access the arr variable from example.js file because we have exported arr variable with using data as key in module.exports in example.js file
// (data .arr is used to access the arr variable from example.js file)



//console.log(data.arr[0]) // import arr from example.js file and access the first item of the array    
console.log(data.name.person) // import name from example.js file
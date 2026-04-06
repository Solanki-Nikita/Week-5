// console .log ( 'Hello World!' ) ;
// function hello () {
//     console .log ( 'Hello World!' ) ;
// }
// hello () ;


//importing file from moduleExportvsExport.js file


const msg = require("./moduleExportvsExport");

const msg2 = require("./Exports");

msg.sayHello() // import sayHello function from moduleExportvsExport.js file
msg.sayThanks() // import sayThanks function from moduleExportvsExport.js file

//importing file from exports.js file
msg2.sayHello() // import sayHello function from Exports.js file
msg2.sayThanks() // import sayThanks function from Exports.js file
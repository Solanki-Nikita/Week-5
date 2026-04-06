//os module provides operating system-related utility methods and properties. 
// It can be used to get information about the current operating system, such as the amount of free memory, CPU architecture, and more.

const os = require('os');
//console.log(os.freemem());  
console.log(os.arch());
console.log(os.userInfo());
//many built-in modules are available in Node.js.(docs)

//another way to call the os module
// const freeMemory = os.freemem();
// console.log(freeMemory);




const obj = {
    type: os.type(),
    user: os.userInfo(),
    release: os.release(),
    platform: os.platform(),
    uptime: os.uptime(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(obj);
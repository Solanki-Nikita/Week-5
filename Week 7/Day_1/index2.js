// required function  using for import and export another file to this file

//require("./add");

//when to export module. in add.js file
const add = require("./add");

const sum = add(2, 3);
const sumF = add(7, 3);

console.log(sum)
console.log(sumF)

console.log("subscribe to my channel");
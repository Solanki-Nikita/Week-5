//EvnetLoop
// function fun1() {
//     process.nextTick(() =>console.log("I M process 1"))
//     setTimeout (()=>console.log("I m Fun 1"),0);   // whateever time (2000) take 
//     setImmediate(()=> console.log("I M set immediate"))
//     //fun2();
// }
// function fun2(){
//     console.log("I m Fun 2");
//     //fun3();
// }
// function fun3(){
//     console.log("I m Fun 3");
   
// }
// fun1();
// fun2();
// fun3();



const { promises } = require('dns');
const fs = require('fs');



setTimeout(() => {
    console.log( 'I M A Timeou0t')
},0 );

fs.readFile(__filename,() => {
    console.log("I m file")
    process.nextTick(()=> console.log("I m INSIDE processes"));

})

//microtask callback pehele excetue honge
process.nextTick(()=> console.log("I m processes"));
Promise.resolve().then(()=> console.log('this is promise'));

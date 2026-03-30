// function test() {
//     let a = 10;
//     console.log(a);  //'a' exists only inside test()
//     }                // Outside → it does not exist

// test();
//console.log(a) // ❌ ReferenceError



//Function inside the function (closure + scope) 

// function outer(){
//     let user = "Nikita";

//     function inner () {
//         console.log(user);    // ✅ access outer variable
//     }
//     inner ();                // Inner function CAN access outer variables
// }                         // Outer function CANNOT access inner variables
// outer();





//Counter

// function Counter(){
//     let count = 0;

//     function increment(){
//         count++;  // count = 0 -> 1 -> 2
//         console.log(count);
//     }
//     increment(); // 1
//     increment(); // 2
// }
// Counter();

//Different way

// function Counter(){

//     let count = 0;

//     return function increment(){
//         count++;
//         console.log(count);
//     };
// }

// const counter = Counter();
// counter(); // 1                       
// counter(); // 2 
// counter(); // 3
// counter(); // 4

 //Counter() runs once
 //increment() keeps access to count
 //count is NOT destroyed


 // Same function call → shared variables
 // New function call → fresh variables
 // Closure → preserved variables





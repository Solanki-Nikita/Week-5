//Scope problem 
//we use var keyword var ignors blocks accept function scoped
// when you declare varible using let keyword out of function so function can access varible but
// you declare varible using let keyword inside the function then accese inside only
 

//let y = 20;  
function example(){
    if(true){
        var x = 10;  
        let y = 20;  
    } 
    console.log(x); // Works
console.log(y); // Reference error
}
//console.log(x); // Reference error
//  console.log(y);
example();                       

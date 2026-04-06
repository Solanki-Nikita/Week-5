
import data from './example.mjs';

//reruct the functions from the imported data object
const {hello, hii} = data;

console.log(hello());
hello();
hii();


//normal way to call the functions
//console.log(data);
//data.hello();
//data.hii();

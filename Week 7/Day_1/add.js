//local module  
//prereturn module (baar baar use karna hai to )

const add = (a,b) => {
    return a + b;
}
//common way to write module export
// const sum = add(2, 3);
// console.log(sum);

module.exports = add; 
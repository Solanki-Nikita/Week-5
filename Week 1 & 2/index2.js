// var a = document.querySelector('h1').innerText;
// console.log(a)

// var a = document.querySelector('h1').textContent;
// console.log(a)


//insert adjacent html

// var target = document.querySelector('.hero')
// var newE = "<b>DropXOut</b>";
// target.insertAdjacentHTML("beforeend",newE);



//styling


// document.body.style.backgroundColor="white"

// let a = document.querySelector("h1");
// a.style.color ="blue";
// a.style.backgroundColor="yellow"
// a.style.border= "2px soild blue";
// a.style.borderRadius = "5px";



//Get & Set method

//get


let hero = document.querySelector('#hero');
console.log(hero.getAttribute('id')); 

//set

hero.setAttribute("example", 123);
console.log(hero.outerHTML)
for(let att of hero.attributes){
    console.log(`${att.name} = ${att.value}`)
}
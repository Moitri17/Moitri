console.log("Moitri is coding");
console.log(typeof 23455);
console.log(typeof 696690000);
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
//if-else condition
const a=10;
const b=12;

if(false){
    console.log('a is greater')
}else{
    console.log('b is greater')
}
//for loop
const n=10;
//initialise//condition
//increment/decrement

//repetation
for(let i = 0; i < n; i++){
    console.log(i);
}
//error handling
try{
    throw new Error("Aditi is boring");
}catch(err){
    console.log("Aditi is interesting");
}
//creating a new function
function square(x){
    return x*x
}
console.log(
    square(22)
)
//cowsay

var cowsay = require("cowsay");

console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));
var cowsay = require("cowsay");

console.log(cowsay.say({
	text : "Moitri is coading",
	e : "@@",
	T : "* "
}));

// require(__dirname + '/searching.js');
const searching = require('./searching.js');

// import searching from "./searching.js";

console.log("Start");

console.log("This is first program using NOde js");

console.log(searching);

let arr = [1,2,3,45,645,34,232];
let x = 45;


console.log(searching.linear(arr,x));

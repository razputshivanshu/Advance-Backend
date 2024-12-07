// ------------------>>>>>>>>>> To Boolean and Equality Operator  <<<<<<<<---------------

// ---------------- To Boolean Example ---------------

console.log(!0);
/**
 * Here 0 is a falsy value
 * 0 -> false and hence ToBoolean will become true
 */

console.log(!(-4));
/**
 * -4 is a truthy value because it is not present in the list of falsy values 
 * so To Boolean (-4) -> true and
 * so To Boolean(!(-4)) -> false
 */

console.log(!{});
/**
 * In the table it was told that {} object is an truthy value 
 * so ! of object will be false
 */

console.log(!console.log(0));
/**
 * Why it is true here?
 * console.log always return undefined and undefined is a falsy value so !undefined will be truthy value.
 */



// ------------------- Equality Operator  ---------------
console.log("Equality Function from here:")
console.log(9 == "9");

console.log("9" == "9")

console.log(9 == 9);


console.log(9 === "9");

console.log("9" === "9")

console.log(9 === 9);
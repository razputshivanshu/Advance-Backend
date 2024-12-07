// Lecture 3: Abstract equality, NaN and Special Types

//Internal Working of Abstract Equality


console.log(null == undefined); //true and vice versa of it also gives true
console.log(undefined == null); 


console.log(10 == "10"); // ToNumber('10') -> 10 and 10 == 10 is true
console.log(10 == "12"); // ToNumber('12) -> 12 and 10 == 12 is false

console.log(false == 0); // ToNumber(false) -> 0 and  (0 == 0) true;
console.log(true == 10); //To NUmber(true) -> 1 and (1 == 10) false;

console.log(10 == {valueOf() { return 10;}}) // We call toPrimitive on this Object and the hint is number so it will return 10; then (10 == 10 ) return true;

let a = 5;
if (a) { // a is a positive number so by default it a truthy value
  console.log("Hi There");
}

if (a == true) {  // in abstract equality, ToNumber(true) -> 1 and (5 == 1) false, so it will not be printed....
  console.log("Bye bye")
}




console.log(NaN === NaN);

// There is a function to check weather it is a NaN or not?
console.log(isNaN("2121")); //false

console.log(isNaN(NaN)); //true

console.log(isNaN('YourName')); //true



function checkDirection(val) {
  //if val is negative return string left
  //otherwise is positive return right
  //if 0 return middle
  if (val < 0) {
    return "left";
  }
  else if (val > 0) {
    return "right";
  }
  else
    return "middle";
}


console.log(checkDirection(0));
console.log(checkDirection(1));
console.log(checkDirection(-1));

// Printing line in console
console.log("Hello World!");

/*
Declaring variables and
Using Variables and different primitive data types.
*/
var myName = "Ahammad Shawki";
console.log(myName);

var myNum = 8;
console.log(myNum);

var floatNum = 9.007;
console.log(typeof(myNum));
console.log(typeof(floatNum)); // integer and float both are number objects

floatString = toString(floatNum); // changing datatypes
console.log(typeof(floatString));
newFloatNum = Number(floatString);
console.log(typeof(newFloatNum));

var myBool = true;
var yourBool = false;

console.log(typeof(myBool));

var someThing;
console.log(someThing);

var nullable = null;
console.log(nullable);

// Concatenation
var greet = "Hello";
myName = "Rahim Mia"; // changing variable value
myNum = 7;

console.log(greet + ", " + myName + "!");
console.log(myName, myNum);
console.log(myName + myNum);

// Interpolation (f string)
console.log(`${greet}, ${myName}!`)
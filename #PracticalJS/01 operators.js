var a = 100;
var b = 5;
var c = 3;

// Arithmatic Operator
console.log(a + b);
console.log(a - b);
console.log(b * c);
console.log(a / b);
console.log(a / c);
console.log(b % c);
console.log(b ** c);

a += 1;
console.log(a);
a++;
console.log(a);
++a;
console.log(a);
a -= 1;
console.log(a);
a--;
console.log(a);
--a;
console.log(a);

// same goes for other operators;


// Comparison Operator
console.log(a == b); // can be true even if the datatypes are different
console.log(a === b); // srictly equal
console.log(a != b);
console.log(a !== b);

/* we also have
>
>=
<
<=
*/


// Logical Operator (and, or not)
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(!true);
console.log(!false);


// Turney operator
var d = b > c ? 0 : 1; 
// d = 0 if b > c else 1
console.log(d);

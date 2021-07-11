const rgx2mth = /Bangladesh/;
const aText = "I am from Bangladesh";

const newText = aText.replace(rgx2mth, "United States");
console.log(newText);

console.log(aText.match(rgx2mth));

// modifier
console.log("This is great!".match(/this/));
console.log("This is great!".match(/this/i));

console.log("This is great and it is awesome!".match(/is/));
console.log("This Is great and it is awesome!".match(/is/g));

console.log("This Is great and it is awesome!".match(/is/ig));


// Brackets
console.log("A Nice Caption".match(/[abc]/));
console.log("A Nice Caption".match(/[abc]/ig));
console.log("A Nice Caption".match(/[^abc]/)); //opposite

console.log("I can count 1, 2, 3, 4, 5, 6".match(/[0-9]/g));
console.log("I can count 1, 2, 3, 4, 5, 6".match(/[a-z]/g));
console.log("I can count 1, 2, 3, 4, 5, 6".match(/[^0-9]/g));
console.log("I can count 1, 2, 3, 4, 5, 6".match(/[^a-z]/g));

console.log("If ab is equal to bc, then a is equal to c".match(/(ab|bc)/)); //one or other
console.log("If ab is equal to bc, then a is equal to c".match(/(ab|bc)/g)); //both



// Meta Character
console.log(`Hello there!
I am Ahammad`.match(/./g)); //this will select anything except newline

console.log("Lets match some word character and ignore %&$#".match(/\w/g));
console.log("Lets match %&$#^*@() and ignore some word character".match(/\W/g));

console.log("Lets match every digit 0 1 2 3 4 5 6 7 8 9".match(/\d/g));
console.log("Lets don't match any digit 0 1 2 3 4 5 6 7 8 9".match(/\D/g));


console.log(`Lets match space    character   and   newline

hello`.match(/\s/g));

console.log(`Lets ignore space    character   and   newline

hello`.match(/\S/g));

console.log("Lets check word boundary".match(/\bc/));
console.log("Lets check word boundary".match(/d\b/));

console.log("Let us ignore word boundary".match(/\Bu/));


console.log(`Lets match newline

`.match(/\n/));




// Quantifiers
const text = 'aaaabcdefghij109823456';
console.log(text.match(/a+/));  // a 1-inf
console.log(text.match(/jk*1/)); // k 0-inf
console.log(text.match(/jk?1/)); // k 0-1
console.log(text.match(/6$/)); // 6 at the end of the string
console.log(text.match(/^a/)); // a at the beginning of the string



// Methods
const rgx = (/a/g);
while (match = rgx.exec(text)) {
    console.log(match);
}

while (match = rgx.test(text)) {
    console.log(match);
}


console.log(text.search(/j/g));
console.log(text.search(/u/g));

const myText = text.replace(/a+/, "hello");
console.log(myText);

const yourText = text.replace(/a/g, "hello");
console.log(yourText);

const aSimpleText = "Hello0I have4the secret7key!"
console.log(aSimpleText.split(/\d/));
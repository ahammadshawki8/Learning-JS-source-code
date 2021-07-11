// Declaring array
var arrOne = new Array("Ahammad", "Arko", "Hasnine", "Shammo", "Abir");
var arrTwo = ["Ronaldo", "Neymar", "MBappe", "Halaand", "Ramos"];



// operations
//accessing
console.log(arrOne);

console.log(arrTwo[0]);
console.log(arrTwo[2]);

arrOne[3] = "Essam";
console.log(arrOne);

console.log(arrTwo.length);
console.log(arrTwo["length"]);


// iteration
i = 0;
for (i; i < arrOne.length; i++) {
    console.log(arrOne[i]);
}

for (const key in arrTwo) {
    const element = arrTwo[key];
    console.log(element);        
}

arrOne.forEach((element, index) => {
    console.log(index);
    console.log(element);
});


for (let e of arrOne) {
    console.log(e);
}

// indexing
console.log(arrTwo.indexOf("Neymar"));


// appending
arrTwo.push("Marcelo");
console.log(arrTwo);

arrTwo.unshift("Zidane");
console.log(arrTwo);

arrTwo.splice(1,0, "Hello", "World", "I can add too");
console.log(arrTwo);


// removing
var popped = arrTwo.pop();
console.log(arrTwo);
console.log(popped);

var shifted = arrTwo.shift();
console.log(arrTwo);
console.log(shifted);

var newSpliced = arrTwo.splice(1,2);
console.log(arrTwo);
console.log(newSpliced);

var spliced = arrTwo.splice(1,1);
console.log(arrTwo);
console.log(spliced);


// slicing
var sliced = arrOne.slice(2, 4)
console.log(sliced)

var sliced = arrOne.slice(2, -1)
console.log(sliced)

var sliced = arrOne.slice(-1)
console.log(sliced)


// join
var string = arrOne.join("-")
console.log(string)

// fill
arrOne.fill(null, 2, 4)
console.log(arrOne)

// concate
arrThree = arrOne.concat(arrTwo);
console.log(arrThree);

arrFour = [...arrOne, ...arrTwo];
console.log(arrFour);

// in
numArr = [0, 120, 67, 23, 456, 789];
console.log(numArr.includes(23));
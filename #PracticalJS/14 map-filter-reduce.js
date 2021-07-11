let arrOne = [1, 2, 3, 4, 5, 6, 7];

// map
let arrTwo = arrOne.map(function(element) {
    return element**2;
})
console.log(arrTwo);

let newArr = arrOne.map(element => element**2);
console.log(newArr);

let newArr1 = arrOne.filter((element, index, fullArr) => {
    console.log("Element: " + element + " Index: " + index + " Full Array: " + fullArr);
    return element**2;
});
console.log(newArr1);



// filter
let arrThree = arrOne.filter(function(element) {
    return element % 2 === 0;
})
console.log(arrThree);

let newArr2 = arrOne.filter(element => element % 2 === 0);
console.log(newArr2);

let newArr3 = arrOne.filter((element, index, fullArr) => {
    console.log("Element: " + element + " Index: " + index + " Full Array: " + fullArr);
    return element === 3;
});
console.log(newArr3);


// reduce
let arrFour = arrOne.reduce(function(sum, item) {
    sum += item;
    return sum;
}, 0)
console.log(arrFour);

let newArr4 = arrOne.reduce((sum, item) => sum += item, 10);
console.log(newArr4);

let newArr5 = arrOne.reduce((sum, item, index, fullArr) => {
    sum += item;
    console.log("Sum: " + sum + " Item: " + item + " Index: " + index + " Full Array: " + fullArr);
    return sum;
}, 20);
console.log(newArr5);
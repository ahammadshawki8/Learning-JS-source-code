const arrOne = [1, 1, 1, 1, 1, 1, 1, 0]
const arrTwo = [0, 0, 0, 1, 0, 0, 0, 0]
const arrThree = [0, 0, 0, 0, 0, 0, 0, 0]


// some
var ans = arrOne.some((elem, index, fullArray) => {
    console.log(elem);
    return elem === 1;
})
console.log(ans);

ans = arrTwo.some((elem) => {
    console.log(elem);
    return elem === 1;
})
console.log(ans);

ans = arrThree.some(elem => elem === 1);
console.log(ans);



// every
ans = arrOne.every((elem, index, fullArray) => {
    console.log(elem);
    return elem === 1;
})
console.log(ans);

ans = arrTwo.every(elem => {
    console.log(elem);
    return elem === 0;
})
console.log(ans);

ans = arrThree.every(elem => elem === 0);
console.log(ans);
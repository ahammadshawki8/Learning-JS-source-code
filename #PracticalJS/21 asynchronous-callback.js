// asunchronous code
// ex1
function getVar() {
    var x;
    setTimeout(function() {
        x = 12;
    }, 3000)
    return x;
}

var value = getVar();
console.log("The value is: " + value);


// ex2
const newVar = () => {
    setTimeout(function() {
        console.log("A Function that takes some time");
    }, 3000)
}

const printSomething = () => {
    console.log("Another Function");
}

newVar();
printSomething();


// using callback to handle asynchronous behaviour
const newVarCall = (callback) => {
    setTimeout(function() {
        console.log("A Function that takes some time");
        callback();
    }, 3000)
}

const printSomethingCall = () => {
    console.log("Another Function");
}

newVarCall(printSomethingCall);
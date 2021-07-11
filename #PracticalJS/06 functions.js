var myMsg = function () {
    console.log("This is the first function!");
};

var pprint = function (msg) {
    console.log(msg);
};

var addition = function (x, y) {
    return Number(x) + Number(y);
};


myMsg();
pprint("Printing this line using function.");
console.log(addition(10,5));
console.log(addition("10",5));
console.log(addition("10","5"));


var factorial = (a) => {
    if (a == 0) {
        return 0;
    }
    else if (a == 1) {
        return 1;
    }
    else {
        return a * factorial(a-1);
    }
};

console.log(factorial(5));


var firstClass = function (name, callback) {
    console.log("Inner Function:", callback(name));
    console.log("Outer Function: XD");
}; 

var hello = function (name) {
    return "My name is " + name + " and I am a jsLover :)";
};

firstClass("Ahammad", hello);


// defining function
function febonacci(term) {
    memo = {0: 1, 1: 1}
    if (term in memo) {
        return memo[term];
    }

    else {
        var ans = febonacci(term-1) + febonacci(term-2);
        memo[term] = ans;
        return ans;
    }
};

console.log(febonacci(10));

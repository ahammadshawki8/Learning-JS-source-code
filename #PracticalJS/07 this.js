// GLOBAL CONTEXT RULES

console.log(this);

// function setNameGeneral() {
//     var myName1 = "Ahammad1";
// }
// setNameGeneral();
// console.log(myName1);

function setNameAccidentalVar() {
    myName2 = "Ahammad2";
}
setNameAccidentalVar();
console.log(myName2);

function setNameThis() {
    this.myName3 = "Ahammad3";
}
setNameThis();
console.log(myName3);

// function setNameThisStrict() {
//     'use strict';
//     this.myName4 = "Ahammad4";
// }
// setNameThisStrict();
// console.log(myName4);



// OBJECT RULES

var myCustomObj = {
    fullname: "Ahammad Shawki",
    age: 16, 
    msg: function() {
        console.log(this.age);
        this.school = "Rajuk";
    }
}

myCustomObj.msg();
console.log(myCustomObj.school);

var myOuterObj = {
    fullname: "Ahammad Shawki",
    age: 16,
    myInnerObject: {
        fullname: "Ronaldo",
        age: 37,
        msg: function() {
            console.log(this);
        }
    }
}

myOuterObj.myInnerObject.msg();



// SPECIFIC RULES
// call, bind, apply

var newOuterObj = {
    fullname: "Ahammad Shawki",
    age: 16,
    newInnerObject: {
        fullname: "Ronaldo",
        age: 37,
        msg: function() {
            console.log(this);
        }
    }
}

newOuterObj.newInnerObject.msg.call(newOuterObj);


// call(), apply()

var parentObj = {
    fullname: "Ahammad Shawki",
    age: 16,
    childObject: {
        fullname: "Ronaldo",
        age: 37,
        msg: function() {
            console.log(`My name is ${this.fullname}.`);
        }
    }
}

parentObj.childObject.msg();
parentObj.childObject.msg.call(parentObj);
parentObj.childObject.msg.apply(parentObj);


var parentObj = {
    fullname: "Ahammad Shawki",
    age: 16,
    childObject: {
        fullname: "Ronaldo",
        age: 37,
        msg: function() {
            console.log(`My name is ${this.fullname}.`);
        }.call(parentObj)
    }
}

var parentObj = {
    fullname: "Ahammad Shawki",
    age: 16,
    childObject: {
        fullname: "Ronaldo",
        age: 37,
        msg: function() {
            console.log(`My name is ${this.fullname}.`);
        }.apply(parentObj)
    }
}


var karim = {
    fullname: "Karim Ali",
    dob: 1996,
    age: function(currentYear, msg) {
        console.log(`${msg}: ${this.fullname} is ${currentYear - this.dob} years old!`);
    }
}

var rahim  = {
    fullname: "Rahim Abdul",
    dob: 2004
}

karim.age(2021, "Hello World!");
karim.age.call(rahim, 2021, "Hello World!");

karim.age(2021, "Hello World!");
karim.age.apply(rahim, [2021, "Hello World!"]);



// bind()
var parentObj = {
    fullname: "Ahammad Shawki",
    age: 16,
    childObject: {
        fullname: "Ronaldo",
        age: 37,
        msg: function() {
            console.log(`My name is ${this.fullname}.`);
        }
    }
}

parentMsg = parentObj.childObject.msg.bind(parentObj);
parentMsg();


var parentObj = {
    fullname: "Ahammad Shawki",
    age: 16,
    childObject: {
        fullname: "Ronaldo",
        age: 37,
        msg: function() {
            console.log(`My name is ${this.fullname}.`);
        }.bind(parentObj)
    }
}

parentObj.childObject.msg();


var karim = {
    fullname: "Karim Ali",
    dob: 1996,
    age: function(currentYear, msg) {
        console.log(`${msg}: ${this.fullname} is ${currentYear - this.dob} years old!`);
    }
}

var rahim  = {
    fullname: "Rahim Abdul",
    dob: 2004
}


rahimAge1 = karim.age.bind(rahim, 2021, "Hello World 1");
rahimAge1();

rahimAge2 = karim.age.bind(rahim, 2021);
rahimAge2("Hello World 2");

rahimAge3 = karim.age.bind(rahim);
rahimAge3(2020, "Hello World 3");
rahimAge3(2050, "Hello Shawki!");
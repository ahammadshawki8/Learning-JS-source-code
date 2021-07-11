const ahammad = ["Ahammad Shawki", 16, "Student"];
var [fullname, age, job] = ahammad;

console.log(fullname);
console.log(age);
console.log(job);



const ahammadObj = {
    fullname: "Ahammad Shawki",
    age: 20,
    job: "Computer Scientist"
};

var {fullname, age, job} = ahammadObj;

console.log(fullname);
console.log(age);
console.log(job);


var {fullname : myFullname, age : myAge, job: myJob} = ahammadObj;

console.log(myFullname);
console.log(myAge);
console.log(myJob);


var outerObj = {
    innerObj: {
        hiddenObj: {
            treasure: "Diamond"
        }
    }
}

var {innerObj : {hiddenObj : {treasure: chest}}} = outerObj;
console.log(chest);


var outerObj = {
    innerObj: {
        hiddenObj: {
            treasure: ["Diamond", "Gold", "Silver"]
        }
    }
}

var {innerObj : {hiddenObj : {treasure: [t1, t2, t3]}}} = outerObj;
console.log(t1);
console.log(t2);
console.log(t3);
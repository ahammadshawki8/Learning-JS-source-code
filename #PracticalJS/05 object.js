var ahammad = new Object();
ahammad["name"] = "Ahammad Shawki";
ahammad.roll = 5130;

console.log(ahammad);
console.log(ahammad["roll"]);

var rahim = {
    fullName: "Rahim Mia",
    age: 21,
    address: "Dhaka",
    job: "Farmer"
};

console.log(rahim.job);

rahim.job = "Student";
console.log(rahim.job);

rahim.greet = function() {
    console.log(`Hello there, my name is ${rahim.fullName}.`)
};

rahim.greet();
rahim.fullName = "Rahim Ali";
rahim.greet();

for (let key in rahim) {
    console.log(key, "-->" , rahim[key]);
}

console.log(Object.keys(rahim));
console.log(Object.values(rahim));

var myClass = {
    id: "10-SCI-C",
    students: [
        {
            name: "Ahammad",
            collegeNo: 5130
        },
        {
            name: "Hasnine",
            collegeNo: 5150
        },
        {
            name: "Arko",
            collegeNo: 5162
        },
        {
            name: "Shahid",
            collegeNo: 5129
        },
    ]
};

console.log(myClass);

console.log(myClass.students[0].collegeNo);


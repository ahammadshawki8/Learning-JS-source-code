var Person = function(fullname, age, job) {
    this.fullname = fullname;
    this.age = age;
    this.job = job;
}

// Prototype Based Inheritance
Person.prototype.introduce = function(greet = "Hello") {
    return `${greet}! My name is ${this.fullname}. I am a ${this.job.toLowerCase()}. Nice to meet you :)`;
}

Person.prototype.interest = "Football";

var p1 = new Person("Ahammad", 16, "Student");
var p2 = new Person("Cristiano", 37, "Footballer");

console.log(p1.fullname);
console.log(p2.age);
console.log(p1.introduce());
console.log(p2.introduce("Hola"));
console.log(p1.interest);


// constructor inheritance
var Teacher = function(fullname, age, subject) {
    Person.call(this, fullname, age, "Teacher");
    this.subject = subject;
}

var t1 = new Teacher("Sadik", 67, "Mathematics");

console.log(t1);
console.log(t1.fullname);
console.log(t1.age);
console.log(t1.job);
console.log(t1.subject);
// console.log(t1.introduce());
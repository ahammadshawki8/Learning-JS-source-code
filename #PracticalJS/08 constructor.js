var Person = function(fullname, age, job) {
    this.fullname = fullname;
    this.age = age;
    this.job = job;
    this.introduce = function(greet = "Hello") {
        return `${greet}! My name is ${this.fullname}. I am a ${this.job.toLowerCase()}. Nice to meet you :)`;
    }
}

var p1 = new Person("Ahammad", 16, "Student");
var p2 = new Person("Cristiano", 37, "Footballer");

console.log(p1.fullname);
console.log(p2.age);
console.log(p1.introduce());
console.log(p2.introduce("Hola"));

console.log(p2);
console.log(p1.__proto__ === Person.prototype);
class Person {
    constructor(fullName, age, job) {
        this.fullName = fullName;
        this.age = age;
        this.job = job;
    }

    introduce() {
        console.log(`Hello there! My name is ${this.fullName} and I am a ${this.job.toLowerCase()}.`)
    }

    static special(){
        console.log("You can access this only from the class!")
    }
}

p1 = new Person("Ahammad Shawki", 16, "Student");
console.log(p1.fullName);
console.log(p1.age);
console.log(p1.job);
p1.introduce();

Person.special();
// p1.special();


class Employee extends Person {
    constructor(fullName, age, job, salary){
        super(fullName, age, job);
        this.salary = salary;
    }

    increment(n) {
        this.salary += this.salary * (n/100);
    }
}

e1 = new Employee("Rakib Hasan", 32, "Coder", 2500);
console.log(e1.fullName);
console.log(e1.fullName);
console.log(e1.age);
console.log(e1.job);
console.log(e1.salary);
e1.introduce();

Employee.special();
e1.increment(10);
console.log(e1.salary);
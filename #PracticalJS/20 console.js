let i = 1;
console.assert(i===1, "Error");
console.assert(i===2, "Error");
console.clear();

let myCount = "Goal";
console.count(myCount);
console.count(myCount);
console.count(myCount);
console.count(myCount);
console.count(myCount);
console.count(myCount);

console.error("This is an error");
console.info("A random information");
console.warn("An warning");
console.dir(console);

console.group("Parent Group");
console.log("Hello");
console.error("ERROR");
console.group("Nested Child Group");
console.log("Hello");
console.error("ERROR");
console.groupEnd();
console.log("Hello");
console.error("ERROR");
console.groupEnd();

console.log("%c I am Ahammad Shawki ", "font-size:50px; background-color:#ea4f4f; color:#fff;");
console.log("I am Ahammad %c Shawki ", "font-size:50px; background-color:#ea4f4f; color:#fff;");

const arr = ["Num 1", "Num 2", "Num 3", "Num 4", "Num 5"];
console.table(arr);

const obj = {
    fullname: "Ahammad Shawki",
    age: 16,
    job: "Student"
}
console.table(obj);



console.time()
var j = 9
while (true) {
    j++;
    if (j > 1000) {
        break;
    }
}
console.timeEnd();
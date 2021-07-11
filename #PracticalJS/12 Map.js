const ahammad = new Map();
ahammad.set("fullName", "Ahammad Shawki");
ahammad.set("age", 16);
ahammad.set("job", "Student");

console.log(ahammad);
console.log(ahammad.size);

console.log(ahammad.get("age"));
console.log(ahammad.get("job"));
console.log(ahammad.has("fullName"));
console.log(ahammad.has("swag"));

ahammad.delete("job");
console.log(ahammad);

ahammad.set("age", 100);
console.log(ahammad);

ahammad.clear();
console.log(ahammad);

ahammad.set("hobby", "Coding");
ahammad.set("color", "Grey");

ahammad.forEach((key, value) => {
    console.log(`
    Key: ${key}
    Value: ${value}
    `);
})

for (let [key, value] of ahammad.entries()) {
    console.log(key);
    console.log(value);
}
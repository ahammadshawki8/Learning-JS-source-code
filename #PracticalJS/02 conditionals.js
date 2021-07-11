var myAge = 100;

if (myAge < 0) {
    console.log("Invalid Age :(");
} 

else if ((myAge >= 0) && (myAge <=10)) {
    console.log("You are a child!");    
}

else if ((myAge === 100) || (myAge <=19)) {
    console.log("You are a teen-ager!");
}

else {
    console.log("You are an adult!");
}

// This is not an ideal real case scenario, but we can add conditionals like this



// nesting
var myNum = 10;

if (myNum > 0) {
    console.log("This is a positive number");
    if (myNum > 10) {
        console.log("It's value is bigger than 10");
    }
    else {
        console.log("It's value is somewhere between 1 - 10");
    }    
} 
else {
    console.log("This is not a positive number");
}


// Switch statement
var today = "Saturday";

switch (today) {
    case "Saturday":
        console.log("Today is Saturday");
        break;
    
    case "Sunday":
        console.log("Today is Sunday");
        break;
    
    case "Monday":
        console.log("Today is Monday");
        break;

    case "Tuesday":
        console.log("Today is Tuesday");
        break;

    case "Wednesday":
        console.log("Today is Wednesday");
        break;

    case "Thursday":
        console.log("Today is Thursday");
        break;

    case "Friday":
        console.log("Today is Friday");
        break;

    default:
        console.log("Invalid Day :(");
        break;
}


// using || &&
// as assert
console.log(true || "I am good");
console.log(false || "I am great!");

console.log(true && "I am good");
console.log(false && "I am great!");


let aFunc = () => console.log("Hello");

true || aFunc();
false || aFunc();

true && aFunc();
false && aFunc();



let person = {
    fullName: "Ahammad Shawki"
}

if (person.age) {
    console.log(person.age);
}
else {
    console.log("Age not forund!");
}

// Does the same thing as the if statement
console.log(person.age || "Age not found!")

// new thing
console.log(person.age && `I am ${person.age} years old.`)

// we can implement such behaviours using turnery operators as well.
console.log(person.age ? `I am ${person.age} years old.` : "Age is undefined!")
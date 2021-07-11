console.dir(Date);
console.log(Date.now()); // count s milisecond from 1970 Jan

console.log(Date.parse("28 Dec 2004 00:00:00:00 GMT"));
console.log(Date.UTC(2004, 12, 28, 00, 00, 00, 00));

const myDate = new Date(); // returns current date
console.log(myDate);

const yourDate = new Date(1990, 12, 20);
console.log(yourDate);

const miliDate = new Date(2000000000000);
console.log(miliDate);

console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());

// from 1970
console.log(myDate.getTime());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getUTCFullYear());
console.log(myDate.getYear());
console.log(myDate.getUTCMonth());
console.log(myDate.getUTCDate());
console.log(myDate.getUTCDay());
console.log(myDate.getUTCHours());
console.log(myDate.getUTCMinutes());
console.log(myDate.getUTCSeconds());
console.log(myDate.getUTCMilliseconds());

// Setting
// myDate.setTime();
// myDate.setFullYear();
// myDate.setMonth();
// myDate.setDate();
// myDate.setHours();
// myDate.setMinutes();
// myDate.setSeconds();
// myDate.setMilliseconds();

// myDate.setUTCFullYear();
// myDate.setUTCMonth();
// myDate.setUTCDate();
// myDate.setUTCHours();
// myDate.setUTCMinutes();
// myDate.setUTCSeconds();
// myDate.setUTCMilliseconds();

myDate.setMonth(11);
console.log(myDate);
myDate.setMonth(56);
console.log(myDate);
myDate.setMonth(5);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toUTCString());
console.log(myDate.toISOString());
console.log(myDate.toTimeString());
console.log(myDate.toJSON());

console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleDateString("bn-BD"));
console.log(myDate.toLocaleDateString("bn-BD", {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
}));

// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// Read this {https://stackoverflow.com/questions/61870462/what-is-the-difference-between-tolocalestring-tolocaledatestring-and-tolocalet}

console.log(myDate.valueOf())


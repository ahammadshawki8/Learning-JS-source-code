// for loop

var i = 0;
for (i; i < 10; i++) {
    console.log(i);
}


// do while loop
do {
    console.log(i);
    i++;
} while (i < 20);


// while loop
while (i < 30) {
    console.log(i);
    i++;
}


// break
while (true) {
    console.log(i);
    i++;

    if (i === 40) {
        break;
    }
}


// continue
for (i; i < 50; i++) {
    if (i === 45) {
        console.log("Gotcha!");
        continue;
    }
    console.log(i);
}
try {
    console.ami("This is an error");
}
catch(err) { //except
    console.log("Sorry something went wrong :(")
    console.log(err);
}
finally {
    console.log("I will always run no matter what happens");
}



// let age = 19;
// if (age < 20) {
//     throw "You are too Young"; //raise
// }
// else {
//     console.log('passed');
// }


let ageX = 19;
if (ageX < 20) {
    throw new Error("You are too Young"); //raise
}
else {
    console.log('passed');
}
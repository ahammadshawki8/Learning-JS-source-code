// creating a custom Promise function
const aPromise = (control) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout( () => {
                if (control) {
                    resolve();
                }
                else {
                    reject();
                }
            }, 3000)
        }
    )
}

console.log(aPromise(true));
aPromise(true).then(() => console.log("Success!"));
aPromise(false).then(() => console.log("Success!")).catch(() => console.log("Failure!"));



// adding data in the promise function
const bPromise = (control) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout( () => {
                if (control) {
                    resolve("Success!");
                }
                else {
                    reject("Failure");
                }
            }, 3000)
        }
    )
}

bPromise(true).then((data) => console.log(data));
bPromise(false).then((data) => console.log(data)).catch((data) => console.log(data));



// Handling multiple promise
const promise1 = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve("Promise 1 resolved");
            }
            else {
                reject("Promise 1 rejected");
            }
        }, 5000)
    }
)

const promise2 = Promise.resolve("This can also be passed in Promise.all");
const promise3 = 10; // We can also pass this
const promise4 = new Promise (
    (resolve) => setTimeout(resolve, 2000, "I can pass the arguement here as well") 
    // we can only use resolve/reject
)

console.log(Promise.all([promise1, promise2, promise3, promise4])); // this is also a promise
Promise.all([promise1, promise2, promise3, promise4]).then((dataArray) => console.log(dataArray));
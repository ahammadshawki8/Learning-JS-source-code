// async-await
const cPromise = new Promise(
    (resolve, reject) => {
        setTimeout( () => {
            if (true) {
                resolve("Success!");
            }
            else {
                reject("Failure");
            }
        }, 3000)
    }
)

const promiseHandle = async () => {
    const data = await cPromise; // await auto runs
    console.log(data);
    console.log("After Handler");
}

promiseHandle();



// If promise got rejected
const dPromise = new Promise(
    (resolve, reject) => {
        setTimeout( () => {
            if (false) {
                resolve("Success!");
            }
            else {
                reject("Failure");
            }
        }, 3000)
    }
)

const promiseHandle2 = async () => {
    try {
        const data = await dPromise;
        console.log(data);
    }
    catch(err) {
        console.log(err)
    }
    console.log("After Handler");
}

promiseHandle2();



// handle multiple promises with async-await
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

const promise2 = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve("Promise 2 resolved");
            }
            else {
                reject("Promise 2 rejected");
            }
        }, 5000)
    }
)

const handleMultiplePromise = async () => {
    const data = await Promise.all([promise1, promise2]);
    console.log(data);
}

handleMultiplePromise();



// nested situations
const getMyName = new Promise(
    (resolve) => {
        setTimeout(() => {
            resolve("Ahammad");
        }, 3000)
    }
)

const getMyAge = (myName) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                if (myName === "Ahammad") {
                    resolve(16);
                }
                else {
                    reject("Age Not Found :(");
                }
            },3000)
        }
    )
}

getMyName.then((myName) => {
    getMyAge(myName).then((myAge) => {
        console.log(`${myName} is ${myAge} years old.`);
    })
})



// handling them using async-await
const getMyInfo = async () => {
    var myName = await getMyName;
    var myAge = await getMyAge(myName);
    console.log(`${myName} is ${myAge} years old.`);
}

getMyInfo();
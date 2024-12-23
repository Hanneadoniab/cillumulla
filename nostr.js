function anotherAsyncFunction() {
    return new Promise((resolve, reject) => {
        let success = false; // Simulating some condition
        if (success) {
            resolve("Operation was successful!");
        } else {
            reject(new Error("Operation failed due to some reason"));
        }
    });
}

anotherAsyncFunction()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error.message); // "Operation failed due to some reason"
    });

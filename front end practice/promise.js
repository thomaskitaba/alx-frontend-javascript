// const a = 1;
const p1 = new Promise(function (resolve, reject) { resolve("data")});
p1.then(function(result){console.log("SUCCESS " + result)});

const p2 = new Promise ((resolve, reject) => { reject("rejected P2"); });
p2.then((result) => {console.log("SUCCESS: " + result)}).catch((error) => {console.log("Error: ", error)});

//to execute both promises
// promise([promise1, promise2, ...]).then((message) => {console.log("FINAL MESSAGE: ", message)});
Promise.race([
    p1,
    p2
]).then((message) => {console.log("FINAL MESSAGE: " + message)}).catch((error)=>{console.log("FINAL ERROR: " + error)});
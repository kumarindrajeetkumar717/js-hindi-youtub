function createPromise() {
    return new Promise(function exec(resolve, reject){
    //     your code here
        
    setTimeout(function f(){
        console.log("time done");
        resolve(done);
    },3000);
    })

}

console.log("start");
let x = createPromise()
console.log("got a new promise");
x.then(function f(){
    console.log("promise done");length

});

console.log("end");
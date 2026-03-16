// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans= two() + one();
//     console.log(ans);
// }

// three();

//javascript  is a single threaded language, it can only execute one task at a time. 
setTimeout(()=>{
    console.log("just do it");
},2000);

setTimeout(()=>{
    console.log("just do it again");
},2000);
console.log("hello world");
//callback functions are functions that are passed as arguments to other functions and are executed after the completion of the parent function.
//browser c++ is multithreaded, it has a separate thread for handling the UI, another thread for handling the JavaScript code, and another thread for handling the network requests.
//they are executed in the order they are called, but the callback functions are executed after the completion of the parent function.
//synchronous code is executed in the order it is called, while asynchronous code is executed after the completion of the parent function.
//synchronous code is blocking, while asynchronous code is non-blocking.
//javascript is synchronous, can act as asynchronous with the help of callback functions, promises, and async/await.

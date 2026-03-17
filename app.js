// let student={
//     name: "shradha",
//     age:23,
//     marks:94.4,
//     city:"Delhi"
//  };
// let student2=["shradha" , 23, 94.4];
// const item={
//     price: 100.99,
//     discount:50,
//     colors:["red","pink"]
// }
// const obj={
//     1:"a",
//     2: "b",
//     true: "c",
//     null:"d",
//     undefined:"e"
// };

//objects of object
// 

// also array of objects is possible
// const classInfo=[
//     { name: "aman", grade:"A+" , city:"Delhi"},
//     {name: "shradha" , grade:"A" , city:"Pune"},
//     {name: "karan" , grade:"O", city:"Mumbai"}
// ]
// const max=prompt("enter the max number");
// // console.log(max);
// const random=Math.floor(Math.random()* max)+1;
// // console.log(random);
// let guess=prompt("guess the number");
// while(true){
//     if(guess=="quit"){
//         console.log("user quit");
//         break;
//     }

//     else if(guess==random){
//         console.log("you are right!! Congrats!!, the number is ",random);
//         break;
//     }
//     else if(guess< random){
//         guess=prompt("your guess was too small , enter a bigger number ")
//     }
//     else if(guess> random){
//         guess=prompt("your guess was too large , guess a smaller number.")
//     }
// else{
//     prompt(("your guess was wrong. please try again!!"));
// }
// }


h1=document.querySelector("h1");

function changeColor(color, delay , nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange){
            nextColorChange();
        }; 
    }, delay);
}

//callback hell is a situation where we have multiple nested callback functions, which makes the code difficult to read and maintain.
//  It is also known as "pyramid of doom" because of the shape of the code.
//  It can be avoided by using promises or async/await.
// changeColor("red", 1000 , ()=>{
//     changeColor("orange", 1000 ,()=>{
//         changeColor("green", 1000 , ()=>{
//             changeColor("yellow", 1000 , ()=>{
//                changeColor("blue", 1000);
//             });
//         });
//     });
// });
//callback nesting ->callback hell

//promises: represents the eventual completion or failure of an asynchronous operation and its resulting value.

// function saveToDatabase(data, success , failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//      if(internetSpeed>4){
//         success();
       
//      }
//      else{
//         failure();
//      }
// }

saveToDatabase("apna college",()=>{
    console.log("success: your data was saved. ");
    saveToDatabase("hello world",()=>{
        console.log("success2: data2 saved.")
        saveToDatabase("shraddha",()=>{
            console.log("success3: data saved.");
        }, ()=>{
            console.log("failure3: weak connection");
        })
    }, ()=>{
        console.log("failure2 : weak connection.");
    })
},()=>{
console.log("failure: weak connection. data not saved.");
}); 
//promises object represents the eventual completion (or failure) of an asynchronous operation
//  and its result value. they resolve(success) and reject(failure).

function saveToDatabase(data){

    return new Promise((resolve, reject)){
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            success("data was saved.");
        }else{
            failure("failure, weak connection.");
        }
    }
}

saveToDatabase("apna college");
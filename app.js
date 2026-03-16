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

changeColor("red", 1000 , ()=>{
    changeColor("orange", 1000 ,()=>{
        changeColor("green", 1000 );
    });
});

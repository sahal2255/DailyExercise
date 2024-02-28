// const promise = new Promise((resolve,reject)=>{
//     var a =10
//     if(a===10){
//         resolve('Hello')
//     }
//     else{
//         reject('Error')
//     }
// })
// promise.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

const { error, log } = require("console");
const { resolve } = require("path");

// const { log } = require("console");








// let counting =0
// function one(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('Hello')
//         }, 2000);
//     })
// }
// function count(){
//     if(counting<10){
//        one()
//        .then(result=>{
//         console.log(result);
//         counting++;
//         count()
//        })
//        .catch(error =>{
//         console.log(error);
//        })
//     }
// }
// count()



// function main(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Hello')
//         })
//     })
// }
// main().then(result =>{
//     console.log(result);
// })
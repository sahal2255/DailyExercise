// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('first promise');
//     },2000)
// })
// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('second promise');
//     }, 1000);
// })
// // Promise.all([promise1,promise2]).then((resolve)=>{
// //     console.log(resolve[0]);
// //     console.log(resolve[1]);
// // })
// // Promise.race([promise1,promise2]).then((resolve)=>{
// //     console.log(resolve);
    
// // })
// Promise.any([promise1,promise2]).then((value)=>{
//     console.log(value);
// })







// function one(func){
//     console.log('This is higher-order-function');
//     func()
// }
// function callback(){
//     console.log('call back');
// }
// one(callback)

// const number = [1,2,3,4]
// number.forEach(function(number){
//     console.log(number);
// })








// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'Promise 1 resolved');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, 'Promise 2 resolved');
//   });
  
//   Promise.race([promise1, promise2])
//     .then((value) => {
//       console.log(value); // This will log 'Promise 1 resolved'
//     })
//     .catch((error) => {
//       console.error(error); // Won't be called
//     });
  



// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'Promise 1 rejected');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, 'Promise 2 resolved');
//   });
  
//   Promise.race([promise1, promise2])
//     .then((value) => {
//       console.log(value); // Won't be called
//     })
//     .catch((error) => {
//       console.error(error); // This will log 'Promise 1 rejected'
//     });
  



// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'Promise 1 rejected');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 200, 'Promise 2 rejected');
//   });
  
//   Promise.any([promise1, promise2])
//     .then((value) => {
//       console.log(value); 
//     })
//     .catch((error) => {
//       console.error(error); 
//     });
  


// function higher(fun){
//     console.log('higher');
//     fun()
// }
// function child(){
//     console.log('callback');
// }
// higher(child)

// var a=15
// function sum(number){
//     console.log(a+10);
//     number()
// }
// function parent(){
//     console.log('this is result');
// }
// sum(parent)




// let i=0
// function one(){
//     for( i=0;i<5;i++){
//         setTimeout(()=>{
//             console.log(i);
//         },i*1000)
//     }
// }
// one()



var a=10
function one(fun){
    console.log(a+5);
    fun()
}
function cal(){
    console.log('result');
}
one(cal)

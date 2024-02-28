// const promise= new Promise((resolve,reject)=>{
//     let x=10
//     if(x===10){
//         resolve ('Success')
//     }
//     else{
//         reject ('failed')
//     }
// })
// promise.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error)
// })



// function one(){
//     console.log('started');
// }
// async function two(){
//     console.log('pending');
//     const result = await one()
//     console.log('success');
// }
// two()


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("I am done");
//     }, 3000);
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("I am also done");
//     }, 2000);
//   });
  
//   promise1.then((result) => {
//     console.log(result); 
//     return promise2;
//   }).then((result) => {
//     console.log(result); 
//   });




// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Something went wrong"));
//     }, 3000);
//   });
  
//   promise.then((result) => {
//     console.log(result); 
//   }).catch((error) => {
//     console.log(error.message); 
//   });



// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("I am done");
//     }, 3000);
//   });
  
//   promise.then((result) => {
//     console.log(result); 
//   });




// const fs = require('fs');

// // Define a function to read a file asynchronously and return a promise
// function readFileAsync(filename) {
//     return new Promise((resolve, reject) => {
//         // Read the file asynchronously
//         fs.readFile(filename, 'utf8', (err, data) => {
//             if (err) {
//                 // If there is an error, reject the promise
//                 reject(err);
//             } else {
//                 // If the file is successfully read, resolve the promise with the file contents
//                 resolve(data);
//             }
//         });
//     });
// }

// // Usage example
// const filename = 'example.txt'; // Specify the file name you want to read

// // Call the readFileAsync function to read the file asynchronously
// readFileAsync(filename)
//     .then(data => {
//         console.log('File contents:', data); // Print the file contents if the promise resolves
//     })
//     .catch(err => {
//         console.error('Error reading file:', err); // Print an error message if the promise rejects
//     });




const fs = require('fs');
function readFileAsync(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
             resolve(data);
            }
        });
    });
}
const filename = 'example.txt'; 
readFileAsync(filename)
    .then(data => {
        const fileContents = data;
        console.log('File contents assigned to variable:', fileContents);
    })
    .catch(err => {
        console.error('Error reading file:', err); 
    });






// let count =0
// function first(){
//     return new Promise((resolve,reject)=>{
//         resolve('Helo')
//     })
    

// }
// first()
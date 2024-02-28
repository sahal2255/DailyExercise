// function duplicate(arr){
//     return arr.concat(arr)
// }
// console.log(duplicate([1,2,3,4,5]));



function isPrime(n){
    if(n<=1){
        return false;
    }
    for (var i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            return false
        }
    }
    return true;
}
console.log(isPrime(7));

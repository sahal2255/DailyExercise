// function take(arr,n){
//     
//     return arr.slice(0,n)
// }
// console.log(take([1,2,3,4,5],3));




function getGrade(s1,s2,s3){
    const average=(s1+s2+s3)/3
    if (average>=90 && average<=100){
        return 'A';
    } else if (average >= 80 && average < 90) {
        return 'B';
    } else if (average >= 70 && average < 80) {
        return 'C';
    } else if (average >= 60 && average < 70) {
        return 'D';
    } else {
        return 'F';
    }
}
console.log(getGrade(90, 95, 88));
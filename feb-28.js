// function to find the largest and smallest numbers in the array. 



var a = [10,2,1,5,3,7,6,9,4]

function finding(){
    const min=Math.min(...a)
    const max=Math.max(...a)

    return [min,max]
}
console.log(finding());


// Implement a function to remove duplicates from an array. 

function remove(arr){
    const dupli=new Set(arr)
    // return dupli
    function sor(a,b){
        return a-b
    }
    return sor()
}
console.log(remove([1,2,1,2,3,5,4,5,6,4]));
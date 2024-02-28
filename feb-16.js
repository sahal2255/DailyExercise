function one(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Hello')
        },2000)
    })
}
one().then(result=>{
    console.log(result);
})
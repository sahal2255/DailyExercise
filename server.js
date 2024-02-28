const http = require('http')
const fs = require('fs')

const server =http.createServer((req,res)=>{
    if(req.url ==='/'){
        // res.writeHead({'Content-Type':'text/plain'})
        res.end('HomePage')
    }   
    if(req.url ==='/about'){
        
        res.end('about page')
    }if(req.url==='/text'){
        fs.readFileSync('./QSheet1.txt')
    }

})
server.listen(3112,()=>{
    console.log('connected');
})
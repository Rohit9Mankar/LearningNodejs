const http=require('http');

const server=http.createServer((req,res)=>{
    console.log('Rohit');
})

server.listen(4000);
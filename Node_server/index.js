const riad = require('http');
const port = 3000;
const hostName = '127.0.0.1';

// riad.createServer((req ,res)=>{
//     res.end("Hello I am your first server");
// });

const myServer = riad.createServer((req , res)=>{
    res.end("Hello , I am your first server");
});

myServer.listen(port , hostName , ()=>{
    console.log(`server is running succesfully at http://${hostName}:${port}`);
});
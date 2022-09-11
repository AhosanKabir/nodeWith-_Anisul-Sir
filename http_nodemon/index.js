const http = require('http');
const file = require("fs");
const port = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    // res.end("Welcome to the new server with nodemon");

    //*! creat a function aikaaj taah ses e kora hoise code tah ke aro easy korar zonno

    const handleReadFile = (statusCode, fileLocation)=>{
        file.readFile(fileLocation,(err , data)=>{
            res.writeHead(statusCode, {"content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    };

    if(req.url === '/'){
        handleReadFile(200 ,"index.html");
    } 
    else if(req.url === '/about'){
        handleReadFile(200 ,"about.html");
    }
    else if(req.url === '/contact'){
        handleReadFile(200 ,"contact.html");
    }
    else{
        handleReadFile(400 ,"error.html");
    }

    //*? first ee evabe venge venge kora hoyesilo 
    // if(req.url === '/'){
    //     file.readFile("index.html",(err , data)=>{
    //         res.writeHead(200, {"content-Type": "text/html"});
    //         res.write(data);
    //         res.end();
    //     })
    // }
    // else if(req.url === '/about'){
    //     file.readFile("about.html",(err , data)=>{
    //         res.writeHead(200, {"content-Type": "text/html"});
    //         res.write(data);
    //         res.end();
    //     })
    // }
    // else if(req.url === '/contact'){
    //     file.readFile("contact.html",(err , data)=>{
    //         res.writeHead(200, {"content-Type": "text/html"});
    //         res.write(data);
    //         res.end();
    //     })
    // }
    // else{
    //     file.readFile("error.html",(err , data)=>{
    //         res.writeHead(404, {"content-Type": "text/html"});
    //         res.write(data);
    //         res.end();
    //     })
    // }

});

server.listen(port , hostName , ()=>{
    console.log(`server is running at http://${hostName}:${port}`);
});
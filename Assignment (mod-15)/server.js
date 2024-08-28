const http = require('http');
const fs = require('fs');
const port = 5500;

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain');
    
    if (req.method === 'GET'){
        if(req.url ==='/'){
            res.write("This is the Home Page");
            res.end();
        }
        if(req.url ==='/about'){
            res.write("This is the About Page");
            res.end();
        }
        if(req.url ==='/contact'){
            res.write("This is the Contact Page");
            res.end();
        }

        if(req.url === '/file-write'){
            fs.writeFile('demo.txt',"hello world",(error)=>{
                if(error) res.end("File Writing Error!");
                else res.end("File Writing Successful!");
            });
        }
    }
});

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});




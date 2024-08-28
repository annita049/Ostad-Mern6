const express = require('express');
const fs = require('fs');
const app = express();

const port = 5500;

app.get('/',(req,res)=>{
    res.write("This is the Home Page");
    res.end();
});

app.get('/about',(req,res)=>{
    res.write("This is the About Page");
    res.end();
});

app.get('/contact',(req,res)=>{
    res.write("This is the Contact Page");
    res.end();
});

app.get('/file-write',(req,res)=>{
    fs.writeFile('demo.txt', "hello world", (error)=>{
        if (error) res.write("File Writing Error!");
        else res.write("File Writing Successful!");
        res.end();
    });
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
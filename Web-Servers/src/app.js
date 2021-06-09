//We import express as follows
const express = require('express');

//Since express returns back a function, we use call the express function and store it 
const app = express();

//NodeJS provides us two important variables to access the current directory and file
console.log(__dirname);
console.log(__filename);

//To serve up a request on a particular route, we use the app.get method. It accepts two arguments.
/* app.get('<partial url eg:/help>',(req,res) => {
    //req is the request we receive when a particular url is accessed.
    //res is what we want to send back to the user/ or what the user wants to see

    //we send a response by
    res.send("Hello this is express")
}) */

app.get('',(req,res)=>{
    res.send('<h1>Hello this is my first express node server</h1>');
})

//let us set up another request handler called help.
app.get('/help',(req,res)=>{
    res.send('<h1>This is the help page</h1>');
})

app.get('/about',(req,res)=>{
    res.send('<h1>This is the about page</h1>');
})

app.get('/weather',(req,res)=>{
    res.send({
        location: 'Bengaluru',
        temperature: '27deg celsius'
    })
})


//app.listen(port, callback) is used to start the server. The callback is optional and is used to perform a task once the server is up and running.
app.listen(3000, ()=>{
    console.log("Server is running at port 3000");
})
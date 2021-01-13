const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) //serving static files
app.use(express.urlencoded())

// PUG SPECIFIV STUFF
app.set('view engine', 'pug') //serving static files
app.set('views', path.join(__dirname, 'views')) // Set the view directory

// END POINTS 
app.get('/', (req, res)=>{
    const con = "This is the best content on internet so far so use it wisely"
    const params = {'title': 'pubg is the best game', 'content': con}
    res.status(200).render('index.pug', params)
})

app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}, More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submited successfully'}
    res.status(200).render('index.pug', params)
})

// START THE SERVER 
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})
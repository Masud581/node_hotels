const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // store the json data in the body




// import the router files
const personRoute = require('./routes/personRoute');
const menuRoute = require('./routes/menuRoute');

// use the router files
app.use('/person',personRoute);
app.use('/menu',menuRoute);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})


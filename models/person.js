const { add } = require('lodash');
const mongoose = require('mongoose');

//define the schema for the person collection
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        requierd: true
    },
    age:{
        type: Number
    },
    work:{
        type: String,
        enum : ['chef','waiter','manager'],
        requierd: true
    },
    mobile:{
        type: Number,
        requierd: true
    },
    email:{
        type: String,
        requierd: true,
        unique: true
    },
    
    address:{
        type: String,
        requierd: true
    },
    salary:{
        type: Number,
        requierd: true
    },
        

})

//export the schema
const person = mongoose.model('person', personSchema);
module.exports = person;
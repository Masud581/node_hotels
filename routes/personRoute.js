const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// post method to add the person details
router.post('/', async(req, res) => {
    try{
        const data = req.body;
        const person = new Person(data);
        const response = await person.save();
        console.log('Person created successfully');
        res.status(201).json(response);
        
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
    
});

//get method to get all the person details
router.get('/', async(req, res) => {
    try{
        const person = await Person.find();
        console.log('Person details fetched successfully');
        
        res.status(200).json(person);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

//get method to get the person details based on the work type
router.get('/:workType', async(req, res)=>{
    try {
        const workType =req.params.workType;
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const response = await Person.find({work: workType});
        console.log('respose fetched');
        res.status(200).json(response);
        

    } else{
        res.status(404).json({error: 'Invalid work type'})
        
    }
        
    } 
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

//put method to update the person details based on the id
router.put('/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const data = req.body;
        const response = await Person.findByIdAndUpdate(id,data,{
            new:true,
            runValidators:true
        });

        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }

        console.log('Person details updated successfully');
        res.status(200).json(response);
        
    }

    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
})

//delete method to delete the person details based on the id

router.delete('/:id', async(req, res)=>{ 
    try {
        const id = req.params.id;
        const response = await Person.findByIdAndDelete(id);
        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('Person details deleted successfully');
        res.status(200).json(response);
        
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});




module.exports = router;
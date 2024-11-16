const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');

//post method to add the menu details
router.post('/menu', async(req, res) => {
    try{
        const data = req.body;
        const menuItem = new menu(data);
        const response = await menuItem.save();
        console.log('Menu created successfully');
        res.status(201).json(response);
        
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
    
});



//get method to get the menu details
router.get('/', async(req, res)=>{
    try {
        const response = await menu.find();
        console.log('Menu details fetched successfully');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
})  

//put method to update the menu details based on the id
router.put('/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const data = req.body;
        const response = await menu.findByIdAndUpdate(id, data, {new: true});
        console.log('Menu updated successfully');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
})

//delete method to delete the menu details based on the id
router.delete('/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const response = await menu.findByIdAndDelete(id);
        console.log('Menu deleted successfully');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
})  




module.exports = router;
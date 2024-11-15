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



//get method to get all the menu details
router.get('/', async(req, res) => {
    try{l
        const menuItem = await menu.find();
        console.log('Menu details fetched successfully');
        
        res.status(200).json(menuItem);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;
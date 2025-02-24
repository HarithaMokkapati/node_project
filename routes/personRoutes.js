const express = require('express');
const router = express.Router();

const Person = require('./../models/Person');
//post method

router.post('/',async (req, res) => {
    try{
        const data = req.body //Assume the request body contain person data

        //create a new person model using mongoose model
        const newPerson = new Person(data);
    
        //save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})
//GET method to get the person

router.get('/',async (req, res) => {
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})
//work type

router.get('/:workType',async (req, res) => {
    try{
        const workType = req.params.workType; //extract worktype from the parameter
        if (workType == 'chef'|| workType == 'manager'|| workType == 'worker'){
            const response = await Person.find({work: workType});
            console.log('data fetched');
            res.status(200).json(response);

        }else{
            res.status(404).json({error: 'Invalid work type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})
//update method

router.put('/:id',async (req, res) => {
    try{
        const id = req.params.id //Assume the request body contain id

        //update data through body
        const updatePerson = req.body;
        //finding and updating
        const response = await Person.findByIdAndUpdate(id, updatePerson,{
            new: true, //return the updated document
            runValidators: true //run mongoose validation
        })
        if (!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})
//delete method

router.delete('/:id',async (req, res) => {
    try{
        const personId = req.params.id //Assume the request body contain id

        //finding and delete
        const response = await Person.findByIdAndDelete(personId);
        if (!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data deleted');
        res.status(200).json({message: 'person deleted succesfully'});

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

//comment added for testing purpose only
module.exports = router;
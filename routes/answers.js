const express=require('express');
const router = express.Router();
const {body, validationResult} = require("express-validator");
var fetchuser=require('../middleware/fetchuser');
const Answers=require('../models/Answers');

// ROUTE 1 : Answer a question : POST '/api/answers/add'. Login Required
router.post('/add', fetchuser, [
    body('answer', 'Cannot be empty').exists()
], async(req, res)=> {
    const {question, answer, user}=req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
        const response = new Answers({
            answer,
            question,
            user: req.user.id
        });
        const savedNote = await response.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2 : Fetch Answer of a question. POST '/api/answers/fetch'. Login Required
router.post('/fetch', fetchuser, async(req, res)=> {
    try {
        const {question} = req.body;
        const answer = await Answers.findOne({question});
        if(answer) {
            res.json(answer);
        }
        else {
            res.send("No One Answered!");
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;
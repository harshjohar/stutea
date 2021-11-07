const express = require('express')
const router = express.Router();
const {body, validationResult} = require("express-validator");
var fetchuser = require('../middleware/fetchuser');
const Questions = require('../models/Questions');

// Route 1 : Add a new question : POST "/api/questions/add". Login Required.
router.post('/add', fetchuser, [
    body('tags', 'Cannot be empty').exists(),
    body('question', 'Cannot be empty').exists(),
], async(req, res) => {
    const {question, tags} = req.body;

    // If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
        const query = new Questions({
            question,
            tags,
            user: req.user.id
        });
        const savedNote = await query.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 2 : Fetch questions : GET "/api/questions/fetch". Login Required
router.get("/fetch", fetchuser, async(req, res)=> {
    try {

        const {page} = req.body;

        const questions = await Questions.find(
            {user: {$ne : req.user.id}}
        ).limit(15).skip((page-1)*15);

        questions.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.timestamp) - new Date(a.timestamp);
        });
        res.json(questions);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3 : Fetch user's own questions GET "/api/questions/fetchuser". Login Required
router.get("/fetchuser", fetchuser, async(req, res)=> {
    try {
        const {page}=req.body;
        const user=req.user.id;
        const myQuestions = await Questions.find({user}).limit(15).skip((page-1)*15);

        myQuestions.sort(function(a,b){
            return new Date(b.timestamp) - new Date(a.timestamp);
        });
        res.json(myQuestions);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;
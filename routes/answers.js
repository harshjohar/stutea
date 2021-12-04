const express=require('express');
const router = express.Router();
const {body, validationResult} = require("express-validator");
var fetchuser=require('../middleware/fetchuser');
const Answers=require('../models/Answers');
const Notifications = require('../models/Notifications');
const Questions = require('../models/Questions');

// ROUTE 1 : Answer a question : POST '/api/answers/add'. Login Required
router.post('/add', fetchuser, [
    body('answer', 'Cannot be empty').exists()
], async(req, res)=> {
    const {question, answer, image}=req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
        const response = new Answers({
            answer,
            question,
            user: req.user.id,
            image
        });
        const ques = await Questions.findById(question);
        await Questions.findByIdAndUpdate(question, {
            $set: {
                responded: true
            }
        })
        const user = ques.user;
        const notif = new Notifications({
            user: user,
            recents: ques._id,
            type: "answered"
        })
        await notif.save();
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
            res.send({error: "No One Answered!"});
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3 : Fetch Answers of a particular user. POST '/api/answers/user'. Login Required
router.post('/user', fetchuser, async(req, res)=> {
    try {
        const userid = req.user.id;
        const page = req.body.page;
        const answers = await Answers.find({user:userid}).sort({$natural:-1}).limit(6).skip((page-1)*6);
        const count = answers.length;
        res.json({answers,count});

        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;
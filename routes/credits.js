const express=require('express');
const router = express.Router();
const {body, validationResult} = require("express-validator");
var fetchuser=require('../middleware/fetchuser');
const Answers=require('../models/Answers');
const Credits = require('../models/Credits');

// ROUTE 1 : transaction : POST "/api/credits/transaction". Login Required
router.post('/transaction', fetchuser, [
    body('answer', 'Cannot be empty').exists()
], async(req, res)=> {
    const {question, answer, user}=req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {

        const answer = await Answers.findOne({question});
        if (answer && answer.rating>2)
        {

            const debited = await Credits.updateOne(req.user.id,{
                $set : {
                    credits: rating - 10 
                }
            });

            const credited = await Credits.updateOne(answer.user.id,{
                $set : {
                    credits: rating + 10 
                }
            });
            res.send("credits updated");
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports=router;
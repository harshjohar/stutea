const express=require('express');
const router = express.Router();
const {body, validationResult} = require("express-validator");
var fetchuser=require('../middleware/fetchuser');
const Answers=require('../models/Answers');
const Credits = require('../models/Credits');
const User = require('../models/User');
const Questions = require('../models/Questions');

// ROUTE 1 : transaction : POST "/api/credits/transaction". Login Required
router.post('/transaction', fetchuser,
    async(req, res)=> {
    const {question, answer, user}=req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {

        const answer = await Answers.findOne({"question" : question});
        const aaidee = answer.user;
        const credit = await Credits.findOne({"user" : aaidee});
        
        if (credit==null)
        {
            const initialise = new Credits({
                user : answer.user,
                credits: 1000
            })
            const savedNote = await initialise.save();
            const star = answer.rating;
            if (answer.rating>2)
            {
                const crediti = await Credits.findOne({"user" : aaidee});
                const item = crediti.credits + 100;
                const deduction = await Credits.findOneAndUpdate({"user" : aaidee},{
                    $set : {
                        credits : item
                    }
                })

            }

            else if (answer.rating<3)
            {
                const crediti = await Credits.findOne({"user" : aaidee});
                const item = crediti.credits + 50;
                const deduction = await Credits.findOneAndUpdate({"user" : aaidee},{
                    $set : {
                        credits : item
                    }
                })

            }
            
        }

        else
        {
            const star = answer.rating;
            if (answer.rating>2)
            {
                const item = credit.credits + 100;
                const deduction = await Credits.findOneAndUpdate({"user": aaidee},{
                    $set : {
                        credits : item
                    }
                })

            }

            else if (answer.rating<3)
            {
                const crediti = await Credits.findOne({"user" : aaidee});
                const item = crediti.credits + 50;
                const deduction = await Credits.findOneAndUpdate({"user" : aaidee},{
                    $set : {
                        credits : item
                    }
                })

            }
        }
        const debitee = req.user.id;
        const debit = await Credits.findOne({"user": debitee});
        if (debit==null)
        {
            const initialiser = new Credits({
                user : req.user.id,
                credits : 1000
            })
            const saved  = await initialiser.save();
            if (answer.rating>2)
            {

                const debiti = await Credits.findOne({"user": debitee});
                const item2 = debiti.credits - 50;
                const less = await Credits.findOneAndUpdate({"user": debitee},{
                    $set : {
                        credits: item2
                    }
                })
            }
        }

        else
        {
            if (answer.rating>2)
            {

                const debiti = await Credits.findOne({"user": debitee});
                const item2 = debiti.credits - 50;
                const less = await Credits.findOneAndUpdate({"user": debitee},{
                    $set : {
                        credits: item2
                    }
                })
            }
        }
        const final = await Credits.findOne({"user": debitee});
        if (answer.rating<=2)
        {
            const answernotaccepted = await Questions.findOneAndUpdate({"_id": question},{
                $set : {
                    responded : false
                }
            })
            const deleteanswer = await Answers.deleteOne({"question" : question});
        }
        res.json(final);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2 : Get the credits of a user. GET "/api/credits/get". Login Required
router.get('/get', fetchuser, async(req, res)=> {
    try {
        const userId = req.user.id;
        const user = await Credits.findOne({user: userId});
        if(user) {
            return res.json({credits: user.credits});
        } else {
            const credits = new Credits({
                user: userId
            })
            await credits.save();
            const newUser = await Credits.findOne({user: userId});
            return res.json({credits: newUser.credits});
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports=router;
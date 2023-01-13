const express = require('express')
const router = express.Router();
const {body, validationResult} = require("express-validator");
var fetchuser = require('../middleware/fetchuser');
const User = require('../models/User');
const Answers = require('../models/Answers');
const Questions = require("../models/Questions");

// ROUTE: feedback : PUT "/api/feedback/rating". Login Required
router.put('/rating', fetchuser,
    async(req, res) => {
    const {stars,question} = req.body;

    // If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
        const query = await Answers.findOneAndUpdate({"question": question},{
                        $set : {
                            rating : stars
                        }
                    });

        

        if (query)
        {
            
            if (stars>2)
            {
                const correctanswer = await Questions.findOneAndUpdate({"_id": question},{
                    $set : {
                        answered : true
                    }
                })
                const incre = await User.findOne({"_id": query.user});
                const increm = incre.AnswersAccepted+1
                const answerincrement = await User.findOneAndUpdate({"_id": query.user},{
                    $set : {
                        AnswersAccepted : increm
                    }
                })

                const avg = ((incre.AverageRating)*(increm - 1) + stars)/increm;
                const avgrating = await User.findOneAndUpdate({"_id": query.user},{
                    $set : {
                        AverageRating : avg
                    }
                })
            }
            res.send({msg: "Thanks for the feedback"})
        }

        else
        {
            res.send({msg: "question not found"})
        }
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports=router;
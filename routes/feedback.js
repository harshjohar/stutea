const express = require('express')
const router = express.Router();
const {body, validationResult} = require("express-validator");
var fetchuser = require('../middleware/fetchuser');
const User = require('../models/User');
const Answers = require('../models/Answers');

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
        const query = await Answers.findOneAndUpdate({question},{
                        $set : {
                            rating : stars
                        }
                    });

        if (query)
        {
            res.send("Thanks for the feedback")
        }

        else
        {
            res.send("question not found")
        }
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports=router;
const express = require('express')
const router = express.Router();
const {body, validationResult} = require("express-validator");
var fetchuser = require('../middleware/fetchuser');
const User = require('../models/User');
const Answers = require('../models/Answers');

// ROUTE: feedback : POST "/api/answers/feedback". Login Required
router.post('/feedback', fetchuser, [
    body('rating', 'Cannot be empty').exists(),
], async(req, res) => {
    const {rating} = req.body;

    // If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
        const query = new Answers({
            rating,
            user: req.user.id
        });
        const savedNote = await query.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports=router;
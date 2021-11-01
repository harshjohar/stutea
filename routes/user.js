const express = require('express')
const router = express.Router();
const {body, validationResult} = require("express-validator");
var fetchuser = require('../middleware/fetchuser');
const User = require('../models/User');

// Route 1 : Get the user data from id : GET "/api/users/". Login required
router.get('/id/:id', fetchuser, async(req, res)=> {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
});

// Route 2 : Get the user data from username : GET "api/users/". Login Required
router.get("/username/:username", fetchuser, async(req, res)=> {
    try {
        const user = await User.findOne({
            username : req.params.username
        });
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})
module.exports = router;
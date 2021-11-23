const express = require('express')
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const User = require('../models/User');

// Route 1 : Get the user data from id : GET "/api/user/id/:id". Login required
router.get('/id/:id', fetchuser, async(req, res)=> {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
});

// Route 2 : Get the user data from username : GET "/api/user/username/:username". Login Required
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

// Route 3 : Update the user settings : PUT "/api/user/settings". Login Required
router.put('/settings', fetchuser, async(req, res)=> {
    try {
        const {first, last, dp, city} = req.body;

        const newUser = {};
        if(first) {
            newUser.first = first
        }
        if(last) {
            newUser.last =last
        }
        if(dp) {
            newUser.dp = dp
        }
        if(city) {
            newUser.city = city
        }

        // var user = await User.findById(req.user.id);
        const response = await User.findByIdAndUpdate(req.user.id, {$set: newUser}, {new: true})
        res.json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;
const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const Notifications = require('../models/Notifications');
const router = express.Router();

// ROUTE 1 : get all notifications GET. '/api/notifications/get' Login required
router.get("/get", fetchuser, async(req, res)=> {
    try {
        const userId = req.user.id;
        const user = await Notifications.find({
            user: userId
        })
        if(user) {
            return res.json({notification: user})
        } else {
            return res.send({error: "No notifications"})
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
var fetchuser = require("../middleware/fetchuser");
const shop = require("../models/shop");
const Credits = require("../models/Credits");
const Shop = require("../models/shop");



// Route 1 : Add a new item : POST "/api/shop/additem". Login Required.
router.post(
    "/additem", fetchuser,
    
    async (req, res) => {
        const {name,cost} = req.body;

        // If there are errors, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const query = new shop({
                name,
                credits : cost
            })
            const savedNote = await query.save();
            res.json(savedNote);
            
            
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);
// Route 2 : Add a new item : POST "/api/shop/transaction". Login Required.
router.put(
    "/transaction", fetchuser,
    
    async (req, res) => {
        const {name,user} = req.body;

        // If there are errors, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const shopper = req.user.id;
            const decreas = await Credits.findOne({"user": shopper});
            const item = await Shop.findOne({"name": name});
            const decreased  = decreas.credits - item.credits;
            if (decreased>=0)
            {

                const decrease = await Credits.findOneAndUpdate({"user":shopper},
                {
                    $set : {
                        credits: decreased
                    }
                })
                
                res.send("transaction completed")
            }
            else
            {
                res.send("Not enough credits")
            }
            
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);


module.exports = router;

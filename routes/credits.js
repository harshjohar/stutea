const express = require('express')
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const User = require('../models/User');
const Credits = require('../models/Credits');

// ROUTE 1 : transaction : POST "/api/credits/transaction". Login Required
router.post("/transaction", fetchuser, (req, res)=> {
    
})


module.exports=router;
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const {body, validationResult} = require('express-validator');
var jwt = require('jsonwebtoken');

// to be added in a .env file
const JWT_SECRET = "hihihihihihihihihi"

// ROUTE 1 : create a User using : POST "/api/auth/register". No login required
router.post('/register', [
    body("email", "Enter a valid email").isEmail(),

    // Checks TODO
    body("username", "Valid username").isLength({min: 5, max:20}),
    body("password", "Valid password").isLength({min: 5}),

], async(req, res)=> {
    let success = false;
    // If there are errors, return bad request with errors
    
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array()});
    }

    try {
        // Check whether the user with this email exists already
        let user = await User.findOne({
            email: req.body.email
        });
        if(user) {
            return res.status(400).json({
                success,
                error: "Sorry a user with this email already exists"
            });
        }
    
        // Check whether same username exists
        let username = await User.findOne({
            username: req.body.username
        });
        if(username) {
            return res.status(400).json({
                success,
                error: "Sorry this username is taken"
            })
        }
    
        // password hashing
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
    
        // new user when no duplicate data is there
        user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
            first: req.body.firstname,
            last: req.body.lastname,
            city: req.body.city
        });
    
        const data = {
            user: {
                id: user.id
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({
            success,
            authtoken
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2 : Login a User using : POST "/api/auth/login". No login required
router.post('/login', [
    body('username', 'Username cannot be empty').exists(),
    body("password", "Password cannot be empty").exists()
], async (req, res)=> {
    let success = false;

    // If there are errors, return bad request with errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    // extracting username and password from the body
    const {username, password} = req.body;
    try {
        let user = await User.findOne({username});
        if(!user) {
            return res.status(400).json({
                success,
                error: "Enter the valid Username/Password"
            });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare) {
            return res.status(400).json({
                success,
                error: "Enter the valid Username/Password"
            });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({
            success, 
            authtoken
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 3 : Get logged in user details using : POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser, async (req, res)=>{
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;
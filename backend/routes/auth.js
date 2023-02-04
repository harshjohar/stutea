const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Token = require("../models/Token");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const nodemailer = require("nodemailer");
const crypto = require('crypto');
const sendgridTransport = require("nodemailer-sendgrid-transport");
// to be added in a .env file
const JWT_SECRET = process.env.JWT_SECRET;

// ROUTE 1 : create a User using : POST "/api/auth/register". No login required
router.post(
    "/register",
    [
        body("email", "Enter a valid email").isEmail(),

        // Checks TODO
        body("username", "Username must be between 5-20 characters long").isLength({ min: 5, max: 20 }),
        body("password", "Password must be 5-20 characters long").isLength({ min: 5 }),
    ],
    async (req, res) => {
        let success = false;
        // If there are errors, return bad request with errors

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }

        try {
            // Check whether the user with this email exists already
            let user = await User.findOne({
                email: req.body.email,
            });
            if (user) {
                return res.status(400).json({
                    success,
                    error: "Sorry a user with this email already exists",
                });
            }

            // Check whether same username exists
            let username = await User.findOne({
                username: req.body.username,
            });
            if (username) {
                return res.status(400).json({
                    success,
                    error: "Sorry this username is taken",
                });
            }

            // password hashing
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(req.body.password, salt);

            // new user when no duplicate data is there
            user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPass,
                first: req.body.firstname,
                last: req.body.lastname,
                city: req.body.city,
                QuestionsPosted : 0,
                AnswersAccepted : 0
            });

            user.save(function (err) {
                if (err) {
                    return res.status(500).json({
                        success,
                        error: err.message,
                    });
                }

                // generate token and save
                var token = new Token({
                    _userId: user._id,
                    token: crypto.randomBytes(16).toString("hex"),
                });
                token.save(function (err) {
                    if (err) {
                        return res.status(500).json({
                            success,
                            error: err.message,
                        });
                    }

                    // return res.status(200).json({success: true,message: 'User is created. Welcome to Stutea.'});

                    //send email
                    const transporter = nodemailer.createTransport(
                       {
                        service: 'gmail',
                        auth: {
                            user: process.env.GMAIL_ID,
                            pass: process.env.GMAIL_GENPWD
                        }
                       }
                    );
                    var mailOptions = {
                        from: process.env.GMAIL_ID,
                        to: user.email,
                        subject: 'Account Verification Link',
                        text: 'Hello ' + req.body.username + ',\n\n'+'Please verify your account by clicking the link: \nhttps:\/\/'+'stutea.vercel.app'+'\/confirmation\/'+user.email+'\/'+token.token+'\n\nThank You!\n'
                    };
                    transporter.sendMail(mailOptions, function(err,info) {
                        if(err) {
                            console.log(err);
                            return res.status(500).json({
                                success,
                                error: 'Technical Issue!, Please click on resend for verify your Email.'
                            })
                        }
                        // console.log(info);
                        return res.status(200).json({success: true,message: 'A verification email has been sent to ' + user.email + '. It will be expire after one day. If you not get verification Email click on resend token.'});
                    })
                });
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send({ errors : [{msg: 'Internal Server Error'}]});
        }
    }
);

// ROUTE 2 : Login a User using : POST "/api/auth/login". No login required
router.post(
    "/login",
    [
        body("username", "Username cannot be empty").exists(),
        body("password", "Password cannot be empty").exists(),
    ],
    async (req, res) => {
        let success = false;

        // If there are errors, return bad request with errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // extracting username and password from the body
        const { username, password } = req.body;
        try {
            let user = await User.findOne({ username });
            if (!user) {
                return res.status(400).json({
                    success,
                    error: "Enter the valid Username/Password",
                });
            }

            const passwordCompare = await bcrypt.compare(
                password,
                user.password
            );
            if (!passwordCompare) {
                return res.status(400).json({
                    success,
                    error: "Enter the valid Username/Password",
                });
            }

            if (!user.verified) {
                return res.status(401).json({
                    success,
                    error: "Email is not verified, please click on resend",
                });
            }

            const data = {
                user: {
                    id: user.id,
                },
            };
            const authtoken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({
                success,
                authtoken,
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send({ error : 'Internal Server Error'});
        }
    }
);

// Route 3 : Get logged in user details using : POST "/api/auth/getuser". Login required
router.post("/getuser", fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error : 'Internal Server Error'});
    }
});

module.exports = router;

const Token = require("../models/Token");
const User = require("../models/User");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const sendgridTransport = require("nodemailer-sendgrid-transport");

exports.confirmEmail = function (req, res, next) {
    Token.findOne(
        {
            token: req.params.token,
        },
        function (err, token) {
            // maybe token got expired
            if (!token) {
                res.status(400).send({
                    msg: "Your verification link may have expired, please click on resend for verify your Email.",
                });
            }
            // if token is found, then check valid
            else {
                User.findOne(
                    {
                        _id: token._userId,
                        email: req.params.email,
                    },
                    function (err, user) {
                        // not valid user
                        if (!user) {
                            return res.status(401).send({
                                msg: "We were unable to find a user for this verification. Please SignUp!",
                            });
                        }
                        // user already verified
                        else if (user.verified) {
                            return res.status(200).send({
                                msg: "User has already been verified. Please Login to continue",
                            });
                        }
                        // verify user
                        else {
                            // change verified to true
                            user.verified = true;
                            user.save(function (err) {
                                if (err) {
                                    res.status(500).send({ msg: err.message });
                                }
                                // account verification successful
                                else {
                                    return res.status(200).send({
                                        msg: "Your account is successfully verified, you may now close this tab.",
                                    });
                                }
                            });
                        }
                    }
                );
            }
        }
    );
};

exports.resendEmail = function (req, res, next) {
    User.findOne(
        {
            email: req.body.email,
        },
        function (err, user) {
            if (!user) {
                return res.status(400).send({
                    msg: "We are unable to find a user with that email. Make sure the email is correct",
                });
            } else if (user.verified) {
                return res.status(200).send({
                    msg: "This account has been already verified. Please log in.",
                });
            } else {
                var token = new Token({
                    _userId: user._id,
                    token: crypto.randomBytes(16).toString("hex"),
                });

                token.save(function (err) {
                    if (err) {
                        return res.status(500).send({
                            msg: err.message,
                        });
                    }

                    const transporter = nodemailer.createTransport(
                        sendgridTransport({
                            auth: {
                                api_key: process.env.API_KEY,
                            },
                        })
                    );
                    var mailOptions = {
                        from: "stutea.app@gmail.com",
                        to: user.email,
                        subject: "Account Verification Link",
                        text:
                            "Hello " +
                            req.body.username +
                            ",\n\n" +
                            "Please verify your account by clicking the link: \nhttp://" +
                            "stutea-app.web.app" +
                            "/confirmation/" +
                            user.email +
                            "/" +
                            token.token +
                            "\n\nThank You!\n",
                    };

                    transporter.sendMail(mailOptions, function (err) {
                        if (err) {
                            return res.status(500).json({
                                error: "Technical Issue!, Please click on resend for verify your Email.",
                            });
                        }
                        return res
                            .status(200)
                            .json({
                                success: true,
                                message:
                                    "A verification email has been sent to " +
                                    user.email +
                                    ". It will be expire after one day. If you not get verification Email click on resend token.",
                            });
                    });
                });
            }
        }
    );
};

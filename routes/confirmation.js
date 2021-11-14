const Token = require("../models/Token");
const User = require("../models/User");


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
                            return res
                                .status(401)
                                .send({
                                    msg: "We were unable to find a user for this verification. Please SignUp!",
                                });
                        }
                        // user already verified
                        else if (user.verified) {
                            return res
                                .status(200)
                                .send({
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
                                    return res
                                        .status(200)
                                        .send({
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
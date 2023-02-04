var jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to the req object
    const token = req.header('auth-token');
    if(!token) {
        res.status(401).send({
            error: "Please Authenticate"
        });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        // console.log(data);
        req.user = data.user;
        next(); // go to next function
    } catch (error) {
        res.status(401).send({
            error: "Please Authenticate"
        });
    }
}

module.exports = fetchuser;
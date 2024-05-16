const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authenticateJWT = (req, res, next) => {
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    // console.log(jwtSecretKey,'secret key')
    // console.log(req.header(tokenHeaderKey),'header')
    try {
        console.log(jwtSecretKey,'secret')
        const token = req.header(tokenHeaderKey);
        // console.log(token,'tokennn')
        const verified = jwt.verify(token, jwtSecretKey);
        // console.log(verified,'huh?')
        if (verified) {
            next()
            // return res.send("Successfully Verified");
        } else {
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
  };

module.exports = authenticateJWT
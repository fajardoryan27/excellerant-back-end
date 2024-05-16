const bcrypt = require("bcrypt");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();
const sql = require("mssql");
const config =  require("../database");
sql.connect(config, err => {
    if (err) {
        throw err;
    }
    console.log("Connection Successful!");
  });
exports.generateToken = (req, res) => {
    const email = req.body.email
    const user_password = req.body.user_password
    new sql.Request().query("select * from [User] where email = "+"'"+email+"'", (err, result) => {
     if (err) {
         console.error("Error executing query:", err);
     } else {
        // console.log(result.recordset.length,'record')
        if (result.recordset.length == 0){
            res.status(500)
            res.send('Authentication failed!');
        }
        else{
            const user_id = result.recordset[0]['user_id']
            const storedHashedPassword = result.recordset[0]['user_password']
            bcrypt.compare(user_password, storedHashedPassword, (err, result) => {
                if (err) {
                    // Handle error
                    console.error('Error comparing passwords:', err);
                    return;
                }
            
                if (result) {
                    // Passwords match, authentication successful
                    console.log('Passwords match! User authenticated.');
                    let jwtSecretKey = process.env.JWT_SECRET_KEY;
                    let data = {
                        time: Date(),
                        userId: user_id,
                    }
                    const token = jwt.sign(data, jwtSecretKey,{expiresIn:process.env.TOKEN_EXPIRY});
                    
                    console.log(token,'token')
                    res.send(token);
                } else {
                    // Passwords don't match, authentication failed
                    res.status(500)
                    res.send('Passwords do not match! Authentication failed.');
                    console.log('Passwords do not match! Authentication failed.');
                }
                });
            
        
            
            
            }
        }
        
 });

    
};
exports.verifyToken = (req, res) => {
    // console.log(req.body)
    // console.log(req.body.program_id)
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
 
    try {
        const token = req.header(tokenHeaderKey);
 
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            return res.send("Successfully Verified");
        } else {
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
};



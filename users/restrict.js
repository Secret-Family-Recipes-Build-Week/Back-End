
const jwt = require("jsonwebtoken");
const secrets = require("./secrets")

async function restrict(req, res, next) {
        try {
            
            
            // const token = req.cookies.token
            const token = req.headers.authorization
            console.log("token", token);
            if(!token) {
                return res.status(401).json({
                    message: "Invalid credentials",
                })
            }
            jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
                if (err) {
                    return res.status(401).json({
                        message: "Invalid credentials",
                    })
                }

                req.token = decoded;
                next()
            })
        } catch(err) {
            next(err)
        }
    }
    


//!! Double check this too
module.exports = {restrict}; 
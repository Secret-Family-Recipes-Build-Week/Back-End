const express = require("express");
const Users = require("./users-model");
//!! Possibly not here, may only be in recipes?
const { restrict } = require("./restrict");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const secrets = require("./secrets");


const router = express.Router();

//!!May add next to all of these 

router.get('/users', restrict,  async (req, res, next) => {
    try{
        res.json(await Users.getAllUsers())
    } catch(err) {
        next(err)
    }
})

router.get('/users/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        res.json(await Users.findUserById(id))
    }
    catch(err) {
        next (err)
    }
})

//Not including editing or deleting users until MVP is complete

//Register
router.post('/auth/register', async (req, res, next) => {
    try {
        const {username, password} = req.body
        console.log("username", username)
        const user = await Users.findByUsername(username)
    
        if(user) {
            return res.status(409).json({
                message: "Username is taken",
            })
        }
    
        const newUser = await Users.addUser({
            username, password: await bcrypt.hash(password, 11),
        })
    
        res.status(201).json(newUser)
    } catch(err) {
        next(err)
    }
   
})

//Login

router.post('/auth/login', async (req, res, next) => {
    try {
        const { username, password} = req.body
        const user = await Users.findByUsername(username)

        if (!user) {
            return res.status(401).json({
                message: "Invalid Credentials",
            })
        }

        const passwordValid = await bcrypt.compare(password, user.password)

        if(!passwordValid) {
            return res.status(401).json({
                message: "Invalid Credentials",
            })
        }
        // console.log("Secret", secrets.jwtSecret)
        //Create new JSON web token
        const token = jwt.sign({
            userID: user.id,
        }, secrets.jwtSecret)

        res.cookie("token", token);
        res.json({
            message: `Welcome ${user.username}`, token,
        })

    } catch (err) {
        next(err)
    }
})

router.get("/logout", async(req, res, next) => {
    try {
        req.session.destory((err) => {
            if(err) {
                next(err)
            } else {
                res.status(204).end()
            }
        })
    } catch(err) {
        next(err)
    }
})

module.exports = router;
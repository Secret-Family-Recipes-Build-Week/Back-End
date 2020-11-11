const express = require("express");
const Users = require("./users-model");
//!! Possibly not here, may only be in recipes?
const { restrict } = require("./restrict");


const router = express.Router();

//!!May add next to all of these 

router.get('/users', (req, res) => {

})

router.get('/users/:id', (req, res) => {
    const id = req.params.id;
})

//Not including editing or deleting users until MVP is complete

//Register
router.post('/auth/register', (req, res) => {

})

//Login

router.post('/auth/login', (req, res) => {

})

const express = require("express");
const Recipes = require("./recipes-model")

const { restrict } = require("../users/restrict");

const router = express.Router();

//!!May add next to all of these 

//This will add ingredients and steps to the recipes, using model
router.get('/recipes', (req, res) => {

})

//This will add ingredients and steps to the recipe, using model
router.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
})

//This will edit ingredients and steps table as well as recipe table, using model
router.put('/recipes/:id', (req,res) => {

})

//Will add recipes, steps, and ingredients all at once, using model
router.post('/recipes', (req, res) => {

})

//Ensure deletion properly cascades
router.delete('./recipes/:id', (req, res) => {

})

module.exports = router;
const express = require("express");
const Recipes = require("./recipes-model")

const { restrict } = require("../users/restrict");

const router = express.Router();

//!!May add next to all of these 

//This will add ingredients and steps to the recipes, using model
router.get('/recipes', async (req, res, next) => {
    try {   
        res.json(await Recipes.getAllRecipes())

    } catch(err){
        next(err)
    }

})

//This will add ingredients and steps to the recipe, using model
router.get('/recipes/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        res.json(await Recipes.findById(id))
    } catch(err){
        next(err)
    }
})

//This will edit ingredients and steps table as well as recipe table, using model
router.put('/recipes/:id', (req,res, next) => {
    try {

    } catch(err){
        next(err)
    }

})

//Will add recipes, steps, and ingredients all at once, using model
router.post('/recipes', async (req, res) => {
    try {

    } catch(err){
        next(err)
    }
})

//Ensure deletion properly cascades
router.delete('/recipes/:id', async (req, res, next) => {
    try {
        res.json(await Recipes.removeRecipe(req.params.id));

    } catch(err){
        next(err)
    }
})

module.exports = router;
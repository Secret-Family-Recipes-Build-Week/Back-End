const db = require("../database/config");

module.exports = {getAllRecipes, findById, addRecipe, updateRecipe, removeRecipe};

function getAllRecipes() {
    return db('users');
}

function findById(id) {

}

function addRecipe(recipe) {


}

function updateRecipe(changes, id) {

}

function removeRecipe(id) {

}
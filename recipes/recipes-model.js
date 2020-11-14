const db = require("../database/config");

module.exports = {getAllRecipes, findById, addRecipe, updateRecipe, removeRecipe};

function getShortRecipe() {
    return db('recipes');
}

//Breaks after delete
async function getAllRecipes() {
    
    try{
      
      let baseRecipes = await db("recipes");
    //   console.log("BR", baseRecipes)
      const promises = baseRecipes.map(async recipe => {
          let currentId = recipe.id;
          let updatedRecipe = findById(currentId);
        //   console.log("UR", updatedRecipe)
          return updatedRecipe
      })

      let finalRecipes = await Promise.all(promises)

    //   console.log("FR", finalRecipes)

      return finalRecipes;

    } catch (err) {
        return "Something went wrong when compiling recipes"
    }
    
    //Break upon delete
    // try{
    //   let counted = await db("recipes").count("id");
    //   let length = counted[0]['count(`id`)']
    //   let recipeArray = [];
    //   for(let i = 1; i <= length; i++) {
    //     let recipe = await findById(i);
    //     // console.log("recipe", recipe)
    //     recipeArray.push(recipe)
    //   }
    // //   console.log("ra", recipeArray);
    //   return recipeArray;

    // } catch {
    //     return "Something went wrong when compiling recipes"
    // }
    /// ------------------------
    // try {
    //     return await db("recipes")
    //         .innerJoin("ingredients", "ingredients.recipe_id", "recipes.id")
    //         .innerJoin("instructions", "instructions.recipe_id", "recipes.id")
    //         .select("recipes.*", "ingredients.*", "instructions.*" )
    

    // } 
    // catch(err) {
    //     console.log("Failure to get all recipes, err:", err)
    //     throw "error code";
    // }
   //Promise.all()
    
}

async function findById(id) {
    
    try {
        let parentData = await db("recipes").where({id}).first();
        let ingredientData = await db("ingredients").where("recipe_id", id).select("ingredient")
        let instructionData = await db("instructions").where("recipe_id", id).select("instruction")
        // console.log(instructionData)
        // console.log(parentData)
        // console.log(ingredientData)
        parentData.ingredients = ingredientData
        parentData.instructions = instructionData
        // console.log(parentData)
        return parentData;
        // return db("recipes").where({id}).first();
    } catch(err) {
        return "Something went wrong when compiling recipes"
    }
 
}


async function addRecipe(recipe) {
   
    console.log("input", recipe)
    
    let baseRecipe = {title: recipe.title, source: recipe.source, category: recipe.category, user_id: recipe.user_id}
    
    let ingredients = recipe.ingredients;
    let instructions = recipe.instructions;
   
    
   let id = await db("recipes").insert(baseRecipe)

    ingredients.forEach(async ing => {
        let ingInfo = {ingredient: ing.ingredient, recipe_id: id[0]}
        console.log(ingInfo)
        await db('ingredients').insert(ingInfo)
    })

    instructions.forEach(async inst => {
        let insInfo = {instruction: inst.instruction, recipe_id: id}
        await db('instructions').insert(insInfo)
    })
    
    return findById(id);

}

function updateRecipe(changes, id) {

}

function removeRecipe(id) {
   return db("recipes").where({id}).delete()
}
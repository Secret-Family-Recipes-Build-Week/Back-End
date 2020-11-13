const db = require("../database/config");

module.exports = {getAllRecipes, findById, addRecipe, updateRecipe, removeRecipe};

function getShortRecipe() {
    return db('recipes');
}

async function getAllRecipes() {
    try{
      let counted = await db("recipes").count("id");
      let length = counted[0]['count(`id`)']
      let recipeArray = [];
      for(let i = 1; i <= length; i++) {
        let recipe = await findById(i);
        // console.log("recipe", recipe)
        recipeArray.push(recipe)
      }
    //   console.log("ra", recipeArray);
      return recipeArray;

    } catch {
        return "Something went wrong when compiling recipes"
    }
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
    
    
  



//   temp.forEach(recipe => {
//      let tempRecipe = findById(recipe.id)
//      final.push({...recipe, tempRecipe})
//   })

//     return final;
    // return db("recipes")
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
        console.log(parentData)
        return parentData;
        // return db("recipes").where({id}).first();
    } catch(err) {
        return "Something went wrong when compiling recipes"
    }




 return db("recipes").where({id}).first();
    
}


function addRecipe(recipe) {


}

function updateRecipe(changes, id) {

}

function removeRecipe(id) {

}
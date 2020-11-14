exports.seed = async function(knex) {

    
      // Inserts seed entries
   await  knex('instructions').insert([
        {id: 1, instruction: "Boil water.", recipe_id: 1},
        {id: 2, instruction: "Puree tomato", recipe_id: 1},
        {id: 3, instruction: "Combine tomato puree, milk, and salt with water", recipe_id: 1},
        {id: 4, instruction: "Butter bread", recipe_id: 2},
        {id: 5, instruction: "Place cheese between slices", recipe_id: 2},
        {id: 6, instruction: "Toast in pan, flipping when necessary", recipe_id: 2},
        {id: 7, instruction: "Cut butter into small cubes", recipe_id: 3},
        {id: 8, instruction: "Mix all ingredients on a stovetop set to medium, add butter last", recipe_id: 3},
        {id: 9, instruction: "Stir until mixture thickens", recipe_id: 3},
        {id: 10, instruction: "Leave in sealed container in fridge overnight", recipe_id: 3},
        {id: 11, instruction: "Whisk eggs, milk, and salt", recipe_id: 4},
        {id: 12, instruction: "Pour mixture into pan, stir", recipe_id: 4},
        {id: 13, instruction: "When eggs are mostly cooked, stir in cheese", recipe_id: 4},
        {id: 14, instruction: "When eggs are finished, serve", recipe_id: 4}

        
        
        
      ]);
    
};



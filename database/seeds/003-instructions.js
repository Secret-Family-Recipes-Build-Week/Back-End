exports.seed = async function(knex) {

    
      // Inserts seed entries
   await  knex('instructions').insert([
        {id: 1, instruction: "Boil water.", recipe_id: 1},
        {id: 2, instruction: "Puree tomato", recipe_id: 1},
        {id: 3, instruction: "Combine tomato puree, milk, and salt with water", recipe_id: 1},
        {id: 4, instruction: "Butter bread", recipe_id: 2},
        {id: 5, instruction: "Place cheese between slices", recipe_id: 2},
        {id: 6, instruction: "Toast in pan, flipping when necessary", recipe_id: 2}
      ]);
    
};



exports.seed = async function(knex) {
      // Inserts seed entries
   await  knex('ingredients').insert([
        {id: 1, ingredient: '4 tomatoes', recipe_id: 1},
        {id: 2, ingredient: '2 cup milk', recipe_id: 1},
        {id: 3, ingredient: '3 cups water', recipe_id: 1},
        {id: 4, ingredient: '2 slices of bread', recipe_id: 2},
        {id: 5, ingredient: '1 slice of cheese', recipe_id: 2},
        {id: 6, ingredient: 'butter', recipe_id: 2}
      ]);
    
};



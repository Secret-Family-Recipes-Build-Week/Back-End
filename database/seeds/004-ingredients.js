exports.seed = async function(knex) {
      // Inserts seed entries
   await  knex('ingredients').insert([
        {id: 1, ingredient: '4 tomatoes', recipe_id: 1},
        {id: 2, ingredient: '2 cup milk', recipe_id: 1},
        {id: 3, ingredient: '3 cups water', recipe_id: 1},
        {id: 4, ingredient: '2 slices of bread', recipe_id: 2},
        {id: 5, ingredient: '1 slice of cheese', recipe_id: 2},
        {id: 6, ingredient: 'butter', recipe_id: 2},
        {id: 7, ingredient: '2 cups lemon juice', recipe_id: 3},
        {id: 8, ingredient: '1 stick butter', recipe_id: 3},
        {id: 9, ingredient: '1 cup sugar', recipe_id: 3},
        {id: 10, ingredient: '1 tbsp lemon zest', recipe_id: 3},
        {id: 11, ingredient: '2 eggs', recipe_id: 4},
        {id: 12, ingredient: 'splash of milk', recipe_id: 4},
        {id: 13, ingredient: 'dash of salt', recipe_id: 4},
        {id: 14, ingredient: '1/3 cup cheddar cheese', recipe_id: 4},
        
      ]);
    
};



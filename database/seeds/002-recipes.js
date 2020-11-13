exports.seed = async function(knex) {

      // Inserts seed entries
   await  knex('recipes').insert([
        {id: 1, title: 'Tomato Soup', source: "Grandma", category: "dinner", "user_id": 1},
        {id: 2, title: 'Grilled Cheese', source: "Mr. Avery", category: "dinner", "user_id": 1},
        
      ]);
    
};



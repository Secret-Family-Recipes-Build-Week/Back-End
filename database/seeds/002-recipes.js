exports.seed = async function(knex) {

      // Inserts seed entries
   await  knex('recipes').insert([
        {id: 1, title: 'Tomato Soup', source: "Grandma", category: "dinner", "user_id": 1},
        {id: 2, title: 'Grilled Cheese', source: "Mr. Avery", category: "dinner", "user_id": 1},
        {id: 3, title: 'Lemon Curd', source: "Family Recipe Book", category: "dessert", "user_id": 5},
        {id: 4, title: 'Cheesy Eggs', source: "Nick", category: "breakfast", "user_id": 6},
        
      ]);
    
};



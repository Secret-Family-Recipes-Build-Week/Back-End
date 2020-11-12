
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
    
      // Inserts seed entries
   await  knex('users').insert([
        {id: 1, username: 'name1', password: "password"},
        {id: 2, username: 'username2', password: "password"},
        {id: 3, username: 'username3', password: "password"}
      ]);
    
};



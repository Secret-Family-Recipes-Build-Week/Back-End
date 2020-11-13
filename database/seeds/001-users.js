
const bcrypt = require("bcryptjs");

exports.seed = async function(knex) {
  
    
      // Inserts seed entries
   await  knex('users').insert([
        {id: 1, username: 'name1', password: await bcrypt.hash("password", 11)},
        {id: 2, username: 'username2', password: await bcrypt.hash("password", 11)},
        {id: 3, username: 'username3', password: await bcrypt.hash("password", 11)}
      ]);
    
};



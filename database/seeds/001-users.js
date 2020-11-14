
const bcrypt = require("bcryptjs");

exports.seed = async function(knex) {
  
    
      // Inserts seed entries
   await  knex('users').insert([
        {id: 1, username: 'name1', password: await bcrypt.hash("password", 11)},
        {id: 2, username: 'name2', password: await bcrypt.hash("password", 11)},
        {id: 3, username: 'name3', password: await bcrypt.hash("password", 11)},
        {id: 4, username: 'name4', password: await bcrypt.hash("password", 11)},
        {id: 5, username: 'Martha Simmons', password: await bcrypt.hash("leg2hatZ", 11)},
        {id: 6, username: 'Edric Wells', password: await bcrypt.hash("Ifmax2", 11)}
      ]);
    
};



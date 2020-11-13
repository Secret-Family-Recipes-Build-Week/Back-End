const db = require("../database/config");

module.exports = {addUser, getAllUsers, findUserById, findByUsername, addUser}

async function  addUser(user) {
    //!! Don't get the .insert(users, "id") here, "id" part specifically
    //Teacher example shows it can be done without that?
    const [id] = await db("users").insert(user)

    return findUserById(id);
}

function getAllUsers() {
    return db("users").select("id", "username");
    
}

function findUserById(id) {
    return db("users").select("id", "username").where({id}).first();
}

function findByUsername(username) {
    //!! Check
    return db("users").where({username}).first()
}



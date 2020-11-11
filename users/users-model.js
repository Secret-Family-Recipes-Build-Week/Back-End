const db = require("../database/config");

module.exports = {addUser, getAllUsers, findUserByID, findUserBy, addUser}

function addUser(user) {
    //!! Don't get the .insert(users, "id") here, "id" part specifically
    //Teacher example shows it can be done without that?
    const [id] = await db("users").insert(user)

    return findUserByID(id);
}

function getAllUsers() {
    return db("users").select("id", "username");
    
}

function findUserByID(id) {
    //!! Check
    return db("users").select("id", "username").filter("id", id).first();
}

function findUserBy(filter) {
    //!! Check
    return db("users").select("id", "username").where(filter);
}



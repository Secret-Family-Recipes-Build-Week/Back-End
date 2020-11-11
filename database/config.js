//This is a connection that allows the use of the database
//! But why is it seperate from the knex file?

const knex = require("knex")

//The configuration of knex that will be used
const knexfile = require("../knexfile");

module.exports = knex(knexfile)
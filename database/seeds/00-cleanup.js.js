exports.seed = async function(knex) {
	await knex("ingredients").truncate()
  await knex("instructions").truncate()
  await knex("recipes").truncate()
	await knex("users").truncate()
}
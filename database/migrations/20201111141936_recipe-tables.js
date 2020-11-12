
exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("title").notNull().unique()
        table.text("source")
        table.text("category")
        table.integer("user-id").notNull();
    })

    //!! Join recipe-id in these two tables to id in recipe
    await knex.schema.createTable("instructions", (table) => {
        table.increments("id");
        //!! Check that notNull doesn't need to be notNullable
        table.text("instruction").notNull()
        //Is this the right notation
        table.integer("recipe-id").notNull()
    })

    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("ingredient").notNull()
        table.integer("recipe-id").notNull()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipes")
    await knex.schema.dropTableIfExists("instructions")
    await knex.schema.dropTableIfExists("ingredients")
};

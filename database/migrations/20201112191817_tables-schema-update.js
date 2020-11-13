
exports.up = async function(knex) {
    await knex.schema.createTable("users", (table) => {
        table.increments("id")
        table.text("username").notNull().unique()
        table.text("password").notNull()
    })

     //Is there a way to cascade so that if recipes is deleted so are all teh things connected? Or is that what cascades on references do arleady?
     await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("title").notNull().unique()
        table.text("source")
        table.text("category")
        //Might not work because "users" is in a different migration
        table.integer("user_id").notNull().references("id").inTable("users")
    })

    //!! Join recipe-id in these two tables to id in recipe
    await knex.schema.createTable("instructions", (table) => {
        table.increments("id");
        //!! Check that notNull doesn't need to be notNullable
        table.text("instruction").notNull()
        //Is this the right notation
        table.integer("recipe_id").notNull().references("id").inTable("recipes").onUpdate("cascade").onDelete("cascade")
    })

    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("ingredient").notNull()
        table.integer("recipe_id").notNull().references("id").inTable("recipes").onUpdate("cascade").onDelete("cascade")
    
    })
};

exports.down = async function(knex) {
   await knex.schema.dropTableIfExists("instructions")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
    await knex.schema.dropTableIfExists("users")
};

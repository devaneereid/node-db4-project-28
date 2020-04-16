
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    // Users
        tbl.string('id', 255)
            .primary();
    
        tbl.string('name', 255)
            .notNullable()
            .unique();
    })
    // Recipes
    .createTable('recipes', tbl => {
        tbl.string('id', 255)
            .primary();
        
        tbl.string('title')
            .notNullable()
            .index();
        
        tbl.integer('recipe_id')
            .notNullable();
    })
    // Ingredients
    .createTable('ingredients', tbl => {
        tbl.increments();

    // Foreign Keys
        tbl.integer('recipe_id')
            .unique()
            .unsigned()
            .references('id')
            .inTable('recipes');
            
        tbl.string('measurements', 255)
            .notNullable();
    })
    // Instructions
    .createTable('instructions', tbl => {
        tbl.increments();

    // Foreign Keys
        tbl.string('instruction_id', 255)
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')

        tbl.text('cooking_instructions')
            .notNullable();
    }); 
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('instructions')
};
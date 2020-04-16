
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('ingredients').insert([
        { 
          recipe_id: 114,
          measurements: '1/2 Cup Milk'
        },
        { 
          recipe_id: 115,
          measurements: '1lb Chicken Breast'
        },
        { 
          recipe_id: 116, 
          measurements: '1 Cup Taco Meat'
        }
      ]);
};

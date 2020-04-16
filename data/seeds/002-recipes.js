
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('recipes').insert([
        { 
          
          title: 'French Toast', 
          recipe_id: '110'
        },
        { 
          title: 'Grilled Chicken', recipe_id: '111'
        },
        { 
          title: 'Taco Salad', 
          recipe_id: '112'
        }
      ]);
};


exports.seed = function(knex) {
      // Inserts seed entries
      return knex('instructions').insert([
        { 
          instruction_id: 1034, cooking_instructions: 'Mix eggs and milk'
        },
        { 
          instruction_id: 1035, cooking_instructions: 'Cook chicken throughly'
        },
        { 
          instruction_id: 1036, cooking_instructions: 'Cook and season meat'
        }
      ]);
};

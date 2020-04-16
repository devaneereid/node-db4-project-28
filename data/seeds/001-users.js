
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('users').insert([
        {id: 10, name: 'Nate'},
        {id: 11, name: 'Zach'},
        {id: 12, name: 'Brian'}
      ]);
};

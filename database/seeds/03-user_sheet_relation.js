exports.seed = function(knex) {

    return knex('user_sheet_relation').insert([
      {user_googleId: '100498427802104784728', sheet_id: 1}

    ]);
    
};
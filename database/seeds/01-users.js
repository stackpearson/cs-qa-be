
exports.seed = function(knex) {

      return knex('users').insert([
        {googleId: '100498427802104784728', name: 'Sawyer Pearson', email: 'sawyer.pearson@commentsold.com', role: 'admin'},
        {googleId: '117344414048822008561', name: 'Sawyer Pearson', email: 'sawyer.pearson208@gmail.com', role: 'user'},
  
      ]);
      
};




exports.seed = function(knex) {

      return knex('users').insert([
        {id: 1, google_id: '100498427802104784728', name: 'Sawyer Grader', email: 'sawyer.pearson@commentsold.com', role: 'admin', gsheet_link: 'https://www.google.com/'},
        {id: 2, google_id: '117344414048822008561', name: 'Test student 1', email: 'sawyer.pearson208@gmail.com', role: 'user', gsheet_link: 'https://docs.google.com/spreadsheets/d/1Mb5cwR8vd0OL6zLsDsi6bskaZlq7DK_l-RdRnK172Y8/edit#gid=832910344'},
        {id: 3, google_id: '200498427802104784729', name: 'Test student 2', email: 'sawyer.pearson@commentsold.com', role: 'user', gsheet_link: 'https://devhints.io/knex'}
  
      ]);
      
};



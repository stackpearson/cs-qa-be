
exports.seed = function(knex) {

    return knex('users_sheets').insert([
      {id: 1, gsheetLink: 'https://docs.google.com/spreadsheets/d/1C7CPkrqTK8oCkgKHWD9_pJoNKkhMcSm8TkfG5YDgTvE/edit?usp=sharing'}

    ]);
    
};
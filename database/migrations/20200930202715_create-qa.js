exports.up = function(knex) {
    return knex.schema
      .createTable('users', tbl => {
        tbl.increments();
        tbl.string('googleId', 128)
        tbl.string('name', 128)
        tbl.string('email', 128)
        tbl.string('role', 128)
      })

      .createTable('users_sheets', tbl => {
        tbl.increments();
        tbl.string('gSheetLink', 420)
      })

      .createTable('user_sheet_relation', tbl => {
        tbl.string('user_googleId')
          .unsigned()
          .notNullable()
          .references('users.googleId')
        tbl.string('user_sheetId')
          .unsigned()
          .notNullable()
          .references('users_sheets.id')
      })
  };
  
  exports.down = function(knex) {
      return knex.schema
        .dropTableIfExists('user_sheet_relation')
        .dropTableIfExists('user_sheets')
        .dropTableIfExists('users');
     
    
  };
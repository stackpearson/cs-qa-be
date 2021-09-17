exports.up = function(knex) {
    return knex.schema
      .createTable('users', tbl => {
        tbl.increments();
        tbl.string('google_id', 128)
            .nullable();
        tbl.string('name', 128);
        tbl.string('email', 128);
        tbl.string('role', 128)
            .notNullable()
            .defaultTo('user');
        tbl.string('gsheet_link', 420)
            .nullable();
      })

      .createTable('qa_blocks', tbl => {
        tbl.increments();
        tbl.string('block_name', 128);
        tbl.string('status', 128)
            .notNullable()
            .defaultTo('incomplete');
      })

      .createTable('grading_segments', tbl => {
        tbl.increments();
        tbl.integer('participant_id')
            .unsigned()
            .notNullable()
            .references('users.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('qa_block_id')
            .unsigned()
            .notNullable()
            .references('qa_blocks.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.string('status')
          .notNullable()
          .defaultTo('incomplete')
      })

      .createTable('doing_grading', tbl => {
        tbl.integer('grader_id')
            .unsigned()
            .notNullable()
            .references('users.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
          tbl.integer('grading_segment_id')
            .unsigned()
            .notNullable()
            .references('users.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
      })

  };
  
  exports.down = function(knex) {
      return knex.schema
        .dropTableIfExists('doing_grading')
        .dropTableIfExists('grading_segments')
        .dropTableIfExists('qa_blocks')
        .dropTableIfExists('users');
     
    
  };
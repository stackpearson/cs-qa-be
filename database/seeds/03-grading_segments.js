exports.seed = function(knex) {

    return knex('grading_segments').insert([
      {id: 1, participant_id: 2, qa_block_id: 1, status: 'incomplete'},
      {id: 2, participant_id: 3, qa_block_id: 1, status: 'incomplete'}

    ]);
    
};
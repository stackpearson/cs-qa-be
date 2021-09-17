
exports.seed = function(knex) {

    return knex('doing_grading').insert([
      {grader_id: 1, grading_segment_id: 1},
      {grader_id: 1, grading_segment_id: 2}
    ]);
    
};
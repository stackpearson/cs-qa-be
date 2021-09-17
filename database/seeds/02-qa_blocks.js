
exports.seed = function(knex) {

    return knex('qa_blocks').insert([
      {id: 1, block_name: '9/20 - 9/27', status: ''}

    ]);
    
};
const db = require('../database/db-config.js');

function find() {
    return db('weekly_reviews');
}

function findById(id) {
    return db('users').where({ id }).first();
}

module.exports = {
    find,
    findById
}
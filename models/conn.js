const pgp = require('pg-promise')();

const options = {
    host: 'localhost',
    database: 'tv-shows-app'
}

const db = pgp(options);
module.exports = db;


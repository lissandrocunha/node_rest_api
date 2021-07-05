const pgp = require('pg-promise')();

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'blob',
    user: 'postgres',
    password: '',
    max: 30 // use up to 30 connections

    // "types" - in case you want to set custom type parsers on the pool level
};

const db = pgp(cn);

module.exports = db;
const {Client} = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'school',
    password: 'admin',
    port: 5432,
})

const test = {test: "allo"};

module.exports = client, test;
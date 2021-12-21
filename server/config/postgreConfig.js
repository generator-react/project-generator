const { Pool } = require('pg');

const pool = new Pool({
    username: "adekferdian",
    password: "1234",
    database: "testing-create-db",
    host: "127.0.0.1",
    dialect: "postgres",
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});

module.exports = pool;
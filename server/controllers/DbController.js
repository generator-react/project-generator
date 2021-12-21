const pgtools = require('pgtools');
const { Pool } = require('pg');
const express = require('express');
const server = express();

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

class DbController {
    static async create (req, res, next) {
        const config = {
            username: "adekferdian",
            password: "1234",
            // database: "testing-create-db",
            host: "127.0.0.1",
            dialect: "postgres",
            max: 20,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 2000
        }
        const newDb = pgtools.createdb(config, "testing-create-db-4", function(err, results) {
            if (err) {
                console.log(err);
                process.exit(-1);
            } else {
                return res.json(results)
            }
        });
    }
    static async connect (req, res, next) {
        const client = await pool.connect();
        return res.json(client)
    }
}

module.exports = DbController;
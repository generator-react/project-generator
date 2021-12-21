const pgtools = require('pgtools');
const { Pool, Client } = require('pg');
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
        console.log(req.body);
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
        const newDb = pgtools.createdb(config, req.body.dbName, function(err, results) {
            if (err) {
                return res.json(err)
                process.exit(-1);
            } else {
                return res.json(results)
            }
        });
    };

    static async connect (req, res, next) {
        const client = await pool.connect();
        return res.json(client)
    };

    static async createTable (req, res, next) {
        const arr = Object.keys(req.body)
        const client = new Client({
            host: '127.0.0.1',
            username: 'adekferdian',
            database: req.body.dbName,
            password: '1234',
        });
        
        const execute = async (query) => {
            try {
                await client.connect();     // gets connection
                await client.query(query);  // sends queries
                return true;
            } catch (error) {
                console.error(error.stack);
                return false;
            } finally {
                await client.end();         // closes connection
            }
        };
        
        const text = `
            CREATE TABLE IF NOT EXISTS "${req.body.tableName}" (
                "id" SERIAL,
                "${arr[1]}" ${req.body.username} NOT NULL,
                "${arr[2]}" ${req.body.role} NOT NULL,
                "${arr[3]}" ${req.body.password} NOT NULL,
                PRIMARY KEY ("id")
            );`;
        
        execute(text).then(result => {
            if (result) {
                console.log('Table created');
                return res.json({ message: 'table created'})
            } else (err => {
                return res.json(err)
            })
        });
    };
}

module.exports = DbController;
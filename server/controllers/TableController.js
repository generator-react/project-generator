const { Pool, Client } = require('pg');

class TableController {
    static async checkTable(req, res, next) {
        console.log('>>>>>>', req.body, "<<<<<<");
        const client = new Client({
            host: '127.0.0.1',
            username: 'adekferdian',
            database: req.body.dbName,
            password: '1234',
        });
        
        const execute = async (query) => {
            try {
                await client.connect();     // gets connection
                const b = await client.query(query);  // sends queries
                const row = b.rows
                return row;
            } catch (error) {
                console.error(error.stack);
                return false;
            } finally {
                await client.end();         // closes connection
            }
        };
        
        const text = `
            select table_schema||'.'||table_name as table_fullname
            from information_schema."tables"
            where table_type = 'BASE TABLE'
            and table_schema not in ('pg_catalog', 'information_schema');  
            `;
        console.log(text);
        execute(text).then(result => {
            console.log(result);
            if (result) {
                let temp = []
                for (let index = 0; index < result.length; index++) {
                    const element = result[index].table_fullname;
                    const replace = element.replace("public.", "")
                    temp.push(replace)
                    // console.log(result[index].table_fullname == "public.tes dari postman");
                }
                return res.json(temp)
            } else (err => {
                return res.json(err)
            })
        });
    }

    static create (req, res, next) {
        console.log(req);
        console.log(req.body);
        return res.json(req.body)
    }
};

module.exports = TableController;
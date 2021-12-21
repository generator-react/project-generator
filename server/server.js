const express = require('express');
const server = express();
const routers = require('./routes');
const cors = require('cors');
const PORT = 3000;

server.use(cors());
server.use(express.urlencoded({ extended: false}));
server.use(express.json());
server.use(routers);


server.listen(PORT, () => {
    console.log("running....");
})
// const {newDb, pool} = require('./config/postgreConfig');


// (async function() {
//     const createDb = newDb
//     const client = await pool.connect();
//     server.locals.dbclient = client;
//     server.listen(3000)
// })()

// server.get('/', function(req, res, next) {
//     let request = req.app.locals.dbclient
//     request.query('select * from public.tenant_info', async function(err, results) {
//         if (err) {
//             console.log(err);
//         } else {
//             let resultSet = results.rows
//             console.log('>>>>>>>>>', resultSet, '<<<<<<<<<<<');
//             res.json({ status: "Ok", message: "tenant list", data: resultSet})
//         }
//     })
//     res.json({status: "OK", message: "server started"});
// });

// server.listen(3001, function() {
//     console.log("port 3001 started");
// })
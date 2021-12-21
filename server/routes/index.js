const router = require('express').Router();
const createDbRoute = require('./createDbRoute');

router.get('/', (req, res, next) => {
    res.send({message: 'connected'})
});

router.use('/db', createDbRoute);

module.exports = router
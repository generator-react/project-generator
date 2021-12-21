const router = require('express').Router();
const createDbRoute = require('./createDbRoute');
const tableRoute = require('./tableRoute');

router.get('/', (req, res, next) => {
    res.send({message: 'connected'})
});

router.use('/db', createDbRoute);
router.use('/table', tableRoute);

module.exports = router
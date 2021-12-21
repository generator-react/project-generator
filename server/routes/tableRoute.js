const router = require('express').Router();
const TableController = require('../controllers/TableController');


router.get('/check', TableController.checkTable);
router.post('/create', TableController.create);

module.exports = router
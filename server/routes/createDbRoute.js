const router = require('express').Router();
const DbController = require('../controllers/DbController');


router.get('/create', DbController.create);
router.get('/connect', DbController.connect);
router.get('/create-table', DbController.createTable);

module.exports = router
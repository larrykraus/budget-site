var express = require('express');
var router = express.Router();
var budgetController = require('../controllers/budgetController.js');
var transactionController = require('../controllers/transactionController.js');
var userController = require('../controllers/userController.js');

router.post('/api/users', userController.checkID);



module.exports = router;
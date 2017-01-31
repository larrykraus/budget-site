var express = require('express');
var router = express.Router();
var budgetController = require('../controllers/budgetController.js');
var transactionController = require('../controllers/transactionController.js');
var userController = require('../controllers/userController.js');

router.get('/budgets', userController.checkID);


module.exports = router;
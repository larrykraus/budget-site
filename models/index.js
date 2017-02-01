var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://<Larry>@localhost:5432/budgetsite');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var User = sequelize.import('./userModel');
//var Budget = sequelize.import("./budgetModel");
//var LineItem = sequelize.import("./lineitemModel");
//var Transaction = sequelize.import("./transactionModel")

module.exports.models = {
	User: User,
	// Budget: Budget,
	// LineItem: LineItem,
	// Transaction: Transaction

};
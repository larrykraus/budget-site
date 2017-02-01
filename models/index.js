var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://Larry@localhost:5432/budgetsite');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var User = sequelize.import('./userModel');
//var Budget = sequelize.import("./budgetModel");
//var LineItem = sequelize.import("./lineitemModel");
//var Transaction = sequelize.import("./transactionModel")

// Budget.belongsTo(User);
// User.hasMany(Budget);
// LineItem.belongsTo(Budget);
// Budget.hasMany(LineItem);
// Transaction.belongsTo(LineItem);
// LineItem.hasMany(Transaction);

module.exports.models = {
	User: User,
	// Budget: Budget,
	// LineItem: LineItem,
	// Transaction: Transaction

};
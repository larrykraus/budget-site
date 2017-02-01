var DB = require("../models").models;

var seedUsers = [
	{
	userid: "1",
	googleid: "123456789123456789123"
	},
	userid: "2",
	googleid: "234567891234567891234"
];

var seedUserCreate = function() {
	return DB.User.create({
	userid: "1",
	googleid: "123456789123456789123"
  })
};

seedUserCreate();
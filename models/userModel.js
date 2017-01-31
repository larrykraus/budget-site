module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("user", {
    userID: Sequelize.STRING,
    googleID: Sequelize.STRING
  });
  return model;
};
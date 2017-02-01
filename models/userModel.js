module.exports = function(sequelize, Sequelize){
  var User = sequelize.define("user", {
    //userID: Sequelize.STRING,
    googleID: Sequelize.STRING
  });
  return User;
};


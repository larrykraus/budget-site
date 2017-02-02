var db = require('../models/');
var User = db.models.User;

//query database, see if that googleID already exists in user table
// users.findOne({
//  where: {googleid: loggedInID}
// }).then(function (user) {
//     console.log(user.get('name'));
// });

//if it does exist
//send them to their budget page

//if it does not exist
//create a new row in user table with their info
//and send them to their budget page


function checkID(req, res) {
  var package = req.body;
  var loggedInID = package.googleID;
  console.log(req.body);

  // User.findOne({
  //  where: {googleID: loggedInID}
  // }).then(function (user) {
  //     console.log("HERE! " + user.id);
  // });


  User.create(req.body).then(function(user){
    if(!user) return error(res, "not saved");
    res.json(user);
  });

};

function show(req, res) {
  Artist.findById(req.params.id)
  .then(function(artist){
    // if(!artist) console.log ("not found");
    include: Song
    res.json(artist);
  }); 
};

function create(req, res) {
  User.create(req.body).then(function(user){
    if(!user) return error(res, "not saved");
    res.json(user);
  });
};

module.exports.checkID = checkID;
module.exports.create = create;
module.exports.show = show;
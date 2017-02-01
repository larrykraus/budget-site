var db = require('../models/');
var User = db.models.User;

// users.findOne({
//  where: {googleid: loggedInID}
// }).then(function (user) {
//     console.log(user.get('name'));
// });


function checkID(req, res) {
  var package = req.body;
  res.json(package);
  var loggedInID = package.loggedInID;
  console.log(loggedInID);

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
  User.create(req.body).then(function(artist){
    // if(!artist) return error(res, "not saved");
    res.json(artist);
  });
};

module.exports.checkID = checkID;
module.exports.create = create;
module.exports.show = show;
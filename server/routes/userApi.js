var User = require('../models/usersSchema');

module.exports = function (app, express) {
  var api = express.Router();

  api.post('/registartion', function (req, res) {
    console.log(req.body);
    User.find({$or: [{email: req.body.email},{mobile: req.body.mobile}]}).exec(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result) {
        res.json({message: "User already existed! Please login"})
      } else {
        var user = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          mobile: req.body.mobile
        });
        user.save(function (err, result) {
          if (err) {
            res.send(err);
          } else {
            res.json({success: true, message: 'user registered successfully'});
          }
        })
      }
    })

  });
  return api;
}

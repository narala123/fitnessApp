var User = require('../models/usersSchema');
var UserRole = require('../models/userRoles');
var mongoose = require('mongoose');
var jsonToken = require('jsonwebtoken');
function createToken(user) {

    return jsonToken.sign({
        id: user._id.toString(),
        name: user.firstName+' '+user.lastName,
        email: user.email,
        mobile: user.mobile
    }, 'A3NzaC1kc3MAD2b4');
}
module.exports = function (app, express) {
  var api = express.Router();

  api.post('/registartion', function (req, res) {
    console.log(req.body.userRole);
    User.findOne({$or: [{email: req.body.email},{mobile: req.body.mobile}]}).exec(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result) {
        res.json({success:false,message: "User already existed! Please login"})
      } else {
          var userType = UserRole.userRoleIds[req.body.userRole];
          console.log(mongoose.Types.ObjectId(userType));
        var user = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          mobile: req.body.mobile,
          address:req.body.Address,
          userType:mongoose.Types.ObjectId(userType),
          active:true,
          createdDate:Date.now()
        });
        user.save(function (err,currentUser) {
          if (err) {
            res.send(err);
          } else {
              var tokenUser = createToken(currentUser);
              console.log(tokenUser);
         res.json({success: true, message: 'user registered successfully',token:tokenUser});
          }
        })
      }
    })

  });
  api.post('/login', function (req, res) {
      console.log(req.body);
       User.findOne({email:req.body.email,password:req.body.password},function(err,currentUser){
           if(err){
               res.send(err);
               return;
           }else if(currentUser){
               var cuurentUser = createToken(currentUser);
               res.json({success:true,message:'Successfully login',token:cuurentUser});

           }else{
               res.json({success:false,message:'please cheack username and password'})
           }
        
       });

  });
  
  return api;
}

var mongoose =  require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
     firstName:String,
     lastName:String,
     email:String,
     password:{type:String},
     mobile:{type:String},
     active:{type:Boolean},
     address:{type:String},
     userType:{type:Schema.Types.ObjectId},
     createdDate:{type:Date,default:Date.now()}
});

module.exports = mongoose.model('users',userSchema);
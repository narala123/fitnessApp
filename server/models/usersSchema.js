var mongoose =  require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
     firstName:String,
     lastName:String,
     email:String,
     password:{type:String},
     mobile:{type:String},
     createdDate:{type:Date,default:Date.now()}
});

module.exports = mongoose.model('users',userSchema);
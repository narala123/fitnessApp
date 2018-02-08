var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var userRoleNames;
var userRoleIds;
var UserRole = new Schema({
    role:{type:String,required:true,index:{unique:true}},
    description:String,
    active:Boolean,
    createDate:{type:Date,select:false,default:Date},
    modifiedDate:{type:Date,select:false,default:Date.now()}
});

module.exports = mongoose.model('userroles',UserRole);

if(!userRoleNames) {
    mongoose.models.userroles.find({}, function (err, roles) {
        if (err) {
            return;
        }
        userRoleNames = {};
        userRoleIds = {};
        for (var i in roles) {
            userRoleNames[roles[i]._id.toString()] = roles[i].role;
            userRoleIds[roles[i].role] = roles[i]._id;
        }
        module.exports.userRoleNames = userRoleNames;
        module.exports.userRoleIds = userRoleIds;
    
    });
}

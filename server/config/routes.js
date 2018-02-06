module.exports = function(app,express){
   var registartionApi  = require('../routes/userApi')(app,express);
   app.use('/user',registartionApi);
}
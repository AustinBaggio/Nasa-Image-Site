var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MessageSchema   = new Schema({
    //message schema with attributes for the DB

    timeStamp: String,
    pPolicy: String,
    sPolicy: String,
    dmcaPolicy: String,
    contact: String
    
});

module.exports = mongoose.model('Message', MessageSchema);
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DisputeSchema   = new Schema({
    //dspute schema with attributes for the DB

    timeStamp: String,
    owner: String,
    dispute: String,
    
});

module.exports = mongoose.model('Dispute', DisputeSchema);
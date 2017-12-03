var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DisputeSchema   = new Schema({
    timeStamp: String,
    owner: String,
    dispute: String,
    
});

module.exports = mongoose.model('Dispute', DisputeSchema);
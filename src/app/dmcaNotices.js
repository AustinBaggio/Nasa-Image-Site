var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DMCANoticesSchema   = new Schema({
    timestamp: String,
    owner: String,
    defendant: String,
    collectionURL: String,
    sentNotice: Boolean,
    dispute: String
    
});

module.exports = mongoose.model('DMCANotices', DMCANoticesSchema);

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CollectionSchema   = new Schema({

    
    name: String,
    descript: String,
    visability: Boolean,
    owner: String,
    imageUrls: [String],
    rating: {type: Number, min:0, max:10}

});

module.exports = mongoose.model('Collection', CollectionSchema);
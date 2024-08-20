var mongoose = require('mongoose');
var gallerySchema=mongoose.Schema({
    src:{
        type:String
    },
    status:{
        type:String,
        default:"Active"
    }
}, 
{ 
    //timestamps: true
    timestamps: { createdAt: 'create_date', updatedAt: 'update_date' }
});


var sample = module.exports = mongoose.model('galleryModel', gallerySchema);
module.exports.get = function (callback, limit) {
    sample.find(callback).limit(limit);
} 
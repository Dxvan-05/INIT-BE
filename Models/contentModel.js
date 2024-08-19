var mongoose = require('mongoose');
var contentSchema=mongoose.Schema({
    para:{
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


var sample = module.exports = mongoose.model('contentModel', contentSchema);
module.exports.get = function (callback, limit) {
    sample.find(callback).limit(limit);
} 
var mongoose = require('mongoose');
var execomSchema=mongoose.Schema({
    name:{
        type:String
    },
    position:{
        type:String
    },
    description:{
        type:String
    },
    imageUrl:{
        type:String
    },
    linkedInUrl:{
        type:String
    },
    InstagramUrl:{
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


var sample = module.exports = mongoose.model('execomModel', execomSchema);
module.exports.get = function (callback, limit) {
    sample.find(callback).limit(limit);
} 
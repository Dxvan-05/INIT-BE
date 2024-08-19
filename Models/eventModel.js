var mongoose = require('mongoose');
var eventSchema=mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    imageUrl:{
        type:String
    },
    registerLink:{
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


var sample = module.exports = mongoose.model('eventModel', eventSchema);
module.exports.get = function (callback, limit) {
    sample.find(callback).limit(limit);
} 
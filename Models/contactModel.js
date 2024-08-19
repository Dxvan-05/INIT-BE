var mongoose = require('mongoose');
var contactSchema=mongoose.Schema({
    name:{
        type:String
    },
    phnNo:{
        type:String
    },
    email:{
        type:String
    },
    message:{
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


var sample = module.exports = mongoose.model('contactModel', contactSchema);
module.exports.get = function (callback, limit) {
    sample.find(callback).limit(limit);
} 
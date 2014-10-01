var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var softwareSchema = new Schema({
    softwareId: Number,
    title: String,
    logo:  String,
    contact: String,
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('Software', softwareSchema);
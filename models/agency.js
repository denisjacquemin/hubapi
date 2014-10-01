var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var agencySchema = new Schema({
    agencyId: Number,
    title: String,
    logo:  String,
    contact: String,
    softwareId: Number,
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('Agency', agencySchema);
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var prospectSchema = new Schema({
    ref_agence:   String,
    description:  String,
    budget_min:   Number,
    budget_max:   Number,
    bedroomcount: Number,
    surface:      Number,
    location: {
        lat: Number,
        lon: Number
    },
    agencyId: Number,
    createdAt: Date,
    updatedAt: Date

});

module.exports = mongoose.model('Prospect', prospectSchema);
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var propertySchema = new Schema({
    title:        String,
    description:  String,
    price:        Number,
    bedroomcount: Number,
    surface:      Number,
    address:      String,
    location: {
        lat: Number,
        lon: Number
    },
    agencyId: Number,
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('Property', propertySchema);
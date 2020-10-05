const mongoose = require("mongoose");
// Property Schema
const propertySchema = new mongoose.Schema({
    address: {type: String, required: true},
    price: {type: Number},
    bedrooms: {type: Number, required: true},
    lot: {type: Number},
    img: {type: String}
});

const Property = mongoose.model("Property",propertySchema);
module.exports = Property;
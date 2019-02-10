let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    name: String,
    discription: String,
},
{
    collection: "favouritThings"
});

module.exports = mongoose.model('demo', contactSchema);
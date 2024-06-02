    const mongoose = require('mongoose')

var refSchema = new mongoose.Schema({
    reference_name : {
        type:String,
    }
})


module.exports = mongoose.model('reference',refSchema);
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }

})
function checkMinimumOneSeatSelected(array) {
    return array.length >= 1;
}

module.exports = mongoose.model('User',userSchema)
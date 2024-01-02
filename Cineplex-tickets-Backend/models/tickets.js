const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({

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
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    userId: {
        type: String,
        required: true,
    },
    // seatsSelected: {
    //     type: [{
    //         required: true,
    //         type: Number
    //     }],
    //     validate: [checkMinimumOneSeatSelected, 'At least one seat  must be selected']
    // }
    seatsSelected: [
        {
            rowId: {
                type: String,
                required: true
            },
            seatIndex: {
                type: Number,
                required: true
            }
        }
    ]


})
function checkMinimumOneSeatSelected(array) {
    return array.length >= 1;
}

module.exports = mongoose.model('Ticket',ticketSchema)

const mongoose = require('mongoose')

const bookedSeatsSchema = new mongoose.Schema({
    bookedSeats: [
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



const BookedSeats = mongoose.model('BookedSeats',bookedSeatsSchema)
module.exports = BookedSeats
const express = require('express')
const router = express.Router()
const BookedSeats = require('../models/bookedSeats')

router.get('/', async(req,res) => {
    try{
        const bookedSeats = await BookedSeats.find()
        res.json(bookedSeats)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    // console.log(req.body+"hh")
    const booked = new BookedSeats({
        bookedSeats: req.body.bookedSeats
    })
    try{
        const bookedSeats = await booked.save()
        console.log(bookedSeats)
        res.json(bookedSeats)
    }catch(err){
        console.log(err)
        res.send('Error.......')
    }
})



router.delete('/:id', async(req,res) => {
    console.log(req.params.id)
    try{
        const bookedSeats = await BookedSeats.findByIdAndDelete(req.params.id)
        // movies.discription = req.body.discription
        const a1 = await bookedSeats.remove()
        res.json(a1)
    }catch(err){
        res.send('Error in deleting')
    }
})



module.exports = router






const express = require('express')
const router = express.Router()
const Screening = require('../models/screening')


router.get('/', async(req, res) => {
    console.log(req.query)
    try{
        const screenings = await Screening.find(req.query)
        .populate('screens.screen' )
        res.json(screenings)
    }catch(err) {
        res.send('Error ' + err)
    }
})


router.get('/:screeningId', async(req, res) =>{
    console.log(req.params)
    try{
        const screenings = await Screening.findById(req.params.screeningId)
        .populate('screens.screen')
        res.json(screenings)
    }catch(err) {
        res.send('Error ' + err)
    }
})


router.get(':id/', async(req, res) => {
    try{
        const screenings = await Screening.findById(req.params.id)
        // .populate('screen') 
        // .populate('movie')
    }catch(err){
        res.send('Error ', + err)
    }
})


router.post('/', async(req,res) => {
    const screenings = new Screening({
        movie: req.body.movie,
        screen: req.body.screen,
        time: req.body.time
    })
    try{
        const a1 = await screenings.save()
        // console.log(a1)
        res.json(a1)
    }catch(err){
        console.log(err)
        res.send('Error.......')
    }
})

// router.post('/all', async(req,res) => {
//     const deleteAll = await Screening.remove()
//     res.send('hello')
// })

// router.delete('/:id', async(req,res) => {
//     try{
//         const screenings = await Screening.findByIdAndDelete(req.params.id)
//         // movies.discription = req.body.discription
//         const a1 = await screenings.remove()
//         res.json(a1)
//     }catch(err){
//         res.send('Error in deleting')
//     }
// })

module.exports = router

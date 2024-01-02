const express = require('express')
const router = express.Router()
const Screen = require('../models/screen')

router.get('/', async(req,res) => {
    try{
        const screens = await Screen.find()
        res.json(screens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
        const screens = await Screen.findById(req.params.id)
        res.json(screens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    console.log(req.body)
    const screens = new Screen({
        screenNumber: req.body.screenNumber,
        rows: req.body.rows
    })
    try{
        const a1 = await screens.save()
        // console.log(a1)
        res.json(a1)
    }catch(err){
        console.log(err)
        res.send('Error.......')
    }
})

// router.post('/all', async (req, res) => {
//     const allDelete = await Screen.remove()
//     res.send("|hi")
// })

router.delete('/:id', async(req,res) => {
    console.log(req.params.id)
    try{
        const screens = await Screen.findByIdAndDelete(req.params.id)
        // movies.discription = req.body.discription
        const a1 = await screens.remove()
        res.json(a1)
    }catch(err){
        res.send('Error in deleting')
    }
})



module.exports = router






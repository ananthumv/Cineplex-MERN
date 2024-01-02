const express = require('express')
const router = express.Router()
const Ticket = require('../models/tickets')


router.get('/', async(req, res) => {
    try{
        const tickets = await Ticket.find()
        console.log(tickets)
        res.json(tickets)
    }catch(err){
        res.send('Error '+ err)
        res.send("'Error '+ err")
    }

})



router.post('/', async(req,res) => {
    const tickets = new Ticket({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        status: req.body.status,
        userId: req.body.userId,
        seatsSelected: req.body.seatsSelected
    })
    try{
        const a1 = await tickets.save()
        console.log(a1)
        res.json(a1)
    }catch(err){
        console.log(err)
        res.send('Error.......')
    }
})

router.get('/:userId', async(req, res) => {
    try{
        const tickets = await Ticket.find({ userId: req.params.userId } )
        console.log(tickets)
        res.json(tickets)
    }catch(err){
        res.send('Error '+ err)
        res.send("'Error '+ err")
    }

})




module.exports = router
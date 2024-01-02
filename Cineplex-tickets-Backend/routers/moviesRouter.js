const express = require('express')
const router = express.Router();
const Movie = require('../models/movies')



router.get('/', async(req,res) => {
    try{
        const movies = await Movie.find()
        res.json(movies)
    }catch(err) {
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const movies = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        director: req.body.director,
        script: req.body.script,
        duration: req.body.duration,
        summery: req.body.summery,
        image: req.body.image
    })
    try{
        const movie = await movies.save()
        // console.log(movie)
        res.json(movie)
    }catch(err){
        console.log(err)
        res.send('Error.......')
    }
})



router.get('/:id', async(req, res) => {
    try{
        const movies = await Movie.findById(req.params.id)
        res.json(movies)}
        catch(err) {
        res.send('Error ' + err)
    }
})

router.post("/", (req, res) => {
    var data = new Movie(req.body);
    data.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });

router.patch("/:id", async(req, res) => {
    const data = await Movie.findByIdAndUpdate( { _id: req.params.id},{
        title: req.body.title,
        genre: req.body.genre,
        director: req.body.director,
        script: req.body.script,
        duration: req.body.duration,
        summery: req.body.summery,
        image: req.body.image
    },{ new: true }).then((data) => {
        if (!data) {
            return res.status(404).send();
        }
        res.json(data);
    }).catch((error) => {
        res.status(500).send(error);
    })
    
    // .then(item => {
    // res.send("item saved to database");
    // })
    // .catch(err => {
    // res.status(400).send("unable to save to database");
    // });

    router.delete('/:id', async(req, res) => {
        try{
            const movies = await Movie.findByIdAndRemove(req.params.id)
            res.json(movies)}
            catch(err) {
            res.send('Error ' + err)
        }
    })

});



module.exports = router
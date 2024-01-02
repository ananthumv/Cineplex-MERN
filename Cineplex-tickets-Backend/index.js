const express = require('express')
var cors = require('cors')
const moviesRouter = require("./routers/moviesRouter")
const screeningRouter = require("./routers/screeningRouter")
const screensRouter = require('./routers/screenRouter')
const bookingRouter = require('./routers/bookingRouter')
const userRouter = require('./routers/userRouter')
const bookedSeatsRouter = require('./routers/bookedSeatsRouter')
const { Model } = require('./model')
const model = new Model()




const mongoose = require('mongoose')


main().catch(err => {
  console.log(`OH NO! MONGO CONNECTION ERROR!`)
  console.log(err)
})

async function main() {
  mongoose.set('strictQuery', false)
  await mongoose.connect('mongodb+srv://ananthumv8:ananthumv8@cluster1.eguuxrs.mongodb.net/practiceDB?retryWrites=true&w=majority')
}

const app = express()
app.use(cors())
app.use(express.json())
const port = 9000

app.use("/movies", moviesRouter)
app.use("/screening", screeningRouter)
app.use('/screen',screensRouter)
app.use('/booking',bookingRouter)
app.use('/users',userRouter)
app.use('/bookedSeats',bookedSeatsRouter)




app.get ('/seats', (req, res) => {
  res.json(model.getData())
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
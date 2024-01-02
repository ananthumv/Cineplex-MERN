const mongoose = require('mongoose')


// main().catch(err => {
//   console.log(`OH NO! MONGO CONNECTION ERROR!`)
//   console.log(err)
// })

// async function main() {
//   await mongoose.connect('mongodb+srv://ananthumv8:ananthumv8@cluster1.eguuxrs.mongodb.net/practiceDB?retryWrites=true&w=majority')
// }
const { Schema } = mongoose



const movieSchema = new mongoose.Schema({

  title: String,
  genre: String,
  director: String,
  duration: String,
  summery: String,
  image: String
})


const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie




//   Movie.insertMany(
//     [{ title: "Black Adam",
//       director: "Jaume Collet Serra",
//       genre: "Action,Fantasy,Sci-Fi",
//       summery: "A slave-turned-god, Teth-Adam (Dwayne Johnson) breaks free of his prison and fights to save his homeland from an ancient evil.",
//       duration: "2h 5m",
//       image: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/black-adam-et00117411-1671174379.jpg"},
//     { title: "Avatar: The Way of Water",
//       director: "James Cameron",
//       genre: "Action,Adventure,Fantasy,Sci-Fi",
//       summery: "Set more than a decade after the events of the first film, 'Avatar The Way of Water' begins to tell the story of the Sully family (Jake, Neytiri and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive and the tragedies they endure.",
//       duration: "3h 12m",
//       image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avatar-the-way-of-water-et00037264-1670850986.jpg"},
//     { title: "Top Gun: Maverick",
//       director: "Joseph Kosinski",
//       genre: "Action,Drama",
//       summery: "Set 30 years after the events of `Top Gun` (1986), the sequel hinges on Captain Pete Mitchell`s (Tom Cruise) attempts to come to terms with his past, while training his friend`s son (Miles Teller) for a dangerous mission.",
//       duration: "2h 11m",
//       image: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/top-gun-maverick-et00076943-1664258440.jpg"},
//     {
//     title: "Kompromat",
//     director: "Jerome Salle",
//     genre: "Drama,Thriller",
//     summery: "Accused of a terrible crime in a plot orchestrated by Russia's FSB, a French diplomat must become a man of action in order to escape.",
//     duration: "2h 7m",
//     image: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/kompromat-et00348942-1673004346.jpg"
//     }]
// ).then(function(){
//     console.log("Data inserted")  // Success
// }).catch(function(error){
//     console.log(error)      // Failure
// });


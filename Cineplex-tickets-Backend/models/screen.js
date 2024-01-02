const mongoose = require('mongoose')

const screenSchema = new mongoose.Schema({

    screenNumber: {
        type: String
        },

    row: [{
        rowId: String,
        noOfSeats: Number
    }]
})



const Screen = mongoose.model('Screen',screenSchema)
module.exports = Screen


// Screen.insertMany([{
//         screenNumber: "1",
//         row:
//         [
//             {
//                 rowId: "A",
//                 noOfSeats: 20
//             },
//             {
//                 rowId: "B",
//                 noOfSeats: 20
//             },
//             {
//                 rowId: "C",
//                 noOfSeats: 20
//             },
//             {
//                 rowId: "D",
//                 noOfSeats: 20
//             },
//             {
//                 rowId: "E",
//                 noOfSeats: 20
//             },
//             {
//                 rowId: "F",
//                 noOfSeats: 20
//             },
//         ]
//    },
//    {
//     screenNumber: "2",
//     row:
//     [
//         {
//             rowId: "A",
//             noOfSeats: 20
//         },
//         {
//             rowId: "B",
//             noOfSeats: 20
//         },
//         {
//             rowId: "C",
//             noOfSeats: 20
//         },
//         {
//             rowId: "D",
//             noOfSeats: 20
//         },
//         {
//             rowId: "E",
//             noOfSeats: 20
//         },
//         {
//             rowId: "F",
//             noOfSeats: 20
//         },
//     ]
// },
// {
//     screenNumber: "3",
//     row:
//     [
//         {
//             rowId: "A",
//             noOfSeats: 20
//         },
//         {
//             rowId: "B",
//             noOfSeats: 20
//         },
//         {
//             rowId: "C",
//             noOfSeats: 20
//         },
//         {
//             rowId: "D",
//             noOfSeats: 20
//         },
//         {
//             rowId: "E",
//             noOfSeats: 20
//         },
//         {
//             rowId: "F",
//             noOfSeats: 20
//         },
//     ]
// },
// {
//     screenNumber: "4",
//     row:
//     [
//         {
//             rowId: "A",
//             noOfSeats: 20
//         },
//         {
//             rowId: "B",
//             noOfSeats: 20
//         },
//         {
//             rowId: "C",
//             noOfSeats: 20
//         },
//         {
//             rowId: "D",
//             noOfSeats: 20
//         },
//         {
//             rowId: "E",
//             noOfSeats: 20
//         },
//         {
//             rowId: "F",
//             noOfSeats: 20
//         },
//     ]
// }

// ]).then(function(){
//       console.log("Data inserted")  
//   }).catch(function(error){
//       console.log(error)      
//   })
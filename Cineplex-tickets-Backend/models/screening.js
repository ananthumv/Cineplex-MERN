const mongoose = require('mongoose')

const screeningSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true
    },
    screens :[
        {
            screen: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Screen",
                required: true,
            },
            time: [
                {
                    type: String,
                    required: true
                }
            ]
        }
    ]
    
    
})

const Screening = mongoose.model('Screening', screeningSchema)
module.exports = Screening


// Screening.insertMany([
//     {
//         movie: '63fde06693ef75d48b5f79a6',
//         screens :[
//             {
//                 screen: '642c8f264c9ed3f6a103e575',
//                 time: ["07:30 am", "01:30 pm", "04:30 pm", "10:30 pm"]
//             },
//             {
//                 screen: '642c8f264c9ed3f6a103e57c',
//                 time: ["10:30 am", "03:30 pm", "07:30 pm"]
//             },
//             {
//                 screen: "642c8f264c9ed3f6a103e58a",
//                 time: [ "12:30 pm", "09:30 pm"]
//             }
//         ]
//     },
//     {
//         movie: '63fde06693ef75d48b5f79a7',
//         screens :[
//             {
//                 screen: "642c8f264c9ed3f6a103e57c",
//                 time: ["12:30 pm", "09:30 pm"]
//             }, 
//             {
//                 screen: "642c8f264c9ed3f6a103e583",
//                 time: ["07:30 am", "01:30 pm", "04:30 pm", "10:30 pm"]
//             },
//             {
//                 screen: "642c8f264c9ed3f6a103e58a",
//                 time: ["10:30 am", "03:30 pm", "07:30 pm"]
//             }
//         ]
//     },
//     {
//         movie: '63fde06693ef75d48b5f79a8',
//         screens :[
//             {
//                 screen: "642c8f264c9ed3f6a103e575",
//                 time: ["10:30 am", "03:30 pm"]
//             },
//             {
//                 screen: "642c8f264c9ed3f6a103e583",
//                 time: ["10:30 am", "01:30 pm", "07:30 pm"]
//             },
//             {
//                 screen: "642c8f264c9ed3f6a103e58a",
//                 time: ["07:30 am",  "10:30 pm"]
//             }
//         ]
//     },
//     {
//         movie: '63fde06693ef75d48b5f79a9',
//         screens :[
//             {
//                 screen: "642c8f264c9ed3f6a103e575",
//                 time: ["07:30 am", "01:30 pm", "04:30 pm", "10:30 pm"]
//             },
//             {
//                 screen: "642c8f264c9ed3f6a103e57c",
//                 time: ["07:30 am", "10:30 pm"]
//             },
//             {
//                 screen: "642c8f264c9ed3f6a103e583",
//                 time: ["10:30 am", "03:30 pm", "07:30 pm", "11:30 pm"]
//             }
//         ]
//     }
// ])





// Screening.insertMany([
//     {
//         movie: '63fde06693ef75d48b5f79a6',
//         screens :[
//             {
//                 screen: '642c8f264c9ed3f6a103e575',
//                 time: ["07:30 am", "01:30 pm", "04:30 pm", "10:30 pm"]
//             },
//             {
//                 screen: '642c8f264c9ed3f6a103e57c',
//                 time: ["10:30 am", "03:30 pm", "07:30 pm"]
//             },
//             {
//                 screen: "642c8f264c9ed3f6a103e58a",
//                 time: [ "12:30 pm", "09:30 pm"]
//             }
//         ]
//     },
//     {
//         movie: '63fde06693ef75d48b5f79a7',
//         screens :[
//             {
//                 screen: "642c8f264c9ed3f6a103e57c",
//                 time: ["12:30 pm", "09:30 pm"]
//             }, 
//             {
//                 screen: "642c8f264c9ed3f6a103e583",
//                 time: ["07:30 am", "01:30 pm", "04:30 pm", "10:30 pm"]
//             },
//             {
//                 type: "642c8f264c9ed3f6a103e58a",
//                 time: ["10:30 am", "03:30 pm", "07:30 pm"]
//             }
//         ]
//     },
//     {
//         movie: '63fde06693ef75d48b5f79a8',
//         screens :[
//             {
//                 screen: "642c8f264c9ed3f6a103e575",
//                 time: ["10:30 am", "03:30 pm"]
//             },
//             {
//                 screen: "642c8f264c9ed3f6a103e583",
//                 time: ["10:30 am", "01:30 pm", "07:30 pm"]
//             },
//             {
//                 screen: "642c8f264c9ed3f6a103e58a",
//                 time: ["07:30 am",  "10:30 pm"]
//             }
//         ]
//     },
//     {
//         movie: '63fde06693ef75d48b5f79a9',
//         screens :[
//             {
//                 screen: "642c8f264c9ed3f6a103e575",
//                 time: ["07:30 am", "01:30 pm", "04:30 pm", "10:30 pm"]
//             },
//             {
//                 screen: "642c8f264c9ed3f6a103e57c",
//                 time: ["07:30 am", "10:30 pm"]
//             },
//             {
//                 screen: "642c8f264c9ed3f6a103e583",
//                 time: ["10:30 am", "03:30 pm", "07:30 pm", "11:30 pm"]
//             }
//         ]
//     }
//   ]).then(function(){
//       console.log("Data inserted")  // Success
//   }).catch(function(error){
//       console.log(error)      // Failure
//   });
  

import axios from "axios"
import React, {useEffect, useState} from 'react'
import styles from '../Styles/Seat.module.css'
import { useParams, useNavigate } from "react-router-dom";


function Seats() {
    const params = useParams()
    const [rows, setRows] = useState(null)
    const [selectedSeats, setSelectedSeats] = useState([])
    const [bookedSeats, setBookedSeats] = useState([])
    const navigate = useNavigate()



    

    
useEffect(() => {  
    axios.get('http://localhost:9000/screen/'+ params.id)
    .then(res => {
        const rowsData = res.data.row.map(row => {
                const seats = Array(row.noOfSeats).fill("Available")
                return { rowId: row.rowId, seats: seats }
            }).flat()
        setRows(rowsData)
    })
    localStorage.setItem('seats', JSON.stringify(selectedSeats))
    console.log(selectedSeats)

    axios.get('http://localhost:9000/bookedSeats')
    .then(res => {
      console.log(res)
      setBookedSeats(res)
    })

}, [params.id,selectedSeats ])



function selectSeat(id, no){
  console.log(bookedSeats)
    setRows(prevRows => {
      return prevRows.map(row => {
        if (row.rowId === id) {
          const updatedSeats = row.seats.map((seat, index) => {
            if (index === no) {
              return seat === "Available" ? "Selected" : "Available";
            } else {
              return seat;
            }
          });
          return { ...row, seats: updatedSeats };
        } else {
          return row;
        }
      });
    });
  }


  // function bookedSeat(){
  //   console.log(bookedSeats)
  // }


  function bookSeats() {
    let isSeatSelectionSuccess = false;
    let newSelectedSeats = [];

    rows.map((row) => {
      return row.seats
        .map((seat, index) => {
          if (seat === 'Selected') {
            newSelectedSeats.push({ rowId: row.rowId, seatIndex: index });
            isSeatSelectionSuccess = true
          }
          return null;
        })
    })

    if(!isSeatSelectionSuccess){
        alert('no seats selected')
        return;
    }

    setSelectedSeats(newSelectedSeats);
    localStorage.setItem('seats', JSON.stringify(newSelectedSeats));
    navigate(`/Booking`);
}


    
  

  return (
    <div id={styles.root}>
      {rows&& bookedSeats&&
            rows.map(row=>{ 
                return<>
                    <div className={styles.seats}>
                        <div className={styles.rowId}>{row.rowId}</div>
                        {row.seats.map((seat, index)=>{
                            return  seat === 'Available' ? 
                            <div onClick={()=>selectSeat(row.rowId, index )} className={styles.seat}>{index}</div> 
                            : seat === 'Selected' ? 
                            <div onClick={()=>selectSeat(row.rowId, index )}  className={`${styles.seat} ${styles.selected}`} >{index}</div>
                            :
                            <div onClick={()=>selectSeat(row.rowId, index )}  className={`${styles.seat} ${styles.selected}`} >{index}</div>
                        })}
                </div>
                </> 
            })
        }
        <div id={styles.screen}>

        </div>

        <button className={styles.bookButton} onClick={bookSeats}>
            Book Tickets
        </button>
    </div>
  )
}

export default Seats






        const rows =[
        {
            rowId : 'A',
            seats :["Available","Available","Available","Available","Available","Available","Available","Available","Available"]
        },
        {
            rowId : 'B',
            seats :["Available","Available","Available","Available","Available","Available","Available","Available","Available"]
        },
        {
            rowId : 'C',
            seats :["Available","Available","Available","Available","Available","Available","Available","Available","Available"]
        },
        {
            rowId : 'D',
            seats :["Available","Available","Available","Available","Available","Available","Available","Available","Available"]
        }
    ]





    return  row.rowId === bookedSeats.rowId&& index === bookedSeats.seatIndex ?
    <div onClick={()=>selectSeat(row.rowId, index )} className={styles.seat}>{index}</div>:<div onClick={()=>selectSeat(row.rowId, index )} className={styles.seat}>{index}</div>


    {row.seats.map((seat, index)=>{
      console.log(bookedSeats)
      return bookedSeats.map(data=>{
        return   row.rowId === data.rowId&& index === data.seatIndex ?
        <div  className={`${styles.seat} ${styles.selected}`}>{index}</div>
        :
        <div  className={styles.seat}>{index}</div>
      })
     
    })} 
    //     return  seat === 'Available' ? 
    //     <div onClick={()=>selectSeat(row.rowId, index )} className={styles.seat}>{index}</div> 
    //     : seat === 'Selected' ? 
    //     <div onClick={()=>selectSeat(row.rowId, index )}  className={`${styles.seat} ${styles.selected}`} >{index}</div>
    //     :
    //     <div onClick={()=>selectSeat(row.rowId, index )}  className={`${styles.seat} ${styles.selected}`} >{index}</div>
    // 
 










        // const rows =[
    //     {
    //         rowId : 'A',
    //         seats :["Available","Available","Available","Available","Available","Available","Available","Available","Available"]
    //     },
    //     {
    //         rowId : 'B',
    //         seats :["Available","Available","Available","Available","Available","Available","Available","Available","Available"]
    //     },
    //     {
    //         rowId : 'C',
    //         seats :["Available","Available","Available","Available","Available","Available","Available","Available","Available"]
    //     },
    //     {
    //         rowId : 'D',
    //         seats :["Available","Available","Available","Available","Available","Available","Available","Available","Available"]
    //     }
    // ]


    seat === 'Available' ? 
    <div onClick={()=>selectSeat(row.rowId, index )} className={styles.seat}>{index}</div> 
    : seat === 'Selected' ? 
    <div onClick={()=>selectSeat(row.rowId, index )}  className={`${styles.seat} ${styles.selected}`} >{index}</div>
    :
    <div onClick={()=>selectSeat(row.rowId, index )}  className={`${styles.seat} ${styles.selected}`} >{index}</div>


  return ( 
    {rows&& bookedSeatsData &&
      rows.map(row=>{ 
        return({row.seats.map((seat, index)=>{
            // console.log(seat, index)
            return {bookedSeatsData.map(booked=>{
              console.log( booked)
              return booked.bookedSeats.map( data=>{
                  console.log( data.seatIndex)
                  return row.rowId === data.rowId&& index === data.seatIndex ?
                  seat = "Booked"
                  :seat = "Available"
              }) 
            })} 
          })
        })
      })
    }
  )




  return bookedSeatsData.map(booked=>{
    console.log( booked)
    return booked.bookedSeats.map( data=>{
      console.log( data.seatIndex)
      return row.rowId === data.rowId&& index === data.seatIndex ?
      seat = "Booked"
      :seat = "Available" }) 
    })




    rows&& bookedSeatsData &&setRows(prevRows => {
      return prevRows.map(row => {
        // if (row.rowId === id) {
          const updatedSeats = row.seats.map((seat, index) => {
            return bookedSeatsData.map(booked=>{
              console.log( booked)
              return booked.bookedSeats.map( data=>{
                  console.log( data.seatIndex)
                  if ( row.rowId === data.rowId && index === data.seatIndex) {
                    return seat = "Booked"
                  } else {
                    return seat
                  }
                });
              }) 
            })
          return { ...row, seats: updatedSeats }
        // } else {
        //   return row;
        // }
      });
    });
    


    rows&& bookedSeatsData &&
    rows.map(row=>{ 
      return(row.seats.map((seat, index)=>{
          // console.log(seat, index)
         
        })
      )
    })
















    
    // rows && bookedSeatsData && setRows(prevRows => {
    //   return prevRows.map(row => {
    //     const updatedSeats = row.seats.map((seat, index) => {
    //       return bookedSeatsData.map(booked => {
    //         return booked.bookedSeats.map(data => {
    //           if (row.rowId === data.rowId && index === data.seatIndex) {
    //             return "Booked"; // directly return "Booked" to update the seat status
    //           } else {
    //             return seat;
    //           }
    //         });
    //       })[0][0]; // get the first item in the nested array
    //     })
    //     return { ...row, seats: updatedSeats }
    //   });
    // });
    

    
    // rows&& bookedSeatsData &&setRows(prevRows => {
    //   return prevRows.map(row => {
    //     // if (row.rowId === id) {
    //       const updatedSeats = row.seats.map((seat, index) => {
    //         return bookedSeatsData.map(booked=>{
    //           console.log( seat)
    //           return booked.bookedSeats.map( data=>{
    //               console.log( data.seatIndex ,data.rowId, row.rowId,index)
    //               if ( row.rowId === data.rowId && index === data.seatIndex) {
    //                 return seat = "Booked"
    //               } else {
    //                 return seat
    //               }
    //             });
    //           }) 
    //         })
    //       return { ...row, seats: updatedSeats }
    //   });
    // });

    // rows&& bookedSeatsData &&
    // rows.map(row=>{ 
    //   return(row.seats.map((seat, index)=>{
    //       // console.log(seat, index)
    //      return bookedSeatsData.map(booked=>{
    //         console.log( booked)
    //         return booked.bookedSeats.map( data=>{
    //             console.log( data.seatIndex)
    //             return row.rowId === data.rowId&& index === data.seatIndex ?
    //            setRows({...rows, seats: "Booked"}) 
    //             : seat 
    //         }) 
    //       })
    //     })
    //   )
    // })
    console.log(rows)







// function bookedSeat(){
//   return ( 
//     rows&& bookedSeatsData &&
//       rows.map(row=>{ 
//         return(row.seats.map((seat, index)=>{
//             // console.log(seat, index)
//            return bookedSeatsData.map(booked=>{
//               console.log( booked)
//               return booked.bookedSeats.map( data=>{
//                   console.log( data.seatIndex)
//                   return row.rowId === data.rowId&& index === data.seatIndex ?
//                   seat = "Booked"
//                   :seat = "Available"
//               }) 
//             })
//           })
//         )
//       })
    
//   )
// }




// rows && bookedSeatsData && setRows(prevRows => {
//   return prevRows.map(row => {
//     const updatedSeats = row.seats.map((seat, index) => {
//       return bookedSeatsData.map(booked => {
//         return booked.bookedSeats.map(data => {
//           if (row.rowId === data.rowId && index === data.seatIndex) {
//             return "Booked"; // directly return "Booked" to update the seat status
//           } else {
//             return seat;
//           }
//         });
//       })[0][0]; // get the first item in the nested array
//     })
//     return { ...row, seats: updatedSeats }
//   });
// });










    setRows(prevRows => {
      return prevRows.map(row => {
          const updatedSeats = row.seats.map((seat, index) => {
            for (let i=0;i=bookedSeatsData.lenght;i++){
              for(let j=0;j=bookedSeatsData.bookedSeats.lenght;j++){
                if (row.rowId === j.rowId&&index === j.seatIndex){
                  console.log(row.rowId,j.rowId,index,j.seatIndex)
                }
              }
            }
              return seat = "Booked";
          });
          return { ...row, seats: updatedSeats };
      });
    });




    //////////////////////////////////////////////////////

    return   seat === 'Booked'?<div onClick={()=>(row.rowId, index )} className={`${styles.seat} ${styles.booked}`}>{index}</div> 
                            : seat === 'Selected' ? <div onClick={()=>selectSeat(row.rowId, index )}  className={`${styles.seat} ${styles.selected}`} >{index}</div>
                            : <div onClick={()=>selectSeat(row.rowId, index )} className={styles.seat}>{index}</div>






                            
rows && bookedSeatsData && rows.row.map(row => { 
  setRowSeats(...rowSeats,{...rowSeats, rowId : row.rowId} )
  // console.log(row.rowId);
  // console.log(row.noOfSeats);
  for (let i = 0; i < row.noOfSeats; i++) {
    for (let j = 0; j < bookedSeatsData.length; j++) {
       for(let k=0;k<bookedSeatsData[j].bookedSeats.length;k++){
        // console.log(bookedSeatsData[j].bookedSeats.length);
        if (row.rowId === bookedSeatsData[j].bookedSeats[k].rowId&&i === bookedSeatsData[j].bookedSeats[k].seatIndex){
        //  console.log(row.rowId,bookedSeatsData[j].bookedSeats[k].rowId,i,bookedSeatsData[j].bookedSeats[k].seatIndex)
        setRowSeats(...rowSeats,{...rowSeats, seat : "Booked"} )
       }setRowSeats(...rowSeats,{...rowSeats, seat : "Available"} )
      }
    }
  }
  return setUpdatedSeats([...rowSeats, rowSeats]); // add a default return statement if no matches are found
});

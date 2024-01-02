
import axios from "axios"
import React, {useEffect, useState} from 'react'
import styles from '../Styles/Seat.module.css'
import { useParams, useNavigate } from "react-router-dom";


function Seats() {
    const params = useParams()
    const [rows, setRows] = useState(null)
    const [selectedSeats, setSelectedSeats] = useState([])
    const [bookedSeatsData, setBookedSeatsData] = useState(null)
    const [updatedSeats, setUpdatedSeats]  = useState(null)
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
    // console.log(selectedSeats)


    axios.get('http://localhost:9000/bookedSeats')
    .then(res => {
      // console.log(res.data)
      setBookedSeatsData(res.data)
    })
    console.log(bookedSeatsData)
  }, [params.id,selectedSeats ])



 



function selectSeat(id, no){
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
          return { ...row, seats: updatedSeats }
        } else {
          return row;
        }
      });
    });
  }


  // rows && bookedSeatsData && setRows(prevRows => {
  //   return prevRows.map(row => {
  //     const updatedSeats = row.seats.map((seat, index) => {
  //         return "Booked" 
  //     })
  //     return { ...row, seats: updatedSeats }
  //   });
  // });

// function bookedSeat(){
    
//   }


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
    // navigate(`/Booking`);
}




rows&& bookedSeatsData &&console.log(rows)
    console.log(bookedSeatsData)
    return (<div id={styles.root}>
      {rows&& bookedSeatsData &&
            rows.map(row=>{ 
                return<>
                    <div className={styles.seats}>
                      <div className={styles.rowId}>{row.rowId}</div>
                          { row.seats.map((seat, index)=>{
                            return   seat === 'Booked'?<div onClick={()=>(row.rowId, index )} className={`${styles.seat} ${styles.booked}`}>{index}</div> 
                            : seat === 'Selected' ? <div onClick={()=>selectSeat(row.rowId, index )}  className={`${styles.seat} ${styles.selected}`} >{index}</div>
                            : <div onClick={()=>selectSeat(row.rowId, index )} className={styles.seat}>{index}</div>
                        })}
                        {/* {row.seats.map((seat, index)=>{
                         <div  className={`${styles.seat} ${styles.selected}`}></div>}} */}
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
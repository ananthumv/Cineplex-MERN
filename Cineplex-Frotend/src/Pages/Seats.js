import axios from "axios";
import React, { useEffect, useState } from 'react';
import styles from '../Styles/Seat.module.css';
import { useParams, useNavigate } from "react-router-dom";

function Seats() {
  const params = useParams();
  const [rows, setRows] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState(null);
  const [rowSeats, setRowSeats] = useState([]);
  const [bookedSeatsData, setBookedSeatsData] = useState([]);
  const [updatedSeats, setUpdatedSeats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:9000/screen/' + params.id)
      .then(res => {
        setRows(res.data);
      });

    axios.get('http://localhost:9000/bookedSeats')
      .then(res => {
        setBookedSeatsData(res.data);
      });
  }, [params.id]);

  useEffect(() => {
    if (rows && bookedSeatsData) {
      const newRows = rows.row.map(row => {
        const seats = [];
        for (let i = 0; i < row.noOfSeats; i++) {
          let isBooked = false;
          for (let j = 0; j < bookedSeatsData.length; j++) {
            for (let k = 0; k < bookedSeatsData[j].bookedSeats.length; k++) {
              if (row.rowId === bookedSeatsData[j].bookedSeats[k].rowId && i === bookedSeatsData[j].bookedSeats[k].seatIndex) {
                seats.push("Booked");
                isBooked = true;
                break;
              }
            }
            if (isBooked) {
              break;
            }
          }
          if (!isBooked) {
            seats.push("Available");
          }
        }
        return { rowId: row.rowId, seats: seats };
      });
      setRowSeats(newRows);
    }
  }, [rows, bookedSeatsData]);

  useEffect(() => {
    if (rowSeats.length > 0) {
      setUpdatedSeats(rowSeats);
    }
  }, [rowSeats]);

  console.log(updatedSeats);



  function selectSeat(id, no){
    setRowSeats(prevRows => {
      return prevRows.map(row => {
        if (row.rowId === id) {
          const updatedRow = row.seats.map((seat, index) => {
            if (index === no) {
              return seat === "Available" ? "Selected" : "Available";
            } else {
              return seat;
            }
          });
          return { ...row, seats: updatedRow }
        } else {
          return row;
        }
      });
    });
  }


  function bookSeats() {
    let isSeatSelectionSuccess = false;
    let newSelectedSeats = [];

    rowSeats.map((row) => {
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




  return (<div id={styles.root}>
    {rows&& bookedSeatsData &&
          rowSeats.map(row=>{ 
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

export default Seats;

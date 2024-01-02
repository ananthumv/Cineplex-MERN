
import axios from "axios"
import React, {useEffect, useState} from 'react'
import styles from '../Styles/Seat.module.css'
import { useParams, useNavigate } from "react-router-dom";


function Seats() {
    const params = useParams()
    const [rows, setRows] = useState(null)
    const [selectedSeats, setSelectedSeats] = useState(null)
    const [rowSeats, setRowSeats] = useState([])
    const [bookedSeatsData, setBookedSeatsData] = useState([])
    const [updatedSeats, setUpdatedSeats]  = useState([])
    const navigate = useNavigate()



    

    
useEffect(() => {  
    axios.get('http://localhost:9000/screen/'+ params.id)
    .then(res => {
        // const rowsData = res.data.row.map(row => {
        //         const seats = Array(row.noOfSeats).fill("Available")
        //         return { rowId: row.rowId, seats: seats }
        //     }).flat()
        setRows(res.data)
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

  rows && bookedSeatsData && rows.row.forEach(row => { 
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
    setRowSeats([...rowSeats, {rowId: row.rowId, seats: seats}]);
  });
  
  useEffect(() => {
    if (rowSeats.length > 0) {
      setUpdatedSeats(rowSeats);
    }
  }, [rowSeats]);
  
  console.log(updatedSeats);
  




rows&& bookedSeatsData && updatedSeats &&console.log(updatedSeats)
    console.log(bookedSeatsData)
    return 
}

export default Seats
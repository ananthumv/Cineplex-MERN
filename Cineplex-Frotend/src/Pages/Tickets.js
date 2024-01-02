import React, {useState,useEffect} from 'react'
import styles from '../Styles/Tickets.module.css'
import  axios from 'axios'
import { useParams } from 'react-router-dom'
// useParams

function Tickets() {


  const [ticketsData, setTicketsData] = useState(null)
  const params = useParams()

    useEffect(()=>{
        axios.get('http://localhost:9000/booking/'+params.id)
        .then(res=>{
            setTicketsData(res.data)
        }).catch(err => {
          console.log(err);
        });
    }, [params.id])
  return (
    <div className={styles.container}>
      <div className={styles.ticketsList}>
      { ticketsData&&ticketsData.map(data => 
      {
        console.log(data)
          return <div className={styles.tickets} >
                    <p className={styles.pTickets}>Name : {data.name}</p>
                     <p className={styles.pTickets}> Emai : {data.email}</p>
                      <p className={styles.pTickets}> Phone Number :{data.number}</p> 
                    Seat No: {data.seatsSelected.map(seatsSelected=>{
                      return <>
                        {seatsSelected.rowId+seatsSelected.seatIndex+", "}
                    </>
                  })}
              </div>
            })}
      </div>
      
    </div>
  )

}

export default Tickets
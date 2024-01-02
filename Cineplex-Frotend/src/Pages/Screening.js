import axios from "axios"
import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom"
import styles from '../Styles/Screening.module.css'

function Screening() {
    const params = useParams()
    const [screenData, setScreenData] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{  
        axios.get('http://localhost:9000/screening?movie='+params.id)
        .then(res => {
         console.log(res.data)
           setScreenData(res.data)
        }).catch(err => {
          console.log(err);
      });
    },[params.id])

    function Movies(){
       return screenData && screenData.map(data => 
                    {
                        // console.log(data._id)
                        return data.screens.map(screens=>{
                            // console.log(screens.screen)
                            return <div className={styles.screenings}>
                                        <h4 className={styles.screenNumber}>SCREEN {screens.screen.screenNumber}</h4>
                                  <div className={styles.timeDiv}>
                                    {screens.time.map(time=>{
                                      return <p onClick={()=>navigate(`/Seats/${screens.screen._id}`)} className={styles.time}>{time}</p>               
                                    })}
                                  </div>
                            </div>
                        })
                    }
                )
                // `seats/${screens.screen._id}`
    
    }


  return (
    <div id={styles.screenRoot}>
       <Movies />
    </div>
  )
}

export default Screening
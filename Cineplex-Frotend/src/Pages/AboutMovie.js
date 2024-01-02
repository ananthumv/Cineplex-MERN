import axios from "axios";
import styles from '../Styles/AboutMovie.module.css';
import Navbar from "../Components/Navbar";
import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom";


function AboutMovie(){

  const params = useParams()
  const [movieData, setMovieData] = useState(null);
  const navigate = useNavigate()


    useEffect(()=>{  
        axios.get('http://localhost:9000/movies/'+params.id)
        .then(res => {
          // console.log(res.data)
          setMovieData(res.data)
        }).catch(err => {
          console.log(err);
      });
    },[params.id])

     const MovieDetails = () =>{
 
      return(
        <>
         {movieData&&
         <>         
          <div className={styles.movieInfo}>
            <div className={styles.movieImage}>
              <img className={styles.image} src= {movieData.image} alt='Loding'></img>
            </div>
            <div className={styles.movieDetails}>
              <h1 className={styles.titleH1}>{movieData.title}</h1>
              <p className={styles.movieDetailsP}>{movieData.genre}</p>
              <p>{movieData.duration}</p>
              <button className={styles.bookButton} onClick={()=> navigate(`/Screening/${params.id}`)}>Book Tickets</button>
            </div>
          </div>
          <div className={styles.aboutMovie}>
            <h4 className={styles.aboutMovieH4}>About the Movie</h4>
            <p>{movieData.summery}</p>
            <h4 className={styles.aboutMovieH4}>Directors</h4>
            <p>{movieData.director}</p>
          </div>
          </>}
        </>
      ) 
    }


  return (
    <>
     <MovieDetails />  
    </>
  )
}

export default AboutMovie
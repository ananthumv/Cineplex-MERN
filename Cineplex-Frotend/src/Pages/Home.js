// import React, { useEffect } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
// import Landing from "./components/layout/Landing";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import PrivateRoute from "./routing/PrivateRoute";
// import NotFound from "./components/NotFound";
// import Dashboard from "./components/Dashboard";
// import setAuthToken from "./utils/setAuthToken";
import store from "../store";
import { loadUser } from "../Actions/auth";
import axios from "axios";
import React, { useState, useEffect } from 'react'
import styles from '../Styles/Home.module.css';
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import setAuthToken from "../Utils/setAuthToken";


if (localStorage.token) {
	setAuthToken(localStorage.token);
}

// function App() {
// 	useEffect(() => {
// 		store.dispatch(loadUser());
// 	}, []);
// 	return (
// 		<>
// 			<div className="App">
// 				<Router>
// 					<Navbar />
// 					<Switch>
// 						<Route exact path="/" component={Landing} />
// 						<PrivateRoute exact path="/dashboard" component={Dashboard} />
// 						<Route exact path="/register" component={Register} />
// 						<Route exact path="/login" component={Login} />
// 						<Route exact path="" component={NotFound} />
// 					</Switch>
// 				</Router>
// 			</div>
// 		</>
// 	);
// }

// export default App;






function Home() {
  const [movieData, setMovieData] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
		store.dispatch(loadUser());
	}, []);
  useEffect(()=>{
    axios.get('http://localhost:9000/movies')
    .then(res => {
      // console.log(res)  
      setMovieData(res.data)
    }).catch(err => {
      console.log(err);
  });
  },[])

  // href={`/AboutMovie/${data._id}`}

  function Movies(){
    return movieData.map(data => (
          <div className={styles.movie} key={data._id} >
            <img onClick={()=>navigate(`/AboutMovie/${data._id}`)}className={styles.image} src = {data.image} alt="loading.."></img>
            <p className={styles.title} >{data.title}</p>
            <p className={styles.genre} >{data.genre}</p>
            <p className={styles.duration} >{data.duratiion}</p>
            {/* <p className={styles.summery} > {data.summery}</p> */}
          </div>    
    )) 
  }



  return (
    <>
    <div className={styles.mainNav}>Cineplex.com</div>
      <Navbar />
      <div id={styles.root}>
        <Movies />
          {/* <div className="movie">
              <img className="image"  src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/malikappuram-et00348254-1671799612.jpg" alt="loading.."></img>
              <p className="title" >Malikappuram</p>
              <p className="genre" >Action,Adventure,Drama</p>
              <p className="duration" >2h 1m</p>
              <p className="summery" >Malikappuram is all about an intense desire of Kallu an 8 year old from Panchalimedu village.</p>
          </div> */}
      </div>
    </>
  )
}

export default Home









// import axios from "axios";
// import React, { useState, useEffect } from 'react'
// import styles from '../Styles/Home.module.css';
// import Navbar from "../Components/Navbar";
// import { useNavigate } from "react-router-dom";


// function Home() {
//   const [movieData, setMovieData] = useState([]);
//   const navigate = useNavigate()



//   useEffect(()=>{
//     axios.get('http://localhost:9000/movies')
//     .then(res => {
//       console.log(res)  
//       setMovieData(res.data)
//     }).catch(err => {
//       console.log(err);
//   });
//   },[])

//   // href={`/AboutMovie/${data._id}`}

//   function Movies(){
//     return movieData.map(data => (
//           <div className={styles.movie} key={data._id} >
//             <img onClick={()=>navigate(`/AboutMovie/${data._id}`)}className={styles.image} src = {data.image} alt="loading.."></img>
//             <p className={styles.title} >{data.title}</p>
//             <p className={styles.genre} >{data.genre}</p>
//             <p className={styles.duration} >{data.duratiion}</p>
//             {/* <p className={styles.summery} > {data.summery}</p> */}
//           </div>    
//     )) 
//   }



//   return (
//     <>
//     <div className={styles.mainNav}>Cineplex.com</div>
//       <Navbar />
//       <div id={styles.root}>
//         <Movies />
//           {/* <div className="movie">
//               <img className="image"  src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/malikappuram-et00348254-1671799612.jpg" alt="loading.."></img>
//               <p className="title" >Malikappuram</p>
//               <p className="genre" >Action,Adventure,Drama</p>
//               <p className="duration" >2h 1m</p>
//               <p className="summery" >Malikappuram is all about an intense desire of Kallu an 8 year old from Panchalimedu village.</p>
//           </div> */}
//       </div>
//     </>
//   )
// }

// export default Home
import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUser } from "../Actions/auth";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import styles from '../Styles/Booking.module.css'


const Booking = ({ isAuthenticated, loading, user, loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);



    const navigate = useNavigate()
 


  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
  
    // Read the form data
    // const form = e.target;
    // const formData = new FormData(form);

    const seatsSelected = JSON.parse(localStorage.getItem('seats'))

    const bookedSeats  = {
      bookedSeats: seatsSelected
    }
    axios.post('http://localhost:9000/bookedSeats', bookedSeats).then((response) => {
      console.log(response  )
      });

      const formData = {
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        number: e.target.elements.number.value,
        userId: user._id,
        seatsSelected : seatsSelected
      };
      axios.post('http://localhost:9000/booking', formData).then((response) => {
        console.log(formData);
      });
      
      navigate('/Tickets/'+user._id)

      // window.location.href = './';
  }

  return (
    // your booking page code
    <>
        { isAuthenticated && user&&
        <div className="booking-entry">
        <form method="post" onSubmit={handleSubmit}>
          <div className={styles.formField}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" defaultValue={user.name} required="" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" defaultValue={user.email} required="" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="number">Contact Number</label>
            <input type="number" id="number" name="number"defaultValue={user.number} required="" />
          </div>
          <div className={styles.buttonHolder}>
            <button type="submit" id={styles.button}>
              Submit
            </button>
          </div>
        </form>
    </div> }
        
    </>
    
  );
};

Booking.propTypes = {
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
  user: PropTypes.object,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.auth.user,
});

export default connect(mapStateToProps, { loadUser })(Booking);












// import React from 'react'
// import styles from '../Styles/Booking.module.css'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';



// function Booking() {
//   const navigate = useNavigate()
 


//   function handleSubmit(e) {
//     // Prevent the browser from reloading the page
//     e.preventDefault();
  
//     // Read the form data
//     // const form = e.target;
//     // const formData = new FormData(form);

//     const seatsSelected = JSON.parse(localStorage.getItem('seats'))

  
//       const formData = {
//         name: e.target.elements.name.value,
//         email: e.target.elements.email.value,
//         number: e.target.elements.number.value,
//         seatsSelected : seatsSelected
//       };
//       axios.post('http://localhost:9000/booking', formData).then((response) => {
//         console.log(formData);
//       });
//       navigate('/Tickets')

//       // window.location.href = './';
//   }



//   return (
//     <>
//          <div className="booking-entry">
//             <form method="post" onSubmit={handleSubmit}>
//               <div className={styles.formField}>
//                 <label htmlFor="name">Name</label>
//                 <input type="text" id="name" name="name" required="" />
//               </div>
//               <div className={styles.formField}>
//                 <label htmlFor="email">Email</label>
//                 <input type="email" id="email" name="email" required="" />
//               </div>
//               <div className={styles.formField}>
//                 <label htmlFor="number">Contact Number</label>
//                 <input type="number" id="number" name="number" required="" />
//               </div>
//               <div className={styles.buttonHolder}>
//                 <button type="submit" id={styles.button}>
//                   Submit
//                 </button>
//               </div>
//             </form>
// </div>

//     </>
   
//   )
// }

// export default Booking









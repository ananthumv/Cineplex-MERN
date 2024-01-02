import React, { useState } from "react";
import { connect } from "react-redux";
import { Link , Navigate } from "react-router-dom";
import { register } from "../Actions/auth";
import PropTypes from "prop-types";
import Alert from "../Components/Alert";
import { setAlert } from "../Actions/alert";
import "../Styles/Register.css"

const Register = ({ setAlert, register, isAuthenticated }) => {
	const [formData, setFormData] = useState({
    name: "",
    number: "",
		email: "",
		password: "",
		password2: "",
  });

	const { name, number, email, password, password2 } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		console.log("Form data", e);
		e.preventDefault();
		if (password !== password2) {
			setAlert("Password do not match", "danger");
		} else {
			register({ name, number, email, password });
		}
	};

	// Redirect if logged in
	if (isAuthenticated) {
		return <Navigate to="/" />;
	}

	return (
		<div className="register-form">
			<h1 className="heading">Sign Up</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Create Your Account
			</p>
			<Alert />
			<br />
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input
						type="text"
						placeholder="Name"
						name="name"
						value={name}
						onChange={(e) => onChange(e)}
					/>
				</div>
        <div className="form-group">
					<input
						type="tel"
						placeholder="Phone Number"
						name="number"
						value={number}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						minLength="6"
						value={password}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Confirm Password"
						name="password2"
						minLength="6"
						value={password2}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="Register" />
			</form>
			<p className="link">
				Already have an account? <Link to="/login">Sign In</Link>
			</p>
		</div>
	);
};

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);





























// import axios from 'axios';
// import styles from '../Styles/SignUp.module.css';
// import { useNavigate } from 'react-router-dom';


// function SignUp() {
  
// const navigate = useNavigate()


//   function handleSubmit(e) {
//     e.preventDefault();
//     let isValid = true

  
//     let nameInput = e.target.elements.name;
//     let numberInput = e.target.elements.number;
//     let passwordInput = e.target.elements.password;
//     let confirmPasswordInput = e.target.elements.confirmPassword;
  
//     if (nameInput.value.length <= 0 || nameInput.value.length >= 15) {
//       isValid = false
//       nameInput.setCustomValidity('Invalid name');
//       return
//     }
//      if (numberInput.value.length < 10 || numberInput.value.length > 12) {
//       isValid = false
//       numberInput.setCustomValidity('Invalid phone number');
//       return
//     } 
//     if (passwordInput.value !== confirmPasswordInput.value) {
//       isValid = false
//       confirmPasswordInput.setCustomValidity("Password doesn't match");
//       return
//     } 
     
//       let formData = {
//         name: nameInput.value,
//         email: e.target.elements.email.value,
//         number: numberInput.value,
//         password: passwordInput.value,
//       };
//       axios.post('http://localhost:9000/user', formData).then((response) => {
//         console.log(formData);
//       });
//       navigate('/')
    
//   }
  







//   return (
//     <div className={styles.container}>
//       <h2>Sign Up</h2>
//       <form method="post" onClick={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" placeholder="Enter your name" required />

//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" placeholder="Enter your email" required />

//         <label htmlFor="number">Phone Number:</label>
//         <input type="tel" id="number" name="number" placeholder="Enter your phone number" required />

//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" placeholder="Enter your password" required />

//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required />

//         <button id={styles.signUpBtn} type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;






//   // function handleSubmit(e) {
//   //   // Prevent the browser from reloading the page
//   //   e.preventDefault();

//   //   // Read the form data
//   //   // const form = e.target;
//   //   // const formData = new FormData(form);\
//   //   let isvalid = true

//   //       if (e.target.name.length <= 2 || e.target.name.length >= 15  )  {
//   //           isvalid = false
//   //          alert("Please fill this column")
//   //       }
//   //       if (e.target.number.length < 10 || e.target.number.length > 12 ) {
//   //           isvalid = false
//   //           alert("Enter a valid contact number")
//   //       }
//   //   if ( isvalid === true && e.target.password.value === e.target.confirmPassword.value){
//   //         const formData ={
//   //           name : e.target.name.value,
//   //           email : e.target.email.value,
//   //           number : e.target.number.value,
//   //           password : e.target.password.value
//   //         }
//   //         axios.post('http://localhost:9000/user',formData).then((response) => {
//   //           console.log(formData)
//   //         })
//   //         window.location.href ='./'
//   //   } else alert('password does\'t match' )


//   // }

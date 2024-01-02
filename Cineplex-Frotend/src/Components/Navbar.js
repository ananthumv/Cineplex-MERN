import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../Actions/auth";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/Navbar.module.css"


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const navigate = useNavigate()

	const authLinks = (
		<ul>
      {/* <ul>
        <li onClick={()=>navigate('/')}>Home</li>
        <li onClick={()=>navigate('/SignUp')}>About</li>
        <li onClick={()=>navigate('/SignUp')}>Contact Us</li>
      </ul> */}
			<li>
				<Link onClick={logout} to="/" replace>
					{/* <i className="fas fa-sign-out-alt"></i>{" "} */}
					<span> &nbsp;Logout</span>
				</Link>
			</li>
		</ul>
	);
	const guestLinks = (
		<ul >
			<li>
				<Link to="/register">Register</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</ul>
	);

	return (
		<nav>
			 <ul>
        <li onClick={()=>navigate('/')}>Home</li>
        <li onClick={()=>navigate('/SignUp')}>About</li>
        <li onClick={()=>navigate('/SignUp')}>Contact Us</li>
      </ul>
	  {console.log(isAuthenticated)}
      {!loading && (
				<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
			)}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
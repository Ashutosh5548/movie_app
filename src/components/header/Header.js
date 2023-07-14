import React from "react"
import "./Header.css"
import { Link,useNavigate } from "react-router-dom"
import { auth } from "../../firebase"
import { signOut } from 'firebase/auth';

const Header = () => {

    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="header">
            <div className="headerLeft">
                <img className="header__icon" src="https://icon-library.com/images/movie-icon-png/movie-icon-png-2.jpg" />
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
            <div className="headerRight">
                <button onClick={handleLogout} className="logout-btn" >LOG OUT</button>
            </div>
        </div>
    )
}

export default Header
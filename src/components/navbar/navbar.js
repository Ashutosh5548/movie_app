import React from "react"
import "./navbar.css"
import { Link } from "react-router-dom"


const Navbar = () => {

    return (
        <div className="header">
            <div className="headerLeft">
                <img className="header__icon" src="https://icon-library.com/images/movie-icon-png/movie-icon-png-2.jpg" />
                <h1 className="landing-heading">MOVIE APP</h1>
            </div>
            <div className="headerRight">
                <Link to={"/signup"}><button className='sign-btn'>SIGNUP</button></Link>
                <Link to={"/login"}><button className='log-btn'>LOGIN</button></Link>
            </div>
        </div>
    )
}

export default Navbar
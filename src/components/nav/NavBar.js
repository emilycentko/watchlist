import React from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"
import logo from "../../images/logo.png"

export const NavBar = (props) => {
    return (

        <div className="navbar">
            <div>
                <img className="logo" src={logo} width="110"/>

            </div>
            <div className="navbar__item active">
                <Link className="navbar__link" to="/">ADD MOVIES</Link>
            </div>
            <div className="navbar__item">
                <Link className="navbar__link" to="/watchlists">WATCHLISTS</Link>
            </div>
        </div>
    )
}
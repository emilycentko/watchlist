import React from "react"
import { userStorageKey } from "../auth/authSettings";
import "./NavBar.css"
import { Link } from "react-router-dom"
import logo3 from "../../images/logo3.png"

export const NavBar = (props) => {

    const userId = parseInt(sessionStorage.getItem(userStorageKey))

    if (sessionStorage.getItem(userStorageKey)) {
        
        return (

            <div className="navbar">
                <div className="logo__container">
                    <img className="logo" src={logo3} width="250"/>
                </div>
                <div className="nav__links">
                    <div className="navbar__item active">
                        <Link className="navbar__link" to="/">ADD MOVIES</Link>
                    </div>
                    <div className="navbar__item">
                        <Link className="navbar__link" to="/watchlists">MY WATCHLISTS</Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="navbar">
                <div className="logo__container">
                    <img className="logo" src={logo3} width="250"/>
                </div>
            </div>
        )
    }
}
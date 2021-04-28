import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

export const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="scareLogo">
                <li className="navLogo">
                    <img src="" alt="Logo" />
                </li>
                <li className="navButton">
                    <button type="button" className="navButton">My List</button>
                </li>
                <li className="navButton">
                    <button type="button" className="navButton">My Posts</button>
                </li>
                <li className="navButton">
                    <button type="button" className="navButton">Logout</button>
                </li>
            </ul>
        </nav>
    )
}
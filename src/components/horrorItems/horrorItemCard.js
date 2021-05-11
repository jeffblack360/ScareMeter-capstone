import React from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router"
import { useState } from "react-router-dom"
import { MyHorrorList } from "../nav/myList"

export const HorrorCard = ({ horrorItem }) => {
    // create function to make new user item 
    // with current user id & horror item id 
    // post new user item to database 
    // redirect user to my list

    return (
        <div className="horror-card">
            <div className="horror-card-content">
                <Link to={`/horrorDetail/${horrorItem.id}`}><img src={horrorItem.img} alt="horror item image" className="horror-image" /></Link>
                <button type="button" className="save-btn" onClick={null} >Save</button>
                <img src="" alt="horror category icon" className="horror-icon" />
            </div>
        </div>
    )
}
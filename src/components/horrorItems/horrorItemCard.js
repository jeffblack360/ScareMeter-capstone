import React from "react"
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
                <a href="/horrorDetails"><img src={horrorItem.img} alt="horror item image" className="horror-image" /></a>
                <button type="button" className="save-btn" onClick="MyHorrorList() => {MyListItem}" >Save</button>
                <img src="" alt="horror category icon" className="horror-icon" />
            </div>
        </div>
    )
}
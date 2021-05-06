import React from "react"
import { useParams } from "react-router"
import { useState } from "react-router-dom"

export const HorrorCard = ({ horrorItem }) => {
    // create function to make new user item 
    // with current user id & horror item id 
    // post new user item to database 
    // redirect user to my list
    const newMyListItem = {
        "userId": "?",
        "horrorItemId": "?"
    }

    // const MyListItem = () => {
    //     const [listItem, setListItem] = React.useState(newMyListItem)

    //     return (
    //         <ul>
    //             {listItem.map((userItems) => (
    //                 <li key={userItems.id}>{userItems.horrorItemId}</li>
    //             ))}
    //         </ul>
    //     )
    // }
    // I'm looking at this as more of an example atm
    // the variable names I'm using are not corresponding currently

    return (
        <div className="horror-card">
            <div className="horror-card-content">
                <a href="/horrorDetails"><img src={horrorItem.img} alt="horror item image" className="horror-image" /></a>
                <button type="button" className="save-btn" onClick="{}" >Save</button>
                <img src="" alt="horror category icon" className="horror-icon" />
            </div>
        </div>
    )
}
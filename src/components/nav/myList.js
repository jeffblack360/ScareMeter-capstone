import React from "react"
import { useState } from "react-router-dom"
import { getMyHorrorItems } from "../../modules/HorrorItemManager"

  export const MyHorrorList = () => {
        const MyListItem =
{
    "userId": "?",
    "title": "?",
    "releaseDate": "?",
    "description": "?",
    "categoryId": "?",
    "img": "?"
}
        const [horrorItems, setMyListItem] = React.useState(MyListItem)

        return (
            <div>
                {MyHorrorList.map((horrorItems) => (
                    <div key={horrorItems.id}>{horrorItems.horrorItemId}</div>
                ))}
            </div>
        )
    }

    export default MyHorrorList 
import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"
import { deleteHorrorItem, getAllHorrorItems } from "../../modules/HorrorItemManager";
import { HorrorCard } from "./horrorItemCard";

export const HorrorList = () => {
    const [horrorItems, setHorrorItems] = useState([]);
    // add favorites here 

    const getHorrorItems = () => {
        return getAllHorrorItems().then(ItemsFromAPI => {
            setHorrorItems(ItemsFromAPI)
        });
    };

    const handleDeleteHorrorItem = id => {
        deleteHorrorItem(id)
            .then(() => getAllHorrorItems().then(setHorrorItems));
    }

    useEffect(() => {
        getHorrorItems();
    }, []);

    return (
        <>
            <div className="horrorItem-container">
                {horrorItems.map(horrorItem =>
                    <HorrorCard
                        key={horrorItem.id}
                        horrorItem={horrorItem} 
                        handleDeleteHorrorItem={handleDeleteHorrorItem} />)}
            </div>
        </>
    )
}
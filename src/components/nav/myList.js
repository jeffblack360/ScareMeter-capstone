import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"
import { deleteHorrorItem, getAllHorrorItems } from "../../modules/HorrorItemManager";
import { HorrorItemForm } from "../horrorItems/horrorItemForm"

export const HorrorList = () => {
    const [horrorItems, setHorrorItems] = useState([]);

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
                My Horror List 
            </div>
        </>
    )
}
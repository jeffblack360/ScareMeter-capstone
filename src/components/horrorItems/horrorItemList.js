import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"
import { deleteHorrorItem, getAllHorrorItems } from "../../modules/HorrorItemManager";
import { HorrorCard } from "./horrorItemCard";

export const HorrorList = () => {
    const [horrorItems, setHorrorItems] = useState([]);
    const history = useHistory();

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
            <section className="section-content">
                <button type="button"
                    className="add-btn"
                    onClick={() => { history.push("/horrorItems/create") }}>
                    +
            </button>
            </section>
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
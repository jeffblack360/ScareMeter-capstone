import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getHorrorItemById } from "../../modules/HorrorItemManager"

export const HorrorItemDetail = () => {
    const [horrorItems, setHorrorItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { horrorItemId } = useParams();
    const history = useHistory();

    const deleteHorrorItem = () => {
        setIsLoading(true);
        deleteHorrorItem(horrorItemId).then(() =>
            history.push("/horrorItems")
        );
    };

    useEffect(() => {
        console.log("useEffect", horrorItemId)
        getHorrorItemById(horrorItemId)
            .then(horrorItems => {
                setHorrorItem ({
                    title: horrorItems.title,
                    releaseDate: horrorItems.releaseDate,
                    description: horrorItems.description,
                    img: horrorItems.img
                });
                setIsLoading(false);
            });
    }, [horrorItemId]);

    return (
        <section className="horrorDetail">
            <h3 className="title">Title {horrorItems.title} </h3>
            <div className="releaseDate">Year Released {horrorItems.releaseDate} </div>
            <div className="description">Description {horrorItems.description} </div>
            <div className="horrorCategory">Category {horrorItems.category?.name} </div>
            <div className="img">Add Image {horrorItems.img} </div>
        </section>
    );
};
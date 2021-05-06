import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getHorrorItemById } from "../../modules/HorrorItemManager"

export const HorrorItemDetail = () => {
    const [horrorItems, setHorrorItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { horrorItemId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", horrorItemId)
        getHorrorItemById(horrorItemId)
            .then(horrorItems => {
                setHorrorItem ({
                    title: horrorItems.title,
                    releaseDate: horrorItems.releaseDate,
                    description: horrorItems.description,
                    horrorCategory: horrorItems.category,
                    img: horrorItems.img
                });
                setIsLoading(false);
            });
    }, [horrorItemId]);

    return (
        <section className="horrorDetail">
            <h3 className="horrortitle"> {horrorItems.title} </h3>
            <div className="releaseDate"> {horrorItems.releaseDate} </div>
            <div className="description"> {horrorItems.description} </div>
            <div className="horrorCategory"> {horrorItems.category} </div>
            <div className="img"> {horrorItems.img} </div>
        </section>
    );
};
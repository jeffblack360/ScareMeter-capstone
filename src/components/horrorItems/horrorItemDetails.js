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
            <h3 className="horrorTitle">Title {horrorItems.title} </h3>
            <div className="horrorDate">Year Released {horrorItems.releaseDate} </div>
            <div className="horrorDesc">Description {horrorItems.description} </div>
            <div className="horrorCategory">Select Category:{horrorItems.category?.name} </div>
            <div className="horrorImg">Add Image {horrorItems.img} </div>
        </section>
    );
};
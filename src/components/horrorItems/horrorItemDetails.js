import React, { useState, useEffect } from "react"
import { useParams, useHistory, Link } from "react-router-dom"
import { getHorrorItemById } from "../../modules/HorrorItemManager"

export const HorrorItemDetail = () => {
    const [horrorItems, setHorrorItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { horrorItemId } = useParams();
    console.log(horrorItemId)
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", horrorItemId)
        getHorrorItemById(horrorItemId)
            .then(horrorItems => {
                setHorrorItem(horrorItems)
                setIsLoading(false);
            });
    }, []);

    return (
        <section className="horrorDetail">
            <h3 className="horrortitle"> {horrorItems.title} </h3>
            <div className="releaseDate"> {horrorItems.releaseDate} </div>
            <div className="description"> {horrorItems.description} </div>
            <div className="horrorCategory"> {horrorItems.category} </div>
            <Link className="img"> {horrorItems.img} </Link>
        </section>
    );
};
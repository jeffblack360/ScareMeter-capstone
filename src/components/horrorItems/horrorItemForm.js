import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"
import { addHorrorItem } from "../../modules/HorrorItemManager"

export const HorrorItemForm = () => {

    const currentUser = JSON.parse(sessionStorage.getItem("app_user_id"))

    const [horrorItem, setHorrorItem] = useState({
        title: "",
        releaseDate: "",
        description: "",
        categoryId: 0,
        userId: parseInt(currentUser),
        img: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const [horrorCategory, setHorrorCategory] = useState([]);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newHorrorItem = { ...horrorItem }
        let selectedVal = event.target.value 

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newHorrorItem[event.target.id] = selectedVal
        setHorrorItem(newHorrorItem)
    }

    useEffect(() => {

    }, []);

    useEffect(() => {

    }, []);

    const handleClickSaveHorrorItem = (event) => {
        event.preventDefault()
    const newHorrorItemObject ={
        categoryId: horrorItem.categoryId,
        userId: parseInt(sessionStorage.getItem("app_user_id"))
    }
        if (horrorCategory === 0) {
            window.alert("Boo! Don't forget your category!")
        } else {
            addHorrorItem(newHorrorItemObject)
            .then(() => history.push("/horrorItems"))
        }
    }

    return (
        <form className="horrorItemForm">
            <h2 className="horrorForm-title">New Post</h2>
            <fieldset>
            <div className="form-section">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Title" value={horrorItem.title} />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-section">
                    <label htmlFor="date">Release Date</label>
                    <input type="text" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="date" value={horrorItem.releaseDate} />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-section">
                    <label htmlFor="desc">Description</label>
                    <input type="text" id="desc" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="desc" value={horrorItem.description} />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-section">
                    <label htmlFor="category">Choose a Category</label>
                    <select value={horrorItem.categoryId} name="categoryId" id="categoryId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a Category</option>
                        {horrorCategory.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
            <div className="form-section">
                    <label htmlFor="img">Insert Image</label>
                    <input type="text" id="img" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="img" value={horrorItem.img} />
                </div>
            </fieldset>
            <button type="button" className="postButton" onClick={handleClickSaveHorrorItem}>Post</button>
        </form>
    )
}
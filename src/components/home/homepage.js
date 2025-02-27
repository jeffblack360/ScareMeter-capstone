import React from "react"
import { HorrorList } from "../horrorItems/horrorItemList"
import { useHistory } from "react-router-dom"
import "../horrorItems/horrorItem.css"

export const Home = () => {
    const history = useHistory()
    return (
        <>
            <div className="homePage">
                <h2 className="homeWelcome">Welcome to ScareMeter! Scared yet?</h2>
                <h3 className="homeWelcome">Choose a category or browse all options below!</h3>
                <button type="button"
                    className="add-btn"
                    onClick={() => { history.push("/horrorItems/add") }}>
                    +
            </button>
            </div>
            <div className="sideBar">
                <a href="/"><img src="" alt="movie logo" className="movieCategory" /></a>
                <a href="/"><img src="" alt="show logo" className="showCategory" /></a>
                <a href="/"><img src="" alt="game logo" className="gameCategory" /></a>
                <a href="/"><img src="" alt="book logo" className="bookCategory" /></a>
            </div>
            <div className="homePage">
            <HorrorList />
            </div>
        </>
    )
}
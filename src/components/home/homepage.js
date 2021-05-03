import React from "react"
import { HorrorList } from "../horrorItems/horrorItemList"
import "../horrorItems/horrorItem.css"

export const Home = () => {
    return (
        <>
            <div className="homePage">
                <h2 className="homeWelcome">Welcome to ScareMeter! Scared yet?</h2>
                <h3 className="homeWelcome">Choose a category or browse all options below!</h3>
                <button type="button" className="addButton">+</button>
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
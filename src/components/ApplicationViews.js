import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/homepage"
import { HorrorList } from "./horrorItems/horrorItemList"
import { HorrorItemForm } from "./horrorItems/horrorItemForm"
import { HorrorItemDetail } from "./horrorItems/horrorItemDetails"

// don't forget to add links to other pages later

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/horrorItems">
                <HorrorList />
            </Route>

            <Route exact path="/addHorrorItems">
                <HorrorItemForm />
            </Route>

            <Route exact path="/horrorDetails">
                <HorrorItemDetail />
            </Route>
        </>
    )
}
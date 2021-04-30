import React from "react"
import { Route } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Home } from "./home/homepage"
import { HorrorList } from "./horrorItems/horrorItemList"
import { HorrorItemForm } from "./horrorItems/horrorItemForm"

// don't forget to add links to other pages later

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/Login">
                <Login />
            </Route>

            <Route path="/Register">
                <Register />
            </Route>

            <Route exact path="/horrorItems">
                <HorrorList />
            </Route>

            <Route exact path="/addHorrorItems">
                <HorrorItemForm />
            </Route>
        </>
    )
}
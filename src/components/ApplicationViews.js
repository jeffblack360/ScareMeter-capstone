import React, { useState } from "react"
import { Route } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const ApplicationViews = () => {
    return (
        <>

            <Route path="/Login">
                <Login />
            </Route>

            <Route path="/Register">
                <Register />
            </Route>
        </>
    )
}
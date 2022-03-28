import Recommend from "../pages/Recommend"
import React from "react"
import Music from "../pages/Music"
import Video from "../pages/Video"
import Broadcasting from "../pages/Broadcasting"
import { Navigate } from "react-router-dom"


export default [
    {
        path:'/recommend',
        element:<Recommend/>
    },
    {
        path:'/music',
        element:<Music/>
    },
    {
        path:'/broadcasting',
        element:<Broadcasting/>
    },
    {
        path:'/video',
        element:<Video/>
    },
    {
        path:'/',
        element:<Navigate to="/recommend"/>
    },
]
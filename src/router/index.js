import Recommend from "../pages/Recommend"
import React from "react"
import Music from "../pages/Music"
import Video from "../pages/Video"
import Broadcasting from "../pages/Broadcasting"
import { Navigate } from "react-router-dom"
import All from "../pages/Recommend/All"
import Chinese from "../pages/Recommend/Chinese"
import Japan from "../pages/Recommend/Japan"
import Korea from "../pages/Recommend/Korea"
import EuAndAm from "../pages/Recommend/EuAndAm"
export default [
    {
        path:'/recommend',
        element:<Recommend/>,
        children:[
            {
                path:'all',
                element:<All/>
            },
            {
                path:'',
                element:<Navigate to="all"/>
            },
            {
                path:'chinese',
                element:<Chinese/>
            },
            {
                path:'korea',
                element:<Korea/>
            },
            {
                path:'euandam',
                element:<EuAndAm/>
            },
            {
                path:'japan',
                element:<Japan/>
            }
        ]
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
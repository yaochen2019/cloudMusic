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
import Search from "../pages/Search"
import Showsong from "../pages/Search/Showsong"
import Showalbum from "../pages/Search/Showalbum"
import Showvideo from "../pages/Search/Showvideo"
import Showsinger from "../pages/Search/Showsinger"
import Album from "../pages/Album"
import Songplaylist from "../pages/Album/Songplaylist"
import Collect from "../pages/Album/Collect"
import Comment from "../pages/Album/Comment"
import Songplaypage from "../pages/Songplaypage"
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
        path:'/album/:songid',
        element:<Album/>,
        children:[
            {
                path:'songplaylist',
                element:<Songplaylist/>
            },
            {
                path:'comment',
                element:<Comment/>
            },
            {
                path:'collect',
                element:<Collect/>
            },
            {
                path:'',
                element:<Navigate to="songplaylist"/>
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
        path:'/songplaypage',
        element:<Songplaypage/>
    },
    {
        path:'/search/:searchkeywords',
        element:<Search/>,
        children:[
            {
                path:'song',
                element:<Showsong/>
            },
            {
                path:'video',
                element:<Showvideo/>
            },
            {
                path:'album',
                element:<Showalbum/>
            },
            {
                path:'singer',
                element:<Showsinger/>
            },
            {
                path:'',
                element:<Navigate to="song"/>
            }

        ]
    },
    {
        path:'/',
        element:<Navigate to="/recommend"/>
    },

]
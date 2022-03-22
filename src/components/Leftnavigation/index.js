import React from 'react'
import { LeftnavigationWapper,OnlineMusicWapper,SymblWapper } from './style'
import {Link,Outlet} from 'react-router-dom'
export default function Leftnavigation() {
  return (
    <LeftnavigationWapper>
        <SymblWapper>
            <i></i><span>QQ音乐</span>
        </SymblWapper>
        <OnlineMusicWapper>
            <ul>
                <p>在线音乐</p>
                <li><Link  to="/recommend"><i></i><span>推荐</span></Link></li>
                <li><Link  to="/music"><i ></i>音乐馆</Link></li>
                <li><Link  to="/video"><i ></i>视频</Link></li>
                <li><Link  to="/broadcasting"><i ></i>电台</Link></li>
            </ul>
        </OnlineMusicWapper>
    </LeftnavigationWapper>
  )
}

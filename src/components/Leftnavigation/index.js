import React from 'react'
import { LeftnavigationWapper,OnlineMusicWapper } from './style'
import {Link} from 'react-router-dom'

export default function Leftnavigation() {
  return (
    <LeftnavigationWapper>
        <div className='QQmusic'></div>
        <span className='onlinemusic' >在线音乐</span>
        <OnlineMusicWapper>           
                <li className='selectitem' ><Link  to="/recommend"  ><i className='iconfont iconcolor' >&#xe60f;</i><span>推荐</span></Link></li>
                <li className='selectitem' ><Link  to="/music"><i className='iconfont iconcolor' >&#xe694;</i><span>音乐馆</span></Link></li>
                <li className='selectitem'><Link  to="/video"><i className='iconfont iconcolor' >&#xeafb;</i><span>视频</span></Link></li>
                <li className='selectitem'><Link  to="/broadcasting"><i className='iconfont iconcolor' >&#xe693;</i><span>电台</span></Link></li>
        </OnlineMusicWapper>
    </LeftnavigationWapper>
  )
}

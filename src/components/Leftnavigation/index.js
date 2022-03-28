import React from 'react'
import { LeftnavigationWapper,OnlineMusicWapper,SymblWapper } from './style'
import {Link} from 'react-router-dom'

export default function Leftnavigation() {
  return (
    <LeftnavigationWapper>
        <SymblWapper>
            <i className='iconfont' >&#xe62f;</i>
        </SymblWapper>
        <span className='onlinemusic' >在线音乐</span>
        <OnlineMusicWapper>           
                <li className='selectitem' ><Link  to="/recommend"  ><i className='iconfont' >&#xe60f;</i><span>推荐</span></Link></li>
                <li className='selectitem' ><Link  to="/music"><i className='iconfont' >&#xe694;</i><span>音乐馆</span></Link></li>
                <li className='selectitem'><Link  to="/video"><i className='iconfont' >&#xeafb;</i><span>视频</span></Link></li>
                <li className='selectitem'><Link  to="/broadcasting"><i className='iconfont' >&#xe693;</i><span>电台</span></Link></li>
        </OnlineMusicWapper>
    </LeftnavigationWapper>
  )
}

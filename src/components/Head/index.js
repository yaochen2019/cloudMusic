import React from 'react'
import {Headwarpper} from './style'
import { Link } from 'react-router-dom'
import { Input } from 'antd';
import 'antd/dist/antd.css'



export default function Head() {
    
  return (
    <Headwarpper>
        <li className='forwardbackwarpper' ><i className='iconfont' >&#xe8ef;</i><i className='iconfont' >&#xe8f1;</i></li>
        <li className='search' ><Input className='searchinput' placeholder="input search text" allowClear /></li>
        <li className='topbarright' >
        <Link  to="/login">登录</Link>
        <i className='iconfont' >&#xe62c;</i>
        <i className='iconfont' >&#xe790;</i>
        <span>|</span>
        <i className='iconfont' >&#xe673;</i>
        <i className='iconfont' >&#xe624;</i>
        <i className='iconfont' >&#xe659;</i>
        </li>
    </Headwarpper>
  )
}   

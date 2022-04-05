import React from 'react'
import {Headwarpper} from './style'
import { Link,useNavigate } from 'react-router-dom'
import { Input } from 'antd';
import 'antd/dist/antd.css'


export default function Head() {
  const { Search } = Input;
  const navigate = useNavigate()
  
  const onPressEnter = event => {
    navigate(`/search/${event.target.value}`)
  }
  
  return (
    <Headwarpper>
      <div className='headright' >
        <div className='history' >
          <i className='iconfont' >&#xe8ef;</i><i className='iconfont' >&#xe8f1;</i>
        </div>
        <Search onPressEnter={onPressEnter} className='searchinput' placeholder="input search text" allowClear />
      </div>
      <div className='headleft' >
        <Link  to="/login">登录</Link>
        <i className='iconfont' >&#xe62c;</i>
        <i className='iconfont' >&#xe790;</i>
        <span>|</span>
        <i className='iconfont' >&#xe673;</i>
        <i className='iconfont' >&#xe624;</i>
        <i className='iconfont' >&#xe659;</i>
      </div>
        
    </Headwarpper>
  )
}   

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
  function forword(){
    navigate(1)
  }
  function backword(){
    navigate(-1)
  }
  
  return (
    <Headwarpper>
      <div className='headright' >
        <div className='history' >
          <i className='iconfont forword' onClick={backword} >&#xe8ef;</i><i className='iconfont backword' onClick={forword} >&#xe8f1;</i>
        </div>
        <Search onPressEnter={onPressEnter} className='searchinput' placeholder="搜索音乐" allowClear />
      </div>
      <div className='headleft' >
        <Link to="/recommend">登录</Link>
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

import React from 'react'
import { PlaybarWarpper, Bottomwarpper } from './style'
import { Slider } from 'antd'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
export default function Playbar() {

  function onChange(value) {
    console.log('onChange: ', value);
  }
  function onAfterChange(value) {
    console.log('onAfterChange: ', value);
  }
  return (
    <Bottomwarpper>
      <Slider onChange={onChange} onAfterChange={onAfterChange} defaultValue={30} disabled={false} />
      <PlaybarWarpper>
        <div className='img'></div>
        <div className='songinfowarpper' >
          <div className='songinfo' >
            <Link to="/recommend"><span>歌名</span></Link>
            <Link to="/recommend"><span>歌手</span></Link>
            <Link to="/recommend"><i className='iconfont' >&#xe727;</i></Link>
          </div>
          <ul className='smallicon' >
            <li><i className='iconfont' >&#xe761;</i></li>
            <li><i className='iconfont' >&#xeb9d;</i></li>
            <li><i className='iconfont' >&#xe8a6;</i></li>
            <li><i className='iconfont' >&#xe6ad;</i></li>
          </ul>
        </div>
        <ul className='playbutton' >
          <li><i className='iconfont' >&#xe6a1;</i></li>
          <li><i className='iconfont' >&#xe603;</i></li>
          <li><i className='iconfont' >&#xe62b;</i></li>
          <li><i className='iconfont' >&#xe602;</i></li>
          <li><i className='iconfont' >&#xe87a;</i></li>
        </ul>


      </PlaybarWarpper>
    </Bottomwarpper>
  )
}

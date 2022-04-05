import React from 'react'
import { Songwarpper } from './style'
export default function Song(props) {
    const {name,singer,album,time} = props
  return (
    <Songwarpper>
        <div className='songfirst'>
            <div className='songnamewarpper'>
            <i className='iconfont' >&#xe761;</i>
            <span className='text-nowrap songname'>{name}</span>
            </div>
            <div className='selectbutton' >
            <i className='iconfont show' >&#xea6d;</i>
            <i className='iconfont show' >&#xe600;</i>
            <i className='iconfont show' >&#xeb9d;</i>
            </div>
        </div>
        <div className='singer'>
            <span>{singer}</span>
        </div>
        <div className='album text-nowrap' >{album}</div>
        <div className='time'>{time}</div>
    
    </Songwarpper>
  )
}

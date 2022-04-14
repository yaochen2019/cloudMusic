import React from 'react'
import { Songwarpper } from './style'
import { getSongDetailAction,getAddSongDetailAction } from '../Playbar/store/actionCreator'
import { useDispatch } from 'react-redux'
export default function Song(props) {
    const {name,singer,album,time,id} = props
    const dispatch = useDispatch()

    const playmusic = (id) => {
      dispatch(getSongDetailAction(id))
    }
    const addmusic = (id) => {
      dispatch(getAddSongDetailAction(id))

    }
 

   
  return (
    <Songwarpper  onDoubleClick={e => playmusic(id)}>
        <div className='songfirst' >
            <div className='songnamewarpper'>
            <i className='iconfont' >&#xe761;</i>
            <span className='text-nowrap songname'>{name}</span>
            </div>
            <div className='selectbutton' >
            <i onClick={e => playmusic(id)} className='iconfont show' >&#xea6d;</i>
            <i onClick={e => addmusic(id)} className='iconfont show' >&#xe600;</i>
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

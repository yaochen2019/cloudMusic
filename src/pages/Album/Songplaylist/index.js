import React, { useEffect } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getSongList } from '../store/ActionCreator'
import Song from '../../../components/Song'
import { AlbumSonglistwarpper } from './style'
export default function Songplaylist() {
  const { songid } = useParams()
  const dispatch = useDispatch()
  const { songlist } = useSelector(state => ({
    songlist: state.getIn(['album', 'songlist'])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getSongList(songid))
  }, [dispatch])
  console.log("songs", songlist);
  function getAll(arr) {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
      res = res +' '+ arr[i].name
    }
    return res
  }

  return (
    
    <AlbumSonglistwarpper>
        <div className='songlabel'>
          <div className='songname'>歌曲</div>
          <div className='singer'>歌手</div>
          <div className='album'>专辑</div>
          <div className='time'>时长</div>
        </div>
     <div>
      {
      songlist.map((item, index) => {
        return (<Song key={item.id} id={item.id} name={item.name} singer={getAll(item.ar)} album={item.al.name} time={'1'} />)
        })
      }
     </div>
    </AlbumSonglistwarpper>
  )
}

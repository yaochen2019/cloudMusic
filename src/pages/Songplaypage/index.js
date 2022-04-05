import React, { memo } from 'react'
import { Songplaypagewarpper } from './style'
const Songplaypage = memo(() => {
  return (
    <Songplaypagewarpper>
        <img className='song-img' alt='正在加载' src='' />
        <div className='show-song' >
            <div className='title'>有何不可</div>
            <div className='song-info'>
                <div className='song-album'>专辑：下雨天</div>
                <div className='song-singer'>歌手：许嵩</div>
            </div>
            <div className='song-words'></div>
        </div>
    </Songplaypagewarpper>
  )
})

export default Songplaypage
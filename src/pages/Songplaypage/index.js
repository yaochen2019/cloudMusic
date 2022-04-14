import React, { memo,useEffect } from 'react'
import { useSelector, shallowEqual,useDispatch} from 'react-redux'
import { Songplaypagewarpper } from './style'
import { getLyricAction } from '../../components/Playbar/store/actionCreator'
const Songplaypage = memo(() => {
  const {currentSong,lyriclist} = useSelector(state=>({
    currentSong:state.getIn(["player","currentSong"]),
    lyriclist:state.getIn(["player","lyriclist"])
  }),shallowEqual)
  const dispatch = useDispatch()
  const id = (currentSong && currentSong.id) || '';
  const picUrl = (currentSong.al && currentSong.al.picUrl) || '';
  const songname = (currentSong && currentSong.name) || '';
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '';
  useEffect(()=>{
    dispatch(getLyricAction(id))
  },[dispatch])
  console.log(lyriclist);

  

  
  
  return (
    <Songplaypagewarpper>
        <img className='song-img' alt='正在加载' src={picUrl} />
        <div className='show-song' >
            <div className='title'>{songname}</div>
            <div className='song-info'>
                <div className='song-album'>专辑：下雨天</div>
                <div className='song-singer'>歌手：{singerName}</div>
            </div>
            <div className='song-words'>
            {lyriclist.map((item,index)=>{
              return item.content === "" ? "":(<div className='song-word'>{item.content}</div>);
            })

            }

            </div>
        </div>
    </Songplaypagewarpper>
  )
})

export default Songplaypage
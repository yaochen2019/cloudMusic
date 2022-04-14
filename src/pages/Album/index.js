import React,{useEffect}from 'react'
import { NavLink ,useParams} from 'react-router-dom'
import { useSelector ,useDispatch,shallowEqual } from 'react-redux'
import { AlbumWarpper } from './style'
import { getAlbumInfo } from './store/ActionCreator'
import { Outlet } from 'react-router'


export default function Album() {
    const {songid} = useParams()
   

    const dispatch = useDispatch()
    const {albumInfo} = useSelector(state => ({ 
        albumInfo: state.getIn(['album','albuminfo'])
    }),shallowEqual)
    useEffect(()=>{
        dispatch(getAlbumInfo(songid,7))
    },[dispatch])
    const {playlist} = albumInfo
    const {creator} = playlist

  return (
    <AlbumWarpper>
        <div className='album-head' >
            <img className='album-img' src={playlist.coverImgUrl} alt='图片正在加载' />
            <div className='album-detial' >
                <div className='album-title'>{playlist.name}</div>
                <div className='album-creator'><img className='creator-img' src={creator.avatarUrl} alt='图片正在加载'></img><div className='creator'>{creator.nickname}</div><span className='label' >#{playlist.tags}</span></div>
                <div className='description text-nowrap' >{playlist.description}</div>
                <div className='select-button' ><div className='play-all'>播放全部</div><div className='collect'>收藏</div><div className='more'>...</div></div>
            </div>
        </div>
        
        <div className='Navigate'>
            <NavLink to='songplaylist' className={({isActive})=>isActive ? 'click ':'noclick'}>歌曲</NavLink>
            <NavLink to='comment'  className={({isActive})=>isActive ? 'click ':'noclick'}>评论</NavLink>
            <NavLink to='collect' className={({isActive})=>isActive ? 'click ':'noclick'}>收藏</NavLink>
        </div>
        <Outlet/>
    </AlbumWarpper>
  )
}

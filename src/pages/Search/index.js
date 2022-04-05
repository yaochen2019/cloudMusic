import React from 'react'
import { SearchWarpper } from './style' 
import { Outlet } from 'react-router'
import { Link,useParams } from 'react-router-dom'
export default function Search() {
  const {searchkeywords} = useParams()
  return (
    <SearchWarpper>
      <div className='title'>搜索：{searchkeywords}</div>
      <ul className='category' >
        <li><Link to='song'>歌曲</Link></li>
        <li><Link to='/video' >视频</Link></li>
        <li><Link to='/album' >专辑</Link></li>
        <li><Link to='/singer' >歌手</Link></li>
      </ul>
      <div className='buttonlist' >
        <div className='playall' ><span>播放全部</span></div>
        <div className='download'><span>下载</span></div>
        <div className='addlist' ><span>加入列表</span></div>
      </div>
      <div className='listhead'>
        <div className='song'>歌曲</div>
        <div className='singer'>歌手</div>
        <div className='album'>专辑</div>
        <div className='time'>时长</div>
      </div>
      <Outlet/>
    </SearchWarpper>
  )
}

import React from 'react'
import { ShowsongWarpper } from './style'
import InfiniteListExample from '../../../components/InfiniteListExample'
import { useParams } from 'react-router'
export default function Showsong(props) {
  const {searchkeywords} = useParams()
  

  return (
    <ShowsongWarpper>
      <div className='listhead'>
        <div className='song'>歌曲</div>
        <div className='singer'>歌手</div>
        <div className='album'>专辑</div>
        <div className='time'>时长</div>
      </div>
        <InfiniteListExample searchkeywords={searchkeywords}/>
    </ShowsongWarpper>
  )
}

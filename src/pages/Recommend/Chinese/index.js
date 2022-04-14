import React, { useEffect } from 'react'
import { getNewSong } from '../store/actionCreator';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Songlist from '../../../components/Songlist';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import {ChinesesonglistWarpper} from './style'
export default function Chinese() {

  const { newsong } = useSelector(state => ({
    newsong: state.getIn(["recommend", "newsong"])
  }), shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewSong('华语'))
  }, [dispatch]);
  console.log(newsong);
  function getpublishTime(time)
  {
    let d = new Date(time)
    return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()
  }
  return (
    <>
      {
        newsong.slice(0, 5).map((item, index) => {

          return (
            <ChinesesonglistWarpper key={nanoid()} >
              <Songlist isLink={true} key={item.album.id} width='200px' playcount={''} name={item.name} imgsrc={item.album.blurPicUrl} />
              <Link className='singer' key={item.album.artists[0].id} to='/recommend' >{item.album.artists[0].name}</Link>
              <span>{getpublishTime(item.album.publishTime)}</span>

            </ChinesesonglistWarpper>
          )
        })
      }

    </>
  )
}

import React, { useEffect } from 'react'
import { RecommendWarpper } from './style'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import MyCarousel from '../../components/MyCarousel';
import { Link } from 'react-router-dom';
import { getRecommend } from './store/actionCreator';
import Songlist from '../../components/Songlist';
export default function Recommend() {

  const state = useSelector(state => ({
    recommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getRecommend())
  }, [dispatch]);
  console.log(state.recommends);

  return (
    <RecommendWarpper>
      <MyCarousel />
      <div className='recommend'>
        <div className='recommend-title' ><h2>推荐歌单</h2><Link to='recommend'><span>更多{'>'}</span></Link></div>
        <div className='recommend-list' >

          {
            state.recommends.slice(0, 5).map((item, index) => {

              return (
                <Songlist key={item.id} width='200px' height='252px' info={item} />
              )
            })
          }
        </div>
      </div>
    </RecommendWarpper>
  )
}

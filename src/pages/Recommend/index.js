import React, { useEffect } from 'react'
import { RecommendWarpper } from './style'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import MyCarousel from '../../components/MyCarousel';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';
import { getRecommend, getCarouselImg, getRecommendMv, getPrivateContent } from './store/actionCreator';
import Songlist from '../../components/Songlist';
import { nanoid } from 'nanoid';

export default function Recommend() {

  const { recommends, img, recommendmv, privatecontent } = useSelector(state => ({
    recommends: state.getIn(["recommend", "hotRecommends"]),
    img: state.getIn(["recommend", "carouselImg"]),
    recommendmv: state.getIn(["recommend", "hotRecommendmv"]),
    privatecontent: state.getIn(["recommend", "privatecontent"])
  }), shallowEqual);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getRecommend())
    dispatch(getCarouselImg())
    dispatch(getRecommendMv())
    dispatch(getPrivateContent())
  }, [dispatch]);


  return (
    <RecommendWarpper>
      <MyCarousel key={nanoid()} info={img} />
      <div className='recommend'>
        <div className='recommend-title' ><span className='title' >推荐歌单</span><Link to='recommend'><span>更多{'>'}</span></Link></div>
        <div className='recommend-list' >

          {
            recommends.slice(0, 5).map((item, index) => {

              return (
                <Songlist key={item.id} width='200px' playcount={item.playCount} name={item.name} imgsrc={item.picUrl} />
              )
            })
          }
        </div>
      </div>
      <div className='recommend'>
        <div className='recommend-title' ><span className='title' >独家放送</span><Link to='recommend'><span>更多{'>'}</span></Link></div>
        <div className='recommend-list' >

          {
            privatecontent.slice(0, 3).map((item, index) => {

              return (
                <Songlist key={item.id} width='370px' playcount={''} name={item.name} imgsrc={item.picUrl} />
              )
            })
          }
        </div>
      </div>

      <div className='recommend'>
        <div className='recommend-title' >
          <div className='new-song' ><span className='title'>最新音乐</span>
            <div className='select-button'>
              <Link to='all'>全部</Link>
              <Link to='chinese'>华语</Link>
              <Link to='euandam'>欧美</Link>
              <Link to='japan'>日本</Link>
              <Link to='korea'>韩国</Link>
            </div>
          </div>
          <Link to='recommend'><span>更多{'>'}</span></Link>
        </div>
        <div className='recommend-list' >
          <Outlet />
        </div>

      </div>
      <div className='recommend'>
        <div className='recommend-title' ><span className='title'>推荐MV</span><Link to='recommend'><span>更多{'>'}</span></Link></div>
        <div className='recommend-list' >

          {
            recommendmv.slice(0, 3).map((item, index) => {

              return (
                <Songlist key={item.id} width='370px' playcount={item.playCount} name={item.name} imgsrc={item.picUrl} />
              )
            })
          }
        </div>
      </div>
    </RecommendWarpper >
  )
}

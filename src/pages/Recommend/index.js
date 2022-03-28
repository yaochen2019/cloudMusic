import React ,{useEffect} from 'react'
import {RecommendWarpper} from './style'
import { useSelector,shallowEqual,useDispatch } from 'react-redux';

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
      <div className='recommend-list' >
        {
          state.recommends.slice(0,4).map((item,index) =>{

            return (
              <Songlist key={item.id} width='200px' height='252px' info={item} />
            )
          })
        }
      </div>
    </RecommendWarpper>
  )
}

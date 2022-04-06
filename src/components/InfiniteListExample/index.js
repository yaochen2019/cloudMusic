import React, { useState, useEffect,memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { List, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getSearchlist } from '../../pages/Search/store/ActionCreator';
import Song from '../Song';
import { InfiniteListWarpper } from './style';



const  InfiniteListExample = memo((props) => {

  const { searchkeywords } = props
  const [offset,setoffset] = useState(0)
  const [loading, setLoading] = useState(false);
  const [songlist,setSonglist] = useState([]);
  let limit = 40
  const { searchlist } = useSelector(state => ({
    searchlist: state.getIn(["search", "searchlist"])
  }), shallowEqual)
  const { songs } = searchlist
  const dispatch = useDispatch()
  const loadMoreData = () => {
    if(loading || offset > 10)
    {
      return;
    }
    setLoading(true);
    dispatch(getSearchlist(searchkeywords, limit, 1,offset*limit))
    setoffset(offset+1)
    setSonglist([...songlist,...songs]);
    setLoading(false);
  };
  

  
  



  useEffect(() => {
    loadMoreData();
  }, [dispatch]);
  console.log("searchkeywords",searchkeywords);
  console.log("searchlist",searchlist);
  console.log("songs",songs)
  console.log("songlist",songlist);

  


  /* */

  return (
    <InfiniteListWarpper>
      <InfiniteScroll
        dataLength={songlist.length}
        next={loadMoreData}
        hasMore={songlist.length < 270}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more <span aria-label='弟弟' role='img'>🤐</span></Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={songlist}
          renderItem={item => (
            <Song name={item.name} id={item.id} singer={(item.ar && item.ar[0].name) || ''} album={(item.al && item.al.name) || ''} time={'1'} />
          )}
        />
      </InfiniteScroll>
    </InfiniteListWarpper>

  )
})


export default InfiniteListExample
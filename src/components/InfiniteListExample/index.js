import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { List, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getSearchlist } from '../../pages/Search/store/ActionCreator';
import Song from '../Song';
import { InfiniteListWarpper } from './style';
export default function InfiniteListExample(props) {

  const { searchkeywords } = props
  const [offset,setoffset] = useState(0)
  const [songlist,setSonglist] = useState([]);
  let limit = 40
  const dispatch = useDispatch()
  const loadMoreData = () => {
      dispatch(getSearchlist(searchkeywords, limit, 1,offset*limit))
    setoffset(offset+1)
    setSonglist([...songlist,...songs]);
    
  };
  const { searchlist } = useSelector(state => ({
    searchlist: state.getIn(["search", "searchlist"])
  }), shallowEqual)

  
  console.log('searchlist', searchlist);
  const { songs } = searchlist



  useEffect(() => {
    loadMoreData();
  }, []);

  console.log(Array.isArray(songs));
  console.log(songs.length);


  /* */

  return (
    <InfiniteListWarpper>
      <InfiniteScroll
        dataLength={songlist.length}
        next={loadMoreData}
        hasMore={songlist.length < searchlist.songCount-40}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more <span aria-label='弟弟' role='img'>🤐</span></Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={songlist}
          renderItem={item => (
            <Song name={item.name} singer={'许嵩'} album={'自定义'} time={'1'} />
          )}
        />
      </InfiniteScroll>
    </InfiniteListWarpper>

  )
}
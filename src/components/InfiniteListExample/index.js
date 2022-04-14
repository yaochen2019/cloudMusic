import React, { useState, useEffect,memo } from 'react';
import { List, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import Song from '../Song';
import { InfiniteListWarpper } from './style';

import { formatMinuteSecond } from '../../util/format';

const  InfiniteListExample = memo((props) => {
  

  const { searchkeywords } = props
  const [loading, setLoading] = useState(false);
  const [songlist,setSonglist] = useState([]);
  let offset = 0

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(`http://localhost:3000/cloudsearch?keywords=${searchkeywords}&limit=${40}&type=${1}&offset=${offset}`)
      .then(res => res.json())
      .then(body => {
        setSonglist([...songlist, ...body.result.songs]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
    offset += 1;
  };
  

  
  



  useEffect(() => {
    loadMoreData();
  },[]);




  


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
          renderItem={item =>{
            const duration = item.dt || 0;
            const showDuration = formatMinuteSecond(duration,"mm:ss");//总体时间
            
            return <Song name={item.name} id={item.id} singer={(item.ar && item.ar[0].name) || ''} album={(item.al && item.al.name) || ''} time={showDuration} />
          }}
        />
      </InfiniteScroll>
    </InfiniteListWarpper>

  )
})


export default InfiniteListExample
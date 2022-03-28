import React from 'react'
import { SonglistWarpper } from './style';
import { Link } from 'react-router-dom';
export default function Songlist(props) {
    const {width,height,info} = props;
    function getplaycount(num){
      if(num.toString().length>7){
        return (num/100000000).toFixed(2);
      }else{
        return (num/10000).toFixed(2);

      }

    }
  return (
    <SonglistWarpper width={width} height={height} >
        <Link to="/recommend">
        <div className='cover-top'>
            <img src={info.picUrl} alt='指定文本' />
            <div className='mask' ></div>
            <div className='palycount'><i className='iconfont'>&#xe718;</i><span>{getplaycount(info.playCount)}{(info.playCount).toString().length>7? '亿':'万'}</span></div>
            <div className='playbutton'><i className='iconfont buttonicon'>&#xea82;</i></div>
        </div>
        <div className='cover-bottom  text-nowrap' >{info.name}</div>
        </Link>
    </SonglistWarpper>
  )
}

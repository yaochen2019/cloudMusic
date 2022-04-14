import React from 'react'
import { SonglistWarpper } from './style';
import { Link } from 'react-router-dom';
export default function Songlist(props) {
    const {width,imgsrc,height,playcount,name,id,isLink} = props;
    function getplaycount(num){
      if(num.toString().length>7){
        return (num/100000000).toFixed(2);
      }
      if(num.toString().length>4){
        return (num/10000).toFixed(2);
      }
      if(num.toString().length>0)
      {
        return num
      }

    }
    
    
  return (
    <SonglistWarpper width={width} height={height}>
        <Link to={isLink === true ? `/album/${id}` :""} state={{id:id}}>
        <div className='cover-top'>
            <img src={imgsrc} alt='指定文本' />
              <div className='mask'></div>
              {playcount===''?'':<div className='palycount'><i className='iconfont'>&#xe718;</i><span>{getplaycount(playcount)}{(playcount).toString().length>7? '亿':'万'}</span></div>}
              <div className='playbutton'><i className='iconfont buttonicon'>&#xea82;</i></div>
        </div>
        <div className='cover-bottom  text-nowrap' >{name}</div>
        </Link>
    </SonglistWarpper>
  )
}

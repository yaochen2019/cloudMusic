import React, { useEffect,memo,useRef, useState, useCallback } from 'react'
import { Bottomwarpper } from './style'
import { Slider } from 'antd'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
import { getSongDetailAction,changeCurrentSong } from './store/actionCreator'
import { formatMinuteSecond,getPlaySong } from '../../util/format'






const Playbar = memo(() =>{

  //props and state
  const [currentTime, setcurrentTime] = useState(0);
  const [progress,setprogress] = useState(0) ;
  const [isChange,setisChange] = useState(false);
  const [isplaying,setisplaying] = useState(false);
  const playlistref = useRef()
  const audioRef = useRef()


  //redux-react相关
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getSongDetailAction(167876))
    },[dispatch])
  
  const {currentSong,playlist} = useSelector(state=>({
    currentSong:state.getIn(["player","currentSong"]),
    playlist:state.getIn(["player","playlist"])
  }),shallowEqual)
  useEffect(()=>{
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current.play().then(res => {
      setisplaying(true);
    }).catch(err => {
      setisplaying(false);
    });
  },[currentSong])


  //other handle
  console.log("currentSong",currentSong);
  
  const picUrl = (currentSong.al && currentSong.al.picUrl) || '';
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '';
  const duration = currentSong.dt || 0;
  const showDuration = formatMinuteSecond(duration,"mm:ss");//总体时间
  const showcurrentTime = formatMinuteSecond(currentTime,"mm:ss");

  

  //handle function
 
  const playMusic = useCallback(() => {
    setisplaying(!isplaying);
    isplaying ? audioRef.current.pause() : audioRef.current.play();
  }, [isplaying]);
  
  
  
  const timeUpdata = (e)=>{
    
    if(!isChange){
      setcurrentTime(e.target.currentTime*1000);
      setprogress(currentTime/duration*100)
    }
  }
  const sliderChange = useCallback((value)=>{
    const currentTime = value/100 *duration /1000;
    setcurrentTime(currentTime*1000)
    setisChange(true)
    setprogress(value)
 
  },[duration])
  const sliderAfterChange = useCallback((value)=>{
    const currentTime = value/100 *duration /1000
    audioRef.current.currentTime = currentTime;
    setcurrentTime(currentTime * 1000)
    setisChange(false);

    
  },[duration])

  const changeMusic = (e,tag)=>{
    if (e && e.stopPropagation){
      e.stopPropagation();
    }else{
      e.cancelBubble = true;
    }
    dispatch(changeCurrentSong(tag))

  }
  const handleEnded = ()=>{
    dispatch(changeCurrentSong(1))
  }
  const showplaylist = (e)=>{
    if (e && e.stopPropagation){
      e.stopPropagation();
    }else{
      e.cancelBubble = true;
    }
    playlistref.current.style.display = "flex"

  }
  const otherclicknone = (e)=>{
    if (e && e.stopPropagation){
      e.stopPropagation();
    }else{
      e.cancelBubble = true;
    }
    
   
  }
  document.onclick = function(){
    playlistref.current.style.display = 'none'
  }
  
  const playmusic = (id) => {
    dispatch(getSongDetailAction(id))

  }
  const playOrPause = () => {
    const play = (
        <span className="iconfont play" onClick={playMusic}>
            &#xea81;
        </span>
    );
    const pause = (
        <span className="iconfont play" onClick={playMusic}>
            &#xea82;
        </span>
    );
    return isplaying ? play : pause;
};
  
 

  
  
  
  
  



  return (
    <Bottomwarpper>
      <Slider  onChange={sliderChange} onAfterChange={sliderAfterChange} value={progress}  defaultValue={30} disabled={false} />
       <div className='control'>
        <div className='left'>
          <Link to='/songplaypage' className='image' ><img src={picUrl} alt='加' ></img></Link>
          <div className='song' >
          <div className='songinfo'>
            <Link to='' className='song-name'>断桥残血</Link>
            <Link to='' className='singer-name'>{singerName}</Link>
          </div>
          
          <div className='icons'>
            <Link to='' ><i className='iconfont'>&#xe761;</i></Link>
            <Link to='' ><i className='iconfont'>&#xeb9d;</i></Link>
            <Link to='' ><i className='iconfont'>&#xe6ad;</i></Link>
          </div>
          </div>
        </div>
        <div className='center'>
          <i className='iconfont order'>&#xe6a1;</i>                                            
          <i className='iconfont pre' onClick={e => changeMusic(e,-1)} >&#xe603;</i>
          {playOrPause()}
          <i className='iconfont next' onClick={e => changeMusic(e,1)} >&#xe602;</i>
          <i className='iconfont vloum'>&#xe87a;</i>
        </div>
        <div className='right'>
          <span className='now-time'>{showcurrentTime}</span>
          <span className='divide'>/</span>
          <span className='totla-time' >{showDuration}</span>
          <span className='song-words' >词</span>
          <button className='showplaylist' onClick={e => showplaylist(e)} >点击</button>
        </div>
        </div>
        <audio ref={audioRef} onTimeUpdate={timeUpdata} onEnded={e => handleEnded(e)}/>
        <div className='playlistwarpper' onClick={e => otherclicknone(e)} ref={playlistref} >
          {
            playlist.map((item,index)=>{
              return (  <div className='item-song' key={item.id} onDoubleClick={e => playmusic(item.id)} >
                      <div className='songinfo'>
                      <div className='song-name'>{item.name}</div>
                      <div className='singer-name'>{item.ar[0].name}</div>
                        </div>
                    <i className='iconfont delete'>&#xe8c1;</i>
                </div>)
            })
          }

        </div>
      
    </Bottomwarpper>
  )
})

export default Playbar

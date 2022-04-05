import React, { useEffect,memo,useRef, useState, useCallback } from 'react'
import { Bottomwarpper } from './style'
import { Slider } from 'antd'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
import { getSongDetailAction } from './store/actionCreator'
import { formatMinuteSecond,getPlaySong } from '../../util/format'






const Playbar = memo(() =>{

  //props and state
  const [currentTime, setcurrentTime] = useState(0);
  const [progress,setprogress] = useState(0) ;
  const [isChange,setisChange] = useState(false);
  const [isplaying,setisplaying] = useState(false);


  //redux-react相关
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getSongDetailAction(167876))
    },[dispatch])
  
  const {currentSong} = useSelector(state=>({
    currentSong:state.getIn(["player","currentSong"])
  }),shallowEqual)
  useEffect(()=>{
    audioRef.current.src = getPlaySong(currentSong.id)

  },[currentSong])


  //other handle
  
  const picUrl = (currentSong.al && currentSong.al.picUrl) || '';
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '';
  const duration = currentSong.dt || 0;
  const showDuration = formatMinuteSecond(duration,"mm:ss");//总体时间
  const showcurrentTime = formatMinuteSecond(currentTime,"mm:ss");

  

  //handle function
 
  function changeicon(e){
    if(!isplaying){
      setisplaying(!isplaying)
      audioRef.current.play()
      e.target.innerHTML = '&#xea81;';
    }else{
      setisplaying(!isplaying)
      audioRef.current.pause()
      e.target.innerHTML = '&#xea82;';
    }
  }
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
  //other hooks
  const audioRef = useRef()

  
  
  
  
  



  return (
    <Bottomwarpper>
      <Slider  onChange={sliderChange} onAfterChange={sliderAfterChange} value={progress}  defaultValue={30} disabled={false} />
       <div className='control'>
        <div className='left'>
          <Link to='' className='image' ><img src={picUrl} alt='加' ></img></Link>
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
          <i className='iconfont pre'>&#xe603;</i>
          <span className='iconfont play' onClick={e => changeicon(e)}>&#xea82;</span>
          <i className='iconfont next'>&#xe602;</i>
          <i className='iconfont vloum'>&#xe87a;</i>
        </div>
        <div className='right'>
          <span className='now-time'>{showcurrentTime}</span>
          <span className='divide'>/</span>
          <span className='totla-time' >{showDuration}</span>
          <span className='song-words' >词</span>
        </div>
        </div>
        <audio ref={audioRef} onTimeUpdate={timeUpdata}/>
      
    </Bottomwarpper>
  )
})

export default Playbar

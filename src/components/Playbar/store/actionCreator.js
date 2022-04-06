import { getSongDetail } from "../../../service/player"
import * as actionType from './constants'


const changeCurrentSongAction = (currentSong)=>({
    type:actionType.CHANGE_CURRENT_SONG,
    currentSong

})

const changePlayListAction = (playlist) => ({
    type:actionType.CHANGE_PLAY_LIST,
    playlist


});


const changeCurrentSongIndexAction = (index) => ({
    type:actionType.CHANGE_CURRENT_SONG_INDEX,
    index


});



export const getSongDetailAction = (ids) =>{

    return (dispatch,getState) => {

        //根据ID查找playlist中是否已经有了该歌曲

        const playlist = getState().getIn(["player","playlist"]);

        const songIndex = playlist.findIndex(song => song.id ===ids);

        if(songIndex !== -1){ //找到歌曲
            dispatch(changeCurrentSongIndexAction(songIndex))
            const  song = playlist[songIndex]
            dispatch(changeCurrentSongAction(song))

        } else{
            getSongDetail(ids).then(res => {
                const songs = res.songs && res.songs[0];
                if (!songs) return;
                //将最新请求的数据加入播放列表
                const newPlayList = [...playlist]
                newPlayList.push(songs)
                //更新redux
                dispatch(changePlayListAction(newPlayList))
                dispatch(changeCurrentSongIndexAction(newPlayList.length-1))

                dispatch(changeCurrentSongAction(songs))
    
            })

        }


        

    }
}
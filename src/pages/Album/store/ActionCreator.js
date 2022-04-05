import * as actionType from './constants';
import { getSongListdata,getAlbumInfodata } from '../../../service/album';
const changeSongListAction = (res) => ({
    type:actionType.CHANGE_SONG_LIST,
    songlist:res.songs
})
const changeAlbumInfoAction = (res) => ({
    type:actionType.CHANGE_ALBUM_INFO,
    albuminfo:res
})


export const getSongList = (id) => {
    return dispatch => {
        getSongListdata(id).then(res=>{
            dispatch(changeSongListAction(res))
        })

    }
}


export const getAlbumInfo = (id,s) => {
    return dispatch => {
        getAlbumInfodata(id,s).then(res=>{
            dispatch(changeAlbumInfoAction(res))
        })

    }
}
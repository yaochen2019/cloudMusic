import { getSongDetail, getLyric } from "../../../service/player"
import * as actionType from './constants'
import { paraseLyric } from "../../../util/format"


const changeCurrentSongAction = (currentSong) => ({
    type: actionType.CHANGE_CURRENT_SONG,
    currentSong

})

const changeLyricListAction = (lyriclist) => ({
    type: actionType.CHANGE_LYRICS_LIST,
    lyriclist
})

const changePlayListAction = (playlist) => ({
    type: actionType.CHANGE_PLAY_LIST,
    playlist


});


const changeCurrentSongIndexAction = (index) => ({
    type: actionType.CHANGE_CURRENT_SONG_INDEX,
    index


});

export const changeCurrentSong = (tag) => {
    return (dispatch, getState) => {
        let currentSongIndex = getState().getIn(["player", "currentSongIndex"])
        console.log("currentSongIndex", currentSongIndex);
        const playlist = getState().getIn(["player", "playlist"])
        console.log("playlist", playlist);

        currentSongIndex += tag;
        if (currentSongIndex >= playlist.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playlist.length - 1;

        const currentSong = playlist[currentSongIndex]


        dispatch(changeCurrentSongAction(currentSong))
        dispatch(changeCurrentSongIndexAction(currentSongIndex))


    }
}
export const getplaylistplaysong = (index) => {
    return (dispatch, getState) => {
        const playlist = getState().getIn(["player", "playlist"])
        dispatch(changeCurrentSongAction(playlist[index]))
        console.log("getplaylistplaysongndex", index);
        dispatch(changeCurrentSongIndexAction(index))
    }

}
export const deletePlaylistsong = (idx) => {

    return (dispatch, getState) => {
        let playlist = getState().getIn(["player", "playlist"])
        let newplaylist = playlist.filter((item, index) => index !== idx)
        dispatch(changePlayListAction(newplaylist))



    }
}

export const getAddSongDetailAction = (ids) => {

    return (dispatch, getState) => {
        const playlist = getState().getIn(["player", "playlist"]);
        const songIndex = playlist.findIndex(song => song.id === ids);
        let song = null

        if (songIndex === -1) { //???????????????
            getSongDetail(ids).then(res => {
                song = res.songs && res.songs[0];
                if (!song) return;
                //??????????????????????????????????????????
                const newPlayList = [...playlist]
                newPlayList.push(song)
                //??????redux
                dispatch(changePlayListAction(newPlayList))

            })

        }

    }
}



export const getSongDetailAction = (ids) => {

    return (dispatch, getState) => {

        //??????ID??????playlist??????????????????????????????

        const playlist = getState().getIn(["player", "playlist"]);

        const songIndex = playlist.findIndex(song => song.id === ids);

        let song = null
        console.log("getSongDetailActionindex", songIndex);

        if (songIndex !== -1) { //????????????
            dispatch(changeCurrentSongIndexAction(songIndex))
            song = playlist[songIndex]
            dispatch(changeCurrentSongAction(song))

        } else {
            getSongDetail(ids).then(res => {
                song = res.songs && res.songs[0];
                if (!song) return;
                //??????????????????????????????????????????
                const newPlayList = [...playlist]
                newPlayList.push(song)
                //??????redux
                dispatch(changePlayListAction(newPlayList))
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
                dispatch(changeCurrentSongAction(song))

            })

        }





    }
}

export const getLyricAction = (id) => {

    return dispatch => {
        getLyric(id).then(res => {
            const lyric = res.lrc.lyric
            const lyriclist = paraseLyric(lyric);
            dispatch(changeLyricListAction(lyriclist))
        })


    }
}
import { getSongDetail } from "../../../service/player"
import * as actionType from './constants'


const changeCurrentSongAction = (currentSong)=>({
    type:actionType.CHANGE_CURRENT_SONG,
    currentSong

})



export const getSongDetailAction = (ids) =>{

    return dispatch => {
        getSongDetail(ids).then(res => {
            dispatch(changeCurrentSongAction(res.songs[0]))

        })

    }
}
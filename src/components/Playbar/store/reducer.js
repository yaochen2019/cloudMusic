import { Map } from "immutable"
import * as actionType from "./constants"

const defaultState = Map({
    playlist:[],
    currentSongIndex:0,
    currentSong:{}

})

export  default function reducer(state = defaultState,action){
    switch (action.type) {
        case actionType.CHANGE_CURRENT_SONG:
            return state.set("currentSong",action.currentSong)
        case actionType.CHANGE_PLAY_LIST:
            return state.set("playlist",action.playlist)
        case actionType.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex",action.currentSongIndex)
        default:
            return state;
    }
}


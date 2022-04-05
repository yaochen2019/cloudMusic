import { Map } from "immutable";
import * as actionType from  './constants';


const defaultState = Map({
    albuminfo:{playlist:{creator:{}},privileges:[],tags:[]},
    songlist:[]
})

export default (state= defaultState,action)=>{
    switch (action.type) {
        case actionType.CHANGE_SONG_LIST: 
            return state.set("songlist",action.songlist);
        case actionType.CHANGE_ALBUM_INFO:
            return state.set("albuminfo",action.albuminfo);
        default:
            return state
    }
}
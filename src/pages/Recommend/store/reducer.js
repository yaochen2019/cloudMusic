import { Map } from "immutable";
import * as actionTypes from './constants';


const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbum: [],
    topUpList: {},
    topNewList: {},
    topOriginList: {},
    settleSings: [],
  })


  export default (state = defaultState, action) => {
    switch(action.type) {
      case actionTypes.CHANGE_HOT_RECOMMEND:
        return state.set("hotRecommends", action.recommends);
      default:
        return state;
    }
  }
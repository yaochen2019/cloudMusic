import { Map } from "immutable";
import * as actionTypes from './constants';


const defaultState = Map({
    hotRecommends: [],
    carouselImg:[],
    hotRecommendmv:[],
    privatecontent:[],
    newsong:[]
  })


  export default (state = defaultState, action) => {
    switch(action.type) {
      case actionTypes.CHANGE_HOT_RECOMMEND:
        return state.set("hotRecommends", action.recommends);
      case actionTypes.CHANGE_CAROUSEL_IMG:
          return state.set("carouselImg", action.carousels);
      case actionTypes.CHANGE_RECOMMEND_MV:
          return state.set("hotRecommendmv", action.recommendmv);
      case actionTypes.CHANGE_PRIVATE_CONTENT:
          return state.set("privatecontent", action.privatecontents);
      case actionTypes.CHANGE_NEW_SONG:
          return state.set("newsong", action.newsong);
      default:
        return state;
    }
  }
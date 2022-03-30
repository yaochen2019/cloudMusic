import { Map } from "immutable";
import * as actionTypes from './constants';


const defaultState = Map({
    hotRecommends: [],
    carouselImg:[]
  })


  export default (state = defaultState, action) => {
    switch(action.type) {
      case actionTypes.CHANGE_HOT_RECOMMEND:
        return state.set("hotRecommends", action.recommends);
      case actionTypes.CHANGE_CAROUSEL_IMG:
          return state.set("carouselImg", action.carousels);
      default:
        return state;
    }
  }
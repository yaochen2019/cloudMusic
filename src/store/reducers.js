import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/Recommend/store";
import { reducer as searchReducer} from "../pages/Search/store"
import {reducer as albumReducer} from "../pages/Album/store"
import {reducer as playerReducer} from "../components/Playbar/store"

export default combineReducers({
  recommend: recommendReducer,
  search:searchReducer,
  album:albumReducer,
  player:playerReducer
})
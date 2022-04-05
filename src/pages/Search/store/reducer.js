import { Map } from "immutable";
import * as actionTypes from './Constant'

const defualtstate = Map({
    searchlist:{songs:[{name:'许嵩',al:{name:'自定义'}},{name:'许嵩',al:{name:'自定义'}},{name:'许嵩',al:{name:'自定义'}},{name:'许嵩',al:{name:'自定义'}},{name:'许嵩',al:{name:'自定义'}}]}
})


export default (state = defualtstate,action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SEARCH_LIST:
            console.log("searchlistreducer",action.searchlist);
            return state.set("searchlist",action.searchlist);
        default:
            return state;
          
    }
}

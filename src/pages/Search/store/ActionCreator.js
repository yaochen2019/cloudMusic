import * as actionTypes from './Constant'
import { getSearchdata } from '../../../service/search'

const changeSearchlist = (res) => ({
    type:actionTypes.CHANGE_SEARCH_LIST,
    searchlist:res.result
})

export const getSearchlist = (keywords,limit,type,offset)=>{

    return dispatch => {
        getSearchdata(keywords,limit,type,offset).then(res => {
            dispatch(changeSearchlist(res))
        })

    }
}

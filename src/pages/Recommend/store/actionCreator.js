import * as actionTypes from "./constants";
import { getHotRecommend } from "../../../service/recommend";


const changeRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    recommends: res.result
})


export const getRecommend = () => {
    return dispatch => {
        getHotRecommend().then(res => {
            dispatch(changeRecommendAction(res))
        })
    }
}
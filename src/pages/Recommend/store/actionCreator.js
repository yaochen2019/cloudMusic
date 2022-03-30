import * as actionTypes from "./constants";
import { getHotRecommend,getHotCarouselImg } from "../../../service/recommend";


const changeRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    recommends: res.result
})

const changeCarouselImg = (res) => ({
    type:actionTypes.CHANGE_CAROUSEL_IMG,
    carousels:res.banners
})




export const getRecommend = () => {
    return dispatch => {
        getHotRecommend().then(res => {
            dispatch(changeRecommendAction(res))
        })
    }
}

export const getCarouselImg = () => {
    return dispatch => {
        getHotCarouselImg().then(res => {
            dispatch(changeCarouselImg(res))
        })
    }
}
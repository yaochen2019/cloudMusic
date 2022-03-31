import * as actionTypes from "./constants";
import { getHotRecommend, getHotCarouselImg, getHotRecommendMv, getHotPrivatecontent, getNewSongdata } from "../../../service/recommend";


const changeRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    recommends: res.result
})

const changeCarouselImg = (res) => ({
    type: actionTypes.CHANGE_CAROUSEL_IMG,
    carousels: res.banners
})

const changeRecommendMvAction = (res) => ({
    type: actionTypes.CHANGE_RECOMMEND_MV,
    recommendmv: res.result
})

const changePrivateContentAction = (res) => ({
    type: actionTypes.CHANGE_PRIVATE_CONTENT,
    privatecontents: res.result
})


const changeNewSong = (res) => ({
    type: actionTypes.CHANGE_NEW_SONG,
    newsong: res.data
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

export const getRecommendMv = () => {
    return dispatch => {
        getHotRecommendMv().then(res => {
            dispatch(changeRecommendMvAction(res))
        })
    }
}

//获取独家放送
export const getPrivateContent = () => {
    return dispatch => {
        getHotPrivatecontent().then(res => {
            dispatch(changePrivateContentAction(res))
        })
    }
}

export const getNewSong = (idx) => {
    let type = 0
    switch (idx) {
        case '华语':
            type = 7;
            break;
        case '欧美':
            type = 96;
            break;
        case '日本':
            type = 8;
            break;
        case '韩语':
            type = 16;
            break;
        default:
            type = 0;
            break;
    }
    return dispatch => {
        getNewSongdata(type).then(res => {
            dispatch(changeNewSong(res))
        })

    }
}
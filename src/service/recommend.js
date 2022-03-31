import request from './axios'

export function getHotRecommend() {
  return request({
    url:"/personalized"
  })
}

export function getHotCarouselImg() {
  return request({
    url:"/banner"
  })
}

export function getHotRecommendMv() {
  return request({
    url:"/personalized/mv"
  })
}


export function getHotPrivatecontent() {
  return request({
    url:"/personalized/privatecontent"
  })
}
export function getNewSongdata(type){

  return request({
    url:"/top/song",
    params:{
      type
    }
  })

}
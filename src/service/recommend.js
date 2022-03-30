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
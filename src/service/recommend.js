import request from './axios'

export function getHotRecommend() {
  return request({
    url:"/personalized"
  })
}
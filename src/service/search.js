import request from './axios'

export function getSearchdata(keywords,limit,type,offset){

    console.log("发送search请求中的keyword是:",keywords);

    return request({
      url:"/cloudsearch",
      params:{
        keywords,
        limit,
        type,
        offset
      }
    })
  
  }
import request from './axios'


export function getSongListdata(id) {

    return request({
        url: "/playlist/track/all",
        params: {
            id 
        }
    })

}


export function getAlbumInfodata(id,s) {
  
    return request({
        url: "/playlist/detail",
        params: {
            id,
            s
        }
    })

}
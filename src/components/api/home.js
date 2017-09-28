import jsonp from 'src/style/js/jsonp'
import { commonParams, options } from './config'
// import axios from 'axios'

export function getSliderData () { // 获取轮播图数据
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

// export function getKuaiList () {
//   const url = 'https://restapi.ele.me/shopping/v2/entries'

//   const data = Object.assign({}, {
//     latitude: 28.227779,
//     longitude: 112.938858,
//     limit: 20
//   })

//   return axios.get(url, {
//     params: data
//   }).then((res) => {
//     return Promise.resolve(res.data)
//   })
// }


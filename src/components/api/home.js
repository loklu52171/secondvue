import axios from 'axios'

export function getKuaiList () {
  const url = 'https://restapi.ele.me/shopping/v2/entries'

  const data = Object.assign({}, {
    latitude: 28.227779,
    longitude: 112.938858,
    limit: 20
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

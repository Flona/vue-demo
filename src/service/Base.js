import api from './Api'

class Base {
  sendGet (url, params) {
    return api.get(url, { params }).then(res => {
      return res
    })
  }
  sendPost (url, data) {
    return api.post(url, data).then(res => {
      return res
    })
  }
}
export default Base

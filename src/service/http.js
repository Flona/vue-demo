import Base from './Base'

class Http extends Base {
  getList () {
    let url = '/api/ding/share/push/position/data'
    return this.sendGet(url).then(res => {
      return res
    })
  }
}

export default new Http()

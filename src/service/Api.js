import axios from 'axios'

var api = axios.create({
  baseURL: 'http://xxx',
  timeout: 30000
})
// request拦截器
api.interceptors.request.use(config => {
  return config
}, error => {
  console.log('request err:', error) // for debug
  return Promise.reject(error)
})

// respone拦截器
api.interceptors.response.use(res => {
  return res
}, error => {
  console.log('response err:', error) // for debug
  return Promise.reject(error)
})

export default api

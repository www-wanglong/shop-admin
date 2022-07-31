import axios from 'axios'

const request = axios.create({
  baseURL: 'https://shop.fed.lagou.com/api/admin/'
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default request

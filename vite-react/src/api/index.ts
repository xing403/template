import axios from 'axios'

const isProxy = import.meta.env.DEV && import.meta.env.VITE_OPEN_PROXY === 'true'
const isMock = import.meta.env.DEV && import.meta.env.VITE_OPEN_MOCK === 'true'

const api = axios.create({
  baseURL: `${isMock ? '/mock' : ''}${isProxy ? '/proxy/' : import.meta.env.VITE_APP_API_BASEURL}`,
  timeout: 1000 * 60,
  responseType: 'json'
})

// 请求拦截器
api.interceptors.request.use(config => {
  return config
})

// 响应拦截器
api.interceptors.response.use(response => {
  return new Promise((resolve, reject) => {
    const { code } = response.data
    if (code === 200) {
      resolve(response.data)
    } else {
      reject(response.data)
    }
  })
}, (error: any) => {
  return Promise.reject(error)
})

export default api

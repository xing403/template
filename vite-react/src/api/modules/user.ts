import api from '@/api'

// 用户登录
export const login = (data: { username: string, password: string }) => api.post('/login', data)

export default {
  login
}

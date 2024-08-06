import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import ResultAjax from './ResultAjax'
import Mock from 'mockjs'

function checkLoginAccount(username: string, password: string) {
  if (password === '123456')
    return username === 'admin' || username === 'user'
  return false
}

export default defineFakeRoute([{
  url: '/mock/api/login',
  method: 'post',
  response: ({ body }) => {
    if (checkLoginAccount(body.username, body.password))
      return ResultAjax.success(Mock.mock({
        username: body.username,
        "token|64": `@string`,
        avatar: Mock.Random.image('100x100', '#50B347', '#FFF', 'png', 'avatar'),
      }))
    return ResultAjax.fail('账号或密码错误')
  },
}])

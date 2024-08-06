import { Button, Checkbox, Form, Input, notification } from "antd"
import { login } from "@/api/modules/user"
import { userAtom } from '@/store'
function Login() {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate()

  const [search] = useSearchParams()
  const [userStore, setUserStore] = useAtom(userAtom)

  const [form, setForm] = useState({
    username: '',
    password: '',
    isRemember: false
  })

  useEffect(() => {
    if (userStore.token != '') {
      navigate(search.get('redirect') ?? '/', { replace: true })
    }
  }, [])

  const handleLogin = () => {
    login(form).then(({ data }) => {
      api.success({ message: '登录成功', description: `欢迎回来 ${data.username}`, placement: 'topRight' })
      localStorage.setItem('token', data.token)
      setUserStore(data)
      navigate(search.get('redirect') ?? '/', { replace: true })
    }).catch(e => {
      api.error({ message: '登录失败', description: e.message, placement: 'topRight' })
    })
  }

  return (
    <div className="bg-gray-400 h-full flex flex-row justify-end">
      {contextHolder}
      <div className="flex-1 h-full flex flex-col justify-center items-center gap-5"></div>
      <div className="h-full p-x-10 bg-white flex flex-col justify-center">
        <Form className="w-300px" layout='vertical'>
          <Form.Item name="username" label="用户名" rules={[{ required: true }]}>
            <Input onChange={(e) => setForm({ ...form, username: e.target.value })} />
          </Form.Item>
          <Form.Item name="password" label="密码" rules={[{ required: true }]}>
            <Input.Password onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </Form.Item>
          <Form.Item name="rememberMe" >
            <Checkbox checked={form.isRemember} onChange={(e) => setForm({ ...form, isRemember: e.target.checked })}>记住账号</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button className="w-full" type="primary" onClick={handleLogin}>登录</Button>
          </Form.Item>
        </Form>
      </div>

    </div>
  )
}

export default Login

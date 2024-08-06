import routes from "@/router"
import { DevTools } from 'jotai-devtools';
import store from '@/store'
import { Provider } from 'jotai';
function App() {
  const route = useRoutes(routes)
  const isDev = import.meta.env.DEV && import.meta.env.VITE_APP_ENABLE_DEV_TOOLS === 'true'
  
  return (

    <Provider store={store}>
      {isDev && <DevTools position="bottom-right" store={store} />}
      {route}
    </Provider>
  )
}

export default App

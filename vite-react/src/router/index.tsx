import Layout from '@/layouts/Index'
import HomePage from "@/pages/Home";
import LoginPage from '@/pages/Login';
import type { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <HomePage />
    }
  ]
}, {
  path: '/login',
  element: <LoginPage />,
}]

export default routes

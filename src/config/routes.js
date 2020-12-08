import { lazy } from 'react'

const routes = {
  Home: {
    path: '/home',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },

  Welcome: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Welcome'))
  },

  Login: {
    path: '/login',
    exact: true,
    component: lazy(() => import('../pages/Login'))
  },

  Register: {
    path: '/register',
    exact: true,
    component: lazy(() => import('../pages/Register'))
  }
}

export default routes

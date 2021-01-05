
import Home from '../pages/home'
import Login from '../pages/login'
import Write from '../pages/write'
import NotFound from '../common/notFound'
import Loadable from '../utils/loadable'

// 异步加载组件
const Detail = Loadable(() => import('../pages/detail'))

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/detail',
    exact: true,
    component: Detail,
  },
  {
    path: '/write',
    exact: true,
    component: Write,
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes
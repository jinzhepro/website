import Vue from 'vue'
import VueRouter from 'vue-router'
import { getStorage } from 'wanado/src/sources/getStorage'
import { toastComponent } from '@/utils'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/index',
    name: 'App',
    component: () => import('@/App')
  },
  {
    path: '/login',
    name: 'LoginPage',
    redirect: '/login/index',
    component: () => import('@/views/login'),
    children: [
      {
        path: 'index',
        name: 'LoginModule',
        component: () => import('../views/login/components/login')
      },
      {
        path: 'register',
        name: 'RegisterModule',
        component: () => import('../views/login/components/register')
      }, {
        path: 'forget',
        name: 'ForgetModule',
        component: () => import('../views/login/components/forget')
      }
    ]
  },
  {
    path: '/home/:tag',
    component: () => import('@/views/home/index'),
    name: 'HomePage'
  },
  {
    path: '/center',
    redirect: '/center/user',
    component: () => import('@/views/userCenter/index'),
    name: 'UserCenter',
    beforeEnter (to, form, next) {
      if (!getStorage('userInfo')) {
        toastComponent.$alert('danger', '请先登录!')
        next({ name: 'LoginPage' })
      } else {
        next()
      }
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/userCenter/components/user'),
        name: 'User'
      }, {
        path: 'setting',
        redirect: '/center/setting/info',
        component: () => import('@/views/userCenter/components/setting'),
        name: 'Setting',
        children: [
          {
            path: 'info',
            component: () => import('@/views/userCenter/components/setting/info'),
            name: 'Info'
          }, {
            path: 'pic',
            component: () => import('@/views/userCenter/components/setting/pic'),
            name: 'Pic'
          }, {
            path: 'pwd',
            component: () => import('@/views/userCenter/components/setting/pwd'),
            name: 'Pwd'
          }, {
            path: 'bind',
            component: () => import('@/views/userCenter/components/setting/bind'),
            name: 'Bind'
          }
        ]
      }, {
        path: 'posts',
        redirect: '/center/posts/my',
        component: () => import('@/views/userCenter/components/posts'),
        name: 'Posts',
        children: [
          {
            path: 'my',
            component: () => import('@/views/userCenter/components/posts/my'),
            name: 'My'
          }, {
            path: 'collection',
            component: () => import('@/views/userCenter/components/posts/collection'),
            name: 'Collection'
          }
        ]
      }, {
        path: 'message',
        component: () => import('@/views/userCenter/components/message'),
        name: 'Message'
      }, {
        path: 'others',
        component: () => import('@/views/userCenter/components/others'),
        name: 'Others'
      }
    ]
  }
]

const router = new VueRouter({
  linkActiveClass: 'active-page',
  routes
})

export default router

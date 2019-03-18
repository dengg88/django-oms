import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/** note: sub-menu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * title:'router-title'             the title is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the title show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-title'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
 **/
export const baseRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    name: '首页',
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: '首页',
        meta: {title: 'dashboard', icon: 'home', noCache: true, affix: true}
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: baseRouterMap
})

/* Router Modules */
import usermanagerRouter from './modules/usermanager'
import permmanagerRouter from './modules/permmanager'
import workticketRouter from './modules/workticket'
import deployjobRouter from './modules/deployjob'

export const asyncRouterMap = [
  usermanagerRouter,
  permmanagerRouter,
  workticketRouter,
  deployjobRouter
  // {
  //   title: 'salt管理',
  //   path: '/salts',
  //   component: Layout,
  //   icon: 'cube',
  //   redirect: 'cmdrun',
  //   children: [
  //     { path: 'index', component: () => import(('@/views/salts/index')), title: 'state管理' },
  //     { path: 'runstate', component: () => import(('@/views/salts/runstate')), title: '执行state' },
  //     { path: 'cmdrun', component: () => import(('@/views/salts/cmdrun')), title: '执行命令' }
  //   ]
  // },
  // {
  //   title: '主机管理',
  //   path: '/hosts',
  //   component: Layout,
  //   icon: 'desktop',
  //   redirect: 'hosts',
  //   children: [
  //     { path: 'hosts', component: () => import(('@/views/hosts/hosts')), title: '主机列表' },
  //     { path: 'assetrecords', component: () => import(('@/views/hosts/assetrecords')), title: '资产修改记录' },
  //     { path: 'idcs', component: () => import(('@/views/hosts/idcs')), title: '机房列表' }
  //   ]
  // },
  // {
  //   title: '工具管理',
  //   path: '/tools',
  //   component: Layout,
  //   icon: 'cogs',
  //   redirect: 'upload',
  //   children: [
  //     { path: 'upload', component: () => import(('@/views/tools/upload')), title: '上传列表' }
  //   ]
  // }
]

export const errorRouterMap = [
  {path: '*', redirect: '/404', hidden: true}
]

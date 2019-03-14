import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import treeTableRouter from './modules/tree-table'
import nestedRouter from './modules/nested'

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
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        title: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        title: 'Documentation',
        meta: { title: 'documentation', icon: 'documentation', affix: true }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        title: 'Guide',
        meta: { title: 'guide', icon: 'guide', noCache: true }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: baseRouterMap
})

export const asyncRouterMap = [
  {
    name: 'workticket',
    path: '/worktickets',
    component: Layout,
    icon: 'leaf',
    redirect: 'workticket',
    children: [
      { path: 'workticket', component: () => import(('@/views/worktickets/workticket')), name: '工单列表' },
      { path: 'tickettype', component: () => import(('@/views/worktickets/tickettype')), name: '工单类型' },
      { path: 'addworkticket', hidden: true, component: () => import(('@/views/worktickets/components/addworkticket')), name: '添加工单' },
      { path: 'viewworkticket/:pid', hidden: true, component: () => import(('@/views/worktickets/components/viewworkticket')), name: '查看工单' },
      { path: 'editworkticket/:pid', hidden: true, component: () => import(('@/views/worktickets/components/editworkticket')), name: '编辑工单' }
    ]
  },
  {
    title: '发布系统',
    path: '/jobs',
    component: Layout,
    icon: 'tasks',
    redirect: 'jobs',
    children: [
      { path: 'jobs', component: () => import(('@/views/jobs/jobs')), title: '项目列表' },
      { path: 'jobtickets', component: () => import(('@/views/jobs/jobtickets')), title: '上线申请' },
      { path: 'editjob/:job_id', hidden: true, component: () => import(('@/views/jobs/components/editjob')), title: '编辑项目' },
      { path: 'runjob/:job_id', hidden: true, component: () => import(('@/views/jobs/components/runjob')), title: '构建项目' },
      { path: 'sqltickets', component: () => import(('@/views/jobs/sqltickets')), title: 'SQL执行申请' }
    ]
  },
  {
    title: '用户管理',
    path: '/users',
    component: Layout,
    icon: 'user',
    redirect: 'users',
    children: [
      { path: 'users', component: () => import(('@/views/users/users')), title: '用户列表' },
      { path: 'usergroups', component: () => import(('@/views/users/usergroups')), title: '用户组列表' },
      { path: 'roles', component: () => import(('@/views/users/roles')), title: '角色列表' }
    ]
  },
  {
    title: '权限管理',
    path: '/perms',
    component: Layout,
    icon: 'fire',
    redirect: 'menuperm',
    children: [
      { path: 'menus', component: () => import(('@/views/perms/menus')), title: '菜单列表' },
      { path: 'menuperm', component: () => import(('@/views/perms/menuperm')), title: '用户菜单权限' },
      { path: 'hostperm', component: () => import(('@/views/perms/hostperm')), title: '用户主机权限' },
      { path: 'wikiperm', component: () => import(('@/views/perms/wikiperm')), title: '用户文档权限' }
    ]
  },
  {
    title: 'salt管理',
    path: '/salts',
    component: Layout,
    icon: 'cube',
    redirect: 'cmdrun',
    children: [
      { path: 'index', component: () => import(('@/views/salts/index')), title: 'state管理' },
      { path: 'runstate', component: () => import(('@/views/salts/runstate')), title: '执行state' },
      { path: 'cmdrun', component: () => import(('@/views/salts/cmdrun')), title: '执行命令' }
    ]
  },
  {
    title: '主机管理',
    path: '/hosts',
    component: Layout,
    icon: 'desktop',
    redirect: 'hosts',
    children: [
      { path: 'hosts', component: () => import(('@/views/hosts/hosts')), title: '主机列表' },
      { path: 'assetrecords', component: () => import(('@/views/hosts/assetrecords')), title: '资产修改记录' },
      { path: 'idcs', component: () => import(('@/views/hosts/idcs')), title: '机房列表' }
    ]
  },
  {
    title: '工具管理',
    path: '/tools',
    component: Layout,
    icon: 'cogs',
    redirect: 'upload',
    children: [
      { path: 'upload', component: () => import(('@/views/tools/upload')), title: '上传列表' }
    ]
  }
]

export const errorRouterMap = [
  { path: '*', redirect: '/404', hidden: true }
]

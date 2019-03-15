import Layout from '@/views/layout/Layout'

const Router = {
  name: '发布系统',
  path: '/deployjobs',
  component: Layout,
  redirect: 'deployjobs',
  meta: {title: 'deployjob', icon: 'tasks'},
  children: [
    {
      path: 'deployjobs',
      component: () => import(('@/views/deployjobs/deployjobs')),
      name: '项目列表',
      meta: {title: 'deployjobs'}
    },
    {
      path: 'jobtickets',
      component: () => import(('@/views/deployjobs/jobtickets')),
      name: '发布申请',
      meta: {title: 'jobtickets'}
    },
    {
      path: 'runjob/:job_id',
      hidden: true,
      component: () => import(('@/views/deployjobs/components/runjob')),
      name: '构建项目',
      meta: {title: 'runjob'}
    },
    {
      path: 'sqltickets',
      component: () => import(('@/views/deployjobs/sqltickets')),
      name: 'SQL执行申请',
      meta: {title: 'sqltickets'}
    }
  ]
}

export default Router

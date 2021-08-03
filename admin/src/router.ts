import Layout from '@/layout/index.vue'
import Vue from 'vue'
import Router from 'vue-router'
import ProductEdit from '@/views/product/edit.vue'
Vue.use(Router)

/*
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    hidden: true                 if true, this route will not show in the sidebar (default is false)
  }
*/

export default new Router({
  // mode: 'history',  // Enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
      meta: { hidden: true }
    },
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
      meta: { hidden: true }
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
          meta: {
            title: 'Fitdance 管理后台',
            icon: 'dashboard'
          }
        }
      ]
    },
    {
      path: '/product',
      component: Layout,
      meta: {
        title: '产品管理',
        icon: 's-goods'
      },
      children: [
        {
          path: 'manager',
          component: ()=>import('@/views/product/index.vue'),
          meta: {
            title: '产品列表',
            icon: 's-order'
          }
        },
        {
          path: 'manager/edit',
          name: 'product-edit',
          component: ProductEdit,
          meta: {
            hidden: true,
            title: '产品编辑',
          }
        },
        {
          path: 'category',
          component: ()=>import('@/views/product/category.vue'),
          meta: {
            title: '产品分类',
            icon: 's-grid'
          }
        },
        {
          path: 'product-seo',
          component: ()=>import('@/views/product/seo.vue'),
          meta: {
            title: 'SEO设置',
            icon: 's-tools'
          }
        }
      ]
    },
    {
      path: '/file',
      component: Layout,
      redirect: '/file/manager',
      children: [
        {
          path: 'manager',
          component: () => import('@/views/file/index.vue'),
          meta: {
            title: '文件管理',
            icon: 'picture'
          }
        },
        {
          path: 'details',
          component: () => import('@/views/file/details.vue'),
          meta: {
            hidden: true,
            title: '文件上传',
          }
        }
      ]
    },
    {
      path: '/artical',
      component: Layout,
      redirect: '/artical/manager',
      children: [
        {
          path: 'manager',
          component: () => import('@/views/artical/index.vue'),
          meta: {
            title: '文章管理',
            icon: 'link'
          }
        },
        {
          path: 'update',
          name: 'artical-update',
          component: () => import('@/views/artical/update.vue'),
          props: true,
          meta: {
            hidden:true,
            title: '文章编辑',
          }
        }
      ]
    },
    {
      path: '/user',
      component: Layout,
      redirect: '/user/manager',
      children: [
        {
          path: 'manager',
          component: () => import('@/views/user/index.vue'),
          meta: {
            title: '用户管理',
            icon: 's-custom'
          }
        }
      ]
    },

    {
      path: '*',
      redirect: '/404',
      meta: { hidden: true }
    }
  ]
})

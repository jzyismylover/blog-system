import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '/@/views/user/login/index.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login'},
  { path: '/login', name: 'Login', component: Login, meta: { Login: false }},
  { path: '/regist', name: 'Regist', component: () => import('/@/views/user/regist/index.vue') , meta: { Login: false } },
  { 
    path: '/home', 
    name: 'Home', 
    component: () => import('../views/home/index.vue'),
    children: [
      {/*主页 */
        path: '',
        name: 'HomePage',
        component: () => import('../views/home/home-page.vue')
      },
      {/*网站博客详情列表*/
        path: 'blog',
        name: 'Blog',
        component: () => import("../views/home/blog.vue")
      },
      {/*个人详情页*/
        path: 'detail',
        name: 'Detail',
        component: () => import('../views/home/drop-down/detail.vue')
      },
      {/*单页博客*/
        path: 'content/:blog_id',
        name: 'Content',
        component: () => import("../views/home/drop-down/blog-detail.vue")
      },
      {/*博客撰写*/
        path: 'write',
        name: 'Write',
        component: () => import('../views/home/drop-down/write-blog.vue')
      }
    ]
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
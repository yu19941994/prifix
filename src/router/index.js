import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Front/Homepage.vue')
      },
      {
        path: '/blog',
        component: () => import('../views/Front/Blog.vue')
      },
      {
        path: '/products',
        component: () => import('../views/Front/Products.vue')
      },
      {
        path: '/cart',
        component: () => import('../views/Front/Cart.vue')
      },
      {
        path: '/coupon',
        component: () => import('../views/Front/Coupon.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Back/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Back/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Back/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Back/Coupons.vue')
      },
      {
        path: 'articles',
        component: () => import('../views/Back/Articles.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

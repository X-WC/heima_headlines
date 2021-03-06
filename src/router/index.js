import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]

const router = new VueRouter({
  routes
})

// 注意 暴露router 必须采用此方法
export default router

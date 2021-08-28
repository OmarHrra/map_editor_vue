import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/tileset-maker',
    name: 'TilesetMaker',
    component: () => import('@/views/TilesetMaker.vue')
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('@/views/Editor.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

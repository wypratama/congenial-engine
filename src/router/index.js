import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Collection from '../views/Collection.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      }
    ]
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login
  // },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/universitasku',
    name: 'Collection',
    component: Collection
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user')
  if (to.name === 'Collection' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/page1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page1',
      component: Home
    },
    {
      path: '/page2',
      name: 'page2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/page2.vue')

    },
    {
      path: '/page3',
      name: 'page3',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/page3.vue')
      
    },
    {
      path: '/exo1',
      name: 'exo1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/exo1.vue')
    },
    {
      path: '/exo2',
      name: 'exo2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/exo2.vue')

    },
    {
      path: '/exo3',
      name: 'exo3',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/exo3.vue')
      
    },
    {
      path: '/exo4',
      name: 'exo4',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/exo4.vue')
      
    },
    {
      path: '/exo5',
      name: 'exo5',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/exo5.vue')
      
    },
    {
      path: '/exo6',
      name: 'exo6',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/exo6.vue')
      
    },
    {
      path: '/exo7',
      name: 'exo7',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/exo7.vue')
      
    },
  ]
})
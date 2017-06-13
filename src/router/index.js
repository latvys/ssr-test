import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Blue from '../components/Blue.vue'
import Red from '../components/Red.vue'

Vue.use(Router)


export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/blue',
        name: 'Blue',
        component: Blue
      },
      {
        path: '/red',
        name: 'Red',
        component: Red
      }
    ]
  })
}

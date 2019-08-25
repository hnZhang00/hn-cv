import Vue from 'vue'
import Router from 'vue-router'
import CV from './views/CV.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'cv',
      component: CV
    },
  ]
})

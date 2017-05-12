import Vue from 'vue'
import Router from 'vue-router'
import Clip from '@/components/clip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'clip',
      component: Clip
    }
  ]
})

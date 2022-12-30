import Vue from 'vue'
import Router from 'vue-router'
import testApp from '@/components/test-app'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testApp',
      component: testApp
    }
  ]
})

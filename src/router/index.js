import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import TemplateSyntax from '@/views/TemplateSyntax'
import ComputedAndWatch from '@/views/ComputedAndWatch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/templateSyntax',
      name: TemplateSyntax,
      component: TemplateSyntax
    },
    {
      path: '/computedAndWatch',
      name: ComputedAndWatch,
      component: ComputedAndWatch
    }
  ]
})

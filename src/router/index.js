import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  {path: '/search', component: 'index'},
  {path: '/main', component: "main_report"},
]
// 匹配路由

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})


Vue.use(Router)

export default new Router({
  routes,
  mode: 'history'
})

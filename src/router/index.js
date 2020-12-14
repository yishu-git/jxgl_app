import Vue from 'vue'
import VueRouter from 'vue-router'
import subway from '@/views/subway'
import subway_nume1 from '@/views/subway/numes/nume1.vue'
import organ from '@/views/organization'
import archives from '@/views/archives'
import newlyAdded from '@/views/newlyAdded'
import category from '@/views/newlyAdded/pages/category.vue'
import weekly from '@/views/newlyAdded/pages/weekly.vue'
import names from '@/views/newlyAdded/pages/names.vue'
import source from '@/views/newlyAdded/pages/source.vue'
import chanquan from '@/views/newlyAdded/pages/chanquan.vue'

import all from '@/views/subway/numes/pages/all.vue'
import daishenhe from '@/views/subway/numes/pages/daishenhe.vue'
import weishenbao from '@/views/subway/numes/pages/weishenbao.vue'
import hoisting from '@/views/hoisting'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {

  return originalPush.call(this, location).catch(err => err)
}

const routes = [{
    path: '/',
    name: 'subway',
    component: subway
  },
  {
    path: '/organ',
    name: 'organ',
    component: organ
  },
  {
    path: '/archives',
    name: 'archives',
    component: archives
  },
  {
    path: '/weekly',
    name: 'weekly',
    component: weekly
  },
  {
    path: '/newlyAdded',
    name: 'newlyAdded',
    component: newlyAdded
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/source',
    name: 'source',
    component: source
  },
  {
    path: '/chanquan',
    name: 'chanquan',
    component: chanquan
  },
  {
    path: '/names',
    name: 'names',
    component: names
  },
  {
    path: '/mune1',
    name: 'nume1',
    component: subway_nume1,
    children: [
      {
      path: 'all',
      name: 'all',
      component: all,
    },
      {
      path: 'daishenhe',
      name: 'daishenhe',
      component: daishenhe,
    },
      {
      path: 'weishenbao',
      name: 'weishenbao',
      component: weishenbao,
    },
 
  ]
  },
  {
    path: 'hoisting',
    name: 'hoisting',
    component: hoisting, //吊装作业路由
  },
]

const router = new VueRouter({
  routes
})
// router.beforeEach((to,path)=>{
//   console.log(to.path);
//   next()
// })

export default router

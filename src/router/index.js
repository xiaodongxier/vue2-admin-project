import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'



Vue.use(VueRouter)


// 1. 创建组件
// 2. 定义路由
// 3. 创建router实例
// 4. 创建和挂在跟实例

const routes = [
  {
    path: '/',
    component: Main,
    redirect:'/home',
    children: [
      {path: 'home',component: Home,},
      {path: 'user',component: User,},
      {path: 'mall',component: Mall,},
      {path: 'PageOne',component: PageOne,},
      {path: 'PageTwo',component: PageTwo,}
    ]
  }
]

const route = new VueRouter({
  routes
})

export default route


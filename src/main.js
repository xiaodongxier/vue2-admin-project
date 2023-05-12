import Vue from 'vue'
import App from './App.vue'
// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import { Row,Button } from 'element-ui'
import router from './router'
import store from './store'


Vue.config.productionTip = false
// 使用element - 全局注册
Vue.use(ElementUI);



// Vue.component(Button.name, Button);
// Vue.component(Row.name, Row);
// Vue.use(Row);
// Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

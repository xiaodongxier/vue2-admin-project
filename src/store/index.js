import Vue from "vue";
import Vuex from "vuex";
import tab from './modules/tab'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    tab
  }
})

export default store
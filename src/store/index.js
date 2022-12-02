import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    password: ''
  },
  // 同步设置数据
  mutations: {
    SetUserName(state, name) {
      state.username = name
    },
    SetPassword(state, pwd) {
      state.password = pwd
      localStorage.setItem('userInfo', 'isLogin')
    }
  },
  // 获取数据
  getters: {
    getUserName: (state) => { return state.username },
    getPassword: (state) => { return state.password }
  },
  actions: {
  },
  modules: {
  }
})

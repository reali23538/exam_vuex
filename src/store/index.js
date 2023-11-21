import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 0
  },
  mutations: {
    changeNumber (state, val) {
      state.num += val
    }
  },
  actions: {
    callMutation ({ state, commit }, { num }) {
      commit('changeNumber', num)
    }
  },
  getters: {
    getMsg (state) {
      return `calculated => ${state.num}`
    }
  }
})

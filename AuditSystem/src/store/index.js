import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: 1
  },
  actions: {
    action(ctx, data){
      ctx.commit('action', data)
    }
  },
  mutations: {
    action(state, data){

    }
  }
})
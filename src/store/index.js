import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    character: ''
  },

  mutations: {
    setCharacter(state, char) {
      state.character = char
    }
  }
})

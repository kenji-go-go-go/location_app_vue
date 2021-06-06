import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    number: 2,
    items: [
      {
        name: 'Aさん',
        kind: '医者',
        image: require('@/assets/1.png')
      },
      {
        name: 'BBさん',
        kind: '小学生',
        image: require('@/assets/2.png')
      },
      {
        name: 'CCCさん',
        kind: '会社員',
        image: require('@/assets/3.png')
      },
      {
        name: 'DDDDさん',
        kind: '高齢者',
        image: require('@/assets/4.png')
      }
    ]
  },

  mutations: {
    setNumber (state, value) {
      state.number = value
    },
    setItems (state, object) {
      state.items = object
    }
  },

  getters: {},

  actions: {}
})

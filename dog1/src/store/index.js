import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    venda:[{
      'nome':'akito',
      'preco':800,
      'foto':'https://images.dog.ceo/breeds/airedale/n02096051_1017.jpg '
    },
    {
      'nome':'husky',
      'preco':800,
      'foto':'https://images.dog.ceo/breeds/airedale/n02096051_1111.jpg'
    },
  ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

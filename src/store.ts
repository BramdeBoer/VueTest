import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blocks: [],
  },
  actions: {
    loadBlocks({ commit }) {
      axios.get('https://insight.bitpay.com/api/blocks?limit=10').then((response) => {
        commit('setBlocks', { list: response.data.blocks });
      }, (err) => {
        console.log(err);
      });
    },
  },
  mutations: {
    setBlocks(state, { list }) {
      state.blocks = list;
    },
  },
  getters: {
    getBlocks(state) {
      return state.blocks;
    },
  },
});

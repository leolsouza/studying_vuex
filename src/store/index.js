import { createStore } from "vuex";
import counter from "./modules/counter/counter";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "./mutations-types";

const state = {
  countNumber: 4,
  user: {
    first_name: "Jon",
    last_name: "Snow",
  },
  products: [
    { id: 1, name: "arroz", price: 20 },
    { id: 2, name: "feijão", price: 15 },
    { id: 3, name: "carne", price: 50 },
  ],
  cart: [],
};

export const getters = {
  totalCart(state) {
    return state.cart.reduce((acc, item) => (acc += item.price), 0);
  },
};

export const mutations = {
  [ADD_PRODUCT](state, data) {
    state.cart.push(data);
  },
  [REMOVE_PRODUCT](state, id) {
    const productId = state.cart.findIndex((product) => product.id === id);
    state.cart.splice(productId, 1);
  },
};

export const actions = {
  [ADD_PRODUCT]({ commit }, data) {
    commit(ADD_PRODUCT, data);
  },
  [REMOVE_PRODUCT]({ commit }, data) {
    commit(REMOVE_PRODUCT, data);
  },
};

export default createStore({
  strict: true,
  state,
  getters,
  mutations,
  actions,
  modules: { counter },
});

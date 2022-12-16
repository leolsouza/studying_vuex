import axios from "axios";
import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  SET_COLOR_CODE,
} from "../../mutations-types";
import countSquared from "./modules/countSquared";

const state = {
  countNumber: 1,
  colorCode: "blue",
};

export const getters = {
  showCountSquared(state, getters, rootState, rootGetters) {
    return getters["countSquared/function"];
  },
};

export const mutations = {
  [INCREASE_COUNTER]: (state, randomNumber) => {
    state.countNumber += randomNumber;
  },
  [DECREASE_COUNTER]: (state, randomNumber) => {
    state.countNumber -= randomNumber;
  },
  [SET_COLOR_CODE]: (state, newValue) => {
    state.colorCode = newValue;
  },
};

export const actions = {
  // [INCREASE_COUNTER]({ commit }) {
  //   axios(
  //     "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
  //   ).then((response) => {
  //     commit(INCREASE_COUNTER, response.data);
  //   });
  // },
  // [DECREASE_COUNTER]({ commit }) {
  //   axios(
  //     "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
  //   ).then((response) => {
  //     commit(DECREASE_COUNTER, response.data);
  //   });
  // },
  async [INCREASE_COUNTER]({ commit }) {
    try {
      const response = await axios.get(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      );
      commit(INCREASE_COUNTER, response.data);
    } catch (err) {
      throw new Error(err);
    }
  },
  async [DECREASE_COUNTER]({ commit }) {
    try {
      const response = await axios.get(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      );
      commit(DECREASE_COUNTER, response.data);
    } catch (err) {
      throw new Error(err);
    }
  },

  [SET_COLOR_CODE]({ commit }, newValue) {
    commit(SET_COLOR_CODE, newValue);
  },
};

export default {
  strict: true,
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    countSquared,
  },
};

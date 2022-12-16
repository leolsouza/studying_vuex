export const getters = {
  function(state, getters, rootState, rootGetters) {
    return rootState.countNumber * rootState.countNumber;
  },
};

export default {
  namespaced: true,
  getters,
};

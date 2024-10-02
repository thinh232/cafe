export default {
  // toDetail({ commit, state }, product) {
  //   const detailItem = state.products.find((item) => item.id === product.id);
  //   if (!detailItem) {
  //     const detail = {
  //       id: product.id,
  //       title: product.title,
  //       price: product.price,
  //       number: product.number,
  //       numberC: product.numberC,
  //       quatily: product.quatily,
  //       src: product.src,
  //       description: product.description,
  //     };
  //     commit("setDetail", detail);
  //   }
  // },
  setUsername({ commit }, username) {
    commit("setUsername", username);
  },
  setDetail({ commit }, product) {
    commit("setDetail", product);
  },
  clearUsername({ commit }) {
    commit("clearUsername");
  },
};

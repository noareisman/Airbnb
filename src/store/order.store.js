import { stayService } from '../services/stay.service.js';

export const orderStore = {
  state: {
    orders: []
  },
  getters: {
    orders(state) {
      return state.orders;
    },
  },
  mutations: {
    setOrders(state, { orders }) {
      state.orders = orders;
    },
  },
  actions: {
    async loadOrders({ commit, state }, {user}) {
      try {
        const orders = await stayService.query(user);
        console.log(orders);
        return
        commit({ type: 'setOrders', orders })
      } catch (err) {
        console.log('orderStore: Error in loadOrders', err)
        throw err
      }
    },
  },
  // updateOrderStatus
  // saveOrder

}